'use client'

import React,{useRef,useEffect, useState, useContext} from 'react'
import "./player.css"
import { Box, Button, Icon, Input, Text } from '@chakra-ui/react'
import {FaPlay,FaPause,FaVolumeMute,FaVolumeUp,FaVolumeOff} from "react-icons/fa"
import { motion } from 'framer-motion'
import VolumeControl from './VolumeControl'
import Controls from './Controls'
import TimeLine from './TimeLine'
import ButtonDefault from '../inputs/buttons/ButtonDefault'
import { PlayerContext } from './PlayerContextProvider'


const initialState = {
    paused:true,
    volume : 0.2,
    buffered : 0,
    position : 0,
    playbackRate:1,
    muted:false
}

export default function Player() {

    const {handlePlay,handleTimeline} = useContext(PlayerContext)
    const [volume,setVolume] = useState(initialState.volume * 100)
    const [buffered,setBuffered] = useState(initialState.buffered)
    const [position,setPosition] = useState(initialState.position)
    const [playbackRate,setPlaybackRate] = useState(initialState.playbackRate)
    const [paused,setPaused] = useState(initialState.paused)
    const [muted,setMuted] = useState(initialState.muted)
    const [length,setLength] = useState(2447)
    const [loaded,setLoaded] = useState(false)
    const [music,setMusic] = useState("test.mp3")


    
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
        // if(audioRef.current.duration!=audioRef.current.currentTime){

        //     setBuffered((audioRef.current.buffered.end( audioRef.current.buffered.length - 1 )/audioRef.current.duration)*100)
        // }
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
    const setPlayerValues = ()=>{
        setBuffered(5)
        // setLength(audioRef.current.duration)
        audioRef.current.volume = volume /100
        audioRef.current.currentTime = position
        audioRef.current.playbackRate = playbackRate
        audioRef.current.muted = muted
        if(paused){
            audioRef.current.pause()
        }else{
            audioRef.current.play()
        }
        setLoaded(true)
    }

    useEffect(()=>{
        setPlayerValues()
    },[])

  return (
    <Box bg={"rose.500"} position={"fixed"} bottom={0} width={"100%"} boxShadow={"topShadow"} padding={"10px"} borderTopRadius={"20px"} color={"white"}>
        <Box display={"none"} >
            <audio controls ref={audioRef} onPlaying={()=>handleTimeline(audioRef)} onProgress={buffer} src={`./${music}`}>
                "your browser doesnt support the element"
            </audio>
        </Box>
        <Controls handlePause={pause} paused={paused} ref={audioRef}/>

        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <TimeLine ref={audioRef}/>
            <VolumeControl handleVolume={volumeControl} mute={mute} muted={muted} volume={volume}/>
        </Box>
    </Box>
  )
}
