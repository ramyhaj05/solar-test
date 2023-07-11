import React, { useState } from "react";
import { Battery100Icon, BoltIcon, CurrencyDollarIcon, GlobeAsiaAustraliaIcon, HomeIcon } from '@heroicons/react/24/solid'
export default function ContentBody(){
    const [dataContent, setDataContent] = useState([
        {
            id:"1",
            title: "Re-newable Energy",
            content: "Solar panels capture the abundant energy from the sun and convert it into clean electricity.By embracing solar power, you'll reduce your dependence on fossil fuels and contribute to a more sustainable planet.",
        },
        {
            id:"2",
            title: "Cost Savings",
            content: "Say goodbye to soaring electricity bills! With solar panels, you can generate your own energy, reducing or even eliminating your reliance on traditional power grids. As a result, you'll enjoy long-term savings and increased financial stability.",
        },
        {
            id:"3",
            title: "Environmentally Friendly",
            content: "Solar power is a clean, green energy source that produces zero emissions during operation. By installing solar panels, you'll be actively combatting climate change and preserving the environment for future generations.",
        },
        {
            id:"4",
            title: "Energy Independence",
            content: "Become self-sufficient in your energy needs and gain independence from volatile energy prices and grid disruptions. With solar panels and the right storage solutions, you can enjoy uninterrupted power supply even during blackouts or emergencies.",
        },
        {
            id:"5",
            title: "Increased Property Value",
            content: "Investing in solar panels not only offers immediate benefits but also increases the value of your property. Many homebuyers seek out eco-friendly features like solar power, making your home more attractive and marketable.",
        },
    ])
    return(
        <div className="py-3 flex justify-center md:px-0 px-10 mt-10 flex-wrap">
            <div className="w-full pb-10 text-6xl font-bold text-sky-500">BENEFITS OF SOLAR PANELS</div><br></br>
            <div className="w-full md:w-3/4 text-black/70 flex md:flex-row flex-col">
                {dataContent.map((data)=>{
                    return(
                        <div className="w-full md:w-1/5 text-center p-5 bg-white rounded-b-xl m-3 grid">
                            {data.id === "1" ? <BoltIcon className="w-10 h-10 justify-self-center m-0 p-0"/> : ""}
                            {data.id === "2" ? <CurrencyDollarIcon className="w-10 h-10 justify-self-center"/> : ""}
                            {data.id === "3" ? <GlobeAsiaAustraliaIcon className="w-10 h-10 justify-self-center"/> : ""}
                            {data.id === "4" ? <Battery100Icon className="w-10 h-10 justify-self-center"/> : ""}
                            {data.id === "5" ? <HomeIcon className="w-10 h-10 justify-self-center"/> : ""}
                            <br></br>
                            <span className="font-bold">{data.title}</span>
                            <br></br>
                            {data.content}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}