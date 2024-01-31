import { Box,Image } from '@chakra-ui/react'
import React from 'react'
import SearchBar from '../searchBar/SearchBar'

const Navbar = () => {
  return (
    <Box position={"sticky"} top={"0"} zIndex={1} display={"flex"} alignItems={"baseline"}>
        <Box display={"flex"} alignItems={"baseline"} w={"300px"}><Image src={"poweredBy.png"} width={"100%"}/></Box>
        <SearchBar/>
    </Box>
  )
}

export default Navbar