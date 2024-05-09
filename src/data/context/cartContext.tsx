import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode
} from "react";

import { Product } from "data/@types/product";

interface CartItem extends Product {
  quantity: number;
}

interface CartContextProps {
  cart: CartItem[];
  addToCart: (item: Product) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
  totalItems: number;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        const updatedCart = prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
        return updatedCart;
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === itemId);
      if (existingItem && existingItem.quantity > 1) {
        const updatedCart = prevCart.map((cartItem) =>
          cartItem.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
        return updatedCart;
      } else {
        return prevCart.filter((cartItem) => cartItem.id !== itemId);
      }
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, totalItems }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
