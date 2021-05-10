import home from './pages/home'

export default [
    {
        path: '/',
        name: 'index',
        component: function (resolve) {
            require(['@/views/layout'], resolve)
        },
        children: [
            ...home
        ]
    }
]