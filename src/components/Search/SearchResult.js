import noimage from "../../assets/image.png";
import formatDate from "../../pages/MovieCard/MovieCard";

const SearchResult = ({ result }) => {
  return (
    <div className="searchResult">
      {result.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w1280/${result.poster_path}`}
          alt={result.title}
          data-testid="movie-poster"
          width={24}
          height={24}
        />
      ) : (
        <img src={noimage} data-testid="movie-poster" width={24} height={24} />
      )}
      ;
      <div className="searchContent">
        <h2>{result.title}</h2>
        <span>{formatDate(result.release_date)}</span>
      </div>
    </div>
  );
};

export default SearchResult;
