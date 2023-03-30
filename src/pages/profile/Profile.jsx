import './profile.css';
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";
import Feed from "../../components/feed/Feed";

export default function Profile() {
  return (
    <>
      <Header />
      <div className="profile">
        <Sidebar />
        <div className="profile-right">
          <div className="profile-right-top">
            <div className="profile-cover">
              <img
                className="profile-cover-img"
                src="/assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profile-user-img"
                src="/assets/person/7.jpeg"
                alt=""
              />
            </div>
            <div className="profile-info">
              <h4 className="profile-info-name">Safak Kocaoglu</h4>
              <span className="profile-info-desc">Hello my friends!</span>
            </div>
          </div>
          <div className="profile-right-bottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}
