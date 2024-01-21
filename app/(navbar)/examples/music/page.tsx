import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MusicPage = () => {
  return (
    <>
      <div>Music Image</div>
      <div>
        <Tabs>
          <div>
            <TabsList>
              <TabsTrigger value="music">Music</TabsTrigger>
              <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
              <TabsTrigger value="live">Live</TabsTrigger>
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
