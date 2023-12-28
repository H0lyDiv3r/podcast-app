import { Box,Card, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import TextInnerHtml from '../actionWrappersClient/TextInnerHtml'
import { secondsToHours } from '@/app/utils/secondsToHours'
import { FaPlayCircle } from 'react-icons/fa'
import EpisodeDate from '../actionWrappersClient/EpisodeDate'
import EpisodePlayButtonWrapper from '../actionWrappersClient/EpisodePlayButtonWrapper'
import colors from '@/app/theme/colors'
import { calculate } from '@/app/utils/compareDates'
import AddToQueue from '../actionWrappersClient/AddToQueue'











export default function Episode({data,full=false,independent=false}) {
    // const data = {
    //         "id":"4e7c59e10e4640b98f2f3cb1777dbb43",
    //         "link":"https://sites.libsyn.com/55931/864-part-2-of-my-new-conversation-with-bobby-roberts?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
    //         "audio":"https://www.listennotes.com/e/p/4e7c59e10e4640b98f2f3cb1777dbb43/",
    //         "image":"https://production.listennotes.com/podcasts/star-wars-7x7-the/864-part-2-of-my-new--vDBMTjY_mK-2WVsxtU0f3m.600x315.jpg",
    //         "title":"864: Part 2 of My (New) Conversation With Bobby Roberts",
    //         "thumbnail":"https://production.listennotes.com/podcasts/star-wars-7x7-the/864-part-2-of-my-new-yqjrzNDEXaS-2WVsxtU0f3m.300x157.jpg",
    //         "description":"<p>The second half of my latest conversation with Bobby Roberts, Podcast Emeritus from Full of Sith and now Star Wars \"Podcast Force Ghost at Large.\" Punch it!</p> <p>***We’re listener supported! Go to http://Patreon.com/sw7x7 to donate to the Star Wars 7x7 podcast, and you’ll get some fabulous rewards for your pledge.*** </p> <p>Check out SW7x7.com for full Star Wars 7x7 show notes and links, and to comment on any of the content of this episode! If you like what you've heard, please leave us a rating or review on iTunes or Stitcher, which will also help more people discover this Star Wars podcast.</p> <p>Don't forget to join the Star Wars 7x7 fun on Facebook at Facebook.com/SW7x7, and follow the breaking news Twitter feed at Twitter.com/SW7x7Podcast. We're also on Pinterest and Instagram as \"SW7x7\" too, and we'd love to connect with you there!</p>",
    //         "pub_date_ms":1479110402345,
    //         "guid_from_rss":"bbada2b3a99054ce93b0eb95dd762b4d",
    //         "listennotes_url":"https://www.listennotes.com/e/4e7c59e10e4640b98f2f3cb1777dbb43/",
    //         "audio_length_sec":2447,
    //         "explicit_content":false,
    //         "maybe_audio_invalid":false,
    //         "listennotes_edit_url":"https://www.listennotes.com/e/4e7c59e10e4640b98f2f3cb1777dbb43/#edit"
    //     }
    const audioLength = secondsToHours(data.audio_length_sec)
  return (
        <Box color={"gray.600"} width={"100%"} my={"26px"}>
            {/* <EpisodeDate start={data.pub_date_ms}/> */}
            <Text fontSize={"14"}>{calculate(data.pub_date_ms)}</Text>
            <Text fontSize={"16px"} fontWeight={400} color={"gray.700"}>{data.title}</Text>
            <TextInnerHtml text={data.description} slice={full ? null : 250} fontSize={"14px"}/>

            <Box display={"flex"} alignItems={"center"} my={"8px"}>
                <EpisodePlayButtonWrapper data={{title:data.title,thumbnail:data.thumbnail,audio:data.audio,audioLength:data.audio_length_sec}}>
                    
                        <Box display={"flex"} justifyContent={"space-around"} alignItems={"center"} padding={"4px"} border={`solid 1px ${colors.rose[500]}`}
                            maxW={"150px"} minW={"110px"} fontSize={"12px"} color={"rose.500"} fontWeight={400} borderRadius={"16px"} _hover={{cursor:"pointer"}}>
                            <FaPlayCircle fontSize={"20px"}/>
                            <Box>Play</Box>
                            <Box display={"flex"}>
                                {Boolean(audioLength.hrs.value) &&
                                    <Text px={"4px"}>{audioLength.hrs.value}{audioLength.hrs.tag}</Text>
                                }
                                {Boolean(audioLength.mins.value) &&
                                    <Text>{audioLength.mins.value}{audioLength.mins.tag}</Text>
                                }
                            </Box>
                        </Box>
                

                </EpisodePlayButtonWrapper>
                <AddToQueue podcast={data}/>
            </Box>
            
        </Box>
  )
}
