"use client";

import { faker } from "@faker-js/faker";
import { findIndex, groupBy } from "lodash";
import {
  useVirtualizer,
  defaultRangeExtractor,
  Range,
} from "@tanstack/react-virtual";
import { useCallback, useMemo, useRef } from "react";

const groupedNames = groupBy(
  Array.from({ length: 1000 })
    .map(() => faker.person.firstName())
    .sort(),
  (name) => name[0]
);

const groups = Object.keys(groupedNames);

const rows = groups.reduce(
  (acc, k) => [...acc, k, ...groupedNames[k]] as any,
  []
);

const VirtualStickyPage = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const activeStickyIndexRef = useRef(0);

  const stickyIndexes = useMemo(
    () => groups.map((gn) => findIndex(rows, (n) => n === gn)),
    []
  );

  const isSticky = (index: any) => stickyIndexes.includes(index);

  const isActiveSticky = (index: any) => activeStickyIndexRef.current === index;

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    estimateSize: () => 50,
    getScrollElement: () => parentRef.current,
    rangeExtractor: useCallback(
      (range: Range) => {
        activeStickyIndexRef.current = [...stickyIndexes]
          .reverse()
          .find((index) => range.startIndex >= index)!;

        const next = new Set([
          activeStickyIndexRef.current,
          ...defaultRangeExtractor(range),
        ]);

        return [...next].sort((a, b) => a - b);
      },
      [stickyIndexes]
    ),
  });

  return (
    <>
      <div
        ref={parentRef}
        className="List"
        style={{ height: `300px`, width: `400px`, overflow: "auto" }}
      >
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: "100%",
            position: "relative",
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualRow) => (
            <div
              key={virtualRow.index}
              className="ListItem"
              style={{
                ...(isSticky(virtualRow.index)
                  ? {
                      background: "#fff",
                      borderBottom: "1px solid #ddd",
                      zIndex: 1,
                    }
                  : {}),
                ...(isActiveSticky(virtualRow.index)
                  ? { position: "sticky" }
                  : {
                      position: "absolute",
                      transform: `translateY(${virtualRow.start}px)`,
                    }),
                top: 0,
                left: 0,
                width: "100%",
                height: `${virtualRow.size}px`,
              }}
            >
              {rows[virtualRow.index]}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VirtualStickyPage;
