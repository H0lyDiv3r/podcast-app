'use client'
import { Box,Icon,Badge } from '@chakra-ui/react'
import React from 'react'
import Search from './Search'
import TypeInput from './TypeInput'
import SearchOptions from './SearchOptions'
import Select from '../inputs/select/Select'
import colors from '@/app/theme/colors'
import SearchContextProvider from './SearchContextProvider'
import { FaList } from 'react-icons/fa'

export default function SearchBar() {
  return (
      <SearchContextProvider>
          <Box display={"flex"} alignItems={"center"} width={"100%"} justifyContent={"center"} py={"14px"} >
              <Search/>
              <TypeInput/>
              <SearchOptions/>
              <Queue/>
          </Box>    
      </SearchContextProvider>
  )
}


const Queue = ()=>{
  return(
    <>
      <Badge bg={"rose.500"} color={"white"} fontSize={"12px"} position={"relative"} top={"-7px"}>0</Badge>
      <Icon as={FaList} boxSize={6}/>
    </>
  )
}
