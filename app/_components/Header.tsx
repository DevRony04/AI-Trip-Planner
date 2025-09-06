"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SignInButton, UserButton, useUser } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import { Menu, X } from "lucide-react"

const Header = () => {
  const menuOptions = [
    { name: "Home", path: "/" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact Us", path: "/contact-us" }
  ]

  const { user } = useUser();
  const path = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center p-4 border-b relative">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image src="/logo.svg" alt="logo" width={30} height={30} />
        <Link href={"/"}>
          <h2 className="text-2xl font-bold">AI Trip Planner</h2>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        {menuOptions.map((menu, index) => (
          <Link href={menu.path} key={index}>
            <h2 className="text-lg hover:scale-105 transition-all hover:text-primary">
              {menu.name}
            </h2>
          </Link>
        ))}
      </div>

      {/* Right Side (Buttons) */}
      <div className="flex items-center gap-5">
        {!user ? (
          <SignInButton mode="modal">
            <Button>Get Started</Button>
          </SignInButton>
        ) : path == "/create-new-trip" ? (
          <Link href={"/my-trips"}>
            <Button>My Trips</Button>
          </Link>
        ) : (
          <Link href={"/create-new-trip"}>
            <Button>Create New Trip</Button>
          </Link>
        )}
        <UserButton />

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 md:hidden z-50">
          {menuOptions.map((menu, index) => (
            <Link
              href={menu.path}
              key={index}
              onClick={() => setMenuOpen(false)}
            >
              <h2 className="text-lg hover:text-primary">{menu.name}</h2>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Header
