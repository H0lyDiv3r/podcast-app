'use client'
import { Text } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'

const TextInnerHtml = ({text}) => {
    const ref = useRef()
    const reg = /<p>/gi

    useEffect(()=>{
        ref.current.innerHTML = text
    },[])
  return (
    <Text ref={ref}></Text>
  )
}

export default TextInnerHtml