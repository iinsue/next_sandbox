import { Metadata } from "next";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { buttonVariants } from "@/components/ui/button";
import { Announcement } from "./_components/announcement";
import {
  PageHeader,
  PageHeaderHeading,
  PageHeaderDescription,
  PageAction,
} from "./_components/page-header";

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
          <PageHeaderHeading className="hidden md:block">
            Check out some examples
          </PageHeaderHeading>
          <PageHeaderHeading className="md:hidden">Examples</PageHeaderHeading>
          <PageHeaderDescription>
            Dashboard, cards, authentication. Some examples built using the
            components. Use this as a guide to build your own.
          </PageHeaderDescription>
          <PageAction>
            <Link href="" className={cn(buttonVariants(), "rounded-[6px]")}>
              Get Started
            </Link>
            <Link
              href=""
              className={cn(
                buttonVariants({ variant: "outline" }),
                "rounded-[6px]"
              )}
            >
              Components
            </Link>
          </PageAction>
        </PageHeader>
        <section>
          <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow-md md:shadow-xl">
            {children}
          </div>
        </section>
      </div>
    </>
  );
}
