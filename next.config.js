const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  images: {
    domains: ['cdn.sanity.io'],
  },
  reactStrictMode: true,
});

/* module.exports = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  reactStrictMode: true,
};
 */
