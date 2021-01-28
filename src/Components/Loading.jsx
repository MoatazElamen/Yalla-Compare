import React from 'react'
import Image from '../assets/Logo@2x.png'
import loading from '../assets/loading.png'
import "./CompStyles/loading.css"
export default function Loading() {
    return (
        <div className="loading">
            
            <div className="company-image"><img src={Image} alt=""/></div>
            <div className="loader"> <img src={loading} alt=""/> </div>
        </div>
    )
}
