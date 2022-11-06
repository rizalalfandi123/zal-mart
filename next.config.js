/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.tokopedia.net', 'telset.id'],
  },
}

module.exports = nextConfig
