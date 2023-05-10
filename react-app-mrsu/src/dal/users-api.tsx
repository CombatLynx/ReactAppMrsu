import {instance} from "./api";

export const userAPI = {
    getUsers: (currentPage: number, pageSize: number) => {
        return instance.get<any>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    }
}