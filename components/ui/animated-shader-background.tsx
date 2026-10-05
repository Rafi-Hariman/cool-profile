"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

/**
 * Aurora shader background (docs/10-MOTION sanctioned exception #3).
 *
 * A single fullscreen-quad GLSL shader (fbm-noise aurora trails over a
 * page-black base) rendered with raw WebGL. Kept dependency-free so it does
 * not pull in a second copy of three.js alongside the Spline runtime, and so
 * the strip ships as a few kilobytes instead of the full three library. Falls
 * back to a quiet static base when WebGL is unavailable, on touch devices, or
 * under prefers-reduced-motion.
 */

const VERTEX_SHADER = /* glsl */ `
  attribute vec2 aPosition;

  void main() {
    gl_Position = vec4(aPosition, 0.0, 1.0);
  }
`;

const FRAGMENT_SHADER = /* glsl */ `
  precision highp float;

  uniform float iTime;
  uniform vec2 iResolution;

  #define NUM_OCTAVES 3

  float rand(vec2 n) {
    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 ip = floor(p);
    vec2 u = fract(p);
    u = u*u*(3.0-2.0*u);

    float res = mix(
      mix(rand(ip), rand(ip + vec2(1.0, 0.0)), u.x),
      mix(rand(ip + vec2(0.0, 1.0)), rand(ip + vec2(1.0, 1.0)), u.x), u.y);
    return res * res;
  }

  float fbm(vec2 x) {
    float v = 0.0;
    float a = 0.3;
    vec2 shift = vec2(100);
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
    for (int i = 0; i < NUM_OCTAVES; ++i) {
      v += a * noise(x);
      x = rot * x * 2.0 + shift;
      a *= 0.4;
    }
    return v;
  }

  void main() {
    vec2 shake = vec2(sin(iTime * 1.2) * 0.005, cos(iTime * 2.1) * 0.005);
    vec2 p = ((gl_FragCoord.xy + shake * iResolution.xy) - iResolution.xy * 0.5) / iResolution.y * mat2(6.0, -4.0, 4.0, 6.0);
    vec2 v;
    vec4 o = vec4(0.0);

    float f = 2.0 + fbm(p + vec2(iTime * 5.0, 0.0)) * 0.5;

    for (float i = 0.0; i < 35.0; i++) {
      v = p + cos(i * i + (iTime + p.x * 0.08) * 0.025 + i * vec2(13.0, 11.0)) * 3.5 + vec2(sin(iTime * 3.0 + i) * 0.003, cos(iTime * 3.5 - i) * 0.003);
      float tailNoise = fbm(v + vec2(iTime * 0.5, i)) * 0.3 * (1.0 - (i / 35.0));
      // Cyan, matched to the UI accent (--accent ≈ hsl(199 89% 48%) = #0da2e7):
      // red stays low, green and blue stay high. Kept desaturated so the
      // strip reads as texture, not a competing element.
      vec4 auroraColors = vec4(
        0.04 + 0.16 * sin(i * 0.2 + iTime * 0.4),
        0.55 + 0.22 * cos(i * 0.3 + iTime * 0.5),
        0.82 + 0.18 * sin(i * 0.4 + iTime * 0.3),
        1.0
      );
      vec4 currentContribution = auroraColors * exp(sin(i * i + iTime * 0.8)) / length(max(v, vec2(v.x * f * 0.015, v.y * 1.5)));
      float thinnessFactor = smoothstep(0.0, 1.0, i / 35.0) * 0.6;
      o += currentContribution * (1.0 + tailNoise * 0.8) * thinnessFactor;
    }

    // WebGL1 has no tanh(), so compute the equivalent saturating curve
    // directly: tanh(x) = 1 - 2 / (e^(2x) + 1) for x >= 0 (o is always
    // positive here).
    vec4 t = pow(o / 100.0, vec4(1.6));
    vec4 aurora = (1.0 - 2.0 / (exp(2.0 * t) + 1.0)) * 1.5;
    gl_FragColor = aurora;
  }
`;

interface AnimatedShaderBackgroundProps {
  className?: string;
  style?: CSSProperties;
}

export default function AnimatedShaderBackground({
  className,
  style,
}: AnimatedShaderBackgroundProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(true);

  // The shader is pure decoration — skip the WebGL context entirely for
  // touch devices (no hover to reward) and reduced-motion users.
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarse = window.matchMedia("(pointer: coarse)");
    const compute = () => !reduced.matches && !coarse.matches;
    setEnabled(compute());
    const onChange = () => setEnabled(compute());
    reduced.addEventListener("change", onChange);
    coarse.addEventListener("change", onChange);
    return () => {
      reduced.removeEventListener("change", onChange);
      coarse.removeEventListener("change", onChange);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const container = containerRef.current;
    if (!container) return;

    const canvas = document.createElement("canvas");
    canvas.style.position = "absolute";
    canvas.style.inset = "0";
    canvas.style.display = "block";
    container.appendChild(canvas);

    const gl = canvas.getContext("webgl", { alpha: true, antialias: false });
    if (!gl) {
      container.removeChild(canvas);
      return; // no WebGL — quiet fallback stays visible
    }

    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        // eslint-disable-next-line no-console
        console.warn("Shader compile failed:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vs = compile(gl.VERTEX_SHADER, VERTEX_SHADER);
    const fs = compile(gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    if (!vs || !fs) {
      if (vs) gl.deleteShader(vs);
      if (fs) gl.deleteShader(fs);
      container.removeChild(canvas);
      return;
    }

    const program = gl.createProgram();
    if (!program) {
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      container.removeChild(canvas);
      return;
    }
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      // eslint-disable-next-line no-console
      console.warn("Shader link failed:", gl.getProgramInfoLog(program));
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      container.removeChild(canvas);
      return;
    }
    gl.useProgram(program);

    // Fullscreen quad (two triangles) covering clip space.
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const aPosition = gl.getAttribLocation(program, "aPosition");
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, "iTime");
    const uResolution = gl.getUniformLocation(program, "iResolution");

    const resize = () => {
      const width = Math.max(1, container.clientWidth);
      const height = Math.max(1, container.clientHeight);
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uResolution, canvas.width, canvas.height);
    };
    resize();

    let frameId = 0;
    let running = false;
    let time = 0;

    const tick = () => {
      time += 0.016;
      gl.uniform1f(uTime, time);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      frameId = requestAnimationFrame(tick);
    };
    const start = () => {
      if (running) return;
      running = true;
      tick();
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(frameId);
    };
    start();

    // Pause the render loop while the tab is hidden.
    const handleVisibility = () => {
      if (document.hidden) stop();
      else start();
    };
    document.addEventListener("visibilitychange", handleVisibility);

    const observer = new ResizeObserver(resize);
    observer.observe(container);

    return () => {
      stop();
      document.removeEventListener("visibilitychange", handleVisibility);
      observer.disconnect();
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      if (canvas.parentNode === container) container.removeChild(canvas);
    };
  }, [enabled]);

  return (
    <div
      ref={containerRef}
      style={style}
      className={cn("relative h-full w-full overflow-hidden", className)}
      aria-hidden="true"
    >
      {/* Quiet fallback under the canvas: plain page-black so the strip
          merges with the main content background before the shader loads,
          on touch devices, reduced motion, or when WebGL is unavailable. */}
      <div className="absolute inset-0 bg-[#020409]" />
    </div>
  );
}
