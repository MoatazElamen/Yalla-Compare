import React from 'react'
import "./CompStyles/HowitWorks.css"
import image from "../assets/quotes-en@2x.png"
import {useState} from 'react';
const scroller = (element)=>{
    element.scrollIntoView({behavior:'smooth'})
}
const Control = (props)=>{
    let defaultShow =  props.active ? true : false;
    const [showText , setShowText] = useState(defaultShow)
    return(
        <div className="control-item">
            <div className="control-header" onClick={()=>{setShowText(!showText)}}>
                <div className="index">
                    {props.index}
                </div>
                <div className="text">
                    {props.headtext}
                </div>
            </div>
            {showText && <div className="control-text">{props.text}</div>}
        
        </div>
    )
}
export default function HowitWorks() {

    return (
        <div className="howitworks">
            <div className="header">
                <div className="header-title">
                    How YallaCompare Works
                </div>
                <div className="header-text">
                    Unbelievably simple process at which you can save money on your car insurance
                    in Dubai in 3 easy steps!
                </div>

            </div>
            <div className="body">
                <div className="controls">
                    <Control 
                    text="Fill in our short form and get live quotes from
                    leading insurance providers in Dubai and the
                    UAE"
                    headtext="COMPARE"
                    index="1"
                    active={true}
                    />
                                  <Control 
                    text="Fill in our short form and get live quotes from
                    leading insurance providers in Dubai and the
                    UAE"
                    headtext="Buy ONLINE"
                    index="2"
                    active={false}
                    />
                                  <Control 
                    text="Fill in our short form and get live quotes from
                    leading insurance providers in Dubai and the
                    UAE"
                    headtext="COMPLETE"
                    index="3"
                    active={false}
                    />
                    
                </div>
                <div className="imageholder">
                        <div className="image-1">
                                <img src={image} alt=""/>
                        </div>
                        <div className="image-2">
                                <img src={image} alt=""/>
                        </div>
                        <div className="image-3">
                            <img src={image} alt=""/>
                        </div>
                </div>
            </div>
        </div>
    )
}
