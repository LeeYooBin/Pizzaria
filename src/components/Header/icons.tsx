"use client";

import { useRouter } from "next/navigation";

import DropMenu from "./dropdown-menu";

import { Button } from "@/components/ui/button";
import { AuthProvider } from "data/context/authContext";
import { useAuth } from "data/context/authContext";
import { UserIcon, ShoppingCartIcon } from "lucide-react";

const Icons = () => {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

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
        <div className="w-10 h-8 flex justify-center items-center rounded-full border bg-black text-lg text-white font-semibold translate-x-3">
          3
        </div>
      </Button>
      <DropMenu />
    </div>
  );
};

const Wrapper = () => (
  <AuthProvider>
    <Icons />
  </AuthProvider>
);

export default Wrapper;
