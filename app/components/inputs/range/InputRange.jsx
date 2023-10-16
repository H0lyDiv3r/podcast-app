import { FormControl, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'

const InputRange = ({label,min,max}) => {
  return (
    <FormControl bg={"red"}>
        <FormLabel>label</FormLabel>
        <input type={"range"} min={min} max={max}/>
    </FormControl>
  )
}

export default InputRange