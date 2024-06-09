import React from "react";
import PriceCard from "../components/PriceCard";
import Header from '../components/Header'

const Plans=()=>{
    return (
        <div className="items-center text-center">
            <Header />
            <h1 className="mt-15 mb-12 font-bold">Our Popular Pricing Plans</h1>
            <div className="block md:flex justify-around sm:items-center sm:text-center ml-12 gap-y-6">   
                {
                    Array.from({length:3}).map((_,index)=>{
                        return <PriceCard key={index} />
                    })
                }

            </div>
        </div>
    )
}


export default Plans;