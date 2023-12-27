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
                      {/* 배경색이 없는 경우 겹쳐 보임. */}
                      <div className="text-xs bg-white relative group">
                        {/* 기본 높이가 있어야 group-focus 로 높이 애니메이션이 가능함. */}
                        <label className="h-4 flex flex-col group-focus-within:h-12 bg-red-100 transform transition-all duration-300">
                          {data[virtualRow.index].transcription}
                          <input />
                        </label>
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
