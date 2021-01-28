import React from 'react'
import CountDown from './CountDown'
import "./CompStyles/Banner.css"
import Ford from '../assets/ford_ecosport2018_blue@2x.png'
import FinanceLogo from "../assets/Path 400.png"
import Business from '../assets/download@2x.png'
import National from "../assets/layer1@2x.png"
import Forbes  from "../assets/XMLID_31_@2x.png"
import Enterpreneur  from "../assets/Untitled-1@2x.png"
import ReactWOW from 'react-wow'
export default function Banner() {
    return (
        <div className="banner">
                        <div className="header">
                   YallaCompare
               </div>
            <div className="banner-container">

            <div className="banner-text">

               <div className="banner-title">
               <span> Buy New Policy </span> & Win a Brand New
               <div className="banner-important">
                   Ford Ecosport!
               </div>
               </div>


               <div className="banner-plus">
               Plus 3 More Lucky Winners to Win<span> AED 5,000 </span> Each!
               </div>
               <div className="banner-buttons">
                   <button className="active" >
                       GET QUOTES
                   </button>
                   <button className="normal">
                       LEARN MORE
                   </button>
                   <button className="disabled">
                       CANCEL POLICY
                   </button>
               </div>
               <div className="discount">
                   <div className="discount-text">
                       <div className="discountpercentage">
                           10%
                       </div>
                       <div className="discounted">
                            Discount
                       </div>
                   </div>
                   <div className="discount-timer">
                       <CountDown/>
                   </div >
               </div>
            </div>

                <img src={Ford} alt=""/>

            </div>
          
            <div className="finance">
                <div className="finance-container">
                <div className="finance-left">
                    <div className="finance-logo">
                        <img src={FinanceLogo} alt=""/>
                    </div>
                    <div className="text">
                        <div className="">Thr Award Winning</div>
                        <div className="">Finance Comparison Site</div>
                        <div className="">VOTED BY THE TOP NOTCH</div>
                    </div>

                </div>
                <div className="">|</div>
                <div className="finance-right">
                    <div className="forbes">
                        <img src={Forbes} alt=""/>
                    </div>
                    <div className="business">
                        <img src={Business} alt=""/>
                    </div>
                    <div className="intrepreneur">
                        <img src={Enterpreneur} alt=""/>
                    </div>
                    <div className="thenational">
                        <img src={National} alt=""/>
                    </div>
                </div>
                </div>
                
            </div> 
        </div>
    )
}
