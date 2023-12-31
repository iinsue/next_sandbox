"use client";

import { loremIpsum } from "lorem-ipsum";
import { useEffect, useState } from "react";
import { AutoSizer, List } from "react-virtualized";

const rowCount = 5000;
const listHeight = 400;
const rowHeight = 50;
const rowWidth = 700;

const list = Array(rowCount)
  .fill(undefined)
  .map((val, idx) => {
    return {
      id: idx,
      name: "John Doe",
      image: "http://via.placeholder.com/40",
      text: loremIpsum({
        count: 1,
        units: "sentences",
        sentenceLowerBound: 4,
        sentenceUpperBound: 8,
      }),
    };
  });

const renderRow = ({ index, key, style }: any) => {
  return (
    <div
      key={key}
      style={style}
      className="border-b border-[#ebeced] mx-[5px] my-0 flex items-center text-left"
    >
      <div className="mr-[10px]">
        <img src={list[index].image} alt="" />
      </div>
      <div className="p-[10px]">
        <div>{list[index].name}</div>
        <div>{list[index].text}</div>
      </div>
    </div>
  );
};

const VirtualizedListPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (isMounted === false) return;

  return (
    <>
      <div className="text-center">
        <div className="p-[10px] h-[calc(100vh-20px)]">
          <AutoSizer>
            {({ width, height }) => (
              <List
                width={width}
                height={height}
                rowHeight={rowHeight}
                rowRenderer={renderRow}
                rowCount={list.length}
                overscanRowCount={3}
              />
            )}
          </AutoSizer>
        </div>
      </div>
    </>
  );
};

export default VirtualizedListPage;
