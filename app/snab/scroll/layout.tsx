const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-col items-center h-full">
        <div className="min-h-[2.5rem] shadow-sm flex w-full justify-center items-center">
          Snappi
        </div>
        <div className="w-full h-full">{children}</div>
      </div>
    </>
  );
};

export default Layout;
