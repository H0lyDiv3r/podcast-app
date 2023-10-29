
import React from 'react';
import getGenre from '@/app/data/genres';
import { Box, Card,Flex,Icon,Image,Text } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';

export default function Podcast({data}) {
  return (
    <Card bg={"rose.400"} minW={"170px"} maxW={"200px"} height={"200px"} 
          bgImage={data.thumbnail}  bgSize={"cover"} bgPos={"center"} 
          color={"white.900"} overflow={"hidden"} zIndex={-1}>
            
        <Box width={"100%"} height={"100%"} bg={"black.700"} padding={"10px"} backdropFilter={"blur(1.5px)"} display={"flex"} flexDir={"column"} justifyContent={"space-between"}>

            <Box>
                <Text fontSize={"sm"} fontWeight={400}>{data.title}</Text>
                <Text fontSize={"xs"} fontWeight={400} color={"white.700"}>{data.publisher}</Text>
            </Box>
            
            <Box display={"flex"} width={"100%"} justifyContent={"space-between"}>
                
                <Box fontSize={"xs"} fontWeight={300} color={"white.700"} display={"flex"} flexDir={"column"}>

                    <Box display={"flex"} width={"100%"} justifyContent={"flex-start"} gap={"10px"} fontSize={"xs"}>
                        <Text>{data.language}</Text>
                        <Flex alignItems={"baseline"} gap={"2px"} color={"green.400"}>
                            <i><FaStar/></i>
                            <Text>{data.listen_score}</Text>
                        </Flex>
                    </Box>

                    <Box display={"flex"} width={"100%"} gap={"4px"} fontSize={"x-small"} > 
                        <Text>#{getGenre(data.genre_ids[1])}</Text>
                    </Box>

                </Box>
                {data.explicit_content && 
                  <Image src={"./explicitContent.jpg"} width={"60px"} opacity={0.7}/>
                }
            </Box>
        </Box>
    </Card>


  )
}
