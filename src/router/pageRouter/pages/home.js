export default [
    {
        path: '/home',
        name: 'home',
        component (resolve) {
            require(['@/views/pages/home'], resolve)
        },
        mete: {
            title: '首页'
        }
    }
]