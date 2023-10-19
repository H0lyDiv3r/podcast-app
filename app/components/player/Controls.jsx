'use client'
import { Box,Icon,Button,Spinner, Spacer } from '@chakra-ui/react'
import React,{forwardRef, useContext} from 'react'
import { FaFastBackward, FaFastForward, FaPause, FaPlay } from 'react-icons/fa'
import ButtonDefault from '../inputs/buttons/ButtonDefault'
import { PlayerContext } from './PlayerContextProvider'
import VolumeControl from './VolumeControl'
import { IconButton } from '../Buttons/Buttons'
import PlaybackRateControl from './PlaybackRateControl'

const Controls = forwardRef( ({},ref) => {
  const {handlePlay,paused,loaded} = useContext(PlayerContext)
  return (
    <Box width={"100%"} display={"flex"} alignItems={"center"} justifyContent={"center"}> 
        <Box width={"30%"}></Box>
        <Spacer/>
          <Box display={"flex"} justifyContent={"center"} width={"40%"}>
              <IconButton color={"rose.500"}>
                <Icon as={FaFastBackward}/>
              </IconButton>
              <Button onClick={()=>handlePlay(ref)} borderRadius={"50%"} width={"32px"} bg={"rose.500"} isDisabled={!loaded}>
                {loaded ? 
                  <Icon as={ paused ? FaPlay:FaPause} color={"white.900"} boxSize={3}/>:
                  <Spinner boxSize={"10px"}/>
                }
              </Button>
              <IconButton action={()=>console.log("handle deez nuts")} color={"rose.500"}>
                <Icon as={FaFastForward}/>
              </IconButton>
          </Box>
          <Spacer/>
          <Box display={"flex"} minWidth={"30%"} justifyContent={"flex-end"} alignItems={"center"}>
            
              <Box marginRight={"15px"}>
                <VolumeControl ref={ref}/>
              </Box>

              <Box marginRight={"15px"}>
                <PlaybackRateControl ref={ref}/>
              </Box>
          </Box>
    </Box>
  )
})

export default Controls

