import { HistoryIcon, KeyIcon, HeartIcon } from "lucide-react";

const PurposeList = () => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-6">
    <div className="grid gap-2">
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center rounded-full w-auto h-auto bg-gray-900 p-3 text-gray-50 dark:bg-gray-50 dark:text-gray-900">
          <HistoryIcon className="h-8 w-8" />
        </div>
        <h3 className="text-3xl font-bold">Tradition</h3>
      </div>
      <p className="text-gray-500 text-xl dark:text-gray-400">
        We honor the time-honored techniques and recipes passed down through
        generations of the Rossi family, ensuring the authenticity of our pizza.
      </p>
    </div>
    <div className="grid gap-2">
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center rounded-full w-auto h-auto bg-gray-900 p-3 text-gray-50 dark:bg-gray-50 dark:text-gray-900">
          <KeyIcon className="h-8 w-8" />
        </div>
        <h3 className="text-3xl font-bold">Quality</h3>
      </div>
      <p className="text-gray-500 text-xl dark:text-gray-400">
        We are committed to using only the finest, freshest ingredients to
        create our pizzas, ensuring an unparalleled dining experience.
      </p>
    </div>
    <div className="grid gap-2">
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center rounded-full w-auto h-auto bg-gray-900 p-3 text-gray-50 dark:bg-gray-50 dark:text-gray-900">
          <HeartIcon className="h-8 w-8" />
        </div>
        <h3 className="text-3xl font-bold">Passion</h3>
      </div>
      <p className="text-gray-500 text-xl dark:text-gray-400">
        Our love for authentic Italian cuisine drives us to continually innovate
        and push the boundaries of traditional pizza-making.
      </p>
    </div>
  </div>
);

export default PurposeList;
