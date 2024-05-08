import { StaticImageData } from "next/image";

export interface Product {
  id: string;
  name: string;
  type: string;
  info?: string;
  img?: StaticImageData;
  price: number;
}
