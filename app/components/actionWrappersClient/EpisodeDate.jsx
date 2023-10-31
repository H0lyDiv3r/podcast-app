'use client'

import { calculate } from '@/app/utils/compareDates'
import { Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const EpisodeDate = ({start}) => {

    const [date,setDate] = useState("")
    useEffect(()=>{

        setDate(calculate(start) )  
    },[])
  return (
    <Text fontSize={"14"}>{date}</Text>
  )
}

export default EpisodeDate