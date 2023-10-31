'use client'
import { Box } from '@chakra-ui/react'
import React from 'react'
import Search from './Search'
import TypeInput from './TypeInput'
import SearchOptions from './SearchOptions'
import Select from '../inputs/select/Select'
import colors from '@/app/theme/colors'

export default function SearchBar() {
  const handleChange = (e)=>{
    console.log("changed")
  }
  const vals = {
    "episode":"Episode",
    "podcast":"Podcast"
  }
  return (
    <Box display={"flex"} alignItems={"center"} width={"100%"} justifyContent={"center"} py={"14px"} >
        <Search/>
        
            <Select values={vals} handleChange={(val)=>console.log(val)} 
                padding={"5px"} bg={"white"} color={"rose.500"} 
                borderRadius={"5px"} border={`solid 1px ${colors.gray[200]}`} width={"100px"} mx={"10px"}/>
        
        <SearchOptions/>
    </Box>    
  )
}
