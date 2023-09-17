import React from 'react';

const Card = ({ movie }) => {
  const cardStyles = {
    display: 'flex',
    padding: '16px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const imageStyles = {
    width: '200px',
    height: 'auto',
    marginRight: '16px',
  };

  

  const sectionStyles = {
    marginLeft: '16px',
  };

  return (
    <div style={cardStyles}>
      <img
        src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
        alt={movie.title}
        style={imageStyles}
      />
      <section style={sectionStyles}>
        <h2 style={{ fontSize: '20px', marginBottom: '8px' }}>{movie.title.toUpperCase()}</h2>
        <p style={{ fontSize: '16px', marginBottom: '8px' }}>
          Release Date: {movie.release_date}
        </p>
        <p style={{ fontSize: '16px', marginBottom: '8px' }}>
          Rating: {movie.vote_average}
        </p>
        <p style={{ fontSize: '16px', color: '#555' }}>{movie.overview}</p>
      </section>
    </div>
  );
};

export default Card;
