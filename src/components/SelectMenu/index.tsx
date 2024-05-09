import React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem
} from "@radix-ui/react-dropdown-menu";
import { FilterIcon } from "lucide-react";

interface SelectMenuProps {
  setSelectedCategory: (category: string) => void;
}

const SelectMenu: React.FC<SelectMenuProps> = ({ setSelectedCategory }) => {
  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex items-center justify-center md:justify-start md:px-16 py-10 md:py-16">
      <DropdownMenu>
        <DropdownMenuTrigger
          className="bg-black text-white text-xl w-auto h-auto"
          asChild
        >
          <Button>
            <FilterIcon className="h-8 w-8 mr-2" />
            Filter by Category
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-60 bg-black text-white text-xl space-y-3 p-4">
          <DropdownMenuCheckboxItem
            className="cursor-pointer"
            onSelect={() => handleSelectCategory("pizza")}
          >
            Pizza
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            className="cursor-pointer"
            onSelect={() => handleSelectCategory("dessert")}
          >
            Dessert
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            className="cursor-pointer"
            onSelect={() => handleSelectCategory("side")}
          >
            Side
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            className="cursor-pointer"
            onSelect={() => handleSelectCategory("drink")}
          >
            Drinks
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SelectMenu;
