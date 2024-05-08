import VisionList from "./visionList";

const Vision = () => (
  <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
    <div className="container px-4 md:px-6">
      <div className="grid gap-10 px-10 md:px-14">
        <div className="space-y-4 text-center flex flex-col items-center">
          <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-lg dark:bg-gray-700">
            Our Vision
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Sharing the Authentic Flavors of Italy
          </h2>
          <p className="md:max-w-[65%] text-gray-500 text-2xl text-justify md:text-center">
            Our vision is to introduce the world to the true essence of
            authentic Italian pizza, inspiring a deeper appreciation for the
            rich culinary heritage of Italy.
          </p>
        </div>
        <VisionList />
      </div>
    </div>
  </section>
);

export default Vision;
