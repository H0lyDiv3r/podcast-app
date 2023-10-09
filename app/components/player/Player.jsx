'use client'

import React,{useRef,useEffect, useState} from 'react'
import "./player.css"
import { Box, Icon, Input, Text } from '@chakra-ui/react'
import {FaPlay,FaPause,FaVolumeMute,FaVolumeUp,FaVolumeOff} from "react-icons/fa"
import { motion } from 'framer-motion'


const initialState = {
    paused:true,
    volume : 0.2,
    buffered : 0,
    position : 0,
    playbackRate:1,
    muted:false
}

export default function Player() {
    const [volume,setVolume] = useState(initialState.volume * 100)
    const [buffered,setBuffered] = useState(initialState.buffered)
    const [position,setPosition] = useState(initialState.position)
    const [playbackRate,setPlaybackRate] = useState(initialState.playbackRate)
    const [paused,setPaused] = useState(initialState.paused)
    const [muted,setMuted] = useState(initialState.muted)
    const [length,setLength] = useState(0)


    const audioRef = useRef(null)

    const volumeControl = (e)=>{
        audioRef.current.volume = e.target.value / 100
        setVolume(e.target.value)
        setMuted(false)
        if(e.target.value / 100 == 0){
            setMuted(true)
        }
    }
    const pause = ()=>{
        if(audioRef.current.paused){
            audioRef.current.play()
            setPaused(false)
        }else{
            audioRef.current.pause()
            setPaused(true)
        }
    }
    const mute = ()=>{
        if(audioRef.current.muted){
            audioRef.current.muted = false
            setMuted(false)
        }else{
            audioRef.current.muted = true
            setMuted(true)
        }
    }
    const timeline = ()=>{

        const interval = setInterval(()=>{
                    setPosition(audioRef.current.currentTime)
            },1000)
            setTimeout(()=>{
            clearInterval(interval)
            },1000 * (audioRef.current.duration - audioRef.current.currentTime))
              
    }
    const buffer = ()=>{
        if(audioRef.current.duration!=audioRef.current.currentTime){

            setBuffered((audioRef.current.buffered.end(0)/audioRef.current.duration)*100)
        }
    }
    const speed = (e)=>{
        setPlaybackRate(e.target.value)
        audioRef.current.playbackRate = e.target.value
    }
    const positionControl = (e)=>{
        if(audioRef.current){
            audioRef.current.currentTime = e.target.value
            setPosition(e.target.value)
        }
        console.log(audioRef)
    }

    useEffect(()=>{
        setBuffered(5)
        setLength(audioRef.current.duration)
        audioRef.current.volume = volume /100
        audioRef.current.currentTime = position
        audioRef.current.playbackRate = playbackRate
        audioRef.current.muted = muted
        if(paused){
            audioRef.current.pause()
        }else{
            audioRef.current.play()
        }
    },[])

  return (
    <Box bg={"rose.500"} position={"fixed"} bottom={0} width={"100%"} boxShadow={"topShadow"} padding={"10px"} borderTopRadius={"20px"} color={"white"}>
        <Box display={"none"}>
            <audio controls ref={audioRef} onPlaying={timeline} onProgress={buffer} >
                <source src={"./04 - Fairly Local.mp3"} type="audio/mpeg"/>
                "your browser doesnt support the element"
            </audio>
        </Box>
        <Box width={"100%"} display={"flex"} justifyContent={"center"} >
            <Box onClick={pause} width={"32px"} height={"32px"} bg={"rgba(255,255,255,0.9)"} display={"flex"} justifyContent={"center"} alignItems={"center"} borderRadius={"50%"} >
                <Icon as={ paused ? FaPlay:FaPause} color={"rose.500"} boxSize={3}/>
            </Box>
        </Box>

        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>

            <Box display={"flex"} fontSize={"12px"} fontWeight={500} marginRight={"6px"} minW={"30px"}>
                {Math.floor(position) / 60 < 10 && <Text>0</Text> }
                <Text>{Math.floor(position/60)}</Text>
                <Text>:</Text>
                {Math.floor(position) % 60 < 10 && <Text>0</Text>}
                <Text>{Math.floor(position) % 60}</Text>
            </Box>
            
            <Box bg={"rgba(255,255,255,0.2)"} height={"3px"} overflow={"hidden"} width={"50%"} marginRight={"24px"}>
                {/* <Progress value={buffered} max={100} width={"100%"} m={0} h={"15px"} colorScheme='rose'/> */}
                <Box width={`${buffered}%`} height={"15px"} bg={"rgba(255,255,255,0.4)"}></Box>
                <Input type='range' onChange={positionControl} value={position}  max={length} min={0} position={"relative"} top={"-18px"}/>
                
            </Box>

            <Box display={"flex"} alignItems={"center"} >
                <Icon as={ muted ? FaVolumeMute : FaVolumeUp} onClick={mute} marginRight={"6px"}/>
                <Box bg={"rgba(255,255,255,0.2)"} height={"3px"} overflow={"hidden"} display={"flex"} alignItems={"center"} width={"80px"}>
                    <Input type='range' onChange={volumeControl} value={volume}  max={100} min={0}/>
                </Box>
            </Box>
        </Box>

        {/* <Select onChange={speed} value={playbackRate}>
            <option value={0.5}>0.5</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
        </Select> */}
    </Box>
  )
}
