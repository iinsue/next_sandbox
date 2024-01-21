import { Metadata } from "next";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { buttonVariants } from "@/components/ui/button";
import { Announcement } from "./_components/announcement";
import { PageHeader } from "./_components/page-header";

export const metadata: Metadata = {
  title: "Examples",
  description: "Check out some examples app build using the components.",
};

interface ExamplesLayoutProps {
  children: React.ReactNode;
}

export default function ExampleLayout({ children }: ExamplesLayoutProps) {
  return (
    <>
      <div className="container relative">
        <PageHeader>
          <Announcement />
        </PageHeader>
        <section>
          <div>{children}</div>
        </section>
      </div>
    </>
  );
}
