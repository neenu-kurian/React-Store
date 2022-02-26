import { combineReducers } from "redux";
import { products, product, reviews } from "./products";

const reducers = combineReducers({ allProducts: products, selectedProduct: product , allReviews: reviews});

export default reducers;
