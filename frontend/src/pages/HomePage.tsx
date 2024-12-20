import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ textAlign: 'center', padding: '2rem' }}>
      <Typography variant="h3" gutterBottom>
        Welcome to the Auction Game!
      </Typography>
      <Button variant="contained" color="primary" onClick={() => navigate('/auction')}>
        Start Auction
      </Button>
    </Box>
  );
};

export default HomePage;
