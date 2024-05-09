"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import DropMenu from "./dropdown-menu";

import { Button } from "@/components/ui/button";
import { AuthProvider } from "data/context/authContext";
import { useAuth } from "data/context/authContext";
import { CartProvider, useCart } from "data/context/cartContext";
import { UserIcon, ShoppingCartIcon } from "lucide-react";

const Icons = () => {
  const { isLoggedIn } = useAuth();
  const { totalItems } = useCart();
  const [total, setTotal] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    setTotal(totalItems);
  }, [totalItems]);

  const handleUserButton = () => {
    if (isLoggedIn) router.push("/user");
    else router.push("/login");
  };

  const handleCartButton = () => {
    if (isLoggedIn) router.push("/cart");
    else router.push("/login");
  };

  return (
    <div className="ml-auto flex items-center space-x-4 lg:space-x-6">
      <Button
        className="w-auto h-auto rounded-full border border-gray-200"
        onClick={handleUserButton}
        variant="ghost"
      >
        <span className="sr-only">Account</span>
        <UserIcon className="h-7 w-7" />
      </Button>
      <Button
        className="w-auto h-auto rounded-full border border-gray-200"
        onClick={handleCartButton}
        variant="ghost"
      >
        <span className="sr-only">Cart</span>
        <ShoppingCartIcon className="h-7 w-7" />
        {total > 0 && (
          <div className="w-10 h-8 flex justify-center items-center rounded-full border bg-black text-lg text-white font-semibold translate-x-3">
            {total}
          </div>
        )}
      </Button>
      <DropMenu />
    </div>
  );
};

const Wrapper = () => (
  <AuthProvider>
    <CartProvider>
      <Icons />
    </CartProvider>
  </AuthProvider>
);

export default Wrapper;
