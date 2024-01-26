import React from 'react'
import {Box,Image,Text,Icon} from "@chakra-ui/react"
import PodcastGenreList from '../actionWrappersClient/PodcastGenreList'
import colors from '@/app/theme/colors'
import { calculate } from '@/app/utils/compareDates'
import EpisodePlayButtonWrapper from '../actionWrappersClient/EpisodePlayButtonWrapper'
import {FaPlay} from "react-icons/fa"

const RecEpisode = ({data}) => {
  return (
    <Box mb={"32px"} boxShadow={"md"} borderRadius={"12px"} border={`1px solid ${colors.gray[200]}`} overflow={"hidden"}>
        <Box bgImage={data.thumbnail} width={"100%"} height={"200px"} bgSize={"cover"} >
            <Box width={"100%"} height={"100%"} bg={"black.500"} padding={"10px"} backdropFilter={"blur(1.5px)"} display={"flex"} 
                justifyContent={"space-between"} color={"white.700"}>
                 <Text fontSize={"14px"} fontWeight={400}>{data.title}</Text>
            </Box>
        </Box>
        {/* <Image src={data.thumbnail} width={"100%"} height={"200px"} fit={"cover"}/> */}
        <Box p={"14px"}>
            <Text fontSize={"14px"} fontWeight={500} color={"gray.500"}>{data.title}</Text>
            <Box display={"flex"} flexWrap={"wrap"} justifyContent={"space-between"} alignItems={"center"}>
                <Text fontSize={"12px"} fontWeight={400} color={"gray.500"}>{calculate(data.pub_date_ms)}</Text>
            
                <Box>
                    <EpisodePlayButtonWrapper data={{id:data.id,title:data.title,thumbnail:data.thumbnail,audio:data.audio,audioLength:data.audio_length_sec}}>
                        <Box bg={"rose.500"} color={"white"} h={"32px"} w={"32px"} display={"flex"} 
                            justifyContent={"center"} alignItems={"center"} borderRadius={"16px"}>
                            <FaPlay style={{fontSize:"12px"}}/>
                        </Box>
                    </EpisodePlayButtonWrapper>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default RecEpisode