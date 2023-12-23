"use client";

import { Button } from "@/components/ui/button";
import { faker } from "@faker-js/faker";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef } from "react";

const randomNumber = (min: number, max: number) =>
  faker.number.int({ min, max });

const sentences = new Array(10000)
  .fill(true)
  .map(() => faker.lorem.sentence(randomNumber(20, 70)));

export const RowVirtualizerDynamic = () => {
  const parentRef = useRef<HTMLDivElement>(null);

  const count = sentences.length;
  const virtualizer = useVirtualizer({
    count,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 45,
  });

  const items = virtualizer.getVirtualItems();

  return (
    <>
      <div className="space-x-2 mt-2">
        <Button onClick={() => virtualizer.scrollToIndex(0)}>
          scroll to the top
        </Button>
        <Button onClick={() => virtualizer.scrollToIndex(count / 2)}>
          scroll to the middle
        </Button>
        <Button onClick={() => virtualizer.scrollToIndex(count - 1)}>
          scroll to the end
        </Button>
      </div>
      <div
        ref={parentRef}
        className="h-[400px] w-[400px] overflow-auto border border-[#e6e4dc] max-w-full mt-8"
        style={{
          contain: "strict",
        }}
      >
        <div
          className="relative w-full"
          style={{
            height: virtualizer.getTotalSize(),
          }}
        >
          {virtualizer.getVirtualItems().map((virtualColumn) => (
            <div
              key={virtualColumn.key}
              ref={virtualizer.measureElement}
              data-index={virtualColumn.index}
              className="absolute top-0 left-0 w-full"
              style={{
                transform: `translateY(${items[0]?.start ?? 0}px)`,
              }}
            >
              {items.map((virtualRow) => (
                <div
                  key={virtualRow.key}
                  data-index={virtualRow.index}
                  ref={virtualizer.measureElement}
                >
                  <div className="py-2 px-0">
                    <div>Row {virtualRow.index}</div>
                    <div>{sentences[virtualRow.index]}</div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
