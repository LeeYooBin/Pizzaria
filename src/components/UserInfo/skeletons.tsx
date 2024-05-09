import { Skeleton } from "@/components/ui/skeleton";

const Skeletons = () => (
  <div className="grid gap-8">
    <div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm p-6 md:p-8">
      <div className="flex items-center gap-6">
        <div className="grid gap-1">
          <Skeleton className="text-2xl font-bold h-8 w-full" />
          <Skeleton className="text-gray-500 dark:text-gray-400 h-6 w-full" />
          <Skeleton className="text-gray-500 dark:text-gray-400 h-6 w-full" />
        </div>
      </div>
    </div>
  </div>
);

export default Skeletons;
