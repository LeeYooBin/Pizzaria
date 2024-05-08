"use client";

import React, { useState } from "react";

import Footer from "components/Footer";
import Header from "components/Header";
import ProductsMenu from "components/productsMenu";
import SelectMenu from "components/SelectMenu";

import { ProductProvider } from "data/context/ProductContext";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("pizza");

  return (
    <main>
      <Header />
      <SelectMenu setSelectedCategory={setSelectedCategory} />
      <ProductProvider>
        <ProductsMenu productType={selectedCategory} />
      </ProductProvider>
      <Footer />
    </main>
  );
};

export default Menu;
