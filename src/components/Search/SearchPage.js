import "./Search.css";
import { Link } from "react-router-dom";
import SearchResult from "./SearchResult";

const SearchPage = ({ result, searchQuery, isLoading }) => {
  return (
    <div className="searchPage">
      {isLoading ? (
        <p>Searching....</p>
      ) : (
        <div>
          <h2>
            Search results for
            <span>{searchQuery}</span>
          </h2>

          {result.map((search) => {
            <Link key={search.id} to={`/${search.id}`}>
              <SearchResult key={search.id} result={search} />
            </Link>;
          })}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
