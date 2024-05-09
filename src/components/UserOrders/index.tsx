"use client";

import { useState, useEffect } from "react";

import Skeletons from "./skeletons";

import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "data/context/authContext";
import { AuthProvider } from "data/context/authContext";
import { v4 as uuidv4 } from "uuid";

const UserOrders = () => {
  const { user } = useAuth();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [user]);

  if (loading) {
    return <Skeletons />;
  }

  if (!user) {
    return <div />;
  }

  return (
    <div className="grid gap-4">
      <h3 className="text-2xl font-bold">Past Orders</h3>
      {user?.orders.length === 0 ? (
        <h3 className="text-xl">There are no past orders.</h3>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {user?.orders.map((order) => (
            <Card key={uuidv4()}>
              <CardContent className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div className="font-medium text-xl">Order #{uuidv4()}</div>
                  <div className="font-semibold text-xl">
                    ${order.total.toFixed(2)}
                  </div>
                </div>
                <div className="text-xl text-gray-500 dark:text-gray-400">
                  Placed on {order.date.toISOString()}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

const Wrapper = () => (
  <AuthProvider>
    <UserOrders />
  </AuthProvider>
);

export default Wrapper;
