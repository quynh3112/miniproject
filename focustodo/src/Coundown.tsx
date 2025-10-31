interface propTime{
    minutes:number,
    second:number
}
export default function Countdown({minutes,second}:propTime){
    return(
        <>
        <p>{minutes}:{second}</p>
        </>
    )

}