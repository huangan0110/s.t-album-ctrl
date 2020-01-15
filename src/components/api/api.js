import request from 'axios';

//获取用户列表
export function getUser() {
    return request({
        url:'../../../static/data/MemberList.json',
        method:'GET'
    })
}
//获取日志
export function getLog() {
    return request({
        url:'/log/gateway',
        method:'GET'
    })
}