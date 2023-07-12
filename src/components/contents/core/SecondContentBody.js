import { CheckBadgeIcon, LightBulbIcon } from "@heroicons/react/24/solid";
import React from "react";

export default function SecondContentBody ({id, title, body, imglink ,reverse}){
    const firstcol =  reverse ? "md:justify-start md:order-2" : "md:justify-end md:order-1"
    const secondcol = reverse ?"md:justify-end md:order-1" : "md:justify-start md:order-2"
    return(
        <>
            <div className={"w-full md:w-1/2 flex justify-center order-2 " + firstcol}>
                <div className="bg-white w-2/3 px-10 text-2xl text-black/70 flex flex-col align-center justify-center">
                    <div className="w-full flex justify-center">
                        {id === "1" ? <CheckBadgeIcon className="w-10 h-10 text-green-500"/> : ""}
                        {id === "2" ? <LightBulbIcon className="w-10 h-10 text-yellow-500"/> : ""}
                    
                    </div>
                    <div className="font-bold text-black/50 py-5">{title}</div>
                    <div className="">{body}</div>
                </div>
            </div>
            <div className={"w-full md:w-1/2 flex  justify-center order-1 " + secondcol}>
                <div className=" w-2/3 h-auto md:h-96 w-full flex justify-center p-5 bg-white ">
                    <img src={imglink} className="h-full w-fit" />
                </div>
            </div>
        </>
    )
}