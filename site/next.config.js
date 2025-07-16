/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Red Wombat Studio',
    description: 'The official store for RWS supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://redwombatstudio.github.io/kasm_registry',
    contactUrl: 'https://github.com/redwombatstudio/kasm_registry/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm_registry/1.1/',
  trailingSlash: false,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
