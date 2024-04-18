import Link from "next/link";

import Logo from "components/Logo";

import Cart from "./cart";
import Navbar from "./navbar";
import User from "./user";

export default function Component() {
  return (
    <header className="bg-white text-black py-4 px-4 md:px-16 flex items-center justify-between lg:px-34">
      <Logo />
      <nav className="hidden md:flex items-center gap-16">
        <Link className="text-3xl hover:text-primary" href="/">
          Home
        </Link>
        <Link className="text-3xl hover:text-primary" href="#">
          Menu
        </Link>
        <Link className="text-3xl hover:text-primary" href="#">
          About
        </Link>
      </nav>
      <div className="flex items-center justify-center gap-10">
        <User />
        <Cart />
        <Navbar />
      </div>
    </header>
  );
}
