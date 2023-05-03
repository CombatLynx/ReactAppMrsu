import React, {FC} from "react";

type PropsType = {
    message: string,
    countLikes: number
}

const Post: FC<PropsType> = (props) => {
    console.log(props)
    return (
        <div>
            <div>{props.message}</div>
            <div>{props.countLikes}</div>
        </div>
    );
}

export default Post;