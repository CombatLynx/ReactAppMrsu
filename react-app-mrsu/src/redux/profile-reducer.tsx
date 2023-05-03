import {InferActionsTypes} from "./redux-store";

enum typesActions {
    ADD_POST = 'ADD-POST',
    UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
}

export type PostType = {
    id: number,
    message: string,
    countLikes: number
}

type InitialStateType = {
    posts: Array<PostType>
    newTextPost: string
}

let initialReducer: InitialStateType = {
    posts: [
        {
            id: 1,
            message: "Hi, how are you?",
            countLikes: 12
        },
        {
            id: 2,
            message: "It is my post",
            countLikes: 7
        }
    ],
    newTextPost: "default message"
}

type ActionsType = InferActionsTypes<typeof actionCreators>

const profileReducer = (state = initialReducer, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case typesActions.ADD_POST:
            let newPost = {
                id: 3,
                message: state.newTextPost,
                countLikes: 0
            };
            return {
                ...state,
                newTextPost: '',
                posts: [...state.posts, newPost]
            }
        case typesActions.UPDATE_POST_TEXT:
            return {
                ...state,
                newTextPost: action.newText
            }
        default:
            return state;
    }
}

export const actionCreators = {
    addPostDispatchCreator: () => ({
        type: typesActions.ADD_POST
    } as const),
    updatePostTexDispatchCreator: (newTextPost: string) => ({
        type: typesActions.UPDATE_POST_TEXT,
        newText: newTextPost
    } as const)
}

export default profileReducer;