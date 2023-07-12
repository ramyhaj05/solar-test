import React from "react";
import ContentTitle from "./contents/ContentTitle";
import ContentBody from "./contents/ContentBody";
import SecondContent from "./contents/SecondContent";

export default function BodyComponent () {
  const firstTitle = "Harness the Power of the Sun for a Sustainable Future!";
  const firstContent = "Are you ready to take control of your energy consumption while reducing your carbon footprint? Look no further than our state-of-the-art solar panels! Our cutting-edge technology and commitment to sustainability make us the perfect partner for your journey towards a greener and more energy-efficient future.";

    return(
      <div className="align-center w-full text-center bg-gray-100">
        <div className="bg-sky-500 p-10 text-2xl font-bold tracking-widest text-white">Take the first step towards a sustainable future. <br></br>Contact us today to learn more about how solar panels can transform your energy consumption, <br></br>save you money, and contribute to a cleaner planet. <br></br>Together, let's harness the power of the sun and build a brighter tomorrow!</div>
        <ContentTitle header={firstTitle} content={firstContent}></ContentTitle>
        <ContentBody></ContentBody>
        <SecondContent></SecondContent>
        
      </div>
    )
}