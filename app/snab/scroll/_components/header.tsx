"use client";

import { LogOut, Video } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export const SubtitlesHeader = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const params = useParams();
  const router = useRouter();
  const [exitOpen, setExitOpen] = useState(false);

  return (
    <>
      <div className="h-full">
        <div className="flex justify-center shadow-sm">
          <div className="min-w-[1440px] w-[1440px] h-16 grid grid-cols-[40.5rem_1fr] items-center">
            <div className="flex items-center justify-between px-4">
              <div className="flex items-center">
                <Video className="h-5 w-5 min-h-[20px] min-w-[20px] text-[#475569]" />
                <span className="ml-2 text-xs text-[#1E293B]"></span>
              </div>
            </div>
            <div className="flex items-center justify-end"></div>
          </div>
        </div>
        <div className="flex justify-center h-[calc(100%-4rem)]">
          {children}
        </div>
      </div>
    </>
  );
};
