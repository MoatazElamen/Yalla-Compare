import React from 'react'
import Shaking from '../assets/252939-P46MAJ-462@2x.png';
import Credit from '../assets/16379@2x.png';
import House from '../assets/310@2x.png';
import invest from '../assets/435984-PEA2ME-688@2x.png'
import "./CompStyles/CompareProducts.css"
export default function CompareProducts() {
    return (
        <div className="compareproducts" >
            <div className="title">
                Compare Our Products
            </div>
                <div className="absolute-line">

                </div>
            <div className="control">
                <div className="control-item focused-c-item"> Money Products </div>
                <div className="control-item "> Insurance Products </div>
            </div>
            <div className="c-products">

                <div className="c-products-item">
                    <div className="c-products-img">
                        <img src={Shaking} alt="shaking"/>
                    </div>
                    <div className="c-products-text">
                    <h2>Credit Cards</h2>
                        <p>Check credit cards quotes >>  </p>
                    </div>
                </div>
                <div className="c-products-item">
                    <div className="c-products-img">
                        <img src={Credit} alt="credit"/>
                        
                    </div>
                    <div className="c-products-text">
                    <h2>Home Loans</h2>
                        <p>Check home loans quotes >> </p>
                    </div>
                </div>
                <div className="c-products-item">
                    <div className="c-products-img">
                        <img src={House} alt="House"/>

                    </div>
                    <div className="c-products-text">
                    <h2>Car Loans</h2>
                        <p>Check car loans quotes >></p>
                    </div>
                </div>
                <div className="c-products-item">
                    <div className="c-products-img">
                        <img src={invest} alt="House"/>
                    </div>
                    <div className="c-products-text">
                    <h2>Personal Loans</h2>
                        <p>Check personal loans quotes >> </p>
                    </div>
                </div>

            </div>
        </div>
    )
}
