import React, { useState } from "react";
import { useGlobalContext } from "./Context";
import { NavLink } from "react-router-dom";
import "./Movie.css";
import SingleMovie from "./SingleMovie";

const Movie = () => {
  const { movie, isLoading } = useGlobalContext();
  const [selectedMovie, setSelectedMovie] = useState(null);

 const handleClick = (imdbID) => {
  const selectedMovie = movie.find((curElem) => curElem.imdbID === imdbID);
  setSelectedMovie(selectedMovie);
};


  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <section className="container1">
      {selectedMovie ? (
        <SingleMovie movie={selectedMovie} />
      ) : (
        movie.map((curElem) => {
          const { Title, imdbID, Poster } = curElem;
          return (
            <div
              className="card"
              key={imdbID}
              onClick={() => handleClick(imdbID)}
            >
              <img src={Poster} className="card-img-top" alt="..." />
              <div className="card-body">
                <h2 className="card-text">{Title}</h2>
              </div>
            </div>
          );
        })
      )}
    </section>
  );
};

export default Movie;
