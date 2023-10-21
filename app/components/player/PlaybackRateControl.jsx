import React,{forwardRef, useContext, useState} from 'react'
import Select from '../inputs/select/Select'
import { Menu, MenuButton, MenuItem, MenuList,Box,Text, Icon } from '@chakra-ui/react'
import { PlayerContext } from './PlayerContextProvider'
import { FaTimes } from 'react-icons/fa'

const speed = [
    {
        id:0,
        name:0.25,
        value:0.25
    },
    {
        id:1,
        name:0.5,
        value:0.5
    },
    {
        id:2,
        name:0.75,
        value:0.75
    },
    {
        id:3,
        name:1,
        value:1
    },
    {
        id:4,
        name:1.25,
        value:1.25
    },
    {
        id:5,
        name:1.5,
        value:1.5
    },
    {
        id:6,
        name:1.75,
        value:1.75
    },
    {
        id:7,
        name:2,
        value:2
    },
    
]

const PlaybackRateControl = forwardRef( ({},ref) => {
    const {handlePlaybackRate,playbackRate} = useContext(PlayerContext)
  return (
    <>
    <Box>
        <Menu offset={[100,30]}>
            {speed.map(val=>
                <Box key={val.id}>
                    {playbackRate == val.value && <MenuButton minWidth={"40px"} bg={'rose.50'} borderY={"solid 2px red"} fontSize={"14px"} fontWeight={500}>X {playbackRate}</MenuButton>}
                </Box>
            )}
        
            <MenuList>
            {speed.map(val=>
                    <MenuItem key={val.id} id={val.id} 
                        onClick={()=>handlePlaybackRate(val.value,ref)} 
                        bg={val.value == playbackRate && "roseTrans.200"} 
                        color={val.value == playbackRate && "white.900"} 
                        >{val.name}</MenuItem>
                )}
            </MenuList>
        </Menu>
    </Box>

    </>
  )
})

export default PlaybackRateControl