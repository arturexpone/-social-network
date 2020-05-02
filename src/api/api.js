import * as axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0`,
    withCredentials: true,
    headers: {'API-KEY': '21b6fd0b-f892-4a38-acb4-3ec43e883c9a'}
})

export const usersAPI = {
    getUsers: (currentPage, pageSize) => {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    unfollowAPI: (id) => {
        return instance.delete(`/follow/${id}`).then(response => response.data.resultCode)
    },
    followAPI: (id) => {
        return instance.post(`/follow/${id}`).then(response => response.data.resultCode)
    },
    getProfile: (id) => {
        console.warn('Obsolete method. Please use new method')
        return profileAPI.getProfile(id);
    },
};

export const profileAPI = {
    getProfile: (id) => {
        return instance.get(`/profile/${id}`).then(response => response.data);
    },
    getStatus: (id) => {
        return instance.get(`/profile/status/${id}`).then(response => response.data);
    },
    updateStatus: (status) => {
        return instance.put(`/profile/status/`, { status: status })
    },
};

export const authAPI = {
    me: () => instance.get(`/auth/me`).then(response => response.data),
    login: (email, password, rememberMe = false) => instance.post('/auth/login', { email, password, rememberMe }).then(response => response.data),
    logout: () => instance.delete('/auth/login').then(response => response.data),
    captcha: () => instance.get('/security/get-captcha-url').then(response => response)
};
