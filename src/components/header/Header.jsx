import "./header.css";
import { Chat, Notifications, Person, Search } from '@mui/icons-material'

export default function Header() {
  return (
    <div className="header-container">
      <div className="header-left">
        <span className="logo">Facebook</span>
      </div>
      <div className="header-center">
        <div className="searchbar">
          <Search className="search-icon"/>
          <input placeholder="Search for friend, post or video" className="search-input"/>
        </div>
      </div>
      <div className="header-right">
        <div className="header-links">
          <span className="header-link">Homepage</span>
          <span className="header-link">Timeline</span>
        </div>
        <div className="header-icons">
          <div className="header-icon-item">
            <Person/>
            <span className="header-icon-badge">1</span>
          </div>
          <div className="header-icon-item">
            <Chat/>
            <span className="header-icon-badge">1</span>
          </div>
          <div className="header-icon-item">
            <Notifications/>
            <span className="header-icon-badge">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="header-img"/>
      </div>
    </div>
  );
}
