'use client'

import React, { createContext, useEffect, useReducer } from 'react'

export const QueueContext = createContext()

const queueState = () => {
  if(typeof window !== 'undefined'){
      
    return Boolean(localStorage.getItem("queue") && JSON.parse(localStorage.getItem("queue")).queue)
  }else{
    return false
  }
} 

const initialState = {
  queue:[]
}

const addToQueue = "ADD_TO_QUEUE"
const removeFromQueue = "REMOVE_FROM_QUEUE"

const reducer = (state,action)=>{
  switch (action.type) {
    case addToQueue:
      const newQueue = [...state.queue]
      newQueue.push("load")
      return {...state,queue:newQueue} 

    case removeFromQueue:
      return {...state,queue:state.queue.filter(pod => pod.id !== action.payload.podcastId)}
  
    default:
      return state
  }
}

const QueueContextProvider = ({children}) => {
  const [state,dispatch] = useReducer(reducer,initialState)

  const handleAddToQueue = (podcast)=>{
    dispatch({
      type:addToQueue,
      payload:{
        podcast
      }
    })
  }
  const handleRemoveFromQueue = (podcastId)=>{
    dispatch({
      type:removeFromQueue,
      payload:{
        podcastId
      }
    })
  }

  const vals = {...state,handleAddToQueue,handleRemoveFromQueue}

  useEffect(()=>{
    localStorage.setItem("queue",state.queue)
    console.log(state.queue)
  },[state.queue])
  return (
    <QueueContext.Provider value={vals}>
        {children }
    </QueueContext.Provider>
  )
}

export default QueueContextProvider