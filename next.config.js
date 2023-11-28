/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'www.sslawsociety.org'
      },
      {
        hostname: 'firebasestorage.googleapis.com'
      }
    ]
  }
}

module.exports = nextConfig
