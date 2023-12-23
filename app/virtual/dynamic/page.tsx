"use client";

import { usePathname } from "next/navigation";
import { RowVirtualizerDynamic } from "./_components/row-dynamic";

const VirtualDynamicPage = () => {
  const pathName = usePathname();

  return (
    <>
      <div className="bg-slate-50 h-full flex flex-col items-center pt-8">
        <p className="w-[400px]">
          These components are using <strong>dynamic</strong> sizes.
          <br />
          This means that each element&apos; exact dimensions are unknown when
          rendered.
          <br />
          An estimated dimension is used to get an a initial measurement, then
          this measurement is readjusted on the fly as each element is rendered.
        </p>
        <RowVirtualizerDynamic />
      </div>
    </>
  );
};

export default VirtualDynamicPage;
