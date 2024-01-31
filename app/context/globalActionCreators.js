import React, { useReducer } from 'react'
import { globalReducer } from './globalReducer'
import { globalState } from './globalState'

export default function globalActionCreators() {
    const [state,dispatch]=useReducer(globalReducer,globalState)
    const test = ()=>{
        dispatch({
            type:"TEST"
        })
    }
  return {test,state}
}
