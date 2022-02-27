import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./Product.styles";
import { useSelector } from "react-redux";

import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { MenuItem } from "@mui/material";
import { ThemeProvider } from "@mui/private-theming";

const Product = () => {
  const products = useSelector((state) => state.allProducts.products);
  const classes = useStyles();

  const renderList = products.map((product, index) => {
    const { currency, description, id, imgUrl, name, price } = { ...product };
    return (
      <React.Fragment key={index}>
        <MenuItem component={Link} to={`product/${id}`} className={classes.menuitem}>
          <Card className={classes.card}>
            <CardMedia component="img" image={imgUrl} alt={name} />
            <CardContent>
            <ThemeProvider >
              <Typography variant="h5" component="div">
                {name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {currency} {price}
              </Typography>
              </ThemeProvider>
            </CardContent>
          </Card>
        </MenuItem>
      </React.Fragment>
    );
  });

  return (
    <Box
      className={classes.box}
      sx={{
        mt: 5,
      }}>
      <>{renderList}</>
    </Box>
  );
};

export default Product;
