import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const Skeletons = () => (
  <div className="grid gap-4">
    <h3 className="text-xl font-bold">
      <Skeleton className="h-6 w-24" />
    </h3>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {[...Array(6)].map((_, index) => (
        <div key={index}>
          <Card>
            <CardContent className="grid gap-4">
              <div className="flex items-center justify-between">
                <Skeleton className="font-medium h-6 w-24" />
                <Skeleton className="font-semibold h-6 w-20" />
              </div>
              <Skeleton className="text-sm text-gray-500 dark:text-gray-400 h-5 w-36" />
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  </div>
);

export default Skeletons;
