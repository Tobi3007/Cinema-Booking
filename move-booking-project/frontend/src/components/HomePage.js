import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import MovieItem from './Movies/MovieItem';
import { Link } from 'react-router-dom';
import { getAllMovies } from '../api-helpers/api-helpers';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data.movies)) // Assuming 'movies' is the response property
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh", // Ensures the entire viewport is filled
        backgroundColor: "black", // Black background
        color: "white", // Text color
        margin: 0,
        padding: 0,
      }}
    >
      <Box
        margin="auto"
        width="100%"
        height={{ xs: '30vh', sm: '50vh' }} // Adjust height for different breakpoints
        display="flex"
        justifyContent="center"
        alignItems="center"
        overflow="hidden" // Prevents overflow
      >
        <img
          src="https://i.ytimg.com/vi/e7RvFZ6XtkI/maxresdefault.jpg"
          alt="Spider Man"
          style={{
            objectFit: 'cover', // Makes the image cover the box completely
            width: '100%',      // Ensures it spans the full width of the container
            height: '100%',     // Makes it take the full height of the container
          }}
        />
      </Box>


      <Box padding={{ xs: 3, sm: 5 }} margin="auto">
        <Typography variant="h4" textAlign="center" sx={{ color: "white" }}>
          Latest Release
        </Typography>
      </Box>

      <Box
        display="flex"
        width="100%"
        justifyContent="center"
        flexWrap="wrap"
        gap={3}
        sx={{ marginBottom: 3 }}
      >
        {movies &&
          movies.slice(0, 6).map((movie) => (
            <MovieItem
              id={movie._id}
              title={movie.title}
              posterUrl={movie.posterUrl}
              releaseDate={movie.releaseDate}
              key={movie._id}
            />
          ))}
      </Box>

      <Box display={'flex'} padding={5} margin={'auto'}>
        <Button
          component={Link}
          to="/movies"
          variant="outlined"
          sx={{
            margin: "auto",
            color: "white",
            borderColor: "white",
            "&:hover": {
              backgroundColor: "#333",
              borderColor: "#888",
            },
          }}
        >
          View All Movies
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
