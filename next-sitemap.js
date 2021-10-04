const siteUrl = 'https://emburymedia.com';

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', disallow: '/api/*' },
      { userAgent: '*', allow: '/' },
    ],
  },
  exclude: ['/api/*'],
};
