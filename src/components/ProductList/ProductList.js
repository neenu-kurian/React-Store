import React, { useEffect } from "react";
import { useDispatch, useState } from "react-redux";
import { getProducts } from "../../redux/actions/products";
import Product from "../Product/Product";
import axios from "axios";
import { Typography } from "@mui/material";

const ProductList = () => {
  const dispatch = useDispatch();
  const [error, setError] = React.useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("/productinfo/product").catch((err) => setError(true));
      dispatch(getProducts(response.data));
    };

    fetchProducts();
  }, []);

  return <div>{error ? <Typography variant="subtitle1">Unable to show products, please try again</Typography> : <Product />}</div>;
};

export default ProductList;
