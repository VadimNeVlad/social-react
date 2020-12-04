import React from "react";
import { connect } from "react-redux";
import { addPostCreator, updatePostCreator } from "../../redux/profileReducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => dispatch(addPostCreator()),
    updatePost: (target) => dispatch(updatePostCreator(target)),
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
