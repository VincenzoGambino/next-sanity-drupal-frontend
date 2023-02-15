/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    DATASET: process.env.SANITY_DATASET,
    USE_CDN: process.env.SANITY_USE_CDN
  }
}

module.exports = nextConfig
