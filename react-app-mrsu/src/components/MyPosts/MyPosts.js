import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    console.log(props)
    let dataPosts = props.dataPost.map(
        (dataElement) => {
            return <Post key={dataElement.id} message={dataElement.message} countLikes={dataElement.countLikes}></Post>
        }
    );

    let onAddPost = () => {
        props.addPost();
    }

    let onChangeTextPost = (e) => {
        let textPost = e.target.value;
        props.updatePostText(textPost);
    }

    return (
        <div>
            <div>My posts
                <div className={classes["posts-textarea"]}>
                    <textarea onChange={onChangeTextPost}
                              value={props.newTextPost}>
                    </textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            {dataPosts}
        </div>
    );
}

export default MyPosts;
