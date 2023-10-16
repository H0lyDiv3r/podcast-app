'use client'

import { Box,Text } from '@chakra-ui/react'
import React, { useState } from 'react'



const Select = ({values,handleChange}) => {
    const [isOpen,setIsOpen] = useState(false)
    const [value,setValue] = useState(values[0].id)
    const onChange = (val)=>{
        setValue(val.id)
        handleChange(val)
    }

  return (

        <Box position={"relative"} tabIndex={1} onClick={()=>setIsOpen(!isOpen)} onBlur={()=>setIsOpen(false)} width={"100%"} textAlign={"center"} >
            <Box bg={"rose.500"} color={"white.900"} padding={"5px"} borderRadius={"5px"}>
                {values.map(val=>
                    <Text key={val.id}>{value==val.id && val.name}</Text>
                )}
            </Box>

            <Box display={isOpen ? "block" : "none"} position={"absolute"} zIndex={1} width={"100%"}  fontSize={"sm"} color={"rose.600"}>
               {values.map(val=>
                <Box key={val.id} id={val.id} onClick={()=>onChange(val)} bg={"rose.200"} my={"10px"} padding={"5px"} borderRadius={"5px"} width={"100%"}>{val.name}</Box>
               )}
            </Box>
        </Box>
  )
}

export default Select