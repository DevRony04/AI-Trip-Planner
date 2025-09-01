"use client";
import React, { useEffect, useState } from 'react'
import { Timeline } from "@/components/ui/timeline";
import HotelCardItem from './HotelCardItem';
import PlaceCardItem from './PlaceCardItem';
import { useTripDetail } from '@/app/provider';
import { TripInfo } from './ChatBox';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

// const TRIP_DATA = {
//         "destination": "Goa",
//         "duration": "5 Days",
//         "origin": "Kolkata",
//         "budget": "Moderate",
//         "group_size": "2",
//         "hotels": [
//             {
//                 "hotel_name": "The Leela Goa",
//                 "hotel_address": "Mobor, Cansaulim, Goa 403712, India",
//                 "price_per_night": "$150",
//                 "hotel_image_url": "https://www.theleela.com/images/hotels/goa/property-images/the-leela-goa-exterior.jpg",
//                 "geo_coordinates": {
//                     "latitude": 15.2005041,
//                     "longitude": 73.9868769
//                 },
//                 "rating": 4.5,
//                 "description": "Luxury hotel with multiple restaurants, pools and private beach access"
//             },
//             {
//                 "hotel_name": "Alila Diwa Goa",
//                 "hotel_address": "Majorda, Goa 403712, India",
//                 "price_per_night": "$120",
//                 "hotel_image_url": "https://cdn.goabookings.com/hotels/images/600x450/alila-diwa-goa-hotel-in-majorda.jpg",
//                 "geo_coordinates": {
//                     "latitude": 15.1066,
//                     "longitude": 73.8352
//                 },
//                 "rating": 4.3,
//                 "description": "Luxury hotel known for its design and tranquil setting"
//             },
//             {
//                 "hotel_name": "The Lalit Golf & Spa Resort Goa",
//                 "hotel_address": "Canacona, Goa 403702, India",
//                 "price_per_night": "$100",
//                 "hotel_image_url": "https://dynamic-media.cdn.cnn.com/api/v1/image/348693_1.jpg?q=80&size=large&w=1280&h=720&profile=cnn",
//                 "geo_coordinates": {
//                     "latitude": 15.1012,
//                     "longitude": 74.1109
//                 },
//                 "rating": 4.2,
//                 "description": "Luxury hotel with golf course and spa."
//             }
//         ],
//         "itinerary": [
//             {
//                 "day": 1,
//                 "day_plan": "Arrival in Goa and Beach Relaxation",
//                 "best_time_to_visit_day": "Afternoon",
//                 "activities": [
//                     {
//                         "place_name": "Palolem Beach",
//                         "place_details": "Relax on the beach, swim, sunbathe",
//                         "place_image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Palolem_Beach_Goa_India.jpg/1280px-Palolem_Beach_Goa_India.jpg",
//                         "geo_coordinates": {
//                             "latitude": 15.0333,
//                             "longitude": 73.9667
//                         },
//                         "place_address": "Palolem, Goa",
//                         "ticket_pricing": "Free",
//                         "time_travel_each_location": "30 mins",
//                         "best_time_to_visit": "Anytime"
//                     }
//                 ]
//             },
//             {
//                 "day": 2,
//                 "day_plan": "Exploring Old Goa and Panjim",
//                 "best_time_to_visit_day": "Morning",
//                 "activities": [
//                     {
//                         "place_name": "Basilica of Bom Jesus",
//                         "place_details": "A UNESCO World Heritage Site",
//                         "place_image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Basilica_of_Bom_Jesus.jpg/1280px-Basilica_of_Bom_Jesus.jpg",
//                         "geo_coordinates": {
//                             "latitude": 15.4543,
//                             "longitude": 73.8279
//                         },
//                         "place_address": "Old Goa, Goa",
//                         "ticket_pricing": "Free",
//                         "time_travel_each_location": "1 hour",
//                         "best_time_to_visit": "Morning"
//                     },
//                     {
//                         "place_name": "Se Cathedral",
//                         "place_details": "Grand cathedral in Old Goa",
//                         "place_image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Se_Cathedral_Old_Goa.jpg/1280px-Se_Cathedral_Old_Goa.jpg",
//                         "geo_coordinates": {
//                             "latitude": 15.454,
//                             "longitude": 73.828
//                         },
//                         "place_address": "Old Goa, Goa",
//                         "ticket_pricing": "Free",
//                         "time_travel_each_location": "30 mins",
//                         "best_time_to_visit": "Morning"
//                     },
//                     {
//                         "place_name": "Panjim City",
//                         "place_details": "Explore the Latin Quarter, churches, and markets",
//                         "place_image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Panjim_City_Goa.jpg/1280px-Panjim_City_Goa.jpg",
//                         "geo_coordinates": {
//                             "latitude": 15.4992,
//                             "longitude": 73.8285
//                         },
//                         "place_address": "Panjim, Goa",
//                         "ticket_pricing": "Free",
//                         "time_travel_each_location": "2 hours",
//                         "best_time_to_visit": "Afternoon"
//                     }
//                 ]
//             },
//             {
//                 "day": 3,
//                 "day_plan": "South Goa Beaches and Water Sports",
//                 "best_time_to_visit_day": "Morning",
//                 "activities": [
//                     {
//                         "place_name": "Colva Beach",
//                         "place_details": "Relax and enjoy water sports",
//                         "place_image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Colva_Beach_Goa_India.jpg/1280px-Colva_Beach_Goa_India.jpg",
//                         "geo_coordinates": {
//                             "latitude": 15.2703,
//                             "longitude": 73.8207
//                         },
//                         "place_address": "Colva, Goa",
//                         "ticket_pricing": "Varies",
//                         "time_travel_each_location": "3 hours",
//                         "best_time_to_visit": "Anytime"
//                     },
//                     {
//                         "place_name": "Benaulim Beach",
//                         "place_details": "Relax and enjoy water sports",
//                         "place_image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Benaulim_beach_Goa_India.jpg/1280px-Benaulim_beach_Goa_India.jpg",
//                         "geo_coordinates": {
//                             "latitude": 15.25,
//                             "longitude": 73.85
//                         },
//                         "place_address": "Benaulim, Goa",
//                         "ticket_pricing": "Varies",
//                         "time_travel_each_location": "2 hours",
//                         "best_time_to_visit": "Afternoon"
//                     }
//                 ]
//             },
//             {
//                 "day": 4,
//                 "day_plan": "North Goa Beaches and Nightlife",
//                 "best_time_to_visit_day": "Afternoon",
//                 "activities": [
//                     {
//                         "place_name": "Baga Beach",
//                         "place_details": "Known for its vibrant nightlife",
//                         "place_image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Baga_Beach_Goa_India.jpg/1280px-Baga_Beach_Goa_India.jpg",
//                         "geo_coordinates": {
//                             "latitude": 15.5353,
//                             "longitude": 73.7856
//                         },
//                         "place_address": "Baga, Goa",
//                         "ticket_pricing": "Varies",
//                         "time_travel_each_location": "4 hours",
//                         "best_time_to_visit": "Afternoon"
//                     },
//                     {
//                         "place_name": "Calangute Beach",
//                         "place_details": "Famous for its water sports and sunset views",
//                         "place_image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Calangute_Beach_Goa_India.jpg/1280px-Calangute_Beach_Goa_India.jpg",
//                         "geo_coordinates": {
//                             "latitude": 15.5364,
//                             "longitude": 73.7828
//                         },
//                         "place_address": "Calangute, Goa",
//                         "ticket_pricing": "Varies",
//                         "time_travel_each_location": "3 hours",
//                         "best_time_to_visit": "Evening"
//                     }
//                 ]
//             },
//             {
//                 "day": 5,
//                 "day_plan": "Departure from Goa",
//                 "best_time_to_visit_day": "Morning",
//                 "activities": []
//             }
//         ]
//     }

const Itinerary = () => {
    //@ts-ignore
    const {tripDetailInfo,setTripDetailInfo} = useTripDetail();
    const [tripData,setTripData] = useState<TripInfo | null>(null);

    useEffect(()=>{
        tripDetailInfo && setTripData(tripDetailInfo)
    },[tripDetailInfo])

    const data = tripData? [
        {
          key: "recommended-hotels", 
          title: "Recommended Hotels",
          content: (
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {tripData?.hotels.map((hotel, index) => (
                <HotelCardItem key={hotel?.hotel_name ?? index} hotel={hotel}/>
              ))}
            </div>
          ),
        }, 
        ...tripData?.itinerary.map((dayData, index) => ({
          key: `day-${dayData?.day}-${index}`,   // already correct
          title : `Day ${dayData?.day}`,
          content : (
            <div className="space-y-4">
              <p className="text-sm text-gray-600 font-medium">
                Best Time: {dayData?.best_time_to_visit_day}
              </p>
              {dayData?.activities && dayData.activities.length > 0 ? (
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  {dayData.activities.map((activity, idx) => (
                    <PlaceCardItem 
                      key={`${dayData?.day}-${activity?.place_name ?? idx}`} 
                      activity={activity}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic">No activities planned for this day</p>
              )}
            </div>
          )
        }))
      ]:[];
      return (
        <div className="relative w-full overflow-auto h-[83vh]">
         {tripData ? <Timeline data={data} tripData={tripData} />
         :
         <div>
          <h2 className='flex gap-2 items-center absolute bottom-10 text-3xl text-white left-30'> <ArrowLeft/>Getting to know you to build perfect trip here...</h2>
         <Image src={'/travel.png'} alt='travel' width={800} height={800}
          className='w-full h-full object-cover rounded-3xl'
          />        
          </div>
         }
        </div>
      );
}

export default Itinerary