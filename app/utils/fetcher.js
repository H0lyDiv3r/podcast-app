
const fetcher = async (url)=>{
    const res = await fetch(`https://listen-api.listennotes.com/api/v2/${url}`,{
        headers:{
          "X-ListenAPI-Key":process.env.LISTEN_NOTES_KEY
        }
      })
    return await res.json()
}
export default fetcher