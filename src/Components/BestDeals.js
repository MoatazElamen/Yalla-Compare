import React from 'react'
import img from '../assets/illustration.png'
import mark from '../assets/tick (-1@2x.png'
import './CompStyles/BestDeals.css'
export default function BestDeals() {
    return (
        <div className="bestdeals">
            <div className="halfborder"></div>
            <div className="bestdeals-container">

                <div className="besdeals-left">
                    <div className="header">
                        <div className="header-title">
                            Find the Best Deals in Dubai & Abu Dhabi
                        </div>
                        <div className="header-text">
                            With yallacompare, you will find car insurance rates that aren't available anywhere else, as well as
                            exclusive rewards!
                        </div>
                    </div>
                    <div className="body">
                            <div className="body-item">
                                <div className="marked"><img src={mark} alt=""/></div>
                                <div className="text">
                                    <div className="text-header">
                                        AED 1,000
                                    </div>
                                    <div className="text-body">
                                        In vouchers with every comprehensive UAE car insurance purchase!
                                    </div>
                                </div>
                            </div>
                            <div className="body-item">
                                <div className="marked"><img src={mark} alt=""/></div>
                                <div className="text">
                                    <div className="text-header">
                                        15% Off
                                    </div>
                                    <div className="text-body">
                                        Safe drivers can get an extra discount as well!
                                    </div>
                                </div>
                            </div>
                            <div className="body-item">
                                <div className="marked"><img src={mark} alt=""/></div>
                                <div className="text">
                                    <div className="text-header">
                                        Unbelievable Rates
                                    </div>
                                    <div className="text-body">
                                        Find Car Insurance Rates that aren't available anywhere else!
                                    </div>
                                </div>
                            </div>
                    </div>

                </div>
                <div className="bestdeals-right">
                    <img src={img} alt=""/>
                </div>
            </div>

        </div>
    )
}
