import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import logo from '@/public/images/logo.svg'
import Image from 'next/image'
import UserMenu from './UserMenu'

const Navbar = () => {
  return (
    <main className="fixed z-10 w-full border-b-2 border-slate-200 bg-white shadow-sm">
      <nav className="mx-4 my-2 flex flex-col md:mx-8 md:flex-row lg:mx-16">
        <Link href={'/'}>
          <Image src={logo} alt="Blob" className=" w-28 " width={1000} height={1000} />
        </Link>
        <div className=" flex flex-1 items-center justify-end gap-2 md:mt-0 md:gap-10">
          <ul className="flex flex-col gap-2 max-lg:hidden md:flex-row md:items-center md:gap-4">
            <Button className="bg-white text-[14px] text-[#036c93] hover:bg-white hover:text-blue-300">
              SERVICES
            </Button>

            <Link href={'/registration'}>
              <Button className="bg-white text-[14px]  capitalize  text-[#036c93] hover:bg-white hover:text-blue-300">
                ADD BUSINESS
              </Button>
            </Link>
            <Link href={'/Aboutus'}>
              <Button className="bg-white text-[14px]  text-[#036c93] hover:bg-white hover:text-blue-300">
                ADVERTISE
              </Button>
            </Link>
            <UserMenu />
          </ul>
        </div>
      </nav>
    </main>
  )
}

export default Navbar
