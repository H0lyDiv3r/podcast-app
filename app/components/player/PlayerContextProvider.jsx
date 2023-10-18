'use client'
import React, { createContext, useReducer } from 'react'

export const PlayerContext = createContext()

const initialState = {
  paused:true,
  volume : 0,
  buffered : 0,
  position : 0,
  playbackRate:1,
  muted:false,
  length:0,
  loaded:false,
  currentTrack:'test.mp3'
}

const togglePause = 'TOGGLE_PAUSE'
const togglePlay = 'TOGGLE_PLAY'
const setVolume = 'SET_VOLUME'
const setPosition = 'SET_POSITION'
const setPlaybackRate = 'SET_PLAYBACK_RATE'
const setMute = 'SET_MUTE'
const toggleMute = 'TOGGLE_MUTE'
const setLength = 'SET_LENGTH'
const setLoaded = 'SET_LOADED'
const setCurrentTrack = 'SET_CURRENT_TRACK'

const reducer = (state,action)=>{
    if(action.type === togglePause) return {...state,paused:true}
    if(action.type === togglePlay) return {...state,paused:false}
    if(action.type === setVolume) return {...state,volume:action.payload.volume}
    if(action.type === setPosition) return {...state,position:action.payload.position}
    if(action.type === setPlaybackRate) return {...state,playbackRate:action.payload.playbackRate}
    if(action.type === setMute) return {...state,muted:action.payload.mute}
    if(action.type === toggleMute) return {...state,muted:!state.muted}
    if(action.type === setLength) return {...state,length:action.payload.len}
    if(action.type === setLoaded) return {...state,loaded:action.payload.loaded}
    if(action.type === setCurrentTrack) return {...state,currentTrack:action.payload.track}
    return state;
}

const PlayerContextProvider = ({children}) => {
  const [state,dispatch] = useReducer(reducer,initialState)

  const handlePlay = (ref)=>{
    if(ref.current.paused){
      ref.current.play()
      dispatch({type:togglePlay})
    }else{
        ref.current.pause()
        dispatch({type:togglePause})
    }
  }

  const handleMute = (ref)=>{
    if(ref.current.muted){
      ref.current.muted = false
      dispatch({type:toggleMute})
    }else{
        ref.current.muted = true
        dispatch({type:toggleMute})
    }
  }

  const handleVolume = (e,ref)=>{
    ref.current.volume = e.target.value / 100
    dispatch({
      type:setVolume,
      payload:{
        volume:e.target.value
      }
    })
    dispatch({
      type:setMute,
      payload:{
        mute:false
      }
    })
    if(e.target.value / 100 == 0){
      dispatch({
        type:setMute,
        payload:{
          mute:true
        }
      })
    }
  }

  const handleTimeline = (ref)=>{
    const interval = setInterval(()=>{
      dispatch({
        type:setPosition,
        payload:{
          position:ref.current.currentTime
        }
      })
    },1000)
    setTimeout(()=>{
    clearInterval(interval)
    },1000 * (ref.current.duration - ref.current.currentTime))
  }

  const handlePlaybackRate = (value,ref)=>{
    dispatch({
      type:setPlaybackRate,
      payload:{
        playbackRate:value
      }
    })
    ref.current.playbackRate = value
  }

  const handlePosition = (e,ref)=>{
    if(ref.current){
      ref.current.currentTime = e.target.value
      dispatch({
        type:handlePosition,
        payload:{
          position:e.target.value
        }
      })
    }
  }

  const handleSetCurrentTrack = (value)=>{
    dispatch({
      type:setCurrentTrack,
      payload:{
        track:value
      }
    })
    dispatch({type:togglePause})
  }

  const handleSetPlayerValues = (ref)=>{

    ref.current.volume = state.volume/100
    ref.current.currentTime = state.position
    ref.current.playbackRate = state.playbackRate
    ref.current.muted = state.muted
    if(state.paused){
        ref.current.pause()
    }else{
        ref.current.play()
    }
    dispatch({
      type:setLoaded,
      payload:{
        loaded:true
      }
    })
    console.log("finished loading")
  } 


  const vals = {...state,handleMute,handlePlay,handlePlaybackRate,handlePosition,handleTimeline,handleVolume,handleSetCurrentTrack,handleSetPlayerValues}

  return (
    <PlayerContext.Provider value={vals}>
        {children}
    </PlayerContext.Provider>
  )
}

export default PlayerContextProvider