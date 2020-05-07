import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
    // mode:'history',
    // base:'/',
    routes: [{
        path: "/login",
        name: "Login",
        component: resolve => require(['../components/Login/Login.vue'], resolve),
    },
    {
        path: "/home",
        name: "Home",
        component: resolve => require(['../components/Home/Home.vue'], resolve),
        meta: {
            isLogin: true
        },
        children: [
            {
                path: "/admin_info",
                name: "AdminInfo",
                component: resolve => require(['../components/Home/AdminInfo/AdminInfo.vue'], resolve),
            },
            {
                path: "/data_statistics",
                name: "DataStatistics",
                component: resolve => require(['../components/DataStatistics/DataStatistics.vue'], resolve),
            },
            {
                path: "/member_list",
                name: "MemberList",
                component: resolve => require(['../components/MemberList/MemberList.vue'], resolve),
            },
            {
                path: "/level",
                name: "Level",
                component: resolve => require(['../components/Level/Level.vue'], resolve),
            },
            {
                path: "/sys_log",
                name: "SysLog",
                component: resolve => require(['../components/SysLog/SysLog.vue'], resolve),
            },
            {
                path: "/menu_manage",
                name: "MenuManage",
                component: resolve => require(['../components/MenuManage/MenuManage.vue'], resolve),
            },
            {
                path: "/service",
                name: "Service",
                component: resolve => require(['../components/Service/Service.vue'], resolve),
            },
            {
                path: "/link",
                name: "Link",
                component: resolve => require(['../components/Link/Link.vue'], resolve),
            },
            {
                path: "/wel",
                name: "Wel",
                component: resolve => require(['../components/Home/Wel/Wel.vue'], resolve),
                meta: {
                    isLogin: true
                }
            }
        ]
    }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.length === 0) {
        if(localStorage.getItem('access_token')) {
            next({
                path: "/home"
            });
        }else{
            next({
                path: "/login"
            });
        }

    } else {
        if (to.matched.some(res => res.meta.isLogin)) {
            if (localStorage.getItem('access_token')) {
                next();
            } else {
                next({
                    path: "/login",
                    query: {
                        redirect: to.fullPath
                    }
                });
            }
        } else {
            next();
        }
    }

});

export default router;
