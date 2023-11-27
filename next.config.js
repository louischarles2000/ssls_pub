/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'www.sslawsociety.org'
      }
    ]
  }
}

module.exports = nextConfig
