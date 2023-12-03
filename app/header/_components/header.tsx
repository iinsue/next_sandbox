"use client";

import { adminRoutes, mainRoutes } from "@/utils/main-routes";
import { usePathname } from "next/navigation";
import { HeaderItem } from "./header-item";

export const Header = () => {
  const pathname = usePathname();
  const isAdmin = pathname?.includes("/admin");
  const routes = isAdmin ? adminRoutes : mainRoutes;

  return (
    <>
      <div className="flex gap-2 bg-slate-50 shadow-md py-2 px-3">
        {routes.map((route) => (
          <HeaderItem key={route.href} label={route.label} href={route.href} />
        ))}
      </div>
    </>
  );
};
