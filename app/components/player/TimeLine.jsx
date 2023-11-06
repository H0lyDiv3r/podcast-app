
import { Box,Text,Input } from '@chakra-ui/react'
import React, { forwardRef, useContext } from 'react'
import { PlayerContext } from './PlayerContextProvider'
import { GlobalContext } from '@/app/providers/GlobalProvider'

const TimeLine = forwardRef(({buffered},ref)=> {
    const {position,handlePosition} = useContext(PlayerContext)
    const {currentEpisode} = useContext(GlobalContext)
  return (
        <Box width={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Box display={"flex"} fontSize={"12px"} fontWeight={500} minWidth={"55px"}>
                {Math.floor(position) / 3600 < 10 && <Text>0</Text> }
                <Text>{Math.floor(position/3600)}</Text>
                <Text>:</Text>
                {Math.floor(position) / 60 < 10 && <Text>0</Text> }
                <Text>{Math.floor(position/60)}</Text>
                <Text>:</Text>
                {Math.floor(position) % 60 < 10 && <Text>0</Text>}
                <Text>{Math.floor(position) % 60}</Text>
            </Box>
            
            <Box bg={"roseTrans.200"} height={"4px"} overflow={"hidden"} width={"full"} mx={"4px"}>
                {/* <Progress value={buffered} max={100} width={"100%"} m={0} h={"15px"} colorScheme='rose'/> */}
                <Box width={`${buffered}%`} height={"15px"} bg={"rgba(255,255,255,0.4)"}></Box>
                <Input type='range' onChange={(e)=>handlePosition(e.target.value,ref)} value={position}  max={200} min={0} position={"relative"} top={"-18px"}/>
            </Box>

            <Box display={"flex"} fontSize={"12px"} fontWeight={500}  minWidth={"35px"}>
                {Math.floor(currentEpisode.audioLength) /3600 < 10 && <Text>0</Text> }
                <Text>{Math.floor(currentEpisode.audioLength/3600)}</Text>
                <Text>:</Text>
                {Math.floor(currentEpisode.audioLength) % 60 < 10 && <Text>0</Text> }
                <Text>{Math.floor(currentEpisode.audioLength % 60)}</Text>
                <Text>:</Text>
                {Math.floor(currentEpisode.audioLength/60 % 60) < 10 && <Text>0</Text>}
                <Text>{Math.floor(currentEpisode.audioLength/60 % 60)}</Text>
            </Box>
        </Box>
  )
})

export default TimeLine