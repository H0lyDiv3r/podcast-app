import { Box, Icon, Input } from '@chakra-ui/react'
import React, { forwardRef, useContext } from 'react'
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa'
import { PlayerContext } from './PlayerContextProvider'

const VolumeControl = forwardRef( ({},ref)=>{
  const {handleVolume,volume,muted,handleMute}= useContext(PlayerContext)
  return (
        <Box display={"flex"} alignItems={"center"}>
            <Icon as={ muted ? FaVolumeMute : FaVolumeUp} onClick={()=>handleMute(ref)} marginRight={"6px"}/>
            <Box bg={"roseTrans.200"} height={"4px"} overflow={"hidden"} display={"flex"} alignItems={"center"} width={"60px"}>
                <Input type='range' onChange={(e)=>handleVolume(e,ref)} value={volume}  max={100} min={0}/>
            </Box>
        </Box>
  )
})

export default VolumeControl