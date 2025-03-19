import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "unpocxzsussyvmnipuhr.supabase.co",
        protocol: "https",
        port: "",
        pathname: "/storage/v1/object/public/images/**",
      },
    ],
  },
};

export default nextConfig;
