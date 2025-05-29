import type { NextConfig } from "next";

const isGithubPages = process.env.DEPLOY_TARGET === "gh-pages";

const nextConfig: NextConfig = {
  output: "export", // Enables static HTML export
  basePath: isGithubPages ? "/anthoulis-poetry" : "",
  assetPrefix: isGithubPages ? "/anthoulis-poetry/" : "",
};

export default nextConfig;
