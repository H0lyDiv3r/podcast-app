
'use client'
import React, { forwardRef, useRef } from 'react'

const FormInput = forwardRef( ({},ref) => {
        console.log(ref)

  return (
    <input ref={ref}/>
  )
})

export default FormInput