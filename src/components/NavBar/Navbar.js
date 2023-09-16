import { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/tv.png";
import menu from "../../assets/menu.png";
import { BiSearch } from "react-icons/bi";
import SideNav from "../SideNav/SideNav";
import Search from "../Search/Search";

const Navbar = () => {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const navigateToSearchView = () => {
    navigate("/search");
  };

  useEffect(() => {
    const setOnSearch = localStorage.getItem("onSearch");

    if (setOnSearch) {
      setQuery(setOnSearch);
    }
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      localStorage.setItem("onSearch", query);
      navigateToSearchView();
      setQuery("");
    }
  };

  const [sideNav, setSideNav] = useState(false);

  const tooggleNav = () => {
    setSideNav(!sideNav);
  };

  return (
    <>
      {sideNav && <SideNav />}
      <nav className="navbar">
        <div className="brand">
          <Link to="/">
            <img src={logo} alt="logo" width={50} height={50} />
            <h2>MovieBuddy</h2>
          </Link>
        </div>

        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="What do you want to watch?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">
            <BiSearch className="icon" />
          </button>
        </form>

        <div className="signIn">
          <h2>Sign in</h2>
          <button onClick={tooggleNav}>
            <img src={menu} alt="menu" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
