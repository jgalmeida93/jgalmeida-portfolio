import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project so a stray lockfile elsewhere
  // on disk (e.g. ~/package-lock.json) doesn't confuse the file tracer.
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
