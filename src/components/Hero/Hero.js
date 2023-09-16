import axios from "axios";
import { toast } from "react-toast";
import { useEffect, useState } from "react";
import Navbar from "../NavBar/Navbar";
import imdb from "../../assets/imdb.png";
import rot from "../../assets/rot.png";
import { AiFillPlayCircle } from "react-icons/ai";
import "./Hero.css";

const Hero = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const setError = (message) => {
    toast.error(message);
  };

  const apiKey = process.env.REACT_APP_TMDB_API_KEY;
  const baseURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;

  const fetchMovie = async () => {
    try {
      setLoading(true);
      const response = await axios.get(baseURL);
      const data = response.data.results;
      setMovies(data.slice(10, 40));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data", error);
      setError("Oops! Error fetching data.");
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  const randomMovie = movies[Math.floor(Math.random() * movies.length)];

  return (
    <div className="hero">
      <div className="banner">
        {randomMovie && (
          <div
            className="image"
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url(https://image.tmdb.org/t/p/original/${randomMovie.backdrop_path})`,
            }}
            key={randomMovie.id}
          >
            <Navbar />
            <div className="content">
              <h2 className="title">{randomMovie.title}</h2>
              <div className="details">
                <div className="features">
                  <div className="imdb">
                    <img src={imdb} />
                    <p>{Math.round((randomMovie.vote_average / 10) * 100)} / 100</p>
                  </div>
                  <div className="rot">
                    <img src={rot} alt="rot" />
                    <p>{randomMovie.vote_average * 10}%</p>
                  </div>
                </div>
                <p className="overview">{randomMovie.overview}</p>
              </div>
              <div className="trailer-btn">
                <a href="#" className="trailer-btn">
                  <AiFillPlayCircle className="icon" />
                  WATCH TRAILER
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
