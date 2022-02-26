import { actionTypes } from "../constants/types";

export const getProducts = (products) => ({
  type: actionTypes.GET_PRODUCTS,
  payload: products,
});

export const selectedProduct = (product) => ({
  type: actionTypes.SELECTED_PRODUCT,
  payload: product,
});

export const getReviews = (reviews) => ({
  type: actionTypes.GET_REVIEWS,
  payload: reviews
});