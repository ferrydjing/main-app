import router from '../router';
// 子应用列表
const microApps = [
    {
        name: 'micro1',
        entry: process.env.VUE_APP_MICRO1,
        activeRule: '/micro1',
        container: '#micro-container'
    }
];
const apps = microApps.map((item) => {
    return {
        ...item,
        props: {
            routerBase: item.activeRule,
            mainRouter: router,
            mainStore: {}
        }
    };
});

export default apps;
