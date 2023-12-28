"use client"

import React, { useContext,useEffect,useState } from 'react'
import QueueContextProvider, { QueueContext } from '../queue/QueueContextProvider'
import {Box,Icon} from "@chakra-ui/react"
import { FaList, FaPlus } from 'react-icons/fa'

const AddToQueue = ({podcast}) => {
  return (
    <QueueContextProvider>
        <AddButton podcast={podcast}/>
    </QueueContextProvider>
  )
}


const AddButton = ({podcast})=>{
    const {queue,handleAddToQueue,handleRemoveFromQueue} = useContext(QueueContext)
    const exists = false

    
    const handleAction = (podcast)=>{
        if(Boolean(queue.find(item=>item.id === podcast.id))){
           handleRemoveFromQueue(podcast.id)
        } else{
            handleAddToQueue(podcast)
        }
    }

    return(
        <Box display={"flex"} color={"gray.400"} height={"100%"} onClick={()=>handleAction(podcast)} alignItems={"center"}>
            <Box color={'gray.600'} position={"relative"} top={"-7px"} left={"5px"} >
                <Icon as={FaPlus} boxSize={3}/>
            </Box>
            <Icon as={FaList} boxSize={5}/>
            {exists ? "true":"false"}
        </Box>
    )
}

export default AddToQueue