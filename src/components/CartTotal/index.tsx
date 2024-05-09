"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { CartProvider, useCart } from "data/context/cartContext";

const CartTotal = () => {
  const { toast } = useToast();
  const { cart, clearCart } = useCart();
  const router = useRouter();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = cart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);

    setTotal(newTotal);
  }, [cart]);

  const handleContinueShopping = () => router.push("/menu");

  const handleCheckout = () => {
    clearCart();
    window.location.reload();
    toast({
      description: "Your order has been sent.",
      className: "bg-black text-white border-none"
    });
  };

  return (
    <div className="mt-8 bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-bold">Total</h2>
        <span className="text-2xl font-bold">${total.toFixed(2)}</span>
      </div>
      <div className="flex justify-end">
        <Button
          onClick={handleCheckout}
          disabled={cart.length === 0}
          className="mr-2 text-xl text-white"
          size="lg"
        >
          Checkout
        </Button>
        <Button
          onClick={handleContinueShopping}
          className="text-xl text-white"
          size="lg"
        >
          Continue Shopping
        </Button>
      </div>
      <Toaster />
    </div>
  );
};

const Wrapper = () => (
  <CartProvider>
    <CartTotal />
  </CartProvider>
);

export default Wrapper;
