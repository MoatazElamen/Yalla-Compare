import React from 'react'
import "./CompStyles/Reasons.css"
import left  from "../assets/YallaCompare@2x.png"
import compare from '../assets/research@2x.png'
import headset from '../assets/headset@2x.png'
import Best from '../assets/emoji@2x.png'
import assistance from '../assets/awareness@2x.png'
import Fast from '../assets/clock (6)@2x.png'
import Guarantead from '../assets/surface1@2x.png'
import Arraw from '../assets/Path 401.png'
const Reason = (props)=>{
    return(
        <div className="reason">
            <div className="reason-image">
                <img src={props.image} alt=""/>
            </div>
            <div className="reason-text">
                <div className="text-head">
                {props.texthead}
                </div>
                <div className="text-body">
                {props.textbody}
                </div>
            </div>
        </div>

    )
}
export default function Reasons() {
    return (
        <div className="reasons">
            <div className="reasons-left">
                <div className="header">
                    <div className="header-title">
                      <div className=""> Six Reasons</div> 
                      <div className="why">
                            Why You Should Choosse 
                        </div>
                    </div>
                    <div className="header-desciption">
 
                        <div className="tag">
                            #YallaCompare
                        </div>
                    </div>
                </div>
                <div className="body">
                    <div className="arrow">
                        <img src={Arraw} alt=""/>
                    </div>
                    <div className="reasons-list">
                        <Reason image={Fast} texthead="Fast Process" textbody="The process takes minutes and you
                            get instant quotes online." />
                        <Reason image={compare} texthead="Compare Prices" textbody="Compare quotes online and find the
                            policy that’s right for you." />
                        <Reason image={Guarantead} texthead="Guaranteed Deal" textbody="We guarantee the cheapest car
                            insurance ever!" />
                        <Reason image={headset} texthead="We Got Your Back" textbody="You can reach out for our advisers
                            for any guidance at any time!" />
                        <Reason image={assistance} texthead="Further Assistance" textbody="We are always here to help even
                            after you buy your insurance." />
                        <Reason image={Best} texthead="Best Experience" textbody="You will have an awesome experience
                            dealing with our team." />
                    </div>

                </div>
            </div>
            <div className="reasons-right">
                <img src={left} alt=""/>
            </div>
        </div>
    )
}
