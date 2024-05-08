import axios from "axios";
import { UserData } from "data/@types/user";

const api = axios.create({
  baseURL: "https://pizzaria-auth-api.vercel.app"
});

export default api;

export const registerUser = async (userData: UserData) => {
  try {
    const response = await api.post("user/register", userData);
    return response.data;
  } catch (error) {
    throw new Error("Failed to register user");
  }
};

export const addToCart = async (productId: string) => {
  try {
    const response = await api.post(`user/cart/add/${productId}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to add product to cart");
  }
};

export const createOrder = async (productId: string) => {
  try {
    const response = await api.post(`user/order/create/${productId}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to create order");
  }
};

export const getOrders = async () => {
  try {
    const response = await api.get("user/order/:id");
    return response.data;
  } catch (error) {
    throw new Error("Failed to get orders");
  }
};

export const updateUser = async (
  userId: string,
  userData: Partial<UserData>
) => {
  try {
    const response = await api.put(`user/update/${userId}`, userData);
    return response.data;
  } catch (error) {
    throw new Error("Failed to update user");
  }
};

export const deleteUser = async (userId: string) => {
  try {
    const response = await api.delete(`user/delete/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to delete user");
  }
};

export const removeFromCart = async (productId: string) => {
  try {
    const response = await api.delete(`user/cart/remove/${productId}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to remove product from cart");
  }
};
