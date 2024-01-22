import { TabsContent } from "@/components/ui/tabs";
import { SubTab } from "../_components/sub-header";
import { tabExamples } from "../util";

const MusicPage = () => {
  return (
    <>
      <SubTab tabList={tabExamples}>
        <div>MusicPage</div>
        <TabsContent value="music">
          <div>Music Content</div>
        </TabsContent>
      </SubTab>
    </>
  );
};

export default MusicPage;
