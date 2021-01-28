import React from 'react'
import "./CompStyles/Navbar.css"
import Brand from "../assets/Logo@2x.png"
export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-brand">
                <img src={Brand} alt=""/>
            </div>
            <div className="navbar-middle">
                <div className="home">
                    <a href="/">Home</a>
                </div>
                <div className="services">
                    <a href="/">Our Services + </a>
                </div>
                <div className="faqs">
                    <a href="/"> FAQs +</a>
                </div>
                <div className="contact">
                    <a href="/">Contact Us</a>
                </div>
            </div>
            <div className="navbar-right">
                    <div className="icons">
                        <i className="fa fa-user-o"></i>
                        <i className="fa fa-search"></i>
                    </div>
                        <button>MESSAGE US</button>
   
                    <div className="multichoice">
                        <i className="fa fa-th"></i>
                    </div>
            </div>
        </div>
    )
}
