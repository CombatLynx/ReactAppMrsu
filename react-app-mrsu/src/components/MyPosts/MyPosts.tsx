import React, {ChangeEvent, FC} from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostType} from "../../redux/profile-reducer";

type PropsType = {
    dataPost: Array<PostType>,
    addPost: () => void,
    updatePostText: (textPost: string) => void,
    newTextPost: string
}

const MyPosts: FC<PropsType> = (props) => {
    let dataPosts = props.dataPost.map(
        (dataElement) => {
            return <Post key={dataElement.id} message={dataElement.message} countLikes={dataElement.countLikes}></Post>
        }
    );

    let onAddPost = () => {
        props.addPost();
    }

    let onChangeTextPost = (e: ChangeEvent<HTMLTextAreaElement>) => {
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
