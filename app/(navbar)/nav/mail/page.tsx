import { Button } from "@/components/ui/button";
import { SubHeader } from "../_components/sub-header";
import { pathExamples } from "../util";

const MailPage = () => {
  return (
    <>
      <div className="w-[500px] flex justify-between bg-blue-200 px-3">
        <SubHeader pathList={pathExamples} className="flex bg-red-200 ">
          <div>
            <Button>Hello</Button>
            <Button>Hello</Button>
          </div>
        </SubHeader>
      </div>
      <div>Mail Page</div>
    </>
  );
};

export default MailPage;
