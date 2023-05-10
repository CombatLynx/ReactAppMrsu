import {FC} from "react";
import {UserType} from "../../redux/users-reducer";

type PropsType = {
    user: UserType
}

export const User: FC<PropsType> = ({user}) => {
    return (
        <div>
            {
                <div key={user.id}>
                    <div>{user.id}</div>
                    <div>{user.name}</div>
                </div>
            }
        </div>
    )
}