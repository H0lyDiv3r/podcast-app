import React from 'react'
import {Box} from '@chakra-ui/react'
import RecPodcast from '../cards/RecPodcast'
import RecEpisode from '../cards/RecEpisode'


const RecomendationList = ({data,episode}) => {
  return (
    <Box>
      {!episode ?
      
        data.map(item=>
            <RecPodcast data={item} key={item.id}/>
          )
        :
        data.map(item=>
            <RecEpisode data={item} key={item.id}/>
          )
    
    }

    </Box>
  )
}

export default RecomendationList