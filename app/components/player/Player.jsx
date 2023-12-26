'use client'

import React,{useRef, useContext} from 'react'
import "./player.css"
import { Box, Button, Icon, Image, Input, Text } from '@chakra-ui/react'
import Controls from './Controls'
import TimeLine from './TimeLine'

import { PlayerContext } from './PlayerContextProvider'
import { GlobalContext } from '@/app/providers/GlobalProvider'



export default function Player() {

    const {currentTrack,handleTimeline,handleSetCurrentTrack,handleSetPlayerValues,loaded,handlePosition,handlePause,handleLoaded} = useContext(PlayerContext)
    const {currentEpisode} = useContext(GlobalContext)
    
    const audioRef = useRef(null)

    const buffer = ()=>{
        // if(audioRef.current.duration!=audioRef.current.currentTime){

        //     setBuffered((audioRef.current.buffered.end( audioRef.current.buffered.length - 1 )/audioRef.current.duration)*100)
        // }
    }
    const handleLoad = (ref)=>{
        handleSetPlayerValues(ref)
        handlePosition(0,ref)
    }

  return (
    <>
    {currentEpisode &&
    <Box display={"flex"} bg={"white.900"} width={"100%"} boxShadow={"topShadow"} padding={"10px"} borderTopRadius={"20px"} color={"rose.500"}>
        <Box display={"none"} >
            <audio controls ref={audioRef} onPlaying={()=>handleTimeline(audioRef)} onProgress={buffer} 
                    src={`${currentEpisode.audio}`} onLoadedData={()=>handleSetPlayerValues(audioRef)} 
                    onEnded={()=>handlePause(audioRef)} onEmptied={()=>handleLoaded(false)}>
                "your browser doesnt support the element"
            </audio>
        </Box>
        <Box height={"100%"} width={"30%"} display={"flex"}>
            <Box>
                <Image src={currentEpisode.thumbnail} width={"70px"} fit={"cover"}/>
            </Box>
            <Box px={"6px"}>
                <Text fontSize={"14px"}>{currentEpisode.title}</Text>
            </Box>
        </Box>
        <Box width={"70%"}>

            <Controls ref={audioRef}/>
            <Box display={"flex"} width={"55%"} justifyContent={"center"} alignItems={"center"} >
                <TimeLine ref={audioRef}/>
            </Box>

        </Box>
    </Box>}
    </>
  )
}
