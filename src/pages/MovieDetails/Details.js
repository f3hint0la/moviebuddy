import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./MovieDetails";
import "./MovieDetails.css";
import MovieDetails from "./MovieDetails";

const Details = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const { id } = useParams();


  const apiKey = process.env.REACT_APP_TMDB_API_KEY;

  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US&page=1`;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(URL);
        const data = response.data;
        setMovie(data);
        setIsLoading(false);
        console.log(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setError(true);
        setIsLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id, apiKey]);

  return (
    <div>
      {isLoading && (
        <div className="loading">
          <p>Loading</p>
        </div>
      )}
      {error && (
        <div className="error">
          <p>Error fetching data, try agin!!</p>
        </div>
      )}
      {movie && <MovieDetails movie={movie} />}
    </div>
  );
};

export default Details;
