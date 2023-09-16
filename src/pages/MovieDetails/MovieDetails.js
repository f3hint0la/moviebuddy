import noimage from "../../assets/image.png";
import { AiFillStar } from "react-icons/ai";
import { IoTicket } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import SideNav from "../../components/SideNav/SideNav";
import Navbar from "../../components/NavBar/Navbar";

const MovieDetails = ({ movie }) => {
  const formatDate = (toString) => {
    const date = new Date(toString);
    const utcDate = `${date.getUTCFullYear()}-${(
      date.getUTCMonth() + 1
    ).toString()}-${date.getUTCDate().toString()}`;
    return utcDate;
  };

  return (
    <main>
      <Navbar />
      <div className="videoContainer">
        {movie.videos && movie.videos.results[0].key ? (
          <iframe
            src={`https://www.youtube.com/embed/${movie.videos.results.id}`}
            data-testid="movie-poster"
            width={1080}
            height={500}
            title="YouTube Trailer"
          />
        ) : (
          <img
            src={noimage}
            alt={movie.title}
            data-testid="movie-poster"
            width={500}
            height={500}
          />
        )}
      </div>

      <div className="unique">
        <h2 data-testid="movie-title">{movie.title}</h2>

        <div className="release" data-testid="movie-release-date">
          {formatDate(movie.release_date)}
        </div>

        <div className="runtime" data-testid="movie-runtime">
          {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
        </div>

        <div className="genre">
          {movie.genres &&
            movie.genres
              .slice(0, 2)
              .map((genre, i) => <span>{genre.name}</span>)}
        </div>

        <div className="rating">
          <AiFillStar className="rating-icon" />
          <span>{movie.vote_average}</span>
        </div>
      </div>

      <div className="content">
        <div className="info">
          <p data-testid="movie-overview">{movie.overview}</p>
        </div>

        <div className="others">
          <div className="btn">
            <button>
              <IoTicket className="details-icon" />
              <span>See Showtime</span>
            </button>
            <button>
              <TfiMenuAlt className="details-icon" />
              <span>More Watch Options</span>
            </button>
          </div>
          {/* <div className="recs"></div> */}
        </div>
      </div>
    </main>
  );
};

export default MovieDetails;
