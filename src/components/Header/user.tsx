import Image from "next/image";
import Link from "next/link";

import user from "../../../public/images/user.svg";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu";

const User = () => (
  <DropdownMenu>
    <DropdownMenuTrigger className="outline-none">
      <Image src={user} alt="Usuário" className="w-14" />
    </DropdownMenuTrigger>
    <DropdownMenuContent className="bg-black text-white border-none">
      <DropdownMenuItem>
        <Link href="/settings" className="text-xl">
          Minha conta
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Link href="#" className="text-xl">
          Sair
        </Link>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

export default User;
