import axios from "axios";
import { UserData } from "data/@types/user";

const api = axios.create({
  baseURL: "https://pizzaria-auth-api.vercel.app"
});

export default api;

export const registerUser = async ({ name, email, password }: UserData) => {
  try {
    const response = await api.post(`user/register`, { name, email, password });
    return response.data;
  } catch (error) {
    throw new Error("Failed to register user");
  }
};

export const addToCart = async (
  productId: string,
  userId: string,
  token: string
) => {
  try {
    const response = await api.post(
      `user/cart/add/${userId}`,
      { productId },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to add product to cart");
  }
};

export const createOrder = async (
  productId: string,
  userId: string,
  token: string
) => {
  try {
    const response = await api.post(
      `user/order/create/${userId}`,
      { productId },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to create order");
  }
};

export const getOrders = async (userId: string, token: string) => {
  try {
    const response = await api.get(`user/order/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to get orders");
  }
};

export const updateUser = async (
  userId: string,
  userData: Partial<UserData>,
  token: string
) => {
  try {
    const response = await api.put(`user/update/${userId}`, userData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to update user");
  }
};

export const deleteUser = async (userId: string, token: string) => {
  try {
    const response = await api.delete(`user/delete/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to delete user");
  }
};

export const removeFromCart = async (
  productId: string,
  userId: string,
  token: string
) => {
  try {
    const response = await api.post(
      `user/cart/remove/${userId}`,
      { productId },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to remove product from cart");
  }
};
