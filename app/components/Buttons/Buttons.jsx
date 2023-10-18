import { Button } from '@chakra-ui/react'
import React from 'react'

export const DefaultButton = () => {
  return (
    <div>Buttons</div>
  )
}

export const IconButton = ({children,action,color="white"})=>{
    return(
        <Button bg={"none"} _hover={{bg:"none"}} onClick={action} color={color}>{children}</Button>
    )
}
