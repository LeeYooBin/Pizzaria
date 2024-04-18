import Link from "next/link";

import PizzaIcon from "./pizza-icon";

const Logo = () => (
  <Link className="flex items-center gap-2" href="/">
    <PizzaIcon className="h-16 w-16" />
    <span className="text-3xl font-bold">Slice of Heaven</span>
  </Link>
);

export default Logo;
