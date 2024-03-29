"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { TabHeader } from "./tab-header";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const examples = [
  {
    name: "Mail",
    href: "/examples/mail",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/examples/mail",
  },
  {
    name: "Forms",
    href: "/examples/forms",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/examples/forms",
  },
  {
    name: "Music",
    href: "/examples/music",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/examples/music",
  },
];

interface ExamplesNavProps extends React.HTMLAttributes<HTMLDivElement> {
  tab?: boolean;
}

export const ExamplesNav = ({
  tab = false,
  className,
  ...props
}: ExamplesNavProps) => {
  const pathname = usePathname();
  const [isClick, setIsClick] = useState(false);
  console.log("click", isClick);

  return (
    <div className="relative">
      {isClick ? (
        <ScrollArea className="max-w-[600px] lg:max-w-none">
          <div className={cn("mb-4 flex items-center", className)} {...props}>
            {examples.map((example, index) => (
              <Link
                href={example.href}
                key={example.href}
                className={cn(
                  "flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary",
                  pathname?.startsWith(example.href)
                    ? "bg-muted font-medium text-primary"
                    : "text-muted-foreground"
                )}
              >
                {example.name}
              </Link>
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="invisible" />
        </ScrollArea>
      ) : (
        <TabHeader />
      )}
      <Button onClick={() => setIsClick((prev) => !prev)}>Click</Button>
    </div>
  );
};
