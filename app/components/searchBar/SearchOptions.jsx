import { Box, Checkbox, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { FaCogs } from 'react-icons/fa'

export default function SearchOptions() {
  return (
    <Box>
       
        <Menu>
            <MenuButton><FaCogs/></MenuButton>
            <MenuList width={"400px"}>
                    <Box height={"500px"} padding={"18px"}>
                        <Checkbox>sort by date</Checkbox>
                        
                    </Box>
            </MenuList>
        </Menu>
    </Box>
  )
}
