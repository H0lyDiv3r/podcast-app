import React from 'react'
import ActionWrapper from '../../components/test/ActionWrapper'
import Episode from '../../components/cards/Episode'
import PodcastFull from '../../components/podcast/PodcastFull'
import { Box,Grid,GridItem } from '@chakra-ui/react'
import fetcher from '../../utils/fetcher'
import Recommendations from '@/app/components/recommendations/Recommendations'


const fetchDate = async (params)=>{
  try{
      // const res = await fetch("http://localhost:5000/podcast")
      // const data = await res.json()
      // return data
      return fetcher(`podcasts/${params.id}`)
  }catch(err){

      return "not found"
  }
}

export default async function page({params,searchParams}) {
  const data = await fetchDate(params)
  console.log("search params be like",params)
  return (

    <Grid templateColumns={"repeat(12,1fr)"} height={"75vh"}>

        <GridItem colSpan={"1"}>

        </GridItem>
        <GridItem colSpan={"8"}>
            <Box height={"75vh"} overflow={"auto"}>
                <PodcastFull data={data}/>
                {data.episodes.map(episode=>
                  
                    <Episode key={episode.id} data={episode}/>
                  )}
            </Box>
        </GridItem>
        <GridItem colSpan={"3"}>
          <Recommendations params={params} searchParams={searchParams}/>
        </GridItem>
    </Grid>
  )
}