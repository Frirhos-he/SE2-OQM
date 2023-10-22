import React from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography
} from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ServiceMenu from '../components/ServiceMenuComponents';
import CurrentTimeDisplay from '../components/CurrentTimeDisplay';
import CounterMenu from '../components/CounterMenuComponents';


function Sample(props) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [startButtonDisabled, setStartButtonDisabled] = useState(false);
  
  const handleStartClick = () => {
    setStartButtonDisabled(true);
  };
  const handleNextClick = () => {
  };


  return (
    <Container>
      <Grid container alignItems="center"  minHeight="80vh" sx={{ flexDirection: 'column' }}>
        <Grid item>
          <Typography variant="h4">Welcome to Officer Desktop!</Typography>
        </Grid>
        <Grid container alignItems="center" justifyContent="flex-start">
          <Grid item>
            <Typography variant="h6">Counter #</Typography>
          </Grid>
          <Grid item>
            <CounterMenu />
          </Grid>
            <Grid item>
                <ServiceMenu />
            </Grid>
        </Grid>

        <Grid item>
          <Typography variant="body1">Currently serving ticket #5</Typography>
        </Grid>
        <Grid item>
          <CurrentTimeDisplay />
        </Grid>
        <Grid item>
          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={handleStartClick}
              disabled={startButtonDisabled}
            >
              Start
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleNextClick}
            >
              Next
            </Button>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Sample;