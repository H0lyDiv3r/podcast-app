'use client'
import { Text } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'

const TextInnerHtml = ({text,slice=null,...otherProps}) => {
    const ref = useRef()
    const reg = /<p>/gi

    useEffect(()=>{
        ref.current.innerHTML = Boolean(slice) ? text.slice(0,slice) + "..." : text
    },[])
  return (
    <Text ref={ref} {...otherProps}></Text>
  )
}

export default TextInnerHtml