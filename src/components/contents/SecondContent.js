import React from "react";
import SecondContentBody from "./core/SecondContentBody";

export default function SecondContent(){
    const content = 
    [
        {
            id: "1",
            title: "Exceptional Quality",
            body: "We provide high-performance solar panels built with top-tier materials and advanced technology. Our panels are designed to withstand various weather conditions and deliver maximum efficiency and longevity.",
            imglink: "/images/second1.png",
            reverse: false,
        },
        {
            id: "2",
            title: "Customized Solutions",
            body: "We understand that every home or business is unique. Our team of experts will assess your energy needs and design a tailor-made solar system that fits your requirements perfectly, ensuring optimal energy production.",
            imglink: "/images/second2.jpeg",
            reverse: true,
        },
        {
            id: "3",
            title: "Professional Installation",
            body: "Our experienced technicians will handle the entire installation process, ensuring a seamless and hassle-free experience for you. We take pride in our workmanship and guarantee a system that performs flawlessly.",
            imglink: "/images/1.jpg",
            reverse: false,
        },
        {
            id: "4",
            title: "Comprehensive Support",
            body: "We offer comprehensive post-installation support, including monitoring services, maintenance, and troubleshooting assistance. We're always here to address any questions or concerns you may have throughout your solar journey.",
            imglink: "/images/second4.jpg",
            reverse: true,
        },
        {
            id: "5",
            title: "Trusted Reputation",
            body: "With years of industry experience and countless satisfied customers, we have established ourselves as a trusted provider of solar solutions. Join the growing community of environmentally conscious individuals who have made the switch to solar with us.",
            imglink: "/images/second5.jpg",
            reverse: false,
        },
    ]
    return(
        <>
            <div className="w-full py-5 text-3xl font-bold text-white bg-sky-500 my-10">Why Choose us?</div><br></br>
                {content.map((data)=>{
                    return(
                        <div className="w-full flex flex-col md:flex-row px-5 mt-5">
                            <SecondContentBody id={data.id} title={data.title} body={data.body} imglink={data.imglink} reverse={data.reverse}></SecondContentBody>  
                        </div>
                    )
                })}          
        </>
        )
}