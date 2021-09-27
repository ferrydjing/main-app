module.exports = {
    cacheId: `sw-cache-main-app`,
    skipWaiting: true,
    clientsClaim: true,
    sourcemap: false,
    maximumFileSizeToCacheInBytes: 10000000,
    exclude: ['/main-app/index.html'],
    importScripts: ['/micro-app/service-worker.js'],
    navigateFallback: '/main-app/index.html',
    navigateFallbackAllowlist: [/^(?!.*\.html$|\/data\/).*/]
};
