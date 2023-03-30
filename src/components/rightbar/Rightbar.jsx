import './rightbar.css';

export default function Rightbar() {
  return (
    <>
      <div className="rightbar">
        <div className="rightbar-wrapper">
          <div className="birthday-container">
            <img src="/assets/gift.png" alt="" className="birthday-img"/>
            <span className="birthday-text">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
          </span>
          </div>
          <img src="/assets/ad.png" alt="" className="rightbar"/>
          <h4 className="rightbar-title">Online Friends</h4>
          <ul className="rightbar-friend-list">

          </ul>
        </div>
      </div>
    </>
  )
}
