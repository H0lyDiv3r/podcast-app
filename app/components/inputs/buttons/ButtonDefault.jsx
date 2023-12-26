'use client'
import { Button } from '@chakra-ui/react'
import React from 'react'

const ButtonDefault = ({children},action,width="100%",height,border="none", borderRadius="6px",disabled=false,loading=false,bg="white.100") => {
  return (
    <Button onClick={action} width={width} height={height} border={border} borderRadius={borderRadius} disabled={disabled} bg={bg}>
        {children}
    </Button>
  )
}

export default ButtonDefault