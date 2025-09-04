"use client";
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { Hotel } from './ChatBox';
import Link from 'next/link';
import { BedDouble, Star, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import axios from 'axios';

type Props = {
    hotel : Hotel
}

const HotelCardItem = ({hotel} : Props) => {

  const [photoUrl,setPhotUrl] = useState<string>();

  useEffect(()=>{
      hotel&&GetGooglePlaceDetail();
  },[hotel])

const GetGooglePlaceDetail = async () =>{
  const result = await axios.post('/api/google-place-detail',{
    placeName : hotel?.hotel_name
  })
  if (result?.data?.e) {
    return;
  }
  setPhotUrl(result?.data);
  
}

  return (
    <div className='flex flex-col gap-1'>
                <Image src={photoUrl?photoUrl:'/placeholder.jpg'} alt='place-image' width={400} height={200}
                className='rounded-xl shadow object-cover mb-2 w-full h-[200px]'
                />
                <h2 className='font-semibold text-lg'>{hotel?.hotel_name}</h2>
                <h2 className='text-gray-700'>{hotel.hotel_address}</h2>
                <div className='flex justify-between items-center'>
                <p className='flex gap-2 text-green-600'> <Wallet/> {hotel.price_per_night}</p>
                <p className='text-orange-600 gap-2 flex'><Star/> {hotel.rating}</p>
                </div>
                {/*<p className='line-clamp-2 text-gray-600'>{hotel?.description}</p>*/}
                <Link href={"https://www.google.com/maps/search/?api=1&query="+hotel?.hotel_name} target='_blank'> 
                <Button variant={'outline'} className='mt-1 w-full'>View <BedDouble /></Button>
                </Link>
                </div>
  )
}

export default HotelCardItem