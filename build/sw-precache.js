module.exports = {
    cacheId: `sw-cache-nancy-tool`,
    skipWaiting: true,
    clientsClaim: true,
    sourcemap: false,
    maximumFileSizeToCacheInBytes: 10000000,
    navigateFallback: '/main-app/index.html',
    navigateFallbackAllowlist: [/^(?!.*\.html$|\/data\/).*/]
};
