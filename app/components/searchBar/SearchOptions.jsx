import { Box, Checkbox, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { FaCogs } from 'react-icons/fa'
import InputRange from '../inputs/range/InputRange'

export default function SearchOptions() {
  return (
    <Box>
       
        <Menu>
            <MenuButton><FaCogs/></MenuButton>
            <MenuList width={"400px"}>
                    <Box height={"500px"} padding={"18px"}>
                        <Checkbox>sort by date</Checkbox>
                        
                        <InputRange min={0} max={15}/>
                    </Box>
            </MenuList>
        </Menu>
    </Box>
  )
}
