import React, { useState, useEffect } from 'react'
import { Trip } from '../page'
import Image from 'next/image';
import { ArrowBigRightIcon } from 'lucide-react';
import axios from 'axios';
import Link from 'next/link';

type Props = {
  trip: Trip
}

const MyTripCardItem = ({ trip }: Props) => {
  const [photoUrl, setPhotUrl] = useState<string | undefined>();

  useEffect(() => {
    trip && GetGooglePlaceDetail();
  }, [trip])

  const GetGooglePlaceDetail = async () => {
    try {
      const result = await axios.post('/api/google-place-detail', {
        placeName: trip?.tripDetail?.destination
      });

      // Only accept a string response as a valid photo URL
      if (typeof result?.data === 'string' && result.data.trim() !== '') {
        setPhotUrl(result.data);
      } else {
        // ensure we don't store non-string values
        setPhotUrl(undefined);
      }
    } catch (err) {
      // optional: console.error(err)
      setPhotUrl(undefined);
    }
  }

  // Safely decide src for Image (never pass empty string)
  const safePhoto = (typeof photoUrl === 'string' && photoUrl.trim() !== '') ? photoUrl : '/placeholder.jpg';

  return (
    <Link href={'/view-trip/' + trip?.tripId} className='p-5 shadow rounded-2xl'>
      <Image
        className='rounded-xl object-cover w-full h-[270px]'
        src={safePhoto}
        alt={trip?.tripId || "Trip image"}
        width={400}
        height={400}
      />
      <h2 className='flex gap-2 font-semibold text-xl mt-2'>
        {trip?.tripDetail?.origin} <ArrowBigRightIcon /> {trip?.tripDetail?.destination}
      </h2>
      <h2 className='mt-2 text-gray-700'>
        {trip?.tripDetail?.duration} Trip with {trip?.tripDetail?.budget} Budget
      </h2>
    </Link>
  )
}

export default MyTripCardItem
