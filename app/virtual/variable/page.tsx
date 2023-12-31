"use client";

import { RowVirtualizerVariable } from "./_components/row-variable";

const rows = new Array(10000)
  .fill(true)
  .map(() => 25 + Math.round(Math.random() * 100));

const columns = new Array(10000)
  .fill(true)
  .map(() => 75 + Math.round(Math.random() * 100));

const VirtualVariablePage = () => {
  return (
    <>
      <div className="bg-slate-50 h-full flex justify-center p-8">
        <div className="w-full flex flex-col items-center">
          <p className="w-[400px]">
            These components are using <strong>variable</strong> sizes. This
            means that each element has a unique, but knowable dimension at
            render time.
          </p>
          <br />
          <br />
          <h3>Rows</h3>
          <RowVirtualizerVariable rows={rows} />
          <br />
          <br />
          <h3>Columns</h3>
        </div>
      </div>
    </>
  );
};

export default VirtualVariablePage;
