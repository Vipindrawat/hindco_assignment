import React from 'react'
import logonew from '../assets/logonew.svg'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTrigger,
} from "@/components/ui/drawer";

import { FcSearch } from "react-icons/fc";

const Navbar = () => {
    return (
        <>
            <div className="h-11 w-full text-white flex flex-row justify-center items-center bg-gray-800">
                <div className="relative flex overflow-x-hidden 2xl:w-6/12 md:w-8/12 w-11/12  ">
                    <span className=" md:animate-marquee animate-marquee1 whitespace-nowrap font-medium font-Josefin">
                        BRINGING YOU THE PERFECT JOB
                        {/* <span className='text-blue-800'>THE PERFECT JOB</span> */}
                    </span>
                </div>
            </div>

            <div className='h-14  flex flex-row justify-evenly items-center'>
                <img src={logonew} className=' sm:h-11 h-9 ' />
                <div className="font-Josefin flex flex-row items-center">


                    <Drawer>
                        <DrawerTrigger>
                            <FcSearch className='lg:mr-6 md:mr-4 sm:mr-3 mr-1 sm:text-base text-sm' />
                        </DrawerTrigger>
                        <DrawerContent>
                            <DrawerHeader>
                                <img src={logonew} className='h-11 xl:ml-56 sm:ml-32 ml-11' />
                                <div className="w-full sm:h-24 h-20 sm:flex sm:justify-center sm:mb-11 mb-16 mt-4">
                                    <div className="flex flex-row justify-evenly items-center border-2 border-gray-300 2xl:w-2/4 xl:w-3/5 lg:w-9/12 md:w-10/12 sm:w-11/12 w-full h-full rounded-3xl">
                                        <input type="text" className="focus:outline-none md:px-7 sm:px-3 px-0 py-4 sm:w-7/12 w-[65%] lg:text-base sm:text-sm text-xs font-Josefin" placeholder="Enter keywords/designation/companies" />
                                        |
                                        <input type="text" className="focus:outline-none lg:px-7 sm:px-3 px-0 py-4 lg:w-4/12 sm:w-[30%] w-[29%] lg:text-base sm:text-sm text-xs font-Josefin" placeholder="Enter Location" />
                                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl sm:flex hidden flex-row items-center h-11 md:mr-5 mr-3 font-Josefin ">
                                            <FcSearch className='mr-4' /> Search
                                        </button>
                                    </div>
                                    <div className="sm:hidden w-full flex justify-center mt-3">
                                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-5 rounded-xl flex flex-row items-center h-11 font-Josefin ">
                                            <FcSearch className='mr-4' /> Search
                                        </button>
                                    </div>
                                </div>

                            </DrawerHeader>
                        </DrawerContent>
                    </Drawer>


                    <span className='group hover:text-green-800 text-blue-700 cursor-pointer lg:mr-6 md:mr-4 mr-3 lg:text-base md:text-sm text-xs sm:inline hidden'>
                        Active<span className='text-black group-hover:text-red-800'>Employers</span>
                    </span>
                    <span className='group hover:text-red-800 text-blue-700 cursor-pointer mr-2 lg:text-base md:text-sm text-xs sm:inline hidden'>
                        Pri<span className='text-black group-hover:text-red-800'>cing</span>
                    </span>

                    <NavigationMenu className="sm:block hidden">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="lg:text-base md:text-sm text-xs text-blue-700">Sign
                                    <span className='text-black'>In</span>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-4 w-36 lg:grid-cols-1 font-Josefin text-sm">
                                        <li>Employee<span className='text-blue-700'>Signin</span></li>

                                        <li>Employer<span className="text-blue-700">Signin</span></li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <NavigationMenu className="sm:block hidden">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="lg:text-base md:text-sm text-xs text-blue-700">Sign
                                    <span className='text-black'>Up</span>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-4 w-36 lg:grid-cols-1 font-Josefin text-sm">
                                        <li>Employee<span className='text-blue-700'>Signup</span></li>

                                        <li>Employer<span className="text-blue-700">Signup</span></li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <NavigationMenu className="block sm:hidden">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-blue-700">Mo
                                    <span className='text-black'>re</span>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 px-2 py-4 w-28 lg:grid-cols-1 font-Josefin text-xs">
                                        <li>Active<span className='text-blue-700'>Employers</span></li>
                                        <li>pri<span className='text-blue-700'>cing</span></li>
                                        <li>Sign<span className='text-blue-700'>up</span></li>
                                        <li>sign<span className="text-blue-700">in</span></li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                </div>
            </div>



        </>

    )
}

export default Navbar
