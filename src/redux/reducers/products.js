import { actionTypes } from "../constants/types";

const initialState = {
  products: [],
};

export const products = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const product = (state = {}, { type, payload }) => {
  switch (type) {
    case actionTypes.SELECTED_PRODUCT:
      return { ...state, product: payload };
    default:
      return state;
  }
};

export const reviews = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.GET_REVIEWS: {
      return { ...state, reviews: payload };
    }
    default:
      return state;
  }
};
