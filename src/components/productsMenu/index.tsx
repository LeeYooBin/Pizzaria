import Image from "next/image";
import { useState, useEffect } from "react";

import Skeletons from "./skeletons";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "data/@types/product";
import { useProducts } from "data/context/ProductContext";

interface ProductsMenuProps {
  productType: string;
}

const ProductsMenu = ({ productType }: ProductsMenuProps) => {
  const products = useProducts();
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) => product.type === productType)
    );
    setLoading(false);
  }, [products, productType]);

  if (loading) {
    return <Skeletons />;
  }

  return (
    <section className="mb-12 px-10 md:px-14">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="w-full">
            <Image
              alt={product.name}
              className="rounded-t-lg object-cover w-full h-auto"
              src={product.img?.src as string}
              style={{
                aspectRatio: "300/200",
                objectFit: "cover"
              }}
              height={200}
              width={600}
              priority
            />
            <CardContent className="pt-4 h-56 flex flex-col justify-between flex-1">
              <h3 className="text-2xl font-bold text-center">{product.name}</h3>
              <p className="text-gray-600 text-xl text-center">
                {product.info || ""}
              </p>
              <div className="h-auto flex items-center justify-between text-2xl">
                <span className="font-bold">${product.price}</span>
                <Button size="sm" className="text-white text-xl p-6">
                  Add to cart
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProductsMenu;
