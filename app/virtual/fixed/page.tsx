import { RowVirtualizerFixed } from "./_components/row-fixed";

const VirtualFixed = () => {
  return (
    <>
      <div>
        <p>
          These components are using <strong>fixed</strong> sizes. This means
          that every element&apos;s dimensions are hard-coded to the same value
          and never change.
        </p>
        <br />
        <br />
        <h3>Rows</h3>
        <RowVirtualizerFixed />
      </div>
    </>
  );
};

export default VirtualFixed;
