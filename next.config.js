/** @type {import('next').NextConfig} */

let assetPrefix = "src/";
let basePath = "src/";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "imgix",
    path: "",
    domains: ["flagcdn.com", "upload.wikimedia.org"],
  },
  assetPrefix: assetPrefix,
  basePath: basePath,
};

module.exports = nextConfig;
