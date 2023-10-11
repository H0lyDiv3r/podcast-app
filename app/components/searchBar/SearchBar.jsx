import { Box } from '@chakra-ui/react'
import React from 'react'
import Search from './Search'
import TypeInput from './TypeInput'
import SearchOptions from './SearchOptions'

export default function SearchBar() {
  return (
    <Box display={"flex"} alignItems={"center"} width={"100%"} justifyContent={"space-around"}>
        <Search/>
        <TypeInput/>
        <SearchOptions/>
    </Box>
  )
}
