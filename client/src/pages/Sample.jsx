import React from 'react';
import {
  Box,
  Button,
  Container,
} from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Sample(props) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Container>
       <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh" flexDirection="column">
                <h1>Welcome to Officer Desktop!</h1>
       

      </Box>
    </Container>
  );
}

export default Sample;