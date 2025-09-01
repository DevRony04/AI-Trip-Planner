"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SignInButton, useUser } from '@clerk/nextjs'

const Header = () => {

    const menuOptions = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Pricing",
            path: "/pricing",
        },
        {
            name : "Contact Us",
            path : "/contact-us",
        }
        
    ]

    const {user} = useUser();

  return (
    <div className='flex justify-between items-center p-4'>
        {/* logo */}
        <div className='flex items-center gap-2'>
            <Image src="/logo.svg" alt="logo" width={30} height={30} />
            <Link href={'/'}>
            <h2 className='text-2xl font-bold'>AI Trip Planner</h2>
            </Link>
        </div>
        {/*Menu-Options*/}
        <div className='flex items-center gap-8'>
            {menuOptions.map((menu,index)=>(
                <Link href={menu.path} key={index}>
                 <h2 className='text-lg hover:scale-105 transition-all hover:text-primary'>{menu.name}</h2> 
                </Link>              
            ))}
        </div>
        {/* Get Started Button */}
       {!user ? <SignInButton mode='modal'>
        <Button>Get Started</Button>
        </SignInButton>:
        <Link href={'/create-new-trip'}>
        <Button>Create New Trip</Button>
        </Link>}
    </div>
  )
}

export default Header