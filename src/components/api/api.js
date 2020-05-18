import request from 'axios';
import qs from 'qs'
import {Message} from 'element-ui'
import router from '../../router/index'
request.interceptors.request.use(function (config) {
    let token = window.localStorage.getItem("access_token")
    if (token) {
        //将token放到请求头发送给服务器
        config.headers.Authorization = "bearer " + " " + token;
        return config;
    } else {
        return config;
    }
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

request.interceptors.response.use(
    response => {

        return response
    },
    //接口错误状态处理，也就是说无响应时的处理
    error => {
        console.log(error)
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    Message.error({message: '权限不足,请联系管理员!'});
                    router.replace({
                        path: '/login',
                    })
                    localStorage.clear();
                    break;
                case 403:
                    Message.error({message: '权限不足,请联系管理员!'});
                    break;
                case 403:
                    Message.error({message: '方法错误诶,请联系管理员!'});
                    break;
                case 404:
                    Message.error({message: '服务器被吃了⊙﹏⊙∥'});
                    break;
                default: break;
            }
        }
        return Promise.reject(error.response.status) // 返回接口返回的错误信息
    })

function test(data) {
    let url = "";
    for (let i in data.permissionIds) {
        if (i == 0) {
            url += "permissionIds%5B%5D=" + data.permissionIds[i]
        } else {
            url += "&permissionIds%5B%5D=" + data.permissionIds[i]
        }
    }
    url += "&roleId=" + data.roleId;
    return url;
}

//登录
export function login(username, password) {
    return request({
        url: '/auth/oauth/token',
        method: 'post',
        params: {
            grant_type: 'password',
            client_id: 'client',
            client_secret: 'secret',
            username: username,
            password: password
        }
    })
}

//登出
export function logout() {
    return request({
        url: '/auth/auth/exit?access_token=' + localStorage.getItem('access_token'),
        method: 'delete',
    })
}

//获取用户列表
export function getUser() {
    return request({
        url: '../../../static/data/MemberList.json',
        method: 'GET'
    })
}

// //获取日志
// export function getLog() {
//     return request({
//         url:'/log/gateway',
//         method:'GET'
//     })
// }

//查询访问量
export function getViews(type, month) {
    return request({
        url: '/backstage/index/getFrequency',
        method: 'get',
        params: {
            type: type,
            month: month
        }
    })
}

//查询用户量
export function getUserNum(type, month) {
    return request({
        url: '/backstage/index/getNewUsers',
        method: 'get',
        params: {
            type: type,
            month: month
        }
    })
}

//获取Vip等级分布
export function getVipDistribution() {
    return request({
        url: '/backstage/index/vipDistribution',
        method: 'get',
    })
}


//获取权限树
export function getMenuTree() {
    return request({
        url: '/backstage/sysPermission/tree',
        method: 'get',
    })
}

//修改权限树
export function changeMenu(data) {
    return request({
        url: '/backstage/sysPermission/save',
        method: 'post',
        data: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json;'
        }
    })
}

//删除权限树
export function delMenu(id) {
    return request({
        url: '/backstage/sysPermission/delete/' + id,
        method: 'post',
    })
}

//默认选择节点
export function getDefaultNode(id) {
    return request({
        url: '/backstage/sysPermission/getPermissionByRoleId/' + id,
        method: 'get',
    })
}

//角色授权
//默认选择节点
export function setPermisson(permissionIds, id) {
    let data = {
        permissionIds: permissionIds,
        roleId: id
    }
    return request({
        url: '/backstage/sysRole/updatePermission?' + test(data),
        method: 'post',

    })
}

//查询用户列表
export function getUserList(pageSize, pageNo,nickName) {
    return request({
        url: '/user/user/getByNickName/'+nickName,
        method: 'get',
        params: {
            pageSize: pageSize,
            pageNo: pageNo
        }
    })
}

//编辑用户
export function editUserInfo(data) {
    return request({
        url: '/user/user/updateForAdmin',
        method: 'put',
        data: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json;'
        }
    })
}

//添加用户
export function addUser(data) {
    return request({
        url: '/backstage/sysUser/add?password='+data.password+'&passwprd='+data.password,
        method: 'post',
        data: {
            // usernme:JSON.stringify(data.username),
            username:data.username,
        },

    })
}


//获取所有数据
export function getAllData() {
    return request({
        url: '/album/public/getOverallStatistics',
        method: 'get',
    })
}

//获取等级数据
export function getLevelData() {
    return request({
        url: '/album/public/getOverallStatistics',
        method: 'get',
    })
}

//修改等级数据
export function editLevelData(data) {
    return request({
        url: '/album/public/getOverallStatistics',
        method: 'get',
    })
}

