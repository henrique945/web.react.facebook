import './following.css';

export default function Following({user}) {
  return (
    <div className="following">
      <img className="following-img" src={user.profilePicture} alt="Profile Picture"/>
      <span className="following-name">{user.username}</span>
    </div>
  );
}
