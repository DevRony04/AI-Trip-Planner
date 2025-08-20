import React from 'react'
import { Suggestions } from '@/app/_components/Hero'

const EmptyBoxState = ({onSelectOption}:any) => {
    return (
        <div className='mt-7'>
            <h2 className='font-bold text-3xl text-center'>Start Planning New <strong className='text-primary'>Trip</strong> Using AI</h2>
            <p className='text-center text-gray-500 mt-2'>Discover personalized travel itineraries, find the best Destinations, and plan your dream vacation effortlessly with the power of AI. Let our smart assistant do the hard work while you enjoy the journey.</p>

            <div className='flex flex-col gap-5 mt-7'>
          {Suggestions.map((Suggestion, index) => (
            <div key={index}
            onClick={()=>onSelectOption(Suggestion.title)}
             className='flex items-center gap-2 border rounded-xl p-3 cursor-pointer hover:border-primary hover:text-primary'>
              {Suggestion.icon}
              <h2 className='text-md'>{Suggestion.title}</h2>
            </div>
          ))}
        </div>
        </div>
    )
}

export default EmptyBoxState