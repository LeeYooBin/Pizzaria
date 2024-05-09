import Image from "next/image";
import Link from "next/link";

import img from "../../../public/images/banner-1.jpg";

const HeroSection = () => (
  <section className="relative h-[80vh] bg-gray-800 overflow-hidden">
    <Image
      alt="Delicious pizza"
      className="w-full h-full object-cover opacity-80"
      src={img}
      priority
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Italian Pizzeria</h1>
      <p className="text-lg md:text-2xl mb-8">
        Authentic Italian pizza made with the freshest ingredients.
      </p>
      <Link
        className="inline-flex items-center justify-center bg-primary text-white text-xl font-medium py-3 px-6 rounded-md"
        href="/menu"
      >
        Order Now
      </Link>
    </div>
  </section>
);

export default HeroSection;
