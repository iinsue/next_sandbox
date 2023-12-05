"use client";

import { useCallback, useEffect, useRef } from "react";
import FilesDragAndDrop from "./_components/drag-drop";

const VideoUploadPage = () => {
  const dropRef = useRef<HTMLDivElement>(null);

  const onUpload = (files: any) => {
    console.log(files);
  };

  const handleDragOver = useCallback((event: DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
  }, []);

  const handleDrop = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();

    const { files } = event.dataTransfer;

    if (files && files.length) {
      onUpload(files);
    }
  }, []);

  useEffect(() => {
    if (dropRef.current) {
      dropRef.current.addEventListener("dragover", handleDragOver);
      dropRef.current.addEventListener("drop", handleDrop as any);
    }

    return () => {
      if (dropRef.current) {
        dropRef.current.removeEventListener("dragover", handleDragOver);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        dropRef.current.removeEventListener("drop", handleDrop as any);
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="files-drag-and-drop" ref={dropRef}>
        <FilesDragAndDrop onUpload={onUpload} />
      </div>
    </>
  );
};

export default VideoUploadPage;
