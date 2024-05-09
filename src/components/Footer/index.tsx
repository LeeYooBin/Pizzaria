import Link from "next/link";

import Logo from "components/Logo";

import { FacebookIcon, TwitterIcon, InstagramIcon } from "lucide-react";

const Footer = () => (
  <footer className="bg-gray-900 text-white py-8">
    <div className="container mx-auto px-8 md:px-14 flex justify-between items-center">
      <div className="flex items-center gap-2 mb-4 md:mb-0">
        <Logo />
      </div>
      <nav className="flex flex-col md:flex-row gap-4">
        <Link className="hover:text-primary text-xl" href="/#menu">
          Menu
        </Link>
        <Link className="hover:text-primary text-xl" href="/#about">
          About
        </Link>
        <Link className="hover:text-primary text-xl" href="/#contact">
          Contact
        </Link>
        <Link className="hover:text-primary text-xl" href="#">
          Privacy Policy
        </Link>
      </nav>
      <div className="flex items-center gap-4 mt-4 md:mt-0">
        <Link className="hover:text-primary" target="_blank" href="#">
          <FacebookIcon className="h-10 w-10" />
        </Link>
        <Link className="hover:text-primary" target="_blank" href="#">
          <TwitterIcon className="h-10 w-10" />
        </Link>
        <Link className="hover:text-primary" target="_blank" href="#">
          <InstagramIcon className="h-10 w-10" />
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
