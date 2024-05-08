import Image from "next/image";
import React, { useEffect, useState } from "react";

import Skeletons from "./skeletons";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "data/@types/product";
import { useProducts } from "data/context/ProductContext";

const Trends = () => {
  const products = useProducts();
  const [loading, setLoading] = useState(true);
  const [trends, setTrends] = useState<Product[]>([]);

  useEffect(() => {
    if (products.length > 0) {
      setTrends(products.slice(0, 4));
      setLoading(false);
    }
  }, [products]);

  if (loading) {
    return <Skeletons />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {trends.map((product) => (
        <Card key={product.id}>
          <CardContent className="flex flex-col py-6 h-auto items-center justify-center">
            <Image
              alt={product.name}
              className="w-full h-72 object-cover rounded-t-md"
              src={product.img?.src as string}
              width={1200}
              height={675}
              priority
            />
            <div className="w-full flex-col pt-5 space-y-5 text-center">
              <h3 className="text-2xl font-semibold">{product.name}</h3>
              <p className="text-gray-500 text-xl">{product.info}</p>
              <div className="flex justify-center">
                <Button
                  onClick={() => console.log("Click")}
                  size="sm"
                  className="text-xl text-white p-6 border-none"
                >
                  Order Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Trends;
