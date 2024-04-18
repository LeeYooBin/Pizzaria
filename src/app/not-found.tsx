import Image from "next/image";
import Link from "next/link";

import four from "../../public/images/four.svg";
import pizza from "../../public/images/pizza-1.png";

const NotFound = () => (
  <main className="flex h-[100dvh] flex-col items-center justify-center gap-6 px-4 text-center">
    <div className="w-full flex items-center justify-center gap-1">
      <Image
        src={four}
        alt="Número quatro"
        className="w-40 md:w-72"
        loading="lazy"
      />
      <Image
        src={pizza}
        alt="Pizza simbolizando zero"
        className="w-60 md:w-96"
        priority
      />
      <Image
        src={four}
        alt="Número quatro"
        className="w-40 md:w-72"
        loading="lazy"
      />
    </div>
    <p className="text-gray-500 dark:text-gray-400 text-xl md:text-3xl">
      Oops, the page you are looking for could not be found.
    </p>
    <Link
      className="inline-flex h-14 items-center justify-center rounded-3xl bg-primary px-6 text-xl font-medium text-white shadow"
      href="/"
    >
      Voltar para home
    </Link>
  </main>
);

export default NotFound;
