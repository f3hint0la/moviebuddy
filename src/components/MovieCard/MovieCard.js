import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import toast, { Toaster } from "react-hot-toast";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import imdb from "../../assets/imdb.png";
import rot from "../../assets/rot.png";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  const [movieGenres, setMovieGenres] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorites = () => {
    setIsFavorite(!isFavorite);
  };

  const apiKey = process.env.REACT_APP_TMDB_API_KEY;

  const genreURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US&page=1`;

  const fetchGenres = async () => {
    try {
      const response = await axios.get(genreURL);

      const genres = response.data.genres;

      const genresMap = [];
      genres.forEach((genre) => {
        genresMap[genre.id] = genre.name;
      });

      setMovieGenres(genresMap);
    } catch (error) {
      console.error("Error fetching genres:", error);
    }
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  const genreNames = (genreIndex) => {
    return genreIndex.map((genreId) => movieGenres[genreId]).join(", ");
  };

  const formatDate = (toString) => {
    const date = new Date(toString);
    const utcDate = `${date.getUTCFullYear()}-${(
      date.getUTCMonth() + 1
    ).toString()}-${date.getUTCDate().toString()}`;
    return utcDate;
  };

  return (
    <div id="movies" data-testid="movie-card" className="movieCard">
      <div className="moviePoster">
        <Link to={`/movie/${movie.id}`}>
          <img
            className="poster"
            data-testid="movie-poster"
            src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
            alt={movie.title}
            width={300}
            height={400}
          />
        </Link>

        <div className="favorites" onClick={toggleFavorites}>
          {!isFavorite ? (
            <AiOutlineHeart className="heart" />
          ) : (
            <AiFillHeart className="favorite-heart" />
          )}
        </div>
      </div>
      <p date-test-id="movie-release-date" className="release">{`${formatDate(
        movie.release_date
      )}`}</p>
      <h2 data-testid="movie-title">{movie.title}</h2>
      <div className="features features-card">
        <div className="imdb">
          <img src={imdb} alt="imdb" />
          <p>{Math.round((movie.vote_average / 10) * 100)} / 100</p>
        </div>
        <div className="rot">
          <img src={rot} alt="rot" />
          <p>{movie.vote_average * 10}%</p>
        </div>
      </div>
      <p className="genre">{genreNames(movie.genre_ids)}</p>
    </div>
  );
};

export default MovieCard;
