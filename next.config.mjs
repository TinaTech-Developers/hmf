/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: "standalone",
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    domains: ["img.freepik.com"],
  },
  reactCompiler: true,
};

export default nextConfig;
