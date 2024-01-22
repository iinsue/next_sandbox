"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SubHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  pathList: {
    name: string;
    href: string;
  }[];
}

export const SubHeader = ({
  pathList,
  className,
  children,
  ...props
}: SubHeaderProps) => {
  const pathname = usePathname();
  return (
    <>
      <div className={cn("flex items-center", className)} {...props}>
        {pathList.map((path, index) => (
          <Link
            key={path.href}
            href={path.href}
            className={cn(
              "flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary",
              pathname?.startsWith(path.href)
                ? "bg-muted font-medium text-primary"
                : "text-muted-foreground"
            )}
          >
            {path.name}
          </Link>
        ))}
      </div>
      <div>{children}</div>
    </>
  );
};

/* interface ExamplesNavProps extends React.HTMLAttributes<HTMLDivElement> {
    tab?: boolean;
} */

/* export const ExamplesNav = ({
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
  }; */
