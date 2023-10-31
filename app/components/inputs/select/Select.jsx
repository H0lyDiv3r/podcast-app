'use client'

import colors from '@/app/theme/colors'
import { Box,Text } from '@chakra-ui/react'
import React, { useState } from 'react'


const Select = ({values,val,handleChange,...otherProps}) => {
    const [isOpen,setIsOpen] = useState(false)
    const [value,setValue] = useState(val ? val:Object.keys(values)[0])
    
    const onChange = (val)=>{
        setValue(val)
        handleChange(val)
    }

  return (

        <Box position={"relative"} tabIndex={1} onClick={()=>setIsOpen(!isOpen)} onBlur={()=>setIsOpen(false)} textAlign={"center"} >
            <Box {...otherProps}>
                <Text>{values[value]}</Text>
            </Box>

            <Box display={isOpen ? "block" : "none"} position={"absolute"} zIndex={1} width={"100%"} 
                fontSize={"sm"} color={"rose.600"} maxHeight={"400px"} overflow={"auto"} bg={"white"} borderRadius={"5px"} marginTop={"12px"} 
                boxShadow={"md"} border={`solid 1px ${colors.gray[100]}`}>
               {Object.keys(values).map(val=>
                <Box key={val} id={val} onClick={()=>onChange(val)} my={"10px"} padding={"5px"} width={"100%"} bg={value === val && "rose.200"} >{values[val]}</Box>
               )}
            </Box>
        </Box>
  )
}

export default Select