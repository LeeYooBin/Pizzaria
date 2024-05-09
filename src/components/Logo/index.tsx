import Link from "next/link";

import PizzaIcon from "./pizza-icon";

const Logo = () => (
  <div className="flex items-center space-x-4">
    <Link className="flex items-center space-x-2" href="/">
      <PizzaIcon className="h-14 w-14" />
      <span className="text-3xl font-semibold">Pizza</span>
    </Link>
  </div>
);

export default Logo;
