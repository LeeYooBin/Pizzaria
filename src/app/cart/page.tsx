import CartTotal from "components/CartTotal";
import Header from "components/Header";

import CartItems from "../../components/CartItem";

const cart = () => (
  <main>
    <Header />
    <div className="container mx-auto px-4 md:px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      <CartItems />
      <CartTotal />
    </div>
  </main>
);

export default cart;
