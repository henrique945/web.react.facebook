import './feed.css';
import Share from '../share/Share';
import Post from '../post/Post';
import { Posts, Users } from '../../data';

export default function Feed() {
  const loggedUser = Users.find(user => user.id === 1);

  return (
    <div className="feed">
      <div className="feed-wrapper">
        <Share user={loggedUser}/>
        {Posts.map(post => (
          <Post key={post.id} post={post}/>
        ))}
      </div>
    </div>
  )
}
