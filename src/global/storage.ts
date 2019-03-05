export default {
    getSession(name: string) {
        return sessionStorage.getItem(name);
    },
    setSession(name: string, value: string) {
        return sessionStorage.setItem(name, value);
    },
    getLocation(name: string) {
        return localStorage.getItem(name);
    },
    setLocation(name: string, value: string) {
        return localStorage.setItem(name, value);
    },
};
