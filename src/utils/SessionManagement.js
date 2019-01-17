const USERINFO = 'userInfo';

export default {
    setUserInfo: (userInfo) => {
        sessionStorage.setItem(USERINFO, JSON.stringify(userInfo))
    },

    getUserInfo: () => JSON.parse(sessionStorage.getItem(USERINFO)),

    clearUserInfo : () => sessionStorage.clear(),
}