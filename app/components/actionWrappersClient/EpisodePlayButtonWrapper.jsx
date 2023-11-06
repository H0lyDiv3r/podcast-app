'use client'

import { GlobalContext } from '@/app/providers/GlobalProvider'
import { Box } from '@chakra-ui/react'
import React, { useContext } from 'react'

const EpisodePlayButtonWrapper = ({children,data}) => {
    const {currentEpisode,handleSetCurrentEpisode}=useContext(GlobalContext)
  return (
    <Box onClick={()=>handleSetCurrentEpisode(data)}>
        {children}
    </Box>
  )
}

export default EpisodePlayButtonWrapper