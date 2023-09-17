import "./SideNav.css";
import { Link } from "react-router-dom";
import logo from "../../assets/tv.png";
import { GoHome } from "react-icons/go";
import { BiVideoRecording } from "react-icons/bi";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { BiCalendar } from "react-icons/bi";
import { GrLogout } from "react-icons/gr";

const SideNav = () => {
  return (
    <div className="sideNav">
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>
      <div className="sideNavLink">
        <a href="#">
          <GoHome />
          <span>Home</span>
        </a>
        <a href="#" className="active">
          <BiVideoRecording />
          <span>Movies</span>
        </a>
        <a href="#">
          <MdOutlineOndemandVideo />
          <span>TV Series</span>
        </a>
        <a href="#">
          <BiCalendar />
          <span>Upcoming</span>
        </a>
        <div className="box">
          <p>Play movie quizzes and earn free tickets</p>
          <span>50k people are playing now</span>
          <a href="#">Start playing</a>
        </div>
        <a href="#">
          <GrLogout />
          <span>Logout</span>
        </a>
      </div>
    </div>
  );
};

export default SideNav;
