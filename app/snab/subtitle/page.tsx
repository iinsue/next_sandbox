"use client";

import { useRef, useState } from "react";
import { makeData, Subtitle } from "./_components/makeData";
import { useVirtualizer } from "@tanstack/react-virtual";
import { SubtitlesHeader } from "./_components/header";

const SubtitlePage = () => {
  const [data, setData] = useState(makeData(2000));

  // React Virtual 을 위한 Virtual Ref
  const parentRef = useRef<HTMLDivElement>(null);

  // React Virtual Hook
  const virtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 60,
    overscan: 10,
  });

  // React VirtualItem
  const virtualItems = virtualizer.getVirtualItems();

  return (
    <>
      <SubtitlesHeader>
        <div className="w-[42.5rem] h-full">
          <div
            ref={parentRef}
            className="w-full h-full max-w-full bg-slate-200"
            style={{
              contain: "strict",
              overflow: "auto",
            }}
          >
            <div
              className="w-full"
              style={{
                height: virtualizer.getTotalSize(),
                position: "relative",
              }}
            >
              {virtualItems.map((virtualColumn) => (
                <div
                  key={virtualColumn.key}
                  ref={virtualizer.measureElement}
                  data-index={virtualColumn.index}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    transform: `translateY(${virtualItems[0]?.start ?? 0}px)`,
                  }}
                >
                  {virtualItems.map((virtualRow) => (
                    <div
                      key={virtualRow.key}
                      ref={virtualizer.measureElement}
                      data-index={virtualRow.index}
                    >
                      <div className="bg-red-100 text-xs h-[20px] hover:text-blue-700">
                        {data[virtualRow.index].transcription}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </SubtitlesHeader>
    </>
  );
};

export default SubtitlePage;
