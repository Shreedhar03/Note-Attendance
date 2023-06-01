module.exports = {
    globDirectory: 'build/',
    globPatterns: ['**/*.{html,json,js,css}'],
    swDest: 'build/service-worker.js',
    clientsClaim: true,
    skipWaiting: true,
  };