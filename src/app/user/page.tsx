import Header from "components/Header";

import UserInfo from "../../components/UserInfo";
import UserOrders from "../../components/UserOrders";

const user = () => {
  return (
    <main>
      <Header />
      <div className="container mx-auto px-10 md:px-6 py-12 h-[80vh] space-y-10">
        <UserInfo />
        <UserOrders />
      </div>
    </main>
  );
};

export default user;
