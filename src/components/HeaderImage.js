import React from "react";
import { SunIcon } from '@heroicons/react/24/solid'
export default function HeaderImage (){
    return(
        <div className="h-3/4">
            <div className="w-full bg-cover bg-center h-full" style={{
            backgroundImage:
              "url('/images/4.jpg')",
            }}>
                <div className="flex flex-col h-full bg-sky-500/70">
                    <div className="text-white h-full">
                        <div className="flex justify-between p-3 text-2xl font-bold tracking-wide w-full">
                            <div className="bg-blue-500 p-1 px-3 rounded text-white">Solar<span className="font-normal text-yellow-300">Energy</span></div>
                            <div className="p-1 px-3 rounded text-white-500 text-md font-normal md:block hidden">For more info contact us today!</div>
                            <div className="p-1 px-3 rounded text-white-500 text-md font-normal block md:hidden">Contact us!</div>
                        </div>
                        <div className="h-full flex flex-col justify-center">
                            <div className="w-full flex justify-center">
                                <SunIcon className="w-32 h-32 p-2 text-yellow-300 animate-bounce"></SunIcon>
                            </div>
                            <div className="justify-center text-white font-bold tracking-widest w-full text-center">
                                <div className="text-2xl">MAKING OUR FUTURE</div>
                                <div className="pt-3 text-4xl">CLEANER, SAFER, AND</div>
                                <div className="pt-3 text-4xl"> MORE EFFICIENT</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}