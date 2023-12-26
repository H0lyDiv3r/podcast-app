'use client'
import { Box } from '@chakra-ui/react'
import React,{useContext} from 'react'
import { GlobalContext } from '@/app/providers/GlobalProvider'


const ActionWrapper = ({children}) => {
  const {test,testText} = useContext(GlobalContext)
  return (
    <Box onClick={()=>test()} bg={"red"}>
        {children}
        {testText}
    </Box>
  )
}

export default ActionWrapper