"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const examples = [
  {
    name: "Mail",
    href: "/examples/mail",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/examples/mail",
  },
];

interface ExamplesNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ExamplesNav = ({ className, ...props }: ExamplesNavProps) => {
  const pathname = usePathname();

  return (
    <div className="relative">
      <ScrollArea>
        <div>
          {examples.map((example, index) => (
            <Link href={example.href} key={example.href}>
              {example.name}
            </Link>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
