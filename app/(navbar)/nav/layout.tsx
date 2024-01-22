import { Header } from "./_components/header";
import { SubHeader } from "./_components/sub-header";

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
