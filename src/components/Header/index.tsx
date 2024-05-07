import Link from "next/link";

import Logo from "components/Logo";

import Icons from "./icons";

const Header = () => (
  <header className="px-4 lg:px-16 py-4 flex items-center">
    <Logo />
    <nav className="ml-auto hidden space-x-8 md:flex">
      <Link className="text-2xl font-medium hover:text-primary" href="/">
        Home
      </Link>
      <Link className="text-2xl font-medium hover:text-primary" href="/menu">
        Menu
      </Link>
      <Link className="text-2xl font-medium hover:text-primary" href="/about">
        About
      </Link>
      <Link className="text-2xl font-medium hover:text-primary" href="/about">
        Contact
      </Link>
    </nav>
    <Icons />
  </header>
);

export default Header;
