"use client";

import { useHeader } from "@/hook/header/useHeader";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

interface HeaderItemProps {
  label: string;
  href: string;
}

export const HeaderItem = ({ label, href }: HeaderItemProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const { onOpen, isOpen } = useHeader();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClick = () => {
    onOpen(href);
    if (pathname !== href) {
      router.push(href);
    }
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-x-2 text-slate-400 text-sm",
        isActive && "text-blue-500"
      )}
    >
      <div className={cn(isActive && "border-b-[2px] border-blue-500")}>
        {label}
      </div>
    </button>
  );
};
