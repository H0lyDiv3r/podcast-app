import { Box } from '@chakra-ui/react'
import React from 'react'

const CustomLink = ({children,link,...otherProps}) => {
  return (
    <>
    {link && 
    <Box {...otherProps}>
        <a href={link}>
            {children}
        </a>
    </Box>
    }</>
  )
}

export default CustomLink