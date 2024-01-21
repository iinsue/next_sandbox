import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MusicMain } from "./music/main";

const tab = [
  {
    title: "Music",
    value: "music",
    content: <MusicMain />,
  },
];

export const TabHeader = () => {
  return (
    <>
      <Tabs defaultValue="music">
        <div>
          <TabsList>
            <TabsTrigger value="music">Mail</TabsTrigger>
            <TabsTrigger value="podcasts">Forms</TabsTrigger>
            <TabsTrigger value="live">Music</TabsTrigger>
          </TabsList>
          <div>
            <TabsContent value="music">MusicContents</TabsContent>
            <TabsContent value="podcasts">PodCastContents</TabsContent>
            <TabsContent value="live">LiveContents</TabsContent>
          </div>
        </div>
      </Tabs>
    </>
  );
};
