import React from 'react'
import Navbar from './Navbar'
import Banner from "./Banner"
import HowitWorks from './HowitWorks'
import Reasons from './Reasons'
import Rates from './Rates'
import BestDeals  from './BestDeals'
import BestCompanies from './BestCompanies'
import InsuranceGuide from './InsuranceGuide'
import CompareProducts from './CompareProducts'
import Footer from './Footer'

import Loading from './Loading'
import {useState,useEffect} from 'react'
export default function Main() {
    const [loaded , setloaded]  = useState(false)
    console.log(loaded)
    useEffect(()=>{
        setloaded(true)
    },[])  
    if(loaded){
        return (
            <div className="Main">
                <Navbar/>
                <Banner/>
                <HowitWorks/>
                <Reasons/>
                <Rates/>
                <BestDeals/>
                <BestCompanies/>
                <InsuranceGuide/>
                <CompareProducts/>
                <Footer/>
            </div>
        )
    }
    else{
        return(
            <Loading/>
        )
    }

}
