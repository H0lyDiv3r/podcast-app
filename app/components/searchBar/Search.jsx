
import { Box, Input, FormControl, FormLabel, InputGroup, InputRightElement, Icon } from '@chakra-ui/react'
import React from 'react'
import { FaSearch } from 'react-icons/fa'

export default function Search() {
  return (
    <Box width={"70%"}>
        <FormControl >
            <InputGroup size={"sm"}>
                <Input type={"text"} borderRadius={"4px"} placeholder={"search..."}/>
                <InputRightElement><i><FaSearch/></i></InputRightElement>
            </InputGroup>
        </FormControl>
    </Box>
  )
}
