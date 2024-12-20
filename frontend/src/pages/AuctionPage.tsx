import React, { useState } from 'react';
import { Button, Box, Typography, Grid, TextField } from '@mui/material';

const AuctionPage: React.FC = () => {
  const [currentBid, setCurrentBid] = useState(0);
  const [highestBid, setHighestBid] = useState(0);
  const [playerName, setPlayerName] = useState('John Doe');

  const handleBid = () => {
    if (currentBid > highestBid) {
      setHighestBid(currentBid);
    }
  };

  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Current Player: {playerName}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Highest Bid: ${highestBid}
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <TextField
            type="number"
            label="Your Bid"
            variant="outlined"
            value={currentBid}
            onChange={(e) => setCurrentBid(Number(e.target.value))}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={handleBid}
            disabled={currentBid <= highestBid}
          >
            Place Bid
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AuctionPage;
