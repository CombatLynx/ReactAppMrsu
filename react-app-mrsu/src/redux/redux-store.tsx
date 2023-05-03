import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";

const rootReducer = combineReducers({
    profilePage: profileReducer
});

const store = createStore(rootReducer);

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesTypes<T>>

export default store;
