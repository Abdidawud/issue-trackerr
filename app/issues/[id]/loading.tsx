import { Skeleton } from "@/app/components";
import { Card, Flex } from "@radix-ui/themes";

const LoadingIssuesPage = () => {
  return (
    <div>
      <Skeleton className="max-w-xl"></Skeleton>
      <Flex my="3" className="space-x-3">
        <Skeleton width="5rem" />
        <Skeleton width="8rem  " />
      </Flex>
      <Card className="prose mt-5">
        <Skeleton count={3} />
      </Card>
    </div>
  );
};

export default LoadingIssuesPage;
