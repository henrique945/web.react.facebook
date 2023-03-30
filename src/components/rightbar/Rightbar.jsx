import './rightbar.css';
import { Users } from "../../data";
import Online from "../online/Online";
import Following from "../following/Following";

export default function Rightbar({profile}) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthday-container">
          <img src="/assets/gift.png" alt="" className="birthday-img"/>
          <span className="birthday-text">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbar-ad"/>
        <h4 className="rightbar-title">Online Friends</h4>
        <ul className="rightbar-friend-list">
          {Users.map(user => {
            if (user.id !== 1)
              return <Online key={user.id} user={user}/>
          })}
        </ul>
      </>
    );
  }

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbar-title">User information</h4>
        <div className="rightbar-info">
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">City:</span>
            <span className="rightbar-info-value">New York</span>
          </div>
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">From:</span>
            <span className="rightbar-info-value">Madrid</span>
          </div>
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">Relationship:</span>
            <span className="rightbar-info-value">Single</span>
          </div>
        </div>
        <h4 className="rightbar-title">User friends</h4>
        <div className="rightbar-followings">
          {Users.map(user => {
            if (user.id !== 1)
              return <Following key={user.id} user={user}/>
          })}
        </div>
      </>
    )
  }

  return (
    <>
      <div className="rightbar">
        <div className="rightbar-wrapper">
          {profile ? <ProfileRightbar/> : <HomeRightbar/>}
        </div>
      </div>
    </>
  )
}
