import { Button } from "@/components/ui/button";
import Link from "next/link";

const VirtualMain = () => {
  return (
    <>
      <div className="bg-slate-100 h-full flex flex-col items-center pt-10">
        <Link href="/virtual/fixed">
          <Button variant="link">Tanstack Virtual Fixed Exmaple</Button>
        </Link>
        <Link href="/virtual/variable">
          <Button variant="link">Tanstack Virtaul Variable Example</Button>
        </Link>
      </div>
    </>
  );
};

export default VirtualMain;
