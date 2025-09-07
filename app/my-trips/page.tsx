"use client"
import { Button } from '@/components/ui/button';
import { api } from '@/convex/_generated/api';
import { useConvex } from 'convex/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useUserDetail } from '../provider';
import { TripInfo } from '../create-new-trip/_components/ChatBox';
import MyTripCardItem from './_components/MyTripCardItem';

export type Trip = {
  tripId: any,
  tripDetail: TripInfo,
  _id: String
}

const MyTrips = () => {
  const [myTrips, setMyTrips] = useState<Trip[]>([]);
  const { userDetail } = useUserDetail();
  const convex = useConvex();

  useEffect(() => {
    userDetail && GetUserTrip();
  }, [userDetail])

  const GetUserTrip = async () => {
    const result = await convex.query(api.tripDetail.GetUserTrips, {
      uid: userDetail?._id
    });
    setMyTrips(result);
    console.log(result);
  }

  return (
    <div className='px-4 sm:px-6 md:px-10 lg:px-24 xl:px-48 py-6 sm:py-10'>
      <h2 className='font-bold text-2xl sm:text-3xl'>My Trips</h2>

      {myTrips?.length === 0 && (
        <div className='p-6 sm:p-7 border rounded-2xl flex flex-col items-center justify-center gap-4 sm:gap-5 mt-6 text-center'>
          <h2 className="text-sm sm:text-base">You haven't planned any trips yet!</h2>
          <Link href={'/create-new-trip'}>
            <Button size="sm" className="sm:size-default">Create New Trip</Button>
          </Link>
        </div>
      )}

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-6'>
        {myTrips.map((trip, index) => (
          <MyTripCardItem trip={trip} key={index} />
        ))}
      </div>
    </div>
  )
}

export default MyTrips
