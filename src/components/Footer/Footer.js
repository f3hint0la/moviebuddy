import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="socialLink">
        <a href="#">
          <FaFacebookSquare />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
        <a href="#">
          <FaTwitter />
        </a>
        <a href="#">
          <FaYoutube />
        </a>
      </div>
      <div className="quickLink">
        <a href="#">Conditions of Use</a>
        <a href="#">Extra Policy</a>
        <a href="#">Press Room</a>
      </div>
      <p className="copyright">&copy; 2023 MovieBox by f3hint0la</p>
    </footer>
  );
};

export default Footer;
