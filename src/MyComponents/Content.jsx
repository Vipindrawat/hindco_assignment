import React from 'react';
import Item from './Item'
import beco from '../assets/beco.png'
import getwork from '../assets/getwork.png'
import huntertechventures from '../assets/huntertechventures.jpg'
import infobool from '../assets/infobool.png'
import oxyzenhomes from '../assets/oxyzenhomes.png'
import rgbwebtech from '../assets/rgbwebtech.jpg'
import wninfotech from '../assets/wninfotech.jpeg'
import { FaArrowCircleRight } from "react-icons/fa";
import Counter from './Counter';

const Content = () => {
    const Featured_jobs = [
        {
            "logo": getwork,
            "job": "ReactJs Developer",
            "company": "getwork",
            "location": "Noida/India",
            "experience": "0-2"
        }, {
            "logo": beco,
            "job": "Account Manganer",
            "company": "beco",
            "location": "Mumbai/India",
            "experience": "3-7"
        }, {
            "logo": infobool,
            "job": "Dotnet Developer",
            "company": "Infobool",
            "location": "Noida/India",
            "experience": "0-1"
        }, {
            "logo": oxyzenhomes,
            "job": "Web Developer",
            "company": "Oxyzen Homes",
            "location": "Delhi/India",
            "experience": "0-1"
        },
    ]
    const Home_jobs = [
        {
            "logo": rgbwebtech,
            "job": "Cart Developer",
            "company": "RGB webtech",
            "location": "Chandigarh/India",
            "experience": "0-3"
        }, {
            "logo": huntertechventures,
            "job": "Gaming Developer",
            "company": "Huntertech Ventures",
            "location": "Bengaluru/India",
            "experience": "0-3"
        }, {
            "logo": wninfotech,
            "job": "Graphol Developer",
            "company": "WN infotech",
            "location": "Pune/India",
            "experience": "0-5"
        }, {
            "logo": rgbwebtech,
            "job": "NodeJs Developer",
            "company": "RGB webtech",
            "location": "Chandigarh/India",
            "experience": "0-1"
        },
    ]

    return (
        <>
            <div className='w-full flex flex-col items-center md:pt-14 pt-8 bg-gray-200'>
                <div className=" 2xl:w-7/12 xl:w-9/12 w-full font-Josefin">
                    <div className="flex flex-row sm:justify-around justify-center items-center mb-5">
                        <span className="sm:text-2xl text-xl xl:ml-0 sm:ml-7 font-bold">Recommended Featured Jobs</span>
                        <span className="text-blue-700 lg:mr-0 mr-7 sm:inline hidden font-bold">View All</span>
                    </div>
                    <div className="sm:flex hidden flex-row md:space-x-10 sm:space-x-3 justify-center">
                        {Featured_jobs.map((value, index) => {
                            return <Item key={index} logo={value.logo} job={value.job} company={value.company} location={value.location} experience={value.experience} />
                        })}
                    </div>

                    <div className="sm:hidden flex justify-center">
                        <Item logo={Featured_jobs[0].logo} job={Featured_jobs[0].job} company={Featured_jobs[0].company} location={Featured_jobs[0].location} experience={Featured_jobs[0].experience} />
                    </div>

                    <div className="sm:hidden flex justify-center ">
                        <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-7 flex ">View All <FaArrowCircleRight className='ml-2 text-lg' /> </div>
                    </div>
                </div>


                <div className=" 2xl:w-7/12 xl:w-9/12 w-full font-Josefin mt-8">
                    <div className="flex flex-row sm:justify-around justify-center items-center mb-5">
                        <span className="sm:text-2xl text-xl xl:ml-0 sm:ml-7 font-bold">Recommended Remote Jobs</span>
                        <span className="text-blue-700 lg:mr-0 mr-7 sm:inline hidden font-bold">View All</span>
                    </div>
                    <div className="sm:flex hidden flex-row md:space-x-10 sm:space-x-3 justify-center">
                        {Home_jobs.map((value, index) => {
                            return <Item key={index} logo={value.logo} job={value.job} company={value.company} location={value.location} experience={value.experience} />
                        })}
                    </div>

                    <div className="sm:hidden flex justify-center">
                        <Item logo={Home_jobs[0].logo} job={Home_jobs[0].job} company={Home_jobs[0].company} location={Home_jobs[0].location} experience={Home_jobs[0].experience} />
                    </div>

                    <div className="sm:hidden flex justify-center ">
                        <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-7 flex ">View All <FaArrowCircleRight className='ml-2 text-lg' /> </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:space-x-9 md:space-y-0 sm:py-24 py-11 font-Josefin lg:text-3xl text-2xl">
                    <span className="flex flex-col justify-center md:p-0 p-7">
                        <h1 className='font-bold text-center'>Jobs Posted</h1>
                        <Counter targetNumber={31258} duration={2000} />
                    </span>
                    <span className="flex flex-col justify-center md:p-0 p-7">
                        <h1 className='font-bold text-center'>Jobs Filled</h1>
                        <Counter targetNumber={15153} duration={2000} />

                    </span>
                    <span className="flex flex-col justify-center md:p-0 p-7">
                        <h1 className='font-bold text-center'>Employers</h1>
                        <Counter targetNumber={19967} duration={2000} />

                    </span>
                    <span className="flex flex-col justify-center md:p-0 p-7">
                        <h1 className='font-bold text-center'>Active Users</h1>
                        <Counter targetNumber={1295533} duration={2000} />
                    </span>
                </div>

            </div>
        </>
    )
}

export default Content
