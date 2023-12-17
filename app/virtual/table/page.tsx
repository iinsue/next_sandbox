import { ReactTableVirtualized } from "./_components/table";

const VirtualTablePage = () => {
  return (
    <>
      <div>
        <p>
          For tables, the basis for the offset of the translate css function is
          from the row&apos; initial position itself. Because of this, we need
          to calculate the translateY pixel count different and base it off the
          the index
        </p>
        <ReactTableVirtualized />
        <br />
        <br />
      </div>
    </>
  );
};

export default VirtualTablePage;
