'use client'

import React, { useContext } from 'react'
import { SearchContext } from './SearchContextProvider'
import colors from '@/app/theme/colors'
import Select from '../inputs/select/Select'

export default function TypeInput() {
  const {type,handleSetValue} = useContext(SearchContext)
  const vals = {
    "episode":"Episode",
    "podcast":"Podcast"
  }
  return (
      <>
          <Select values={vals} handleChange={(val)=>handleSetValue("type",val)} val={type}
          padding={"5px"} bg={"white"} color={"rose.500"} 
          borderRadius={"5px"} border={`solid 1px ${colors.gray[200]}`} width={"100px"} mx={"10px"}/>
      </>  
  )
}
