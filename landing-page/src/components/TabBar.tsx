import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const TabBar: React.FC = () => {
  return(
    <Tabs defaultValue="Things I'm proud of">
      {/* Tab List */}
      <TabsList className="flex w-96 justify-center font-mono">
          <TabsTrigger value="Things I'm proud of" className="px-4 py-2 text-sm font-medium">
            Things I'm proud of
          </TabsTrigger>
          <TabsTrigger value="Essays" className="px-4 py-2 text-sm font-medium">
            Essays
          </TabsTrigger>
          <TabsTrigger value="Wins" className="px-4 py-2 text-sm font-medium">
            Wins
          </TabsTrigger>
          <TabsTrigger value="Ls" className="px-4 py-2 text-sm font-medium">
            Ls
          </TabsTrigger>
      </TabsList>

      {/*Tab Content*/}
      <TabsContent value="Things I'm proud of">
        <div className="p-4">
          <h2 className="text-lg font-mono font-semibold text">Cool stuff I'm extremely proud of</h2>
        </div>

      </TabsContent>
    

    </Tabs>
  )
}

export default TabBar;