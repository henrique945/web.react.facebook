import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import './home.css';

export default function Home() {
  return (
    <>
      <Header/>
      <div className="home-container">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </div>
    </>
  );
}
