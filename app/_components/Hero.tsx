"use client";
import HeroVideoDialog from '@/components/magicui/hero-video-dialog'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useUser } from '@clerk/nextjs'
import { ArrowDown, Globe2, Landmark, Plane, Send } from 'lucide-react'
import { useRouter } from 'next/navigation';
import React from 'react'

export const Suggestions = [
  {
    title: "Create New Trip",
    icon: <Globe2 className='text-blue-500 h-5 w-5' />
  },
  {
    title: "Inspire Me Where To Go",
    icon: <Plane className='text-green-500 h-5 w-5' />
  },
  {
    title: "Discover Hidden Gems",
    icon: <Landmark className='text-orange-500 h-5 w-5' />
  },
  {
    title: "Adventure Destination",
    icon: <Globe2 className='text-yellow-600 h-5 w-5' />
  },
]

const Hero = () => {

  const { user } = useUser();
  const router = useRouter();

  const onSend = () => {
    if (!user) {
      router.push("/sign-in")
      return;
    }
    // Navigate to Create Trip Planner Web Page
    router.push("/create-new-trip")
  }

  return (
    <div className='w-full mt-16 sm:mt-24 flex justify-center px-4 sm:px-0'>
      {/* Content */}
      <div className='w-full text-center max-w-3xl space-y-6'>
        <h1 className='text-2xl sm:text-4xl md:text-5xl font-bold leading-snug'>
          Hey, I'm your personal <span className='text-primary'>Trip Planner</span>
        </h1>
        <p className='text-base sm:text-lg px-2 sm:px-0'>
          Tell me what you want, and I'll handle the rest: Flights, Hotels, Trip Planning — all in seconds.
        </p>
        
        {/* Input Box */}
        <div>
          <div className='border rounded-2xl p-3 sm:p-4 relative'>
            <Textarea
              placeholder='Create a trip for Paris from New York'
              className='w-full h-24 sm:h-28 bg-transparent border-none focus-visible:ring-0 shadow-none resize-none text-sm sm:text-base'
            />
            <Button
              size={'icon'}
              className='absolute bottom-4 right-4 sm:bottom-6 sm:right-6'
              onClick={() => onSend()}
            >
              <Send className='h-4 w-4' />
            </Button>
          </div>
        </div>

        {/* Suggestion List*/}
        <div className='flex flex-wrap justify-center gap-3 sm:gap-5 px-2'>
          {Suggestions.map((Suggestion, index) => (
            <div
              key={index}
              className='flex items-center gap-2 border rounded-full px-3 py-2 cursor-pointer text-xs sm:text-sm hover:bg-primary hover:text-white'
            >
              {Suggestion.icon}
              <h2>{Suggestion.title}</h2>
            </div>
          ))}
        </div>

        <div className='flex items-center justify-center flex-col'>
          <h2 className='my-6 sm:my-7 mt-10 sm:mt-14 flex flex-col sm:flex-row gap-1 sm:gap-2 text-center text-sm sm:text-base'>
            Not Sure Where to Start? <strong>See How it works</strong>
            <ArrowDown className="mx-auto sm:mx-0" />
          </h2>

          {/* Video Section */}
          <HeroVideoDialog
            className="block dark:hidden"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/F02_MVdAqCk"
            thumbnailSrc="https://mma.prnewswire.com/media/2401528/1_MindtripProduct.jpg?p=facebook"
            thumbnailAlt="Dummy Video Thumbnail"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
