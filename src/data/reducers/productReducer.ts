import { Reducer } from "react";

import { Product } from "data/@types/product";

type Action =
  | { type: "FETCH_PRODUCTS"; payload: Product[] }
  | { type: "FETCH_PRODUCTS_ERROR"; payload: Error };

const initialState: Product[] = [];

const productReducer: Reducer<Product[], Action> = (state, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return action.payload;
    case "FETCH_PRODUCTS_ERROR":
      console.error("Erro ao buscar produtos:", action.payload);
      return state;
    default:
      return state;
  }
};

export { productReducer, initialState };
