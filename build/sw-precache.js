module.exports = {
    cacheId: `sw-cache-main-app`,
    skipWaiting: true,
    clientsClaim: true,
    sourcemap: false,
    maximumFileSizeToCacheInBytes: 10000000,
    exclude: ['/main-app/index.html'],
    importScripts: ['/micro-app/precache-manifest.57402ca50c0f5bb67a8dec07a8eec3bf.js'],
    navigateFallback: '/main-app/index.html',
    navigateFallbackAllowlist: [/^(?!.*\.html$|\/data\/).*/]
};
