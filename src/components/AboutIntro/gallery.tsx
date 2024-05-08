import Image from "next/image";

import img1 from "../../../public/images/about_1.png";
import img2 from "../../../public/images/about_2.png";
import img3 from "../../../public/images/about_3.png";
import img4 from "../../../public/images/about_4.png";

const Gallery = () => (
  <div className="grid grid-cols-2 gap-4">
    <Image
      alt="Italian Pizzeria"
      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
      height="310"
      src={img1}
      width="550"
      priority
    />
    <Image
      alt="Italian Pizzeria"
      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
      height="310"
      src={img2}
      width="550"
      priority
    />
    <Image
      alt="Italian Pizzeria"
      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
      height="310"
      src={img3}
      width="550"
      priority
    />
    <Image
      alt="Italian Pizzeria"
      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
      height="310"
      src={img4}
      width="550"
      priority
    />
  </div>
);

export default Gallery;
