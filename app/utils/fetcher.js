
const fetcher = async (url)=>{
    const res = await fetch(`${process.env.URL}/${url}`,{
        headers:{
          "X-ListenAPI-Key":process.env.LISTEN_NOTES_KEY
        }
      })
    return await res.json()
}
export default fetcher