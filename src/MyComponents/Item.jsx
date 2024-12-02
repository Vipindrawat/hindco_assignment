import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card"
import { FaLocationDot } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";

const Item = (props) => {
    const { logo, job, company, location, experience } = props;
    return (
        <div>
            <Card className={` h-48 w-48 font-Josefin lg:block ${company === "beco" || company == "Huntertech Ventures" ? "hidden" : ""}`}>

                <CardContent>
                    <div className="flex justify-center my-3">
                        <img src={logo} className='h-8 w-8 rounded-xl' />
                    </div>
                    <div className="">
                        <CardTitle>{job}</CardTitle>
                        <CardDescription>{company}</CardDescription>
                    </div>

                    <div className="mt-2">
                        <div className="flex ">
                            <FaLocationDot className='mr-3' /> <CardDescription>{location}</CardDescription>
                        </div>
                        <div className="flex ">
                            <FaShoppingBag className='mr-3' /> <CardDescription>{experience}</CardDescription>
                        </div>
                    </div>

                    <div className="flex justify-center mt-3 text-blue-800">
                        Apply
                    </div>
                </CardContent>


            </Card>

        </div>
    )
}

export default Item
