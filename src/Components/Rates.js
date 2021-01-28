import React from 'react'
import "./CompStyles/Rates.css"
import sale from "../assets/sale (2)@2x.png"
import sold from "../assets/sold@2x.png"
import save from  "../assets/discount (1)@2x.png"
import pay from  "../assets/pay@2x.png"
import Support from "../assets/help (2)@2x.png"
import money from "../assets/refund (1)@2x.png"

const Rate = (props)=>{
    return(
        <div className="rate">
            <div className="rate-image">
                <img src={props.image} alt=""/>
            </div>
            <div className="rate-text">
                <div className="title">
                    {props.title}
                </div>
                <div className="description">
                    {props.description}
                </div>
            </div>
        
        </div>
    )
}
export default function Rates() {
    return (
        <div className="rating">
            <div className="rating-header">
                    <div className="heading">
                        More Than Just Words
                    </div>
                    <div className="title">
                        We are the best on the market & we can prove with more than just words,
                        check our ratings below  
                    </div>
                </div> 
            <div className="rating-body">
                <Rate
                    image={sale}
                    title="Unbeatable Rates"
                    description="Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit,sed do eiusmod"
                />
                <Rate
                    image={sold}
                    title="120K Policies Sold"
                    description="Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit,sed do eiusmod"
                />
                <Rate
                    image={save}
                    title="Save up to 30%"
                    description="Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit,sed do eiusmod"
                />
                <Rate
                    image={pay}
                    title="Secure Online Payment"
                    description="Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit,sed do eiusmod"
                />
                <Rate
                    image={Support}
                    title="Expert Support"
                    description="Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit,sed do eiusmod"
                />
                <Rate
                    image={money}
                    title="Money Back Guarantee"
                    description="Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit,sed do eiusmod"
                />
            
            </div>   
        </div>
    )
}
