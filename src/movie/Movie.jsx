import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import Search from "../search/Search";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const getMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=9a897e8254740ced3ee75854fdf69e50"
    )
      .then((res) => res.json())
      .then((json) => setMovies(json.results))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getMovies();
  }, []);

  const containerStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const cardContainerStyles = {
    width: "60%",
    margin: "40px",
  };

  

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div style={containerStyles}>
      
        <Search onSearch={handleSearch} />
    
      {filteredMovies.map((movie) => (
        <div key={movie.id} style={cardContainerStyles}>
          <Card movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default Movie;
