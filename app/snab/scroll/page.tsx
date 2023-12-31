"use client";
import { SubtitlesHeader } from "./_components/header";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import { makeData } from "./_components/makeData";

const ShadScrollPage = () => {
  const [data, setData] = useState(makeData(2000));
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (isMounted === false) return;

  return (
    <>
      <SubtitlesHeader>
        <ScrollArea className="h-full w-[430px] rounded-md border">
          <div>
            {data.map((virtualRow) => (
              <div key={virtualRow.demoTranscribeCompleteIdx}>
                {/* 배경색이 없는 경우 겹쳐 보임. */}
                <div className="text-xs bg-white relative group">
                  {/* 기본 높이가 있어야 group-focus 로 높이 애니메이션이 가능함. */}
                  <label className="h-4 flex flex-col group-focus-within:h-12 bg-red-100 transform transition-all duration-300">
                    {virtualRow.transcription}
                    <input />
                  </label>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </SubtitlesHeader>
    </>
  );
};

export default ShadScrollPage;
