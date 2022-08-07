import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
// 不报错了但是还是不跳转
// const routerPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//     return routerPush.call(this, location).catch(error => error)
// }

Vue.use(VueRouter)
    // 路由规则
const routes = [{
        path: '/login',
        name: 'login',
        component: () =>
            import ( /* webpackChunkName: "login" */ '@/views/login/index')
    },
    {
        path: '/',
        component: () =>
            import ( /* webpackChunkName: "layout" */ '@/views/layout/index'),
        // 只有经过身份验证的用户才能创建帖子
        meta: { requiresAuth: true },
        children: [{
                path: '',
                name: 'home',
                component: () =>
                    import ( /* webpackChunkName: "home" */ '@/views/home/index')
            },
            {
                path: '/role',
                name: 'role',
                component: () =>
                    import ( /* webpackChunkName: "role" */ '@/views/role/index')
            },
            {
                path: '/menu',
                name: 'menu',
                component: () =>
                    import ( /* webpackChunkName: "menu" */ '@/views/menu/index')
            },
            {
                path: '/resource',
                name: 'resource',
                component: () =>
                    import ( /* webpackChunkName: "resource" */ '@/views/resource/index')
            },
            {
                path: '/course',
                name: 'course',
                component: () =>
                    import ( /* webpackChunkName: "course" */ '@/views/course/index')
            },
            {
                path: '/user',
                name: 'user',
                component: () =>
                    import ( /* webpackChunkName: "user" */ '@/views/user/index')
            },
            {
                path: '/advert',
                name: 'advert',
                component: () =>
                    import ( /* webpackChunkName: "advert" */ '@/views/advert/index')
            },
            {
                path: '/advert-space',
                name: 'advert-space',
                component: () =>
                    import ( /* webpackChunkName: "advert-space" */ '@/views/advert-space/index')
            },
            {
                path: '/create-menu',
                name: 'create-menu',
                component: () =>
                    import ( /* webpackChunkName: "advert-space" */ '@/views/menu/create-menu')
            }
        ]
    },
    {
        path: '*',
        name: 'error-page',
        component: () =>
            import ( /* webpackChunkName: "error-page" */ '@/views/error-page/index')
    }
]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    // 而不是去检查每条路由记录
    // to.matched.some(record => record.meta.requiresAuth)
    console.log(to)
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // 此路由需要授权，请检查是否已登录
        // 如果没有，则重定向到登录页面
        if (store.state.currentUser) {
            return next()
        }
        next({
            name: "login",
            query: {
                redirect: to.fullPath
            }
        })
    } else {
        next()
    }
})
export default router