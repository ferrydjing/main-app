module.exports = {
    cacheId: `sw-cache-nancy-tool`,
    skipWaiting: true,
    maximumFileSizeToCacheInBytes: 10000000,
    navigateFallback: '/main-app/index.html',
    navigateFallbackAllowlist: [/^(?!.*\.html$|\/data\/).*/]
};
