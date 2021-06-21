module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["storage.googleapis.com"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://api-prod.autochek.africa/v1/inventory/:path*", // Proxy to Backend
      },
    ];
  },
};
