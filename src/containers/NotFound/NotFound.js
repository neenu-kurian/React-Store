import React from "react";
import { Container, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Container maxWidth="sm" sx={{mt:5}}>
      <Typography variant="h2" sx={{mb:2}}>404 Page Not Found</Typography>
      <Typography variant="subtitle1">
        The page you were looking is not found.It might have been removed, renamed or didnt exist
      </Typography>
    </Container>
  );
};

export default NotFound;
