import { Select, Box, Text, Icon } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

const InputMultiple = () => {
    const [genres,setGenres] = useState(["Entertainment","News"])
  return (
    <Box>
        <Box display={"flex"}>
            {genres.map(genre=>
                <GenreWrapper>{genre}</GenreWrapper>
            )}
        </Box>
        <Select onChange={()=>setGenres(["lalala"])}>
            <option value={"crime"}>Crime</option>
            <option value={"true"}>True</option>
        </Select>
    </Box>
  )
}

export default InputMultiple

export const GenreWrapper = ({children})=>{

    return(
        <>
            <Icon as={FaTimes} bg={"rose.600"} padding={"2px"} borderRadius={"50%"} boxSize={4} color={"white"} position={"relative"} top={"-6px"} left={"10px"}/>
            <Box bg={"rose.500"} color={'white'} marginRight={"10px"} py={"2px"} px={"8px"} borderRadius={"5px"}>
                {children}
            </Box>
        </>
    )
}