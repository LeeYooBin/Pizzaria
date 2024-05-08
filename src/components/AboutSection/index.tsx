import Image from "next/image";
import Link from "next/link";

import img from "../../../public/images/about_banner.png";

const AboutSection = () => (
  <section className="py-12 md:py-20 md:px-14 bg-gray-100" id="about">
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-5xl md:text-4xl font-bold mb-4">
            About Italian Pizzeria
          </h2>
          <p className="text-gray-700 mb-4 text-2xl text-justify">
            Italian Pizzeria was founded in 1810 with the mission of bringing
            authentic Italian pizza to our community. We use only the freshest
            ingredients and time-honored recipes to create our delicious pies.
          </p>
          <p className="text-gray-700 mb-4 text-2xl text-justify">
            Our family-owned business takes pride in providing a warm and
            welcoming atmosphere for our customers. We believe that great pizza
            is meant to be shared with loved ones, which is why we strive to
            create an experience that brings people together.
          </p>
          <p className="text-gray-700 mb-4 text-2xl text-justify">
            At Italian Pizzeria, we are dedicated to sustainability and
            community involvement. We source our ingredients locally whenever
            possible and actively support local charities and initiatives.
          </p>
          <p className="text-gray-700 mb-4 text-2xl text-justify">
            We invite you to join us in our mission to enjoy delicious pizza
            while making a positive impact on our community and the environment.
          </p>
          <p className="text-gray-700 mb-4 text-2xl text-justify">
            Our commitment to quality extends beyond our ingredients to our
            customer service. We strive to provide an exceptional dining
            experience for every guest, ensuring that each visit to Italian
            Pizzeria is memorable and satisfying.
          </p>
          <p className="text-gray-700 mb-4 text-2xl text-justify">
            Whether you are dining in with us or ordering delivery, we promise
            to uphold the highest standards of excellence, delivering delicious
            pizza and exceptional service every time.
          </p>
          <Link
            className="inline-flex items-center justify-center bg-primary text-white text-2xl font-medium py-3 px-6 rounded-md transition-colors"
            href="/about"
          >
            Learn More
          </Link>
        </div>
        <div>
          <Image
            alt="Slice of Heaven Pizzeria"
            className="w-full object-cover rounded-xl"
            src={img}
            priority
          />
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
