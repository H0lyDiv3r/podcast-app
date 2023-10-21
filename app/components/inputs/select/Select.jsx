'use client'

import { Box,Text } from '@chakra-ui/react'
import React, { useState } from 'react'



const Select = ({values,handleChange}) => {
    const [isOpen,setIsOpen] = useState(false)
    const [value,setValue] = useState(Object.keys(values)[0])
    
    const onChange = (val)=>{
        setValue(val)
        handleChange(val)
    }

  return (

        <Box position={"relative"} tabIndex={1} onClick={()=>setIsOpen(!isOpen)} onBlur={()=>setIsOpen(false)} width={"100%"} textAlign={"center"} >
            <Box bg={"rose.500"} color={"white.900"} padding={"5px"} borderRadius={"5px"}>
                <Text>{values[value]}</Text>
            </Box>

            <Box display={isOpen ? "block" : "none"} position={"absolute"} zIndex={1} width={"100%"}  fontSize={"sm"} color={"rose.600"} maxHeight={"400px"} overflow={"auto"} bg={"black.200"}>
               {Object.keys(values).map(val=>
                <Box key={val} id={val} onClick={()=>onChange(val)} bg={"rose.200"} my={"10px"} padding={"5px"} borderRadius={"5px"} width={"100%"}>{values[val]}</Box>
               )}
            </Box>
        </Box>
  )
}

export default Select