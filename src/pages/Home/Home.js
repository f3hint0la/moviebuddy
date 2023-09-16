import axios from "axios";
import { toast } from "react-toast";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import { Link } from "react-router-dom";
import "./Home.css";
import { FaAngleRight } from "react-icons/fa";
import MovieCard from "../../components/MovieCard/MovieCard";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const setError = (message) => {
    toast.error(message);
  };

  const apiKey = process.env.REACT_APP_TMDB_API_KEY;
  const baseURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;

  const fetchTopMovies = async () => {
    try {
      const response = await axios.get(baseURL);
      const data = response.data.results;
      setTopMovies(data.slice(0, 10));
    } catch (error) {
      console.error("Error fetching top-rated movies:", error);
      setError("Oops! Error fetching data.");
    }
  };

  useEffect(() => {
    fetchTopMovies();
  }, []);

  return (
    <div>
      <Hero />
      <div className="featuredMovies">
        <div className="header">
          <h2>Featured Movie</h2>
          <Link to="/">
            See More
            <FaAngleRight className="headericon" />
          </Link>
        </div>
        <div className="movieDisplay">
          {topMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
