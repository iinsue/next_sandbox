import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MusicMain } from "./music/main";
import { FormsComponent } from "./forms/main";
import { LiveComponent } from "./live/main";
import { Button } from "@/components/ui/button";

const tabs = [
  {
    type: "tab",
    title: "Music",
    value: "music",
    content: <MusicMain />,
  },
  {
    type: "tab",
    title: "Forms",
    value: "forms",
    content: <FormsComponent />,
  },
  {
    type: "tab",
    title: "Live",
    value: "live",
    content: <LiveComponent />,
  },
  {
    type: "button",
    title: "Button",
    value: "button",
    content: <LiveComponent />,
  },
];

export const TabHeader = () => {
  return (
    <>
      <Tabs defaultValue="music">
        <div>
          <TabsList>
            {tabs.map((tab) =>
              tab.type === "button" ? (
                <Button key={tab.value}>{tab.title}</Button>
              ) : (
                <TabsTrigger value={tab.value} key={tab.value}>
                  {tab.title}
                </TabsTrigger>
              )
            )}
          </TabsList>
          <div>
            {tabs.map((tab) => (
              <TabsContent key={tab.value} value={tab.value}>
                {tab.content}
              </TabsContent>
            ))}
          </div>
        </div>
      </Tabs>
    </>
  );
};
