import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

const DropMenu = () => (
  <nav className="flex items-center md:hidden">
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none m-auto">
        <Menu />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-48 bg-black text-white border-none"
      >
        <DropdownMenuItem>
          <Link className="flex items-center gap-2 text-xl" href="/">
            Home
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link className="flex items-center gap-2 text-xl" href="/menu">
            Menu
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link className="flex items-center gap-2 text-xl" href="/about">
            About
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </nav>
);

export default DropMenu;
