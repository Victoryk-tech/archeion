/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
      MONGODB_URI: process.env.MONGODB_URI,
    },
    experimental: {
      optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
    },
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.unsplash.com",
          pathname: "/**", // Matches all paths
        },
  
        {
          protocol: "https", // Corrected this line
          hostname: "www.gravatar.com", // Use full domain
          pathname: "/**", // Matches all paths
        },
      ],
  
      domains: ["*", "randomuser.me"],
    },
  
    async rewrites() {
      return [
        {
          source: "/api/:path*",
          destination: "/api/:path*", // API routes unchanged
        },
        // {
        //   source: "/Media/:path*",
        //   destination: "/Media/:path*", // Keep media routes functional
        // },
       
      ];
    },
  };

export default nextConfig;
