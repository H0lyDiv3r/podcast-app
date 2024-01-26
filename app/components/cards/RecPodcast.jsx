import React from 'react'
import {Box,Image,Text} from "@chakra-ui/react"
import PodcastGenreList from '../actionWrappersClient/PodcastGenreList'
import colors from '@/app/theme/colors'

const RecPodcast = ({data}) => {
  return (
    <Box mb={"32px"} boxShadow={"md"} borderRadius={"12px"} border={`1px solid ${colors.gray[200]}`} overflow={"hidden"}>
        <Image src={data.thumbnail} width={"100%"} height={"200px"} fit={"cover"}/>
        <Box p={"12px"}>
            <Text>{data.title}</Text>
            <Box display={"flex"} flexWrap={"wrap"}>
                <PodcastGenreList genre_ids={data.genre_ids.slice(0,4)} mr={"8px"} fontSize={"12px"} fontWeight={400} color={"blue.400"}/>
            </Box>
        </Box>
    </Box>
  )
}

export default RecPodcast