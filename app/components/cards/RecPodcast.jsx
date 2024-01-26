import React from 'react'
import {Box,Image,Text} from "@chakra-ui/react"
import PodcastGenreList from '../actionWrappersClient/PodcastGenreList'
import colors from '@/app/theme/colors'
import Link from 'next/link'

const RecPodcast = ({data}) => {
  return (
    <Link href={`/podcasts/${data.id}`}>
        <Box mb={"32px"} boxShadow={"md"} borderRadius={"12px"} border={`1px solid ${colors.gray[200]}`} overflow={"hidden"}>
            <Image src={data.thumbnail} width={"100%"} height={"200px"} fit={"cover"}/>
            <Box p={"14px"}>
                <Text fontSize={"14px"} fontWeight={400} color={"gray.500"}>{data.title}</Text>
                <Box display={"flex"} flexWrap={"wrap"}>
                    <PodcastGenreList genre_ids={data.genre_ids.slice(0,4)} mr={"8px"} fontSize={"12px"} fontWeight={400} color={"blue.400"}/>
                </Box>
            </Box>
        </Box>
    </Link>
  )
}

export default RecPodcast