import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/products";
import Product from "../Product/Product";
import axios from "axios";

const ProductList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("/productinfo/product").catch((err) => console.log("error", err));
      dispatch(getProducts(response.data));
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Product/>
    </div>
  );
};

export default ProductList;
