
import { Box, Input, FormControl, FormLabel, InputGroup, InputRightElement, Icon } from '@chakra-ui/react'
import React from 'react'
import { FaSearch } from 'react-icons/fa'

export default function Search() {
  return (
    <Box >
        <FormControl>
          <FormLabel display={"none"}>search</FormLabel>
            <InputGroup variant={"filled"} border={"none"}>
                <Input type={"text"} borderRadius={"4px"} placeholder={"search..."} w={"500px"} bg={"rose.50"} _hover={{bg:"rose.100"}} _focus={{bg:"rose.100",border:"none"}} border={"none"} />
                <InputRightElement><i><FaSearch/></i></InputRightElement>
            </InputGroup>
        </FormControl>
    </Box>
  )
}
