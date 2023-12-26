export const getRatingColor=(value)=>{
    const rating = value
    const red = ( 1 +  (1-(rating/100 * 2 )) ) * 255
    const green = ( 1 + (rating/100 - 1) ) *255
    const blue = (rating/100 / (rating/100 * 16)) * 255
    return `rgb(${red},${green},${blue})`
}