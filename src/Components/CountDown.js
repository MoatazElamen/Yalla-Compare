import React from 'react'
import {useState,useEffect,useRef} from 'react'
export default function CountDown() {
    const [days,setDays] = useState('00')
    const [hours,setHours] = useState("00")
    const [minutes,setMinutes] = useState('00')
    const [seconds,setSeconds] = useState('00')

    const interval = useRef()
    const startTimer = ()=>{
    const now  =new Date().getTime()
    const later = new Date("05/05/2021").getTime() 
    let timeleft  = later - now
    let leftDays =  Math.floor(timeleft / (1000 * 60 * 60 * 24))
    let leftHours = Math.floor((timeleft / (1000 * 60 * 60)) % 24)
    let leftMinutes =Math.floor((timeleft / 1000 / 60) % 60)
    let leftSeconds = Math.floor((timeleft / 1000) % 60)
    // const coming = new Date("")
    // days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    // hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    // minutes: Math.floor((difference / 1000 / 60) % 60),
    // seconds: Math.floor((difference / 1000) % 60)
    if(timeleft > 0){
            interval.current = setInterval(()=>{
                setDays(leftDays)
                setHours(leftHours)
                setMinutes(leftMinutes)
                setSeconds(leftSeconds)
            },1000)
    }else{
        clearInterval(interval.current)
    }
};
    useEffect(()=>{
        startTimer()
        return()=>{
            clearInterval(interval.current)
        }
    })

    return (
        <div className="countdown">
            <div className="days count-item">
                <div className="days-num">  {days} </div>
                <div className="days-text"> Days</div>
            </div>
            <div className="hours count-item">
    <div className="hours-num">{hours}</div>
                <div className="hours-text">Hours</div>
            </div>
            <div className="minutes count-item">
    <div className="minutes-num"> {minutes}</div>
                <div className="minutes-text"> Minutes</div>
            </div>
            <div className="seconds count-item">
                <div className="seconds-num"> {seconds} </div>
                <div className="seconds-text"> Seconds</div>
            </div>
        </div>
    )
}
