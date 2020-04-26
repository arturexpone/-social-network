import * as axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0`,
    withCredentials: true,
    headers: {'API-KEY': '21b6fd0b-f892-4a38-acb4-3ec43e883c9a'}
})

export const getUsers = (currentPage, pageSize) => {
    return instance.get(`/users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
}

export const unfollowAPI = (id) => {
    return instance.delete(`/follow/${id}`).then(response => response.data.resultCode);
};

export const followAPI = (id) => {
    return instance.post(`/follow/${id}`).then(response => response.data.resultCode);
};