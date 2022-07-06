import tmdb from "../apis/tmdb";

import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";

// import "../components/MovieCard.css";
import MovieCard from "../components/MovieCard";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchDataMovies = async () => {
      try {
        // Gunakan instance tmdb di sini
        const responseDariTMDB = await tmdb.get(
          // Nah di sini kita tidak perlu menuliskan terlalu panjang lagi
          "/trending/movie/week"
        );

        // Jangan lupa set statenya
        // Perhatikan di sini responseDariTMDB ada .data (response schema axios)
        setMovies(responseDariTMDB.data.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchDataMovies();
  }, []);

  return (
    <Box className="boxy"
        sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            mt: 1,
        }}
    >
      {/* <Typography variant="h5">Container ListMovies (Data Real)</Typography> */}

      {movies.map((movie) => {
        // Selebihnya di dalam sini sama
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </Box>
  );
};

export default MovieList;