import { Skeleton } from "@/components/ui/skeleton";

const Skeletons = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {[...Array(14)].map((_, index) => (
      <div
        key={index}
        className="bg-white rounded-lg overflow-hidden shadow-lg dark:bg-gray-950"
      >
        <Skeleton className="w-full h-80 object-cover rounded-t-lg" />
        <div className="p-5 flex flex-col justify-between flex-1">
          <Skeleton className="h-8 w-3/4 mx-auto" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-8 w-1/3 mx-auto" />
        </div>
      </div>
    ))}
  </div>
);

export default Skeletons;
