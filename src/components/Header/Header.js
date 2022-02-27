import React from "react";
import logo from "../../images/adidas-logo.png";
import useStyles from "./Header.styles";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";


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
