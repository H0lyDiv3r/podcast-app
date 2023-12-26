import { Box,Text } from '@chakra-ui/react'
import React from 'react'
import SearchBar from '../searchBar/SearchBar'

const Navbar = () => {
  return (
    <Box position={"sticky"} top={"0"} zIndex={1} display={"flex"} alignItems={"baseline"}>
        <Box display={"flex"} alignItems={"baseline"}>TalkBox</Box>
        <SearchBar/>
    </Box>
  )
}

export default Navbar