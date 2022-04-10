/**
 * 当路由是登录或者注册界面的时候返回true
 * @param {} route 
 * @returns 
 */
export function isLoginPage(route) {
    return route.name === 'Login' || route.name === 'Register'
}