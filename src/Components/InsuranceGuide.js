import React from 'react'
import key from '../assets/33212@2x.png'
import maintinance from '../assets/14231@2x.png'
import invest from '../assets/435984-PEA2ME-688@2x.png'
import gaurd from '../assets/6569@2x.png'
import note from '../assets/18105@2x.png'
import './CompStyles/InsuranceGuide.css'
const Tip =(props)=>{
    return(
        <div className="tip">
            <div className="tip-image">
                <img src={props.image} alt=""/>
            </div>
            <div className="tip-title">
                {props.title}
            </div>
            <div className="tip-description">
                {props.description}
            </div>
            <div className="readmore">
                <a href="#"> Read More +</a>
            </div>
        </div>
    )
}
export default function InsuranceGuide() {
    return (
        <div className="insurance">
                
                <div className="header">
                Dubai Car Insurance Guide
                </div>
                <div className="tohold left"></div>
           
                <div className="tips">
                    <Tip image={note} title="How to make a claim against
                        someone?" description="Being involved in any kind of car accident is stressful enough without the added drama of making a claim. Our tips will help make the process less painful."
                        />
                        
                    <Tip image={key} title="Do's and Dont's when buying
                            car insurance" description="Buying car insurance can be very confusing & can sometimes feel like a bit of a mission. Here’s some key things to do (and not do!) to help make the whole process easier."
                        />
                    <Tip image={maintinance} title="What if I need to get my car
                            repaired?" description="If you’re involved in an accident and your car needs some repair work, you’ll want to get it done and back on the road ASAP. You don’t have to use your insurer’s approved.."
                        />
                    <Tip image={invest} title="How can I get cheaper prices
                            for car insurance?" description="Just settling for the first car insurance policy you find is likely to result in you paying more for less and who wants that? Our tips will ensure you find the best.."
                        />
                    <Tip image={gaurd} title="The lockdown on comprehe-
                            nsive car insurance" description="Comprehensive insurance gives you the maximum level of cover, for both you and the third party. But it also covers a whole lot more. Here’s all the info you need to know..."
                        />
                                            <Tip image={maintinance} title="What if I need to get my car
                            repaired?" description="If you’re involved in an accident and your car needs some repair work, you’ll want to get it done and back on the road ASAP. You don’t have to use your insurer’s approved.."
                        />
                    <Tip image={invest} title="How can I get cheaper prices
                            for car insurance?" description="Just settling for the first car insurance policy you find is likely to result in you paying more for less and who wants that? Our tips will ensure you find the best.."
                        />
                    <Tip image={gaurd} title="The lockdown on comprehe-
                            nsive car insurance" description="Comprehensive insurance gives you the maximum level of cover, for both you and the third party. But it also covers a whole lot more. Here’s all the info you need to know..."
                        />
                </div>
         
               
                <div className="tohold right"></div>

        </div>
    )
}
