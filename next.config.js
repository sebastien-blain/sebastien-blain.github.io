const withPWA = require('next-pwa');
const isProd = process.env.NODE_ENV === "production"

const nextConfig = {
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true
  }
};

module.exports = withPWA(nextConfig);
