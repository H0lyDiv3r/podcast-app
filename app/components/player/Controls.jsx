'use client'
import { Box,Icon,Button } from '@chakra-ui/react'
import React,{forwardRef, useContext} from 'react'
import { FaPause, FaPlay } from 'react-icons/fa'
import ButtonDefault from '../inputs/buttons/ButtonDefault'
import { PlayerContext } from './PlayerContextProvider'

const Controls = forwardRef( ({},ref) => {
  const {handlePlay,paused} = useContext(PlayerContext)
  return (
    <Box>
      <Button onClick={()=>handlePlay(ref)}>
          <Icon as={ paused ? FaPlay:FaPause} color={"rose.500"} boxSize={3}/>
      </Button>
    </Box>
  )
})

export default Controls

