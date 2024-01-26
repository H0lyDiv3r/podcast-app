import React from 'react'
import {Box} from '@chakra-ui/react'
import RecPodcast from '../cards/RecPodcast'


const RecomendationList = ({data}) => {
  return (
    <Box>
        {data.map(item=>
            <RecPodcast data={item} />
          )}
    </Box>
  )
}

export default RecomendationList