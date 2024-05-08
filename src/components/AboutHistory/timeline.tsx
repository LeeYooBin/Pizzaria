import {
  CalendarIcon,
  CompassIcon,
  PlaneIcon,
  AwardIcon,
  ExpandIcon,
  RecycleIcon
} from "lucide-react";

const Timeline = () => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    <div className="grid gap-2">
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center rounded-full w-auto h-auto bg-gray-900 p-3 text-gray-50 dark:bg-gray-50 dark:text-gray-900">
          <CalendarIcon className="h-8 w-8" />
        </div>
        <h3 className="text-3xl font-bold">1810</h3>
      </div>
      <p className="text-gray-500 text-xl dark:text-gray-400">
        Italian Pizzeria is founded in Naples, Italy, by the Rossi family, who
        are dedicated to preserving the art of traditional Neapolitan
        pizza-making.
      </p>
    </div>
    <div className="grid gap-2">
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center rounded-full w-auto h-auto bg-gray-900 p-3 text-gray-50 dark:bg-gray-50 dark:text-gray-900">
          <CompassIcon className="h-8 w-8" />
        </div>
        <h3 className="text-3xl font-bold">1920</h3>
      </div>
      <p className="text-gray-500 text-xl dark:text-gray-400">
        The Rossi family expands their pizzeria to a second location in Rome,
        bringing their authentic Neapolitan recipes to the heart of Italy.
      </p>
    </div>
    <div className="grid gap-2">
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center rounded-full w-auto h-auto bg-gray-900 p-3 text-gray-50 dark:bg-gray-50 dark:text-gray-900">
          <PlaneIcon className="h-8 w-8" />
        </div>
        <h3 className="text-3xl font-bold">1950</h3>
      </div>
      <p className="text-gray-500 text-xl dark:text-gray-400">
        The Rossi family immigrates to the United States, bringing their beloved
        pizzeria to New York City, where it quickly becomes a local favorite.
      </p>
    </div>
    <div className="grid gap-2">
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center rounded-full w-auto h-auto bg-gray-900 p-3 text-gray-50 dark:bg-gray-50 dark:text-gray-900">
          <AwardIcon className="h-8 w-8" />
        </div>
        <h3 className="text-3xl font-bold">1980</h3>
      </div>
      <p className="text-gray-500 text-xl dark:text-gray-400">
        Italian Pizzeria is recognized for its exceptional quality and authentic
        Neapolitan recipes, earning numerous awards and accolades from
        prestigious culinary organizations.
      </p>
    </div>
    <div className="grid gap-2">
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center rounded-full w-auto h-auto bg-gray-900 p-3 text-gray-50 dark:bg-gray-50 dark:text-gray-900">
          <ExpandIcon className="h-8 w-8" />
        </div>
        <h3 className="text-3xl font-bold">2000</h3>
      </div>
      <p className="text-gray-500 text-xl dark:text-gray-400">
        The Rossi family expands their pizzeria to multiple locations across the
        United States, bringing their authentic Italian flavors to a wider
        audience.
      </p>
    </div>
    <div className="grid gap-2">
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center rounded-full w-auto h-auto bg-gray-900 p-3 text-gray-50 dark:bg-gray-50 dark:text-gray-900">
          <RecycleIcon className="h-8 w-8" />
        </div>
        <h3 className="text-3xl font-bold">2020</h3>
      </div>
      <p className="text-gray-500 text-xl dark:text-gray-400">
        Italian Pizzeria commits to sustainable and eco-friendly practices,
        sourcing local ingredients and reducing its environmental impact, while
        continuing to serve the finest authentic Italian pizza.
      </p>
    </div>
  </div>
);

export default Timeline;
