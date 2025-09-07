"use client";
import Itinerary from '@/app/create-new-trip/_components/Itinerary';
import { Trip } from '@/app/my-trips/page';
import { useUserDetail } from '@/app/provider';
import { api } from '@/convex/_generated/api';
import { useConvex } from 'convex/react';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useTripDetail } from '@/app/provider';
import GlobalMap from '@/app/create-new-trip/_components/GlobalMap';

const ViewTrip = () => {
  const { tripid } = useParams();
  const { userDetail, setUserDetail } = useUserDetail();
  const convex = useConvex();
  const [tripData, setTripData] = useState<Trip>();
  const { setTripDetailInfo } = useTripDetail();

  useEffect(() => {
    userDetail && GetTrip();
  }, [userDetail]);

  const GetTrip = async () => {
    const result = await convex.query(api.tripDetail.GetTripById, {
      uid: userDetail?._id,
      tripid: tripid + ''
    });
    console.log(result);
    setTripData(result);
    setTripDetailInfo(result?.tripDetail);
  };

  return (
    <div className='grid grid-cols-1 lg:grid-cols-5 gap-4 p-4 sm:p-6 md:p-8'>
      {/* Itinerary Section */}
      <div className='lg:col-span-3 order-2 lg:order-1'>
        <Itinerary />
      </div>

      {/* Map Section */}
      <div className='lg:col-span-2 order-1 lg:order-2'>
        <GlobalMap />
      </div>
    </div>
  )
}

export default ViewTrip
