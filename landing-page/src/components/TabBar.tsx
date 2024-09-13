import React, {useEffect, useState} from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {Button} from "@/components/ui/button"

type TabType = 'Worth the flex' | 'Essays' | 'Wins' | 'Ls' | 'Contact'

const TabBar:React.FC = () => {
  const [activeTab, setActiveTab] = useState("Essays")

const onPress = () => {
  console.log("Hello World")
}

  return(  <>
    
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      {/* Tab List */}
      <TabsList className="flex w-fit justify-center border-b-2 font-mono">
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
          <h2 className="text-2xl font-mono font-semibold text">Things I think about</h2>
        </div>
      </TabsContent>
      <TabsContent value="Wins">
        <div className="py-4">
          <h2 className="text-2xl font-mono font-semibold text">A few good stories</h2>
        </div>
      </TabsContent>
      <TabsContent value="Ls">
        <div className="py-4">
          <h2 className="text-2xl font-mono font-semibold text">A LOT of learning curves</h2>
        </div>
      </TabsContent>
      <TabsContent value="Contact">
        <div className="py-4">
          <h2 className="text-2xl font-mono font-semibold text">Ways to reach me</h2>
        </div>
      </TabsContent>
    
</Tabs>
</>
  )
}

export default TabBar;