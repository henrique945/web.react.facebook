import './post.css';
import { Users } from '../../data';
import { useState } from "react";

export default function Post({post}) {
  const user = Users.find(user => user.id === post.userId);

  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like-1 : like+1);
    setIsLiked(!isLiked);
  }

  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <img src={user.profilePicture} alt="" className="post-profile-img"/>
            <span className="post-username">{user.username}</span>
            <span className="post-date">{post.date}</span>
          </div>
          <div className="post-top-right">

          </div>
        </div>
        <div className="post-center">
          <span className="post-text">{post.desc}</span>
          <img src={post.photo} alt="" className="post-img"/>
        </div>
        <div className="post-bottom">
          <div className="post-bottom-left">
            <img src="/assets/like.png" alt="" onClick={likeHandler} className="like-icon"/>
            <img src="/assets/heart.png" alt="" onClick={likeHandler} className="like-icon"/>
            <span className="post-like-counter">{like} people like it</span>
          </div>
          <div className="post-bottom-right">
            <span className="post-comment-text">{post.coment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
