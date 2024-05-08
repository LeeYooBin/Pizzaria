import { Skeleton } from "@/components/ui/skeleton";

const Skeletons = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {[...Array(4)].map((_, index) => (
      <div
        key={index}
        className="bg-white rounded-lg overflow-hidden shadow-lg dark:bg-gray-950"
      >
        <Skeleton className="w-full h-72 object-cover rounded-t-md" />
        <div className="w-full flex flex-col py-6 space-y-5 p-5">
          <Skeleton className="h-8 w-3/4 mx-auto" />
          <Skeleton className="h-16 w-full" />
          <Skeleton className="h-8 w-1/3 mx-auto" />
        </div>
      </div>
    ))}
  </div>
);

export default Skeletons;
