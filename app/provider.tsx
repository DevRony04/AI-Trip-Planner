"use client"
import React, { useContext, useEffect, useState } from 'react'
import Header from './_components/Header';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useUser } from '@clerk/nextjs';
import { UserDetailContext } from '@/context/UserDetailContext';
import { TripContextType, TripDetailContext } from '@/context/TripDetailContext';
import { TripInfo } from './create-new-trip/_components/ChatBox';

const Provider = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    const CreateUser = useMutation(api.user.CreateNewUser)

    const [userDetail, setUserDetail] = useState<any>();
    const [tripDetailInfo,setTripDetailInfo] = useState<TripInfo | null>(null);
    const { user } = useUser();


    useEffect(() => {
        user && createNewUser();
    }, [user])

    const createNewUser = async () => {
        if (user) {

            // Save new user if it isn't exits
            const result = await CreateUser({
                email: user?.primaryEmailAddress?.emailAddress ?? '',
                imageUrl: user?.imageUrl,
                name: user?.fullName ?? ''
            })
            setUserDetail(result);
        }
    }
    return (
        <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
            <TripDetailContext.Provider value={{tripDetailInfo, setTripDetailInfo}}>
            <div>
                <Header />
                {children}
            </div>
            </TripDetailContext.Provider>
        </UserDetailContext.Provider>
    )
}

export default Provider

export const useUserDetail = () => {
    const context = useContext(UserDetailContext);
    if (context === null) {
        throw new Error('useUserDetail must be used within a UserDetailProvider');
    }
    return context;
}

export const useTripDetail = ():TripContextType =>{
    const context = useContext(TripDetailContext);
    if (context === undefined) {
        throw new Error('useTripDetail must be used within a TripDetailProvider');
    }
    return context;
}