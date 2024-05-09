import { ExpandIcon, SchoolIcon, SmartphoneIcon } from "lucide-react";

const VisionList = () => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-6">
    <div className="grid gap-2">
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center rounded-full w-auto h-auto bg-gray-900 p-3 text-gray-50 dark:bg-gray-50 dark:text-gray-900">
          <ExpandIcon className="h-8 w-8" />
        </div>
        <h3 className="text-3xl font-bold">Global Reach</h3>
      </div>
      <p className="text-gray-500 text-xl dark:text-gray-400">
        We aim to expand our presence worldwide, bringing the authentic flavors
        of Italian Pizzeria to more people around the globe.
      </p>
    </div>
    <div className="grid gap-2">
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center rounded-full w-auto h-auto bg-gray-900 p-3 text-gray-50 dark:bg-gray-50 dark:text-gray-900">
          <SchoolIcon className="h-8 w-8" />
        </div>
        <h3 className="text-3xl font-bold">Education</h3>
      </div>
      <p className="text-gray-500 text-xl dark:text-gray-400">
        We are committed to educating our customers about the rich history and
        traditions of Italian pizza-making, fostering a deeper appreciation for
        the craft.
      </p>
    </div>
    <div className="grid gap-2">
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center rounded-full w-auto h-auto bg-gray-900 p-3 text-gray-50 dark:bg-gray-50 dark:text-gray-900">
          <SmartphoneIcon className="h-8 w-8" />
        </div>
        <h3 className="text-3xl font-bold">Innovation</h3>
      </div>
      <p className="text-gray-500 text-xl dark:text-gray-400">
        While honoring tradition, we also strive to innovate and push the
        boundaries of pizza-making, creating new and exciting flavor profiles.
      </p>
    </div>
  </div>
);

export default VisionList;
