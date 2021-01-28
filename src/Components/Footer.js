import React from 'react'
import Petraimg from '../assets/Untitled-123@2x.png'
import logo from '../assets/Logo-1@2x.png'

import Installments from '../assets/installment@2x.png'
import MasterCard from '../assets/mastercard@2x.png'
import Visa from '../assets/credit-card-visa@2x.png'

import PlayStore from '../assets/Get_it_on_Google_play@2x.png'
import appStore from '../assets/Get_it_on_Google_play-1@2x.png'

import './CompStyles/Footer.css'
export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer">
                <div className="petra">
                    <div className="petra-img">
                    <img src={Petraimg} alt="psdadqwdetraimg"/>
                    </div>
                    
                    <div className="petra-text">Insurance is provided by Petra Insurance Brokers LLC, regulated by the UAE Insurance Authority - registration number 147</div>
                </div>
                    <div className="dark-footer-container">
                    <div className="dark-footer">
                    <div className="footer-logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className="footer-bar">
                        <div className="footer-bar-item">Terms and Conditions </div>
                        <div className="footer-bar-item"> Privacy Policy </div>
                        <div className="footer-bar-item"> Disclaimer </div>
                        <div className="footer-bar-item"> Contact Us </div>
                        <div className="footer-bar-item"> About Us </div>
                        <div className="footer-bar-item"> FAQ </div>
                    </div>
                    <div className="footer-social">
                        <span><i className="fa fa-facebook"></i></span>
                        <span><i className="fa fa-twitter"></i></span>
                        <span><i className="fa fa-youtube"></i></span>
                        <span><i className="fa fa-instagram"></i></span>
                        <span><i className="fa fa-pinterest"></i></span>
                    </div>
                </div>
                    </div>
                
                <div className="footer-last">
                    <div className="copy">
                    Copyright © 2020 YallaCompare LLC   
                    </div>
                    <div className="payment">
                        <img src={Installments} alt="installments"/>
                        <img src={MasterCard} alt="MasterCard"/>
                        <img src={Visa} alt="Visa"/>
                    </div>
                    <div className="footer-app">
                        <img src={PlayStore} alt="PlayStore"/>
                        <img src={appStore} alt="appStore"/>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
