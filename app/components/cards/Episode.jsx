
import { Box,Card, Text } from '@chakra-ui/react'
import React from 'react'
import TextInnerHtml from '../text/TextInnerHtml'

export default function Episode() {
    const data = {
            "id":"4e7c59e10e4640b98f2f3cb1777dbb43",
            "link":"https://sites.libsyn.com/55931/864-part-2-of-my-new-conversation-with-bobby-roberts?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
            "audio":"https://www.listennotes.com/e/p/4e7c59e10e4640b98f2f3cb1777dbb43/",
            "image":"https://production.listennotes.com/podcasts/star-wars-7x7-the/864-part-2-of-my-new--vDBMTjY_mK-2WVsxtU0f3m.600x315.jpg",
            "title":"864: Part 2 of My (New) Conversation With Bobby Roberts",
            "thumbnail":"https://production.listennotes.com/podcasts/star-wars-7x7-the/864-part-2-of-my-new-yqjrzNDEXaS-2WVsxtU0f3m.300x157.jpg",
            "description":"<p>The second half of my latest conversation with Bobby Roberts, Podcast Emeritus from Full of Sith and now Star Wars \"Podcast Force Ghost at Large.\" Punch it!</p> <p>***We’re listener supported! Go to http://Patreon.com/sw7x7 to donate to the Star Wars 7x7 podcast, and you’ll get some fabulous rewards for your pledge.*** </p> <p>Check out SW7x7.com for full Star Wars 7x7 show notes and links, and to comment on any of the content of this episode! If you like what you've heard, please leave us a rating or review on iTunes or Stitcher, which will also help more people discover this Star Wars podcast.</p> <p>Don't forget to join the Star Wars 7x7 fun on Facebook at Facebook.com/SW7x7, and follow the breaking news Twitter feed at Twitter.com/SW7x7Podcast. We're also on Pinterest and Instagram as \"SW7x7\" too, and we'd love to connect with you there!</p>",
            "pub_date_ms":1479110402345,
            "guid_from_rss":"bbada2b3a99054ce93b0eb95dd762b4d",
            "listennotes_url":"https://www.listennotes.com/e/4e7c59e10e4640b98f2f3cb1777dbb43/",
            "audio_length_sec":2447,
            "explicit_content":false,
            "maybe_audio_invalid":false,
            "listennotes_edit_url":"https://www.listennotes.com/e/4e7c59e10e4640b98f2f3cb1777dbb43/#edit"
        }
        const date =  Date.now()
        const calculate = (start)=>{
            const seconds = 1000
            const minutes = seconds * 60
            const hours = minutes * 60
            const days = hours * 24
            const month = days * 30
            const year = month * 12
            const difference = (date.valueOf() - start.valueOf())
                
            if(difference/year >= 1){
                return `${Math.round(difference/year) == 1 ? 'A year ago' : `${Math.round(difference/year)} years ago` }`
            }
            if(difference/month >= 1 && difference/month < 12){
                return `${Math.round(difference/month) == 1 ? 'A month ago' : `${Math.round(difference/days)} months ago` }`
            }
            if(difference/days >= 1 && difference/days < 30){
                return `${Math.round(difference/days) == 1 ? 'A day ago' : `${Math.round(difference/days)} days ago` }`
            }
            if(difference/hours >= 1 && difference/hours < 24){
                return `${Math.round(difference/hours) == 1 ? 'An hour ago' : `${Math.round(difference/hours)} hours ago` }`
            }
            if(difference/minutes >= 1 && difference/minutes < 60){
                return `${Math.round(difference/minutes) == 1 ? 'A minute ago' : `${Math.round(difference/minutes)} minute ago` }`
            }
            if(difference/seconds < 60){
                return ("Just now")
            }else{
                return ("Some time ago")
            }
          }

  return (
        <Box>
            {calculate(data.pub_date_ms)}
            {/* <Text>{`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}</Text> */}
            <Text>{data.title}</Text>
            <TextInnerHtml text={data.description.slice(0,100)}/>
        </Box>
  )
}
