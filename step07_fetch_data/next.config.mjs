/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "sinlab.future-tech-association.org",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
export default nextConfig;
