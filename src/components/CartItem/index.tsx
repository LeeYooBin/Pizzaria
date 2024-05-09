"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Product } from "data/@types/product";
import { CartProvider } from "data/context/cartContext";
import { useCart } from "data/context/cartContext";
import { MinusIcon, PlusIcon } from "lucide-react";

const CartItem = () => {
  const { cart, addToCart, removeFromCart } = useCart();

  const handleAddCart = (product: Product) => {
    addToCart(product);
  };

  const handleRemoveCart = (productId: string) => {
    removeFromCart(productId);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
      {cart.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-md overflow-hidden w-full"
        >
          <div className="relative">
            <Image
              alt="Pizza"
              className="w-full h-48 object-cover"
              height={200}
              width={600}
              src={product.img?.src as string}
              priority
            />
          </div>
          <div className="p-4 h-auto space-y-5">
            <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
            <p className="text-gray-500 mb-4 text-xl">{product.info}</p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">${product.price}</span>
              <div className="flex items-center gap-2">
                <Button
                  onClick={() => handleRemoveCart(product.id)}
                  className="mr-2 bg-white"
                  size="icon"
                  variant="outline"
                >
                  <MinusIcon className="w-5 h-5" />
                </Button>
                <span className="text-2xl font-bold">{product.quantity}</span>
                <Button
                  onClick={() => handleAddCart(product)}
                  className="ml-2 bg-white"
                  size="icon"
                  variant="outline"
                >
                  <PlusIcon className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Wrapper = () => (
  <CartProvider>
    <CartItem />
  </CartProvider>
);

export default Wrapper;
