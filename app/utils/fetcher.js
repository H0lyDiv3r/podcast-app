
const fetcher = async (url)=>{
    const res = await fetch(`https://listen-api.listennotes.com/api/v2/${url}`,{
        headers:{
          "X-ListenAPI-Key":"0e5cc617da324936bd653f69074fc8c8"
        }
      })
    return await res.json()
}
export default fetcher