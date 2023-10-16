import { Box, Icon, Input } from '@chakra-ui/react'
import React from 'react'
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa'

export default function VolumeControl({handleVolume,volume,muted,mute}) {
  return (
        <Box display={"flex"} alignItems={"center"}>
            <Icon as={ muted ? FaVolumeMute : FaVolumeUp} onClick={mute} marginRight={"6px"}/>
            <Box bg={"rgba(255,255,255,0.2)"} height={"3px"} overflow={"hidden"} display={"flex"} alignItems={"center"} width={"80px"}>
                <Input type='range' onChange={handleVolume} value={volume}  max={100} min={0}/>
            </Box>
        </Box>
  )
}
