import Gallery from "./gallery";

const Intro = () => (
  <section className="w-full py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6">
      <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px] px-10 md:px-14">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-lg dark:bg-gray-800">
            Established in 1810
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            The Legacy of Italian Pizzeria
          </h2>
          <p className="max-w-[60rem] text-gray-500 text-2xl">
            Italian Pizzeria has been serving the finest authentic Italian pizza
            since 1810. Discover our rich history and the passion that drives us
            to this day.
          </p>
        </div>
        <Gallery />
      </div>
    </div>
  </section>
);

export default Intro;
