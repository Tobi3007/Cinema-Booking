import React, { useState } from 'react';
import { Box, Typography, FormLabel, TextField, Button, Link } from '@mui/material';

const AuthForm = ({ onSubmit, isAdmin }) => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isSignup, setIsSignup] = useState(false);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ inputs, signup: isAdmin ? false : isSignup });
  };

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{
        backgroundColor: '#121212', // Dark background for the entire screen
        color: 'white',
        padding: 3,
      }}
    >
      {/* Form Container */}
      <Box
        bgcolor="#1e1e1e"
        borderRadius={5}
        boxShadow={4}
        padding={4}
        width={350}
        display="flex"
        flexDirection="column"
        alignItems="center"
        border="1px solid #333"
      >
        {/* Title */}
        <Typography
          variant="h4"
          textAlign="center"
          mb={3}
          sx={{ fontWeight: 'bold', color: '#fff' }}
        >
          {isSignup ? 'Sign Up' : 'Login'}
        </Typography>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          {isSignup && (
            <>
              <FormLabel sx={{ fontWeight: 'bold', color: '#bbb' }}>Username</FormLabel>
              <TextField
                type="text"
                name="name"
                value={inputs.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
                sx={{
                  backgroundColor: '#333',
                  borderRadius: 2,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#555' },
                    '&:hover fieldset': { borderColor: '#777' },
                  },
                  '& .MuiInputBase-input': { color: '#fff' },
                }}
              />
            </>
          )}

          <FormLabel sx={{ fontWeight: 'bold', color: '#bbb' }}>Email Address</FormLabel>
          <TextField
            type="email"
            name="email"
            value={inputs.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            sx={{
              backgroundColor: '#333',
              borderRadius: 2,
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#555' },
                '&:hover fieldset': { borderColor: '#777' },
              },
              '& .MuiInputBase-input': { color: '#fff' },
            }}
          />

          <FormLabel sx={{ fontWeight: 'bold', color: '#bbb' }}>Password</FormLabel>
          <TextField
            type="password"
            name="password"
            value={inputs.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            sx={{
              backgroundColor: '#333',
              borderRadius: 2,
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#555' },
                '&:hover fieldset': { borderColor: '#777' },
              },
              '& .MuiInputBase-input': { color: '#fff' },
            }}
          />

          <Button
            variant="contained"
            fullWidth
            sx={{
              marginTop: 3,
              padding: '10px',
              background: 'linear-gradient(90deg, #5E35B1, #7E57C2)',
              borderRadius: 3,
              fontWeight: 'bold',
              color: '#fff',
              '&:hover': { background: 'linear-gradient(90deg, #7E57C2, #5E35B1)' },
            }}
            type="submit"
          >
            {isSignup ? 'Sign Up' : 'Login'}
          </Button>
        </form>

        {/* Toggle Link */}
        <Typography
          variant="body2"
          mt={2}
          sx={{ color: '#aaa' }}
        >
          {isSignup ? (
            <>
              Already have an account?{' '}
              <Link
                component="button"
                variant="body2"
                onClick={toggleForm}
                sx={{ color: '#7E57C2', fontWeight: 'bold', cursor: 'pointer' }}
              >
                Login
              </Link>
            </>
          ) : (
            <>
              Don't have an account?{' '}
              <Link
                component="button"
                variant="body2"
                onClick={toggleForm}
                sx={{ color: '#7E57C2', fontWeight: 'bold', cursor: 'pointer' }}
              >
                Sign Up
              </Link>
            </>
          )}
        </Typography>
      </Box>
    </Box>
  );
};

export default AuthForm;
