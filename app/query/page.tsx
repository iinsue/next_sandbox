import { Button } from "@/components/ui/button";
import Link from "next/link";

const QueryPage = () => {
  return (
    <>
      <div className="flex flex-col items-center h-full bg-slate-50 pt-20">
        <Link href="/query/next-stream">
          <Button variant="link">Next.js app with streaming example</Button>
        </Link>
        <Link href="/query/basic">
          <Button variant="link">Basic</Button>
        </Link>
        <Link href="/query/optui">
          <Button variant="link">Optimistic Updates UI</Button>
        </Link>
      </div>
    </>
  );
};

export default QueryPage;
