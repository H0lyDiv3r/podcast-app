
import { Select, Box, Text, Icon } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { topGenres,gens } from '@/app/data/genres'

const InputMultiple = () => {
    const [genres,setGenres] = useState([])

    const handleAddGenre = (value)=>{
        if(!genres.includes(value)){
            setGenres([...genres,value])
        }
    }
  return (
    <Box>
        <Box display={"flex"}>
            <Box display={"flex"} flexWrap={"wrap"}>   
            {genres.map(genre=>
                <GenreWrapper key={genre}>{gens[genre]}</GenreWrapper>
            )}
            </Box>
        </Box>
        <Select onChange={(e)=>handleAddGenre(e.target.value)}>
                {Object.keys(gens).map(gen=>
                    <option key={gen} value={gen} >{gens[gen]}</option>
                )}
        </Select>
    </Box>
  )
}

export default InputMultiple

export const GenreWrapper = ({children})=>{

    return(
        <Box display={"flex"}>
            <Icon as={FaTimes} bg={"rose.600"} padding={"2px"} borderRadius={"50%"} boxSize={4} color={"white"} position={"relative"} top={"5px"} left={"10px"}/>
            <Box bg={"rose.500"} color={'white'} marginRight={"10px"} py={"2px"} px={"8px"} borderRadius={"5px"} fontSize={"14px"} my={"10px"} >
                {children}
            </Box>
        </Box>
    )
}