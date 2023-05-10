import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {userAPI} from "../dal/users-api";

enum typesActions {
    GET_USERS = 'GET-USERS'
}

type PhotosType = {
    small: string | null,
    large: string | null
}

export type UserType = {
    id: number,
    name: string,
    photos: PhotosType,
    status: string | null,
    followed: boolean
}

type InitialStateType = {
    users: Array<UserType>,
    currentPage: number,
    pageSize: number
}

let initialReducer: InitialStateType = {
    users: [] as Array<UserType>,
    pageSize: 10,
    currentPage: 1
}

type ActionsType = InferActionsTypes<typeof actionCreators>
type ThunkType = BaseThunkType<ActionsType>

const usersReducer = (state = initialReducer, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case typesActions.GET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        default:
            return state;
    }
}

export const actionCreators = {
    setUsersActionCreators: (users: Array<UserType>) => ({
        type: typesActions.GET_USERS,
        users: users
    } as const)
}

export const getUsersThunkCreator = (currentPage: number, pageSize: number): ThunkType => {
    return async (dispatch) => {
        const data = await userAPI.getUsers(currentPage, pageSize);
        dispatch(actionCreators.setUsersActionCreators(data.items))
    }
}

export default usersReducer;