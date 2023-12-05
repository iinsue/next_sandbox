"use client";

import { useCallback, useEffect, useRef } from "react";
import FilesDragAndDrop from "./_components/drag-drop";

const VideoUploadPage = () => {
  const dropRef = useRef(null);

  const onUpload = (files: any) => {
    console.log(files);
  };

  const handleDragOver = useCallback((event: any) => {
    event.preventDefault();
    event.stopPropagation();
  }, []);

  const handleDrop = useCallback((event: any) => {
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
      dropRef.current.addEventListener("drop", handleDrop);
    }

    return () => {
      dropRef.current.removeEventListener("dragover", handleDragOver);
      dropRef.current.removeEventListener("drop", handleDrop);
    };
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
