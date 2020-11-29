import React from 'react';

const Post = (props) => {
  return (
    <div className="post">
      <div className="post__item">
        <div className="post__item-content">
          <img src="https://img.the-village.com.ua/the-village.com.ua/post-image/kRkAK6gI9U8krcniYxDxNA.jpg" alt=""/>
          <p>{ props.msg }</p>
        </div>
        <span>{ props.likeCount }</span>
      </div>
    </div>
  );
}

export default Post
