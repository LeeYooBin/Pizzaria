import Image from "next/image";
import Link from "next/link";

import cart from "../../../public/images/cart.svg";

const Cart = () => {
  return (
    <Link href="/">
      <Image src={cart} alt="Carrinho de compras" className="w-14" />
    </Link>
  );
};

export default Cart;
