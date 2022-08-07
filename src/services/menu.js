import { store } from '@/utils/store'
export const getMenusBypId = (pid = -1) => {
    let menus = JSON.parse(store.get(store.constant.menus) || [])
    let newMenus = [];
    for (let item in menus) {
        if (menus[item].parentId == pid) {
            newMenus.push(menus[item]);
        }
    }
    return newMenus;
}
export const addMenu = (menu) => {
    let menus = JSON.parse(store.get(store.constant.menus) || [])
    menu.id = store.increment()
    menus.push(menu)
    store.push(store.constant.menus, JSON.stringify(menus))
}