"use client";
import React, { useState } from 'react'
import ChatBox from './_components/ChatBox'
import Itinerary from './_components/Itinerary'
import GlobalMap from './_components/GlobalMap';
import { Button } from '@/components/ui/button';
import { Globe2, Plane } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const CreateNewTrip = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 p-4 sm:p-6 md:p-10'>
      {/* Chat Section */}
      <div className="order-2 md:order-1">
        <ChatBox />
      </div>

      {/* Map/Itinerary Section */}
      <div className='col-span-1 md:col-span-2 relative order-1 md:order-2'>
        {activeIndex === 0 ? <Itinerary /> : <GlobalMap />}

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 bg-black rounded-2xl hover:bg-gray-700"
              onClick={() => setActiveIndex(activeIndex === 0 ? 1 : 0)}
              size="sm"
            >
              {activeIndex === 0 ? <Plane /> : <Globe2 />}
            </Button>
          </TooltipTrigger>

          <TooltipContent>
            Switch Between Map and Trip
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  )
}

export default CreateNewTrip
