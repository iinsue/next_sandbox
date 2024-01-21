import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MusicPage = () => {
  return (
    <>
      <div>Music Image</div>
      <div>
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
      </div>
    </>
  );
};

export default MusicPage;
