/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // This project lives under the user's home directory. Tell Turbopack the repo
  // root explicitly so package-lock.json (and node_modules) resolve correctly.
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
