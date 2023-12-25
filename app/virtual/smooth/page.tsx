"use client";

import {
  elementScroll,
  useVirtualizer,
  VirtualizerOptions,
} from "@tanstack/react-virtual";
import { useCallback, useEffect, useRef, useState } from "react";

function easeInOutQuint(t: number) {
  return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
}

const VirtualSmoothPage = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const scrollingRef = useRef<number>(null);
  const [isMounted, setIsMounted] = useState(false);

  const scrollToFn: VirtualizerOptions<any, any>["scrollToFn"] = useCallback(
    (offset, canSmooth, instance) => {
      const duration = 1000;
      const start = parentRef.current?.scrollTop;
      const startTime = ((scrollingRef as any).current = Date.now());

      const run = () => {
        if (scrollingRef.current !== startTime) return;

        const now = Date.now();
        const elapsed = now - startTime;
        const progress = easeInOutQuint(Math.min(elapsed / duration, 1));
        const interpolated = start! + (offset - start!) * progress;

        if (elapsed < duration) {
          elementScroll(interpolated, canSmooth, instance);
          requestAnimationFrame(run);
        } else {
          elementScroll(interpolated, canSmooth, instance);
        }
      };

      requestAnimationFrame(run);
    },
    []
  );

  const rowVirtualizer = useVirtualizer({
    count: 10000,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 35,
    overscan: 5,
    scrollToFn,
  });

  const randomIndex = Math.floor(Math.random() * 10000);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return;

  return (
    <>
      <div className="h-full bg-slate-50 flex flex-col items-center pt-8">
        <div>
          <p className="w-[400px]">
            This smooth scroll example uses the <code>`scrollToFn`</code> to
            implement a custom scrolling function for the methods like{" "}
            <code>`scrollToIndex`</code> and <code>`scrollToOffset`</code>
          </p>
          <br />
          <br />
        </div>
        <div>
          <button onClick={() => rowVirtualizer.scrollToIndex(randomIndex)}>
            Scroll To Random Index ({randomIndex})
          </button>
        </div>
        <br />
        <div
          ref={parentRef}
          className="border"
          style={{
            height: "200px",
            width: "400px",
            overflow: "auto",
          }}
        >
          <div
            style={{
              height: rowVirtualizer.getTotalSize(),
              width: "100%",
              position: "relative",
            }}
          >
            {rowVirtualizer.getVirtualItems().map((virtualRow) => (
              <div
                key={virtualRow.index}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: virtualRow.size,
                  transform: `translateY(${virtualRow.start}px)`,
                }}
              >
                Row {virtualRow.index}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default VirtualSmoothPage;
