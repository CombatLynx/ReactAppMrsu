import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {actionCreators} from "../../redux/profile-reducer";

const mapStateToProps = (state: AppStateType) => {
    return {
        dataPost: state.profilePage.posts,
        newTextPost: state.profilePage.newTextPost
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: () => {
            dispatch(actionCreators.addPostDispatchCreator());
        },
        updatePostText: (textPost: string) => {
            dispatch(actionCreators.updatePostTexDispatchCreator(textPost));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;