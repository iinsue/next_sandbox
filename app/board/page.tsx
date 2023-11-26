import { Button } from "@/components/ui/button";
import Link from "next/link";

const BoardPage = () => {
  return (
    <>
      <div className="bg-slate-100 h-full flex flex-col items-center pt-10">
        <Link href="/board/lexical/rich">
          <Button variant="link">Lexical Rich Text Example</Button>
        </Link>
        <Link href="/board/lexical/plain">
          <Button variant="link">Lexical Plain Text Example</Button>
        </Link>
      </div>
    </>
  );
};

export default BoardPage;
