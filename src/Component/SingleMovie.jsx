import React from "react";
import { useParams } from "react-router-dom";
import { API } from "./Context";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./SingleMovie.css"

const SingleMovie = () => {
  const { id } = useParams();

  // const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState("");

  const getMovies = async (url) => {
    // setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        // setIsLoading(false);
        setMovie(data);

        setIsError({
          show: false,
          msg: "",
        });
      } else {
        setIsError({
          show: true,
          msg: data.Error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await fetch(`${API}&i=${id}`);
        const data = await res.json();
        console.log(data);
        if (data.Response === "True") {
          setMovie(data);
        } else {
          // Handle error if necessary
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    getMovies();
  
    // Clean up function
    return () => {
      // Cleanup tasks, if any
    };
  }, [id]);
  


  

  // if (isLoading) {
  //   return (
  //     <div>
  //       <h2>Loading...</h2>
  //     </div>
  //   );
  // }

  return (
    <section className="container">
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={movie.Poster} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{movie.Title}</h5>
              <p className="card-text">{movie.Released}</p>
              <p className="card-text">{movie.Genre}</p>
              <p className="card-text">{movie.imdbRating}</p>
              <p className="card-text">{movie.Country}</p>
              <NavLink to="/">
                <button className="btn btn-primary">Go Back</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  
};

export default SingleMovie;
