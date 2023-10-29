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
    <Box display={"flex"} alignItems={"center"} width={"100%"} justifyContent={"space-between"} py={"14px"} position={"sticky"} top={"0"} bg={"white"} boxShadow={"md"}>
        <Search/>
        <Box width={"100px"}>
            <Select values={vals} handleChange={(val)=>console.log(val)} 
                padding={"5px"} bg={"white.900"} color={"rose.500"} 
                borderRadius={"5px"} border={`solid 1px ${colors.gray[200]}`}/>
        </Box>
        <SearchOptions/>
    </Box>    
  )
}
