import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    basePath: "/social_link_profile"
};

export default nextConfig;
