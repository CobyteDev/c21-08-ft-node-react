/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.postimg.cc",
      },
      {
        protocol: "http",
        hostname: "example.com",
      },
      {
        protocol: "https",
        hostname: "example.com",
      },
    ],
  },
}

export default nextConfig
