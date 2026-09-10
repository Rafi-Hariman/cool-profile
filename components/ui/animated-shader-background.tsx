"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import type * as ThreeTypes from "three";
import { cn } from "@/lib/utils";

/**
 * Aurora shader background (docs/10-MOTION sanctioned exception #3).
 *
 * A single GLSL quad rendered by three.js: fbm-noise aurora trails over
 * a page-black base — aurora only, no stars/meteors. Adapted for this
 * site: sizes to its container (not the window), lazily imports three,
 * and falls back to a quiet static base when WebGL is unavailable, on
 * touch devices, or under prefers-reduced-motion.
 */

const VERTEX_SHADER = /* glsl */ `
  void main() {
    gl_Position = vec4(position, 1.0);
  }
`;

const FRAGMENT_SHADER = /* glsl */ `
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

  // Twinkling stars / meteors were removed at the owner's request — the
  // strip now shows the aurora alone over the page-black base.

  void main() {
    vec2 shake = vec2(sin(iTime * 1.2) * 0.005, cos(iTime * 2.1) * 0.005);
    vec2 p = ((gl_FragCoord.xy + shake * iResolution.xy) - iResolution.xy * 0.5) / iResolution.y * mat2(6.0, -4.0, 4.0, 6.0);
    vec2 v;
    vec4 o = vec4(0.0);

    float f = 2.0 + fbm(p + vec2(iTime * 5.0, 0.0)) * 0.5;

    for (float i = 0.0; i < 35.0; i++) {
      v = p + cos(i * i + (iTime + p.x * 0.08) * 0.025 + i * vec2(13.0, 11.0)) * 3.5 + vec2(sin(iTime * 3.0 + i) * 0.003, cos(iTime * 3.5 - i) * 0.003);
      float tailNoise = fbm(v + vec2(iTime * 0.5, i)) * 0.3 * (1.0 - (i / 35.0));
      vec4 auroraColors = vec4(
        0.1 + 0.3 * sin(i * 0.2 + iTime * 0.4),
        0.3 + 0.5 * cos(i * 0.3 + iTime * 0.5),
        0.7 + 0.3 * sin(i * 0.4 + iTime * 0.3),
        1.0
      );
      vec4 currentContribution = auroraColors * exp(sin(i * i + iTime * 0.8)) / length(max(v, vec2(v.x * f * 0.015, v.y * 1.5)));
      float thinnessFactor = smoothstep(0.0, 1.0, i / 35.0) * 0.6;
      o += currentContribution * (1.0 + tailNoise * 0.8) * thinnessFactor;
    }

    vec4 aurora = tanh(pow(o / 100.0, vec4(1.6))) * 2.2;
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

    let frameId = 0;
    let disposed = false;
    let cleanup: (() => void) | undefined;

    // Lazy import: three (~600KB) never touches the server bundle and
    // stays out of the initial client chunk.
    import("three")
      .then((THREE) => {
        if (disposed || !containerRef.current) return;

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

        let renderer: ThreeTypes.WebGLRenderer;
        try {
          renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        } catch {
          return; // no WebGL — quiet fallback stays visible
        }

        // The canvas overlays the static fallback (absolute inset-0). It
        // must NOT be a block child after a full-height element, or it
        // would be pushed below the visible strip.
        const width = () => Math.max(1, container.clientWidth);
        const height = () => Math.max(1, container.clientHeight);
        renderer.setSize(width(), height());
        renderer.domElement.style.position = "absolute";
        renderer.domElement.style.inset = "0";
        renderer.domElement.style.display = "block";
        container.appendChild(renderer.domElement);

        const material = new THREE.ShaderMaterial({
          uniforms: {
            iTime: { value: 0 },
            iResolution: { value: new THREE.Vector2(width(), height()) },
          },
          vertexShader: VERTEX_SHADER,
          fragmentShader: FRAGMENT_SHADER,
        });

        const geometry = new THREE.PlaneGeometry(2, 2);
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        const animate = () => {
          material.uniforms.iTime.value += 0.016;
          renderer.render(scene, camera);
          frameId = requestAnimationFrame(animate);
        };
        animate();

        const handleResize = () => {
          renderer.setSize(width(), height());
          material.uniforms.iResolution.value.set(width(), height());
        };
        const observer = new ResizeObserver(handleResize);
        observer.observe(container);

        cleanup = () => {
          cancelAnimationFrame(frameId);
          observer.disconnect();
          container.removeChild(renderer.domElement);
          geometry.dispose();
          material.dispose();
          renderer.dispose();
        };
      })
      .catch(() => {
        /* chunk failed to load — fallback stays visible */
      });

    return () => {
      disposed = true;
      cleanup?.();
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
          merges seamlessly with the main content background before three
          loads, on touch devices, reduced motion, or when WebGL is
          unavailable. (#020409 = --background.) */}
      <div className="absolute inset-0 bg-[#020409]" />
    </div>
  );
}
