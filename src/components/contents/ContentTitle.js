import React from "react";

export default function ContentTitle ({header, content}) {
    return(
        <div className="mt-10 bg-white py-5">

            <div className="text-3xl font-bold text-sky-500  tracking-wide">{header}</div>
            <div className="flex justify-center w-full font-bold text-black/90 py-2 tracking-wide">
                <div className="w-full p-10 md:w-1/3 md:p-0 text-gray-500/70">
                    {content}
                </div>
            </div>
        </div>
    )
}