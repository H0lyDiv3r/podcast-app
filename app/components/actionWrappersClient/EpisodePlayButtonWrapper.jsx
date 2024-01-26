'use client'

import { GlobalContext } from '@/app/providers/GlobalProvider'
import { Box } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'


const EpisodePlayButtonWrapper = ({children,data}) => {
    const {currentEpisode,handleSetCurrentEpisode}=useContext(GlobalContext)
    const router = useRouter()
    const setCurrentTrack=()=>{
      handleSetCurrentEpisode(data)
      router.push(`?episode_id=${data.id}`)
    }
  return (
    <Box onClick={setCurrentTrack}>
        {children}
    </Box>
  )
}

export default EpisodePlayButtonWrapper