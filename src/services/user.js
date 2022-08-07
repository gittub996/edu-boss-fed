import { store } from '@/utils/store'
export const login = (userLogin) => {
    let user = JSON.parse(store.get(store.constant.login) || {})
    return user.phone == userLogin.phone && user.password == userLogin.password;
}
export const getUserInfo = () => {
    return {
        userName: "张三",
        portImg: "https://img0.baidu.com/it/u=2800906937,536160671&fm=253&fmt=auto&app=138&f=JPEG?w=100&h=100"
    }
}