import { Button } from "@/components/ui/button";
import Link from "next/link";

const SnabMainPage = () => {
  return (
    <>
      <div className="flex flex-col h-full items-center pt-8 bg-slate-50">
        <Link href="/snab/tutorial">
          <Button variant="link">Tutorial</Button>
        </Link>
        <Link href="/snab/subtitle">
          <Button variant="link">Subtitle</Button>
        </Link>
        <Link href="/snab/translation">
          <Button variant="link">Translation</Button>
        </Link>
      </div>
    </>
  );
};

export default SnabMainPage;
