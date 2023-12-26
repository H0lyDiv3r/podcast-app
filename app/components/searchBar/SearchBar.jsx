'use client'
import { Box } from '@chakra-ui/react'
import React from 'react'
import Search from './Search'
import TypeInput from './TypeInput'
import SearchOptions from './SearchOptions'
import Select from '../inputs/select/Select'
import colors from '@/app/theme/colors'
import SearchContextProvider from './SearchContextProvider'

export default function SearchBar() {
  const handleChange = (e)=>{
    console.log("changed")
  }

  return (
      <SearchContextProvider>
          <Box display={"flex"} alignItems={"center"} width={"100%"} justifyContent={"center"} py={"14px"} >
              <Search/>

              <TypeInput/>
              <SearchOptions/>
          </Box>    
      </SearchContextProvider>
  )
}
