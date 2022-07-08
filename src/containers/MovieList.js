//import tmdb from "../apis/tmdb";
import tmdbInstance from "../apis/tmdb";

import React, { useEffect, useState, useMemo } from "react";
import { Box, Button } from "@mui/material";
import { useSearchParams } from 'react-router-dom';

// import "../components/MovieCard.css";
import MovieCard from "../components/MovieCard";

// Sort comparators
const sortVoteAverageAsc = (a, b) => a.vote_average - b.vote_average;
const sortVoteAverageDesc = (a, b) => sortVoteAverageAsc(b, a);

// Sorting utility function
const sortVoteAverage = (sort = "asc") =>
    sort === 'asc' ? sortVoteAverageAsc : sortVoteAverageDesc;


const MovieList = () => {
  const [queryParams, setQueryParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchDataMovies = async () => {
      try {
        // Gunakan instance tmdb di sini
        const responseDariTMDB = await tmdbInstance.get(
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

  const setSortParam = (type) => {
    queryParams.set("sort", type);
    setQueryParams(queryParams);
  };

  const sort = queryParams.get("sort");

  const sortedMovies = useMemo(() => {
    return movies
      .slice()
      .sort(sortVoteAverage(sort))
  }, [movies, sort]);

  return (
    <>
    <Box sx={{
        mt: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }}>
        Sort by Rating
        <Button
            variant="contained"
            sx={{ ml: 2 }}
            onClick={() => setSortParam("asc")}
        >
            Asc
        </Button>
        <Button
            variant="contained"
            sx={{ ml: 2, mr: 2 }}
            onClick={() => setSortParam("desc")}
        >
            Desc
        </Button>
    </Box>
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

      {sortedMovies.map((movie) => {
        // Selebihnya di dalam sini sama
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </Box>
    </>
  );
};

export default MovieList;