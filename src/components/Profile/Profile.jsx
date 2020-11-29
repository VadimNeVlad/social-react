import React from 'react';
import MyPostsContainer from '../MyPosts/MyPostsContainer';

const Profile = (props) => {
  return (
    <div className="content">
      <div className="profile__big-img">
        <img
          src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"
          alt=""
        />
      </div>
      <div className="profile  content-box">
        ava + description
        <MyPostsContainer />
      </div>
    </div>
  );
};

export default Profile;
