'use client'
import React,{createContext, useReducer} from 'react'
import globalActionCreators from '../context/globalActionCreators'

export const GlobalContext = createContext()

const initialState = {

    currentEpisode:null
}

const reducer = (state,action)=>{
    if(action.type === 'SET_CURRENT_EPISODE'){
      return {...state,
              currentEpisode:{
                  id:action.payload.id,
                  title:action.payload.title,
                  thumbnail:action.payload.thumbnail,
                  audio:action.payload.audio,
                  audioLength:action.payload.audioLength
                }}
    }
    return state
}

export default function GlobalContextProvider({children}) {
  const [state,dispatch] = useReducer(reducer,initialState)
  const handleSetCurrentEpisode = (data)=>{
    dispatch({
      type:"SET_CURRENT_EPISODE",
      payload:{
        id:data.id,
        title:data.title,
        thumbnail:data.thumbnail,
        audio:data.audio,
        audioLength:data.audioLength
      }
    })
  }
  const vals = {...state,handleSetCurrentEpisode}
  return (
    <GlobalContext.Provider value={vals}>
        {children}
    </GlobalContext.Provider>
  )
}
