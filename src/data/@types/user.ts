import { Order } from "./order";

export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  cart?: Record<string, number>;
  orders: Order[];
  createdAt: Date;
}

export interface UserData {
  name: string;
  email: string;
  password: string;
}
