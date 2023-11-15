/** @type {import('next').NextConfig} */
const nextConfig = {}

// module.exports = nextConfig

module.exports = {
    ...nextConfig,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'vignette.wikia.nocookie.net',
          port: '',
          pathname: '/starwars/**',
        },
        {
          protocol: 'https',
          hostname: 'vignette.wikia.nocookie.net',
          port: '',
          pathname: '/fr.starwars/**',
        },
      ],
    },
  }

  