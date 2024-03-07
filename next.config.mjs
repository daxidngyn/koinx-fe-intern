/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "assets.coingecko.com" }],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/bitcoin",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
