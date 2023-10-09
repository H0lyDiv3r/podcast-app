'use client'
import { Box } from '@chakra-ui/react'
import React from 'react'

const ActionWrapper = ({children}) => {
  return (
    <Box onClick={()=>console.log("action")}>
        {children}
    </Box>
  )
}

export default ActionWrapper