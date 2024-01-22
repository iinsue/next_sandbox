import { SubHeader } from "./_components/sub-header";

const examples = [
  {
    name: "Mail",
    href: "/nav/mail",
  },
  {
    name: "Forms",
    href: "/nav/forms",
  },
  {
    name: "Music",
    href: "/nav/music",
  },
];

const NavigationPage = () => {
  return (
    <>
      <div>
        <SubHeader pathList={examples} />
        Navigation
      </div>
    </>
  );
};

export default NavigationPage;
