import React from 'react';
import { addPostCreator, updatePostCreator } from '../../redux/profileReducer';
import StoreContext from '../../StoreContext';
import MyPosts from './MyPosts';

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState();

        const addPost = () => {
          store.dispatch(addPostCreator());
        };

        const updatePost = (target) => {
          store.dispatch(updatePostCreator(target));
        };

        return (
          <MyPosts
            addPost={addPost}
            updatePost={updatePost}
            postData={state.profilePage.postData}
            newPostText={state.profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
