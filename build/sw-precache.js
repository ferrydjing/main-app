module.exports = {
    cacheId: `sw-cache-main-app`,
    skipWaiting: true,
    clientsClaim: true,
    sourcemap: false,
    maximumFileSizeToCacheInBytes: 10000000,
    exclude: ['/main-app/index.html'],
    navigateFallback: '/main-app/index.html',
    navigateFallbackAllowlist: [/^(?!.*\.html$|\/data\/).*/]
};
