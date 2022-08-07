import constant from './constant'
let push = function(key, value) {
    localStorage.setItem(key, value);
}
let get = function(key) {
    return localStorage.getItem(key)
}
let init = function() {
    if (!get(constant.login)) {
        // 登录的用户
        push(constant.login, JSON.stringify({
            phone: "17201234567",
            password: "111111"
        }))
        push(constant.onlyId, 1000)
            // 菜单menus
        push(constant.menus, JSON.stringify(
            [{
                    id: "1",
                    name: '权限管理',
                    parentId: '-1',
                    path: '',
                    icon: 'el-icon-location',
                    desc: '',
                    shown: 'true',
                    orderNum: '1'
                },
                {
                    id: "2",
                    name: '课程管理',
                    parentId: '-1',
                    path: '/course',
                    icon: 'el-icon-location',
                    desc: '',
                    shown: 'true',
                    orderNum: '2'
                },
                {
                    id: "3",
                    name: '用户管理',
                    parentId: '-1',
                    path: '/user',
                    icon: 'el-icon-location',
                    desc: '',
                    shown: 'true',
                    orderNum: '1'
                },
                {
                    id: "4",
                    name: '广告管理',
                    parentId: '-1',
                    path: '/advert',
                    icon: 'el-icon-location',
                    desc: '',
                    shown: 'true',
                    orderNum: '1'
                },
                {
                    id: "5",
                    name: '角色列表',
                    parentId: '1',
                    path: '/role',
                    icon: 'el-icon-location',
                    desc: '',
                    shown: 'true',
                    orderNum: '1'
                },
                {
                    id: "6",
                    name: '菜单列表',
                    parentId: '1',
                    path: '/menu',
                    icon: 'el-icon-location',
                    desc: '',
                    shown: 'true',
                    orderNum: '1'
                },
                {
                    id: "7",
                    name: '资源列表',
                    parentId: '1',
                    path: '/resource',
                    icon: 'el-icon-location',
                    desc: '',
                    shown: 'true',
                    orderNum: '1'
                },
                {
                    id: "8",
                    name: '广告位列表',
                    parentId: '4',
                    path: '/advert-space',
                    icon: 'el-icon-location',
                    desc: '',
                    shown: 'true',
                    orderNum: '1'
                }
            ]
        ))
    }
}
const increment = function() {
    let id = get(constant.onlyId) + 1;
    push(constant.onlyId, id)
    return id;
}
export const store = { push, get, init, increment, constant };