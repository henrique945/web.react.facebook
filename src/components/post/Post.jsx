import './post.css';

export default function Post() {
  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <img src="/assets/person/1.jpeg" alt="" className="post-profile-img"/>
            <span className="post-username"></span>
            <span className="post-date"></span>
          </div>
          <div className="post-top-right">

          </div>
        </div>
        <div className="post-center">
          <span className="post-text">My description</span>
          <img src="/assets/post/1.jpeg" alt="" className="post-img"/>
        </div>
        <div className="post-bottom">
          <div className="post-bottom-left">
            <img src="/assets/like.png" alt="" className="like-icon"/>
            <img src="/assets/heart.png" alt="" className="like-icon"/>
            <span className="post-like-counter">10 people like it</span>
          </div>
          <div className="post-bottom-right">
            <span className="post-comment-text">10 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
