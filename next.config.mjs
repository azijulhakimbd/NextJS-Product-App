/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.postimg.cc",
      },
       {
        protocol: "https",
        hostname: "fdn2.gsmarena.com",
      },
    ],
  },
};

export default nextConfig;
