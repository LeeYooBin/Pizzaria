import Image from "next/image";
import Link from "next/link";

import menu from "../../../public/images/menu.svg";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu";

const Navbar = () => (
  <div className="md:hidden">
    <DropdownMenu className="relative flex items-center justify-center">
      <DropdownMenuTrigger className="outline-none">
        <Image src={menu} alt="Navegação" className="h-16 w-16" />
        <span className="sr-only">Toggle navigation</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-48 bg-black text-white border-none"
      >
        <DropdownMenuItem>
          <Link className="flex items-center gap-2 text-xl" href="#">
            Home
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link className="flex items-center gap-2 text-xl" href="#">
            Menu
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link className="flex items-center gap-2 text-xl" href="#">
            About
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
);

export default Navbar;
