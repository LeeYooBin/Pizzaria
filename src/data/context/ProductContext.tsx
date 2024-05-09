import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  ReactNode
} from "react";

import axios, { AxiosResponse } from "axios";
import { Product } from "data/@types/product";
import { productReducer, initialState } from "data/reducers/productReducer";

const ProductContext = createContext<Product[]>([]);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response: AxiosResponse<Product[]> = await axios.get<Product[]>(
          "http://localhost:3000/api/products"
        );
        dispatch({ type: "FETCH_PRODUCTS", payload: response.data });
      } catch (error) {
        dispatch({ type: "FETCH_PRODUCTS_ERROR", payload: error as Error });
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={state}>{children}</ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
