import { Button } from "@/components/ui/button";
import Link from "next/link";

const VirtualMain = () => {
  return (
    <>
      <div className="bg-slate-100 h-full flex flex-col items-center pt-10">
        <Link href="/virtual/dynamic">
          <Button variant="link">Tanstack Virtual Dynamic Example</Button>
        </Link>
        <Link href="/virtual/fixed">
          <Button variant="link">Tanstack Virtual Fixed Exmaple</Button>
        </Link>
        <Link href="/virtual/infinite">
          <Button variant="link">Tanstack Virtual Infinite Example</Button>
        </Link>
        <Link href="/virtual/smooth">
          <Button variant="link">Tanstack Virtual Smooth Example</Button>
        </Link>
        <Link href="virtual/sticky">
          <Button variant="link">Tanstack Virtual Sticky Exmaple</Button>
        </Link>
        <Link href="/virtual/table">
          <Button variant="link">Tanstack Virtual Table Example</Button>
        </Link>
        <Link href="/virtual/variable">
          <Button variant="link">Tanstack Virtaul Variable Example</Button>
        </Link>
      </div>
    </>
  );
};

export default VirtualMain;
