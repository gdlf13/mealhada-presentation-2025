import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    // Configuração para lidar com arquivos PDF - Keep for potential future use
    config.module.rules.push({
      test: /\.pdf$/,
      type: 'asset/resource',
    });
    
    return config;
  },
  // Garantir que arquivos estáticos na pasta public sejam servidos corretamente - Keep for potential future use
  async headers() {
    return [
      {
        source: '/pdf/:path*',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/pdf',
          },
          {
            key: 'Content-Disposition',
            value: 'inline',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
