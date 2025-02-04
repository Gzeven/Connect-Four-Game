/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
      styledComponents: true, // Enable SSR for Styled Components
    },
  };

export default nextConfig;
