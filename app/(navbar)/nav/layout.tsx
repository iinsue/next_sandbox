import { Header } from "./_components/header";

const NavigationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>
        <Header />
        <main>{children}</main>
      </div>
    </>
  );
};

export default NavigationLayout;
