"use client";

import { useEffect, useState } from "react";

import Skeletons from "./skeletons";

import { useAuth } from "data/context/authContext";
import { AuthProvider } from "data/context/authContext";

const UserInfo = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [user]);

  if (loading) {
    return <Skeletons />;
  }

  if (!user) {
    return (
      <div className="w-full h-[90vh] flex items-center justify-center">
        <h1>User not found!</h1>
      </div>
    );
  }

  return (
    <div className="grid gap-8">
      <div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm p-6 md:p-8">
        <div className="flex items-center gap-6">
          <div className="grid gap-1">
            <h2 className="text-2xl font-bold">{user?.name}</h2>
            <div className="text-gray-500 text-xl dark:text-gray-400">
              {user?.email}
            </div>
            <div className="text-gray-500 text-xl dark:text-gray-400">
              123 Main St, Anytown USA
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Wrapper = () => (
  <AuthProvider>
    <UserInfo />
  </AuthProvider>
);

export default Wrapper;
