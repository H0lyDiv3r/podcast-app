
const fetchDate = async ()=>{
    try{
        const res = await fetch("http://worldtimeapi.org/api/timezone/Etc/GMT")
        const data = await res.json()
        return new Date(data.utc_datetime).valueOf()
    }catch(err){

        return new Date().valueOf()
    }
}
export const calculate = async (start)=>{
    const date = await fetchDate()
    const seconds = 1000
    const minutes = seconds * 60
    const hours = minutes * 60
    const days = hours * 24
    const month = days * 30
    const year = month * 12
    const difference = (date.valueOf() - start.valueOf())
    console.log(date)
    if(difference/year >= 1){
        return `${Math.round(difference/year) == 1 ? 'A year ago' : `${Math.round(difference/year)} years ago` }`
    }
    if(difference/month >= 1 && difference/month < 12){
        return `${Math.round(difference/month) == 1 ? 'A month ago' : `${Math.round(difference/days)} months ago` }`
    }
    if(difference/days >= 1 && difference/days < 30){
        return `${Math.round(difference/days) == 1 ? 'A day ago' : `${Math.round(difference/days)} days ago` }`
    }
    if(difference/hours >= 1 && difference/hours < 24){
        return `${Math.round(difference/hours) == 1 ? 'An hour ago' : `${Math.round(difference/hours)} hours ago` }`
    }
    if(difference/minutes >= 1 && difference/minutes < 60){
        return `${Math.round(difference/minutes) == 1 ? 'A minute ago' : `${Math.round(difference/minutes)} minute ago` }`
    }
    if(difference/seconds < 60){
        return ("Just now")
    }else{
        return ("Some time ago")
    }
  }