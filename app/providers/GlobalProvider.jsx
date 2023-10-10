'use client'
import React,{createContext} from 'react'
import globalActionCreators from '../context/globalActionCreators'

export const GlobalContext = createContext()

export default function GlobalContextProvider({children}) {
  const {test,state} = globalActionCreators()
  const vals = {...state,test}
  return (
    <GlobalContext.Provider value={vals}>
        {children}
    </GlobalContext.Provider>
  )
}
