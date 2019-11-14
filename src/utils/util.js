import Cookies from 'js-cookie'

const COOKIE_USER_KEY = 'current_user';

export const setCookieUser = (user) => {
    Cookies.set(COOKIE_USER_KEY, user, { expires: 7 });
}

export const getCookieUser = () => {
    var user = Cookies.get(COOKIE_USER_KEY);
    if (user != undefined) {
        let u = JSON.parse(user);
        return u;
    } else {
        return false;
    }
}

export const removeCookieUser = () => {
    Cookies.remove(COOKIE_USER_KEY);
}
