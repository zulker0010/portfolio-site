import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const TabBar: React.FC = () => {
  return(
  <section className="object-right-top">
    <Tabs defaultValue="Worth the flex" className="object-right-top">
      {/* Tab List */}
      <TabsList className="flex w-fit justify-center font-mono">
          <TabsTrigger value="Worth the flex" className="px-4 py-2 text-sm font-medium">
          Worth the flex
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
          <TabsTrigger value="Contact" className="px-4 py-2 text-sm font-medium">
            Contact
          </TabsTrigger>
      </TabsList>

      {/*Tab Content*/}
      <TabsContent value="Worth the flex">
        <div className="py-4">
          <h2 className="text-2xl font-mono font-semibold text text-nowrap">Cool stuff I'm extremely proud of</h2>
        </div>
      </TabsContent>
      <TabsContent value="Essays">
        <div className="py-4">
          <h2 className="text-lg font-mono font-semibold text">Things I think about</h2>
        </div>
      </TabsContent>
    

    </Tabs>
  </section>
  )
}

export default TabBar;