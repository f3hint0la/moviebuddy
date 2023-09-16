import noimage from "../../assets/image.png";
import { AiFillStar } from "react-icons/ai";
import { IoTicket } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import Navbar from "../../components/NavBar/Navbar";

const MovieDetails = ({ movie }) => {
  const formatDate = (toString) => {
    const date = new Date(toString);
    const utcDate = `${date.getUTCFullYear()}-${(
      date.getUTCMonth() + 1
    ).toString()}-${date.getUTCDate().toString()}`;
    return utcDate;
  };

  const getTrailerKey = () => {
    const videos = movie.videos.results;
    const trailer = videos.find((video) => video.type === "Trailer");

    if (trailer) {
      return trailer.key;
    } else {
      return null;
    }
  };

  const trailerKey = getTrailerKey(movie);

  return (
    <main>
      <Navbar />
      <div className="videoContainer">
        <iframe
          trailerKey={trailerKey}
          src={`https://www.youtube.com/embed/${trailerKey}`}
          data-testid="movie-poster"
          width={1080}
          height={500}
          title="YouTube Trailer"
          frameBorder="0"
          allow="accelerometer; clipboard-write; picute-in-picture"
        />
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
          <span>{Math.round(movie.vote_average * 100) / 100}</span>
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
