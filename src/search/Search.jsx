import React, { useState, useEffect } from "react";
import Card from "../card/Card";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setMovies([]); 
      return;
    }

    setIsLoading(true);

   
    const apiKey = "9a897e8254740ced3ee75854fdf69e50";
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setIsLoading(false);
      });
  }, [searchTerm]);

  const handleSearch = () => {
    onSearch(searchTerm);
  };
  const headerStyles = {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  };

  return (
    <div>
      <div
        style={{
          position: "sticky", 
          top: 0,
          backgroundColor: "white",
          zIndex: 1, 
          padding: "10px", 
        }}
      >
       <div style={headerStyles}>
        <h2 style={{ color: "#708090", marginRight: "20px" }}>MOVIE NAME</h2>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="text"
            placeholder="Search for a movie..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              borderRadius: "10px",
              width: "500px",
              height: "25px",
              marginRight: "30px",
            }}
          />
          <button
            style={{
              borderRadius: "10px",
              height: "25px",
              width: "68px",
            }}
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      <div style={{ margin: "20px 150px", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          movies.map((movie) => (
            <Card key={movie.id} movie={movie}
            
             /> 
          ))
        )}
      </div>
    </div>
    </div>
  );
};

export default Search;
