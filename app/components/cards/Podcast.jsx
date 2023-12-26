
import React from 'react';
import getGenre from '@/app/data/genres';
import { Box, Card,Flex,Icon,Image,Text } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';
import PodcastGenreList from '../actionWrappersClient/PodcastGenreList';

export default function Podcast({data}) {
  return (
    <Card bg={"rose.400"} minW={"160px"} maxW={"160px"} height={"200px"} 
          bgImage={data.thumbnail}  bgSize={"cover"} bgPos={"center"} 
          color={"white.900"} overflow={"hidden"} >
            
        <Box width={"100%"} height={"100%"} bg={"black.700"} padding={"10px"} backdropFilter={"blur(1.5px)"} display={"flex"} flexDir={"column"} justifyContent={"space-between"}>

            <Box>
                <Text fontSize={"sm"} fontWeight={400}>{data.title.length >30 ? data.title.slice(0,30)+"..." : data.title}</Text>
                <Text fontSize={"xs"} fontWeight={400} color={"white.700"}>{data.publisher}</Text>
            </Box>
            
            <Box display={"flex"} width={"100%"} justifyContent={"space-between"}>
                
                <Box fontSize={"xs"} fontWeight={300} color={"white.700"} display={"flex"} flexDir={"column"}>

                    <Box display={"flex"} width={"100%"} justifyContent={"flex-start"} gap={"10px"} fontSize={"xs"}>
                        <Text>{data.language}</Text>
                        {/* <Flex alignItems={"baseline"} gap={"2px"} color={"green.400"}>
                            <i><FaStar/></i>
                            <Text>{data.listen_score}</Text>
                        </Flex> */}
                    </Box>

                    <Box display={"flex"} width={"100%"} gap={"4px"} fontSize={"x-small"} > 
                        <PodcastGenreList genre_ids={data.genre_ids.slice(0,1)} width={"100%"} gap={"4px"} fontSize={"x-small"}/>
                    </Box>

                </Box>
                {data.explicit_content && 
                  <Image src={"./explicitContent.jpg"} width={"40px"} opacity={0.7}/>
                }
            </Box>
        </Box>
    </Card>


  )
}
