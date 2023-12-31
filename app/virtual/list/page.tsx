"use client";

import { loremIpsum } from "lorem-ipsum";
import { useEffect, useState } from "react";
import {
  AutoSizer,
  List,
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized";

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
        sentenceLowerBound: 2,
        sentenceUpperBound: 100,
      }),
    };
  });

const cache = new CellMeasurerCache({
  fixedWidth: true,
  defaultHeight: 100,
});

const renderRow = ({ index, key, style, parent }: any) => {
  return (
    <CellMeasurer
      key={key}
      cache={cache}
      parent={parent}
      columnIndex={0}
      rowIndex={index}
    >
      {({ registerChild }) => (
        <div
          style={style}
          ref={registerChild as undefined}
          className="border-b border-[#ebeced] mx-0 my-[5px] flex items-center text-left"
        >
          <div className="mr-[10px] min-w-[40px]">
            <img src={list[index].image} alt="" />
          </div>
          <div className="p-[10px]">
            <div>{list[index].name}</div>
            <div>{list[index].text}</div>
          </div>
        </div>
      )}
    </CellMeasurer>
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
                deferredMeasurementCache={cache}
                rowHeight={cache.rowHeight}
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
