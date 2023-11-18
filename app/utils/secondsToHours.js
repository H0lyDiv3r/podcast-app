export const secondsToHours = (seconds)=>{
    const hours = Math.floor(seconds/3600) 
    const minutes = Math.floor(seconds/60%60) 

    return {
        hrs:{
            value:hours,
            tag:hours > 1 ? "hrs" : "hr"
        },
        mins:{
            value:minutes,
            tag:"mins"
        }
    }
}