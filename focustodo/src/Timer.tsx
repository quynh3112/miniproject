import { useEffect, useRef, useState } from "react";
interface timerProps{
    minutes:number,
    task:string,
    onfinish:()=>void
}
export default function Timer({minutes,task,onfinish}:timerProps){
    const [time,setTime]=useState(minutes*60)
    const ref=useRef<number| null>(null)

    useEffect(()=>{
        ref.current=window.setInterval(()=>{
            setTime((t)=>{
                if(t<=1){
                    clearInterval(ref.current!)
                    onfinish()
                    return 0
                }
                return t-1
            })
        },1000)
        return ()=> clearInterval(ref.current!)
    },[])
    

    const m=Math.floor(time/60)
    const s=time%60
    return (
        <div style={{textAlign:"center"}}>
            <h2>{task}</h2>
            <h1 style={{fontSize:48}}>{m}:{s}</h1>

        </div>
    )
}
