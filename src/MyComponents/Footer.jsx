import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { RiTelegramFill } from "react-icons/ri";

const Footer = () => {
    return (

        <div className=" bg-gray-800">
            <div className="max-w-2xl mx-auto sm:pb-7 pt-10 pb-5 text-white">
                <div className="">
                    <div className="text-center font-Josefin">
                        <h3 className="sm:text-3xl text-2xl mb-3 font-bold"> Apply to JOBS On-The-Go </h3>
                        <p> Jobringer Mobile App </p>
                        <div className="flex justify-center my-10">
                            <div className="flex items-center border w-auto rounded-lg px-4 py-2  mx-2 bg-white text-black">
                                <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" className="w-7 md:w-8" />
                                <div className="text-left ml-3">
                                    <p className='text-xs text-gray-800'>Download on </p>
                                    <p className="text-sm md:text-base"> Google Play Store </p>
                                </div>
                            </div>
                            <div className="flex items-center border w-auto rounded-lg px-4 py-2 mx-2 bg-white text-black">
                                <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-7 md:w-8" />
                                <div className="text-left ml-3">
                                    <p className='text-xs text-gray-800'>Download on </p>
                                    <p className="text-sm md:text-base"> Apple Store </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="flex flex-row justify-center w-full text-white">
                <div className="flex md:flex-row md:justify-center md:items-baseline md:space-x-14 flex-col items-center  space-y-8  2xl:w-9/12 xl:w-10/12 md:w-11/12 sm:w-10/12 w-11/12">

                    <div className="font-Josefin">
                        <div className="flex md:justify-normal justify-center">
                            <h1 className='text-xl font-bold '>JOBS IN INDIA</h1>
                        </div>
                        #Mumbai
                        #Delhi
                        #Ajmer
                        #Pune
                        #Hyderabad
                        #Agra
                        #Chennai
                        #Kolkata
                        #Indore
                        #Gurugram
                        #Jaipur
                        #Ahmedabad
                    </div>
                    <div className="font-Josefin">
                        <div className="flex md:justify-normal justify-center">
                            <h1 className='text-xl font-bold'>
                                INTERNATIONAL JOBS
                            </h1>
                        </div>
                        #Africa
                        #USA
                        #Australia
                        #Canada
                        #Singapore
                        #UK
                        #Dubai
                        #Saudi Arabia
                        #New Zealand
                    </div>
                </div>

            </div>
            <div className="flex flex-row justify-center pt-10 font-Josefin w-full text-white">
                <div className="md:w-full w-11/12 md:text-base text-xs flex flex-row justify-center">
                    <span className="px-2 sm:inline hidden">Terms and Condition</span>
                    <span className="px-2 border-l border-white sm:inline hidden">Privacy Policy</span>
                    <span className="px-2 sm:hidden inline">Privacy Policy</span>
                    <span className="px-2 border-l border-white sm:inline hidden">Fefund/Cancellation Policy</span>
                    <span className="px-2 border-l border-white">About us</span>
                    <span className="px-2 border-l border-white">Contact us</span>
                    <span className="px-2 border-l border-white">F&Q</span>
                </div>
            </div>

            <div className="mt-5 flex flex-col-reverse md:flex-row md:justify-evenly items-center text-sm text-white w-full pb-7 font-Josefin">
                <p className=" mt-1 md:mt-0 sm:text-base text-xs">&copy;  All Rights Reserved @ 2024 Jobtech Ventures Private Limited. </p>
                <div className='font-bold flex flex-row space-x-2'>Follow us on: <IoLogoWhatsapp className='ml-5 text-green-800' /> <FaFacebook className='text-blue-800' /><FaXTwitter className='text-blue-500' /><FaInstagramSquare className='text-red-500' /><FaLinkedin className='text-blue-500' /><RiTelegramFill className='text-blue-700' /> </div>

            </div>
        </div>

    )
}

export default Footer
