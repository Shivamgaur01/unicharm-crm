/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000", process.env.VERCEL_URL, process.env.NEXTAUTH_URL].filter(Boolean),
    },
  },
};
export default nextConfig;
