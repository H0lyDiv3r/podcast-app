
import { Box,Text,Input } from '@chakra-ui/react'
import React, { forwardRef, useContext } from 'react'
import { PlayerContext } from './PlayerContextProvider'

const TimeLine = forwardRef(({buffered},ref)=> {
    const {position,length,handlePosition} = useContext(PlayerContext)
  return (
        <>
            <Box display={"flex"} fontSize={"12px"} fontWeight={500} marginRight={"6px"} overflow={"hidden"}>
                {Math.floor(position) / 60 < 10 && <Text>0</Text> }
                <Text>{Math.floor(position/60)}</Text>
                <Text>:</Text>
                {Math.floor(position) % 60 < 10 && <Text>0</Text>}
                <Text>{Math.floor(position) % 60}</Text>
            </Box>
            
            <Box bg={"roseTrans.200"} height={"3px"} overflow={"hidden"} width={"300px"} >
                {/* <Progress value={buffered} max={100} width={"100%"} m={0} h={"15px"} colorScheme='rose'/> */}
                <Box width={`${buffered}%`} height={"15px"} bg={"rgba(255,255,255,0.4)"}></Box>
                <Input type='range' onChange={(e)=>handlePosition(e,ref)} value={position}  max={200} min={0} position={"relative"} top={"-18px"}/>
            </Box>

            <Box display={"flex"} fontSize={"12px"} fontWeight={500} marginLeft={"6px"}>
                {Math.floor(length) / 60 < 10 && <Text>0</Text> }
                <Text>{Math.floor(length/60)}</Text>
                <Text>:</Text>
                {Math.floor(length) % 60 < 10 && <Text>0</Text>}
                <Text>{Math.floor(length) % 60}</Text>
            </Box>
        </>
  )
})

export default TimeLine