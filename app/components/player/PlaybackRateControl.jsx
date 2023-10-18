import React,{forwardRef, useContext, useState} from 'react'
import Select from '../inputs/select/Select'
import { Menu, MenuButton, MenuItem, MenuList,Box,Text } from '@chakra-ui/react'
import { PlayerContext } from './PlayerContextProvider'

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
    const [isOpen,setIsOpen] = useState(false)
    const [value,setValue] = useState(speed[0].value)
    const {handlePlaybackRate,playbackRate} = useContext(PlayerContext)
    const onChange = (val)=>{
        setValue(val.id)
        handleChange(val)
    }
  return (
    <>
    <Menu>
        {speed.map(val=>
            <MenuButton key={val.id}>{playbackRate == val.value && val.name}</MenuButton>
        )}
    
        <MenuList>
        {speed.map(val=>
                <MenuItem key={val.id} id={val.id} onClick={()=>handlePlaybackRate(val.value,ref)} bg={val.value == playbackRate && "roseTrans.100"} color={val.value == playbackRate && "white.900"} >{val.name}</MenuItem>
               )}
        </MenuList>
    </Menu>

    </>
  )
})

export default PlaybackRateControl