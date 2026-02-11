/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
 images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "unrgeijydsshdhjpumhk.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
     unoptimized: true,
  },
  
};

export default nextConfig;
