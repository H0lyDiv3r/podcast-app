import React from 'react'
import ActionWrapper from '../components/test/ActionWrapper'
import Episode from '../components/cards/Episode'
import PodcastFull from '../components/podcast/PodcastFull'
import { Box } from '@chakra-ui/react'
import fetcher from '../utils/fetcher'


const fetchDate = async ()=>{
  try{
      // const res = await fetch("http://localhost:5000/podcast")
      // const data = await res.json()
      // return data
      return fetcher('podcasts/4d3fe717742d4963a85562e9f84d8c79')
  }catch(err){

      return "not found"
  }
}

export default async function page({testText}) {
  const data = await fetchDate()
  return (
    <Box height={"75vh"} overflow={"auto"}>
      <PodcastFull data={data}/>
      {data.episodes.map(episode=>
        
          <Episode key={episode.id} data={episode}/>
        )}
    </Box>
  )
}