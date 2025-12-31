/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable static export for GitHub Pages
    output: "export",

    // For GitHub Pages user site (username.github.io), no basePath needed
    // If deploying to a project repo (username.github.io/repo-name), uncomment:
    // basePath: "/repo-name",
    // assetPrefix: "/repo-name/",

    // Disable image optimization for static export
    images: {
        unoptimized: true,
    },

    // Ensure trailing slashes for GitHub Pages compatibility
    trailingSlash: true,
};

export default nextConfig;
