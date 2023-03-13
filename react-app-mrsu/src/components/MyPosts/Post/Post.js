import React from "react";

const Post = (props) => {
    console.log(props)
    return (
        <div>
            <div>{props.message}</div>
            <div>{props.countLikes}</div>
        </div>
    );
}

export default Post;