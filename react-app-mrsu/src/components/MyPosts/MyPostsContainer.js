import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPostDispatchCreator, updatePostTexDispatchCreator} from "../../redux/profile-reducer";

const mapStateToProps = (state) => {
    return {
        dataPost: state.profilePage.posts,
        newTextPost: state.profilePage.newTextPost
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostDispatchCreator());
        },
        updatePostText: (textPost) => {
            const action = updatePostTexDispatchCreator(textPost);
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
