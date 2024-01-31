import React from 'react'
import {Box} from "@chakra-ui/react"
import RecomendationList from './RecomendationList'
import fetcher from '@/app/utils/fetcher'


const Recommendations = async ({params,searchParams}) => {

    const {recommendations} = await fetcher(`/podcasts/${params.id}/recommendations`)
    const dataEP = await fetcher(`/episodes/${searchParams.episode_id}/recommendations`)
  console.log(dataEP.recommendations)
  return (
    <Box height={"75vh"} overflow={"scroll"} p={"18px"}>
      {dataEP.recommendations &&
      
        <RecomendationList data={ dataEP.recommendations} episode={true} />
      }
        <RecomendationList data={recommendations}/>
    </Box>
  )
}

export default Recommendations