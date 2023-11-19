'use client'

import React, { createContext, useReducer } from 'react'


export const SearchContext = createContext()

const initialState = {
    q:"",
    sortByDate:true,
    type:"podcast",
    lenMin:0,
    lenMax:30,
    episodeMin:1,
    episodeMax:null,
    language:"English",
    region:null,
    safeMode:0,
    uniquePodcast:0,
    genreIds:null
}

const setValue = 'SET_VALUES'

const reducer = (state,action)=>{
    switch (action.type) {
        case setValue:
            return {...state,[action.payload.name]:action.payload.value}
            break;
    
        default:
            return state
            break;
    }
}

const SearchContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initialState)

    const handleSetValue = (name,value)=>{
        dispatch({
            type:setValue,
            payload:{
                name,
                value
            }
        })
    }

    const vals = {...state,handleSetValue}
  return (
    <SearchContext.Provider value={vals}>
        {children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider