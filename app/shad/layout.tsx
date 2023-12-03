import { ExamplesNav } from "./dashboard/_components/examples-nav";

interface ExampleslayoutProps {
  children: React.ReactNode;
}

const ExamplesLayout = ({ children }: ExampleslayoutProps) => {
  return (
    <>
      <div className="container relative">
        <section>
          <ExamplesNav />
          <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow">
            {children}
          </div>
        </section>
      </div>
    </>
  );
};

export default ExamplesLayout;
