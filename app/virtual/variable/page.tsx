"use client";

import { useVirtualizer } from "@tanstack/react-virtual";

const rows = new Array(10000)
  .fill(true)
  .map(() => 25 + Math.round(Math.random() * 100));

const columns = new Array(10000)
  .fill(true)
  .map(() => 75 + Math.round(Math.random() * 100));

const VirtualVariablePage = () => {
  return (
    <>
      <div className="bg-slate-50 h-full flex justify-center">
        <div>
          <p>
            These components are using <strong>variable</strong> sizes. This
            means that each element has a unique, but knowable dimension at
            render time.
          </p>
          <br />
          <br />
          <h3>Rows</h3>
          <br />
          <br />
          <h3>Columns</h3>
        </div>
      </div>
    </>
  );
};

export default VirtualVariablePage;
