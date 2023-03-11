module.exports = {
  async rewrites() {

    return [

      {

        source: '/sitemap.xml',

        destination: '/api/sitemap',

      },

    ]

  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.fallback.tls = false;
      config.resolve.fallback.net = false;
      config.resolve.fallback.child_process = false;
     
    }

    return config;
  },
}
