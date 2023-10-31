import languages from '@/app/data/languages'
import regions from '@/app/data/regions'
import { Box, Button, Checkbox,ModalBody, Modal, ModalContent, ModalOverlay, ModalHeader, useDisclosure, ModalCloseButton, Text, Divider, Select, FormControl, FormLabel } from '@chakra-ui/react'
import React from 'react'
import { FaCogs } from 'react-icons/fa'
import InputMultiple from '../inputs/multipleInput/InputMultiple'

export default function SearchOptions() {
  const {onOpen,onClose,isOpen} = useDisclosure()
  return (
    <Box>
      <Button onClick={onOpen} bg={"none"} _hover={{bg:"none"}}><FaCogs/></Button>
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
                      <Checkbox>Sort by Date</Checkbox>
                      <Checkbox>Unique Podcasts</Checkbox>
                      <Checkbox>Safe Mode</Checkbox>
                      <FormControl my={"10px"}>
                          <FormLabel margin={0}>Regions</FormLabel>
                          <Select value={'us'} onChange={()=>console.log("handle deez nuts")} size={"md"}>
                            {Object.keys(regions).map((region,idx)=>
                                <option key={idx} value={region}>{regions[region]}</option>
                            )}
                          </Select>
                      </FormControl>

                      <FormControl my={"10px"}>
                          <FormLabel margin={0}>Languages</FormLabel>
                          <Select value={'us'} onChange={()=>console.log("handle deez nuts")} size={"md"}>
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
                      <Checkbox>All</Checkbox>
                      <Checkbox>Between 5 and 15 Minutes</Checkbox>
                      <Checkbox>Between 25 and 40 Minutes</Checkbox>
                      <Checkbox>Between 50 Minutes and an Hour</Checkbox>
                      <Checkbox>Btleast an Hour</Checkbox>
                  </Box>
              </Box>

              <Box display={"flex"} flexDirection={"column"} marginTop={"20px"}>
                  <Text>Episodes</Text>
                  <Divider/>
                  <Box marginTop={"5px"} display={"flex"} flexDirection={"column"}>
                      <Checkbox>all</Checkbox>
                      <Checkbox>More than 5 Episodes</Checkbox>
                      <Checkbox>More than 15 Episodes</Checkbox>
                      <Checkbox>More than 30 Episodes</Checkbox>
                  </Box>
              </Box>

            </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}
