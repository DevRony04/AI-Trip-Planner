"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SignInButton, UserButton, useUser } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'

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
    const path = usePathname();
    console.log(path);
    

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
        <div className='flex items-center gap-5'>
       {!user ? <SignInButton mode='modal'>
        <Button>Get Started</Button>
       </SignInButton>:
       path == "/create-new-trip" ?
       <Link href={'/my-trips'}>
        <Button>My Trips</Button>
        </Link>
        :
        <Link href={'/create-new-trip'}>
        <Button>Create New Trip</Button>
        </Link>}
        <UserButton/>
        </div>
    </div>
  )
}

export default Header