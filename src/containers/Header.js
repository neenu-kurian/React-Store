import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import logo from "../adidas-logo.png";
import useStyles from "./Header.styles";

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Container className={classes.appBar} maxWidth={false}>
        <Toolbar disableGutters>
          <img src={logo} alt="logo" className={classes.logo} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
