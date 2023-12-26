'use client'

import React, { createContext, useReducer } from 'react'

export const SelectContext = createContext()

const initialState = {
    value:null
}
const setValue = 'SET_VALUE'

const reducer = (state,action)=>{
    switch (action.type) {
        case setValue:
            return {...state,value:action.payload.value}
            break;
    
        default:
            return state
            break;
    }
}

const SelectContextProvider = ({children}) => {
  const [state,dispatch]= useReducer(reducer,initialState)

  const handleSetValue = (value)=>{
    dispatch({
      type:setValue,
      payload:{
        value
      }
    })
  }
  const vals = {...state,handleSetValue}
  return (
      <SelectContext.Provider value={vals}>
        {children}
      </SelectContext.Provider>
  )
}

export default SelectContextProvider