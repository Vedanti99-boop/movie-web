import React from "react";
import { useGlobalContext } from "./Context";
import { NavLink } from "react-router-dom";
import "./Movie.css";

const Movie = () => {
  const { movie ,isLoading} = useGlobalContext();

  if(isLoading){
    return(
      <div>
        <h2>Loading...</h2>
      </div>
    )
  }

  return (
    <section className="container1">

      
          {movie.map((curElem) => {
            const { Title, imdbID, Poster } = curElem;
            return (
              <NavLink className="nav-body" to={`movie/${imdbID}`} key={imdbID}>
                <div className="card" >
                  <img src={Poster} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h2 className="card-text">{Title}</h2>
                  </div>
                </div>
              </NavLink >

              
            );
          })}
       
    </section>
  );
};

export default Movie;







