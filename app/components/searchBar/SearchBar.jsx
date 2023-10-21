'use client'
import { Box } from '@chakra-ui/react'
import React from 'react'
import Search from './Search'
import TypeInput from './TypeInput'
import SearchOptions from './SearchOptions'
import Select from '../inputs/select/Select'

export default function SearchBar() {
  const handleChange = (e)=>{
    console.log("changed")
  }
  const vals = {
    "episode":"Episode",
    "podcast":"Podcast"
  }
  return (
    <Box display={"flex"} alignItems={"center"} width={"100%"} justifyContent={"space-around"}>
        <Search/>
        <Box width={"100px"}>
          <Select values={vals} handleChange={(val)=>console.log(val)}/>
        </Box>
        <SearchOptions/>
    </Box>    
  )
}
