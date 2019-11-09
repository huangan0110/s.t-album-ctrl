import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/Login'
import Home from '@/components/Home/Home'
import DataStatistics from '@/components/DataStatistics/DataStatistics'
import MemberList from '@/components/MemberList/MemberList'
import PointManagement from '@/components/PointManagement/PointManagement'
import SysMonitor from '@/components/SysMonitor/SysMonitor'
import Level from '@/components/Level/Level'
import SysLog from '@/components/SysLog/SysLog'
import Wel from '@/components/Home/Wel/Wel'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
            children: [{
                    path: '/data_statistics',
                    name: 'DataStatistics',
                    component: DataStatistics
                },
                {
                    path: '/member_list',
                    name: 'MemberList',
                    component: MemberList
                },
                {
                    path: '/point_management',
                    name: 'PointManagement',
                    component: PointManagement
                },
                {
                    path: '/sys_monitor',
                    name: 'SysMonitor',
                    component: SysMonitor
                },
                {
                    path: '/level',
                    name: 'Level',
                    component: Level
                },
                {
                    path: '/sys_log',
                    name: 'SysLog',
                    component: SysLog
                },
                {
                    path: '/wel',
                    name: 'Wel',
                    component: Wel
                },
            ]
        }
    ]
})