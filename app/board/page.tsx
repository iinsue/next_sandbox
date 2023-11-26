import { Button } from "@/components/ui/button";
import Link from "next/link";

const BoardPage = () => {
  return (
    <>
      <Link href="/board/lexical">
        <Button variant="link">Lexical</Button>
      </Link>
    </>
  );
};

export default BoardPage;
