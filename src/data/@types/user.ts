import { Order } from "./order";

export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  orders: Order[];
  createdAt: Date;
}

export interface UserData {
  name: string;
  email: string;
  password: string;
}
