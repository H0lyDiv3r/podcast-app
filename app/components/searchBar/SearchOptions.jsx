'use client'
import languages from '@/app/data/languages'
import regions from '@/app/data/regions'
import { Box, Button, Checkbox,ModalBody, Modal, ModalContent, ModalOverlay, ModalHeader, useDisclosure, ModalCloseButton, Icon, Text, Divider, Select, FormControl, FormLabel } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import { FaCogs } from 'react-icons/fa'
import InputMultiple from '../inputs/multipleInput/InputMultiple'
import { SearchContext } from './SearchContextProvider'

export default function SearchOptions() {
  const {onOpen,onClose,isOpen} = useDisclosure()
  const {sortByDate,uniquePodcasts,safeMode,region,language,lenMin,lenMax,handleSetValue,episodeMin} = useContext(SearchContext)
  const handleSetLength=(min,max)=>{
    handleSetValue("lenMin",min)
    handleSetValue("lenMax",max)
  }

  return (
    <Box>
      <Button onClick={onOpen} bg={"none"} _hover={{bg:"none"}}><Icon as={FaCogs} boxSize={6}/></Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg={"black.200"}/>
        <ModalContent bg={"white"} padding={"10px"} height={"540px"} overflow={"auto"} minWidth={"700px"} >
            <ModalCloseButton/>
            <ModalHeader>
              search/sort settings
            </ModalHeader>
            <ModalBody>
              <Box>
                  <Text>General</Text>
                  <Divider/>
                  <Box marginTop={"5px"} display={"flex"} flexDirection={"column"}>
                      <Checkbox isChecked={sortByDate} onChange={(e)=>handleSetValue(e.target.name,!sortByDate)} name='sortByDate'>Sort by Date</Checkbox>
                      <Checkbox isChecked={uniquePodcasts} onChange={(e)=>handleSetValue(e.target.name,!uniquePodcasts)} name='uniquePodcasts'>Unique Podcasts</Checkbox>
                      <Checkbox isChecked={safeMode} onChange={(e)=>handleSetValue(e.target.name,!safeMode)} name='safeMode'>Safe Mode</Checkbox>
                      <FormControl my={"10px"}>
                          <FormLabel margin={0}>Regions</FormLabel>
                          <Select value={region == null ? "all":region } onChange={(e)=>handleSetValue(e.target.name,e.target.value === "all" ? null:e.target.value)} size={"md"} name='region'>
                            {Object.keys(regions).map((region,idx)=>
                                <option key={idx} value={region}>{regions[region]}</option>
                            )}
                          </Select>
                      </FormControl>

                      <FormControl my={"10px"}>
                          <FormLabel margin={0}>Languages</FormLabel>
                          <Select value={language} onChange={(e)=>handleSetValue(e.target.name,e.target.value)} size={"md"} name='language'>
                              {languages.map((language,idx)=>
                                  <option key={idx} value={language}>{language}</option>
                              )}
                          </Select>
                      </FormControl>   
                      <InputMultiple/>       
                      
                  </Box>
              </Box>

              <Box display={"flex"} flexDirection={"column"} marginTop={"20px"}>
                  <Text>Length</Text>
                  <Divider/>
                  <Box marginTop={"5px"} display={"flex"} flexDirection={"column"}>
                      <Checkbox isChecked={lenMin == 0 && lenMax == null} onChange={()=>handleSetLength(0,null)}>All</Checkbox>
                      <Checkbox isChecked={lenMin == 5 && lenMax == 15} onChange={()=>handleSetLength(5,15)}>Between 5 and 15 Minutes</Checkbox>
                      <Checkbox isChecked={lenMin == 25 && lenMax == 40} onChange={()=>handleSetLength(25,40)}>Between 25 and 40 Minutes</Checkbox>
                      <Checkbox isChecked={lenMin == 50 && lenMax == 59} onChange={()=>handleSetLength(50,59)}>Between 50 Minutes and an Hour</Checkbox>
                      <Checkbox isChecked={lenMin == 59} onChange={()=>handleSetLength(59,null)}>Atleast an Hour</Checkbox>
                  </Box>
              </Box>

              <Box display={"flex"} flexDirection={"column"} marginTop={"20px"}>
                  <Text>Episodes</Text>
                  <Divider/>
                  <Box marginTop={"5px"} display={"flex"} flexDirection={"column"}>
                      <Checkbox isChecked={episodeMin == 1} onChange={()=>handleSetValue("episodeMin",1)}>all</Checkbox>
                      <Checkbox isChecked={episodeMin == 5} onChange={()=>handleSetValue("episodeMin",5)}>More than 5 Episodes</Checkbox>
                      <Checkbox isChecked={episodeMin == 15} onChange={()=>handleSetValue("episodeMin",15)}>More than 15 Episodes</Checkbox>
                      <Checkbox isChecked={episodeMin == 30} onChange={()=>handleSetValue("episodeMin",30)}>More than 30 Episodes</Checkbox>
                  </Box>
              </Box>

            </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}
