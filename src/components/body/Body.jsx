import React from "react";

const Body = ({ movieData }) => {
  return (
    <main className="main">
      <section className="section">
        {movieData && movieData.Title && (
          <div className="movie-container">
            <div className="movie-poster">
              <img src={movieData.Poster} alt={movieData.Title} />
            </div>
            <div className="movie-info">
              <h2>{movieData.Title}</h2>
              <p>
                <strong>Rating: ⭐ </strong>
                {movieData.imdbRating}
              </p>
              <div className="movie-genre">
                {movieData &&
                  movieData.Genre &&
                  movieData.Genre.split(",").map((genre) => (
                    <p key={genre.trim()}>{genre.trim()}</p>
                  ))}
              </div>

              <p>Actors: {movieData.Actors}</p>

              <p>Plot: {movieData.Plot}</p>

              <p>Release Date:{movieData.Released}</p>
              <p>Runtime: {movieData.Runtime}</p>
            </div>
          </div>
        )}
        {movieData && !movieData.Title && (
          <div>
            <p className="warning">Please Enter a valid movie name</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default Body;
