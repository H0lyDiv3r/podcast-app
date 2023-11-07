
import Image from 'next/image'
import styles from './page.module.css'
import Player from './components/player/Player'
import Podcast from './components/cards/Podcast'
import Episode from './components/cards/Episode'
import { Box, Grid, GridItem, SimpleGrid } from '@chakra-ui/react'


export default async function Home() {
  const res = await fetch('https://listen-api.listennotes.com/api/v2/best_podcasts',{
    headers:{
      "X-ListenAPI-Key":"0e5cc617da324936bd653f69074fc8c8"
    }
  })
  const data = await res.json()
  return (
    <main>
      

        <SimpleGrid minChildWidth={"150px"} spacing={3} width={"100%"} height={"75vh"} overflow={"auto"}>

          {data.podcasts.map(podcast =>
            <Podcast key={podcast.id}  data={podcast}/>
          )}
        </SimpleGrid>
      {/* <Episode/> */}

    </main>
  )
}