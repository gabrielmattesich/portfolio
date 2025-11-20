/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'out',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.licdn.com',
            },
            {
                protocol: 'https',
                hostname: 'github-readme-stats.vercel.app',
            },
        ],
    },
};

export default nextConfig;
