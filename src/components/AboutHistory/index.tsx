import Timeline from "./timeline";

const History = () => (
  <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 px-4 md:px-6">
    <div className="container px-4 md:px-6">
      <div className="grid gap-20 px-10 md:px-14">
        <div className="space-y-4 text-center w-full flex flex-col items-center">
          <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-lg dark:bg-gray-700">
            Our History
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            A Legacy of Authentic Italian Flavors
          </h2>
          <p className="md:w-[50%] text-gray-500 text-2xl dark:text-gray-400 text-justify md:text-center">
            From our humble beginnings in 1810 to our status as a beloved
            institution, Italian Pizzeria has always been driven by a passion
            for authentic Italian cuisine and a commitment to quality.
          </p>
        </div>
        <Timeline />
      </div>
    </div>
  </section>
);

export default History;
