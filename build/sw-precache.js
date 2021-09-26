module.exports = {
    cacheId: `sw-cache-nancy-tool`,
    skipWaiting: true,
    clientsClaim: true,
    modifyURLPrefix: {
        static: 'main-app/static'
    },
    sourcemap: false,
    maximumFileSizeToCacheInBytes: 10000000,
    navigateFallback: '/main-app/index.html',
    navigateFallbackAllowlist: [/^(?!.*\.html$|\/data\/).*/]
};
