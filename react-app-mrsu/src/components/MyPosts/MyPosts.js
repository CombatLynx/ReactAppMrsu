import React from "react";
import Post from "./Post/Post";

const MyPosts = (props) => {
    const myPostsMessages = props.messages.map(
        (postMessage) => {
            return <Post key={postMessage.id} message={postMessage.message}></Post>
        }
    )

    return (
        <div>
            {myPostsMessages}
        </div>
    );
}

export default MyPosts;