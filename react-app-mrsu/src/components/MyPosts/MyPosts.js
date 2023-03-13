import React from "react";
import Post from "./Post/Post";

const MyPosts = (props) => {
    console.log(props)
    const myPostsMessages = props.messages.map(
        (postMessage) => {
            return <Post key={postMessage.id} message={postMessage.message} countLikes={postMessage.countLikes}></Post>
        }
    )

    return (
        <div>
            {myPostsMessages}
        </div>
    );
}

export default MyPosts;