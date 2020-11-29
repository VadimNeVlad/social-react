import React from 'react';
import Post from '../Post/Post';

const MyPosts = (props) => {
  const addPost = () => {
    props.addPost();
  };

  const newPostText = (e) => {
    const target = e.target.value;
    props.updatePost(target);
  };

  return (
    <div className="myposts">
      <h2>My Posts</h2>
      <div className="myposts__fields">
        <textarea
          onChange={newPostText}
          placeholder="Type Message"
          value={props.newPostText}
          name="msg"
        ></textarea>
        <button onClick={addPost}>Add Post</button>
      </div>
      <div className="myposts__list">
        {props.postData.map((item, i) => {
          return <Post msg={item.msg} likeCount={item.likeCount} />;
        })}
      </div>
    </div>
  );
};

export default MyPosts;
