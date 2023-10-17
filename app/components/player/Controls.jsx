'use client'
import { Box,Icon,Button } from '@chakra-ui/react'
import React,{forwardRef, useContext} from 'react'
import { FaPause, FaPlay } from 'react-icons/fa'
import ButtonDefault from '../inputs/buttons/ButtonDefault'
import { PlayerContext } from './PlayerContextProvider'
import VolumeControl from './VolumeControl'

const Controls = forwardRef( ({},ref) => {
  const {handlePlay,paused} = useContext(PlayerContext)
  return (
    <Box width={"100%"} >
      <Button onClick={()=>handlePlay(ref)} borderRadius={"50%"} width={"32px"} bg={"white.900"}>
          <Icon as={ paused ? FaPlay:FaPause} color={"rose.500"} boxSize={3}/>
      </Button>
      <VolumeControl ref={ref}/>
    </Box>
  )
})

export default Controls

