import request from 'axios';

//登录
export function login(username,password) {
    return request({
        url: '/auth/oauth/token',
        method: 'post',
        params:{
            grant_type:'password',
            client_id:'client',
            client_secret:'secret',
            username:username,
            password:password
        }
    })
}

//获取用户列表
export function getUser() {
    return request({
        url:'../../../static/data/MemberList.json',
        method:'GET'
    })
}

// //获取日志
// export function getLog() {
//     return request({
//         url:'/log/gateway',
//         method:'GET'
//     })
// }
