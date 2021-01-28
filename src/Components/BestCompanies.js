import React from 'react'
import arrawright from '../assets/arrow (-1@2x.png'
import arrawleft from "../assets/arrow (4)@2x.png"
import img1 from "../assets/oriental,+car+insurance+in+uae+&+dubai@2x.png"
import img2 from "../assets/methaq-logo@2x.png"
import img3 from "../assets/al+hilal,+car+insurance+in+uae+&+dubai@2x.png"
import img4 from "../assets/al+sagr,+car+insurance+in+uae+&+dubai@2x.png"
import img5 from "../assets/al+wathba,+car+insurance+in+uae+&+dubai@2x.png"
import img6 from "../assets/albuhaira-logo@2x.png"
import img7 from "../assets/axa@2x.png"
import img8 from "../assets/dnirc-logo@2x.png"
import img9 from "../assets/abu+dhabi+national+takaful+(adnt),+car+insurance+in+uae+&+dubai@2x.png"
import './CompStyles/BestCompanies.css'
const Company =(props)=>{
    return(
        <div className="Company">
                <img src={props.image} alt=""/>
        </div>
    )
}
export default function BestCompanies() {
    return (
        
        <div className="bestcompanies">
            <h1>Choose from the Best</h1>
            <div className="bestcompanies-container">
                <div className="control control-left">
                    <img src={arrawleft} alt=""/>
                </div>
                <div className="companies">
                    
                    <Company image={img6}/>
                    <Company image={img5}/>
                    <Company image={img1}/>

                    <Company image={img4}/>
                    <Company image={img8}/>
                    <Company image={img2}/>

                    <Company image={img9}/>
                    <Company image={img3}/>
                    <Company image={img7}/>
                    
                </div>
                <div className="control control-right">
                    <img src={arrawright} alt=""/>
                </div>
            </div>
            

        </div>
    )
}
