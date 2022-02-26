import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../redux/actions/products";
import Review from "./Reviews";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import useStyles from "./ProductDetail.styles";


const ProductDetail = () => {
  const classes = useStyles();
  const { productId } = useParams();
  const product = useSelector((state) => state.selectedProduct.product);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`/productinfo/product/${productId}`).catch((error) => console.log("error", error));
      dispatch(selectedProduct(response.data));
    };
    if (productId && productId !== "") fetchProduct();
  }, [productId]);

  const { currency, description, id, imgUrl, name, price } = { ...product };


  return (
    <div>
      {product && Object.keys(product).length === 0 ? (
        <div>Product is loading.....</div>
      ) : (
        <Container maxWidth={false}>
          <Grid container spacing={5} mt={1}>
            <Grid item md={6} className={classes.grid}>
              <img src={imgUrl} alt={name} className={classes.image} />
            </Grid>
            <Grid item md={6}>
              <h1>name</h1>
              <p>{description}</p>
              <div>
                {currency} {price}
              </div>
              <Review />
            </Grid>
          </Grid>
        </Container>
      )}
    </div>
  );
};

export default ProductDetail;
