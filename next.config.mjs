/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        loader: 'default',
        unoptimized: true,
    },
};

export default nextConfig;
