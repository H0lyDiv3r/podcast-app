'use client'

import { Box, Input, FormControl, FormLabel, InputGroup, InputRightElement, Icon } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { FaSearch } from 'react-icons/fa'
import { SearchContext } from './SearchContextProvider'

export default function Search() {
  const {q,handleSetValue} = useContext(SearchContext)
  return (
    <Box >
        <FormControl>
          <FormLabel display={"none"}>search</FormLabel>
            <InputGroup variant={"filled"} border={"none"}>
                <Input type={"text"} borderRadius={"4px"} placeholder={"search..."} name='q' onChange={(e)=>handleSetValue(e.target.name,e.target.value)} value={q}
                        w={"500px"} bg={"rose.50"} _hover={{bg:"rose.100"}} _focus={{bg:"rose.100",border:"none"}} border={"none"} />
                <InputRightElement _hover={{color:"rose.500"}} fontSize={"16px"} color={"rose.400"}><i><FaSearch/></i></InputRightElement>
            </InputGroup>
        </FormControl>
    </Box>
  )
}
