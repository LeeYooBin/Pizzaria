"use client";

import Link from "next/link";

import Trends from "./trends";

import { CartProvider } from "data/context/cartContext";
import { ProductProvider } from "data/context/ProductContext";

const TrendMenu = () => (
  <section
    className="py-12 md:py-20 container mx-auto px-4 md:px-8 space-y-16"
    id="menu"
  >
    <div className="text-center space-y-4">
      <h2 className="text-5xl md:text-4xl lg:text-5xl font-bold">
        Featured Menu Items
      </h2>
      <p className="text-xl md:text-2xl lg:text-3xl text-gray-600">
        Explore our selection of delicious, hand-crafted pizzas.
      </p>
    </div>
    <CartProvider>
      <ProductProvider>
        <Trends />
      </ProductProvider>
    </CartProvider>
    <div className="text-center">
      <Link
        href="/menu"
        className="underline underline-offset-4 text-3xl font-semibold inline-block hover:text-primary"
      >
        View all
      </Link>
    </div>
  </section>
);

export default TrendMenu;
