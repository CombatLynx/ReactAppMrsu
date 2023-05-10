import {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUsersThunkCreator} from "../../redux/users-reducer";
import {User} from "./User";

export const Users: FC = () => {
    const users = useSelector((state: AppStateType) => state.userPage.users)
    const pageSize = useSelector((state: AppStateType) => state.userPage.pageSize)
    const currentPage = useSelector((state: AppStateType) => state.userPage.currentPage)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch<any>(getUsersThunkCreator(currentPage, pageSize))
    }, [])

    const allUsers = users.map(
        (user) => {
            return <User
                key={user.id}
                user={user}
            />
        }
    )

    return (
        <div>
            {allUsers}
        </div>
    )
}