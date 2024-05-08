import PurposeList from "./purposeList";

const Purpose = () => (
  <section className="w-full py-32">
    <div className="container px-4 md:px-6">
      <div className="grid gap-20 px-10 md:px-14">
        <div className="space-y-4 text-center flex flex-col items-center">
          <div className="inline-block rounded-lg text-lg bg-gray-200 px-3 py-1 dark:bg-gray-700">
            Our Purpose
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Preserving the Art of Authentic Italian Pizza
          </h2>
          <p className="md:max-w-[65%] text-gray-500 text-2xl text-justify md:text-center">
            At Italian Pizzeria, we are dedicated to preserving the art of
            traditional Neapolitan pizza-making, passed down through generations
            of the Rossi family. Our mission is to share the authentic flavors
            and rich heritage of Italian cuisine with the world.
          </p>
        </div>
        <PurposeList />
      </div>
    </div>
  </section>
);

export default Purpose;
