'use client'

import React,{useRef,useEffect, useContext} from 'react'
import "./player.css"
import { Box, Button, Icon, Input, Text } from '@chakra-ui/react'
import Controls from './Controls'
import TimeLine from './TimeLine'

import { PlayerContext } from './PlayerContextProvider'



export default function Player() {

    const {currentTrack,handleTimeline,handleSetCurrentTrack,handleSetPlayerValues,loaded} = useContext(PlayerContext)
    
    const audioRef = useRef(null)

    const buffer = ()=>{
        // if(audioRef.current.duration!=audioRef.current.currentTime){

        //     setBuffered((audioRef.current.buffered.end( audioRef.current.buffered.length - 1 )/audioRef.current.duration)*100)
        // }
    }

    useEffect(()=>{
        // handleSetPlayerValues(audioRef)
    },[])

  return (
    <Box display={"flex"} bg={"white.900"} position={"fixed"} bottom={0} width={"100%"} boxShadow={"topShadow"} padding={"10px"} borderTopRadius={"20px"} color={"rose.500"}>
        <Box display={"none"} >
            <audio controls ref={audioRef} onPlaying={()=>handleTimeline(audioRef)} onProgress={buffer} src={`./${currentTrack}`} onLoadedData={()=>handleSetPlayerValues(audioRef)}>
                "your browser doesnt support the element"
            </audio>
        </Box>
        <Box height={"100%"} width={"100px"}>
            <Text>title title</Text>
        </Box>
        <Box width={"100%"}>

            <Controls ref={audioRef}/>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <TimeLine ref={audioRef}/>
            </Box>

        </Box>
    </Box>
  )
}
