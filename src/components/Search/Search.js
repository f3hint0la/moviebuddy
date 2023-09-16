// import axios from "axios";
// import { BiSearch } from "react-icons/bi";
// import "./Search.css";
// import { useEffect, useState } from "react";
// import logo from "../../assets/tv.png";
// import { Link } from "react-router-dom";
// import SearchPage from "./SearchPage";

// const Search = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [result, setResult] = useState([]);
//   const [errorMsg, setErrorMsg] = useState(false);

//   const [showresult, setShowResult] = useState(false);

//   useEffect(() => {
//     const querytext = localStorage.getItem(searchQuery);

//     if (querytext) {
//       setSearchQuery(querytext);
//     }
//   });

//   const handleSearch = async (e) => {
//     if (!searchQuery) {
//       return;
//     }
//     setIsLoading(true);
//     if (searchQuery.length <= 2) {
//       setErrorMsg("Search value must be at least (3) characters");
//     }
//     setShowResult(true);

//     const apiKey = process.env.REACT_APP_TMDB_API_KEY;

//     try {
//       const data = await axios.get(
//         `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`
//       );
//       const { output } = data.results;
//       setResult(output);
//     } catch (error) {
//       console.error("Error fetching search results", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     handleSearch();
//   }, [searchQuery]);

//   const handleChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleSearch();
//   };

//   return (
//     <div className="searchBox">
//       <div className="brand">
//         <Link to="/">
//           <img src={logo} alt="logo" width={50} height={50} />
//           <h2>MovieBuddy</h2>
//         </Link>
//       </div>
//       <form>
//         <input
//           type="text"
//           placeholder="What do you want to watch?"
//           value={searchQuery}
//           onChange={handleChange}
//         />
//         <button type="submit" onClick={handleSubmit}>
//           <BiSearch className="icon" />
//         </button>
//       </form>

//       {showresult ? <SearchPage result={result} isLoading={isLoading} /> : null}

      
//     </div>
//   );
// };

// export default Search;
