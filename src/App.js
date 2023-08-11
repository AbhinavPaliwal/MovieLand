import "./App.css";
import { useEffect, useState } from "react";
import MovieCard from "./Moviecard";
import { FaChrome } from "react-icons/fa";

const Api_Url = "https://www.omdbapi.com/?i=tt3896198&apikey=203ed1cf&s=";

export default function App() {
  const [movie, setMovie] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  let allMovies = movie.map((element) => {
    return <MovieCard movie1={element} />;
  });

  const searchMovies = async (title) => {
    const response = await fetch(Api_Url + title);
    let data = await response.json();

    console.log(data.Search);
    setMovie(data.Search);
  };

  useEffect(() => {
    searchMovies();
  }, []);

  return (
    <div className="app">
      <h1>
        <FaChrome /> MovieLand
      </h1>

      <div className="search">
        <input
          placeholder="search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <img
          src="https://img.icons8.com/color/48/search--v1.png"
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      <div className="container">{allMovies}</div>
    </div>
  );
}
