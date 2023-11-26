import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="flex justify-center flex-col gap-2 items-center
    h-full bg-slate-50"
    >
      <Link href={"/caroucel"}>
        <Button variant="link">캐러셀</Button>
      </Link>
      <Link href={"/table"}>
        <Button variant="link">Table Example</Button>
      </Link>
      <Link href={"/query"}>
        <Button variant="link">React Query Example</Button>
      </Link>
      <Link href="/board">
        <Button variant="link">Text Editor</Button>
      </Link>
    </div>
  );
}
