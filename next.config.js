/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['logotyp.us', 'fdn2.gsmarena.com'],
  },
}

module.exports = nextConfig
