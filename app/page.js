
import Image from 'next/image'
import styles from './page.module.css'
import Player from './components/player/Player'
import Podcast from './components/cards/Podcast'
import Episode from './components/cards/Episode'
import { Box, Grid, GridItem, SimpleGrid } from '@chakra-ui/react'
import url from './url'


export default async function Home() {
  const res = await fetch(process.env.URL+"/best_podcasts",{
    headers:{
      "X-ListenAPI-Key":process.env.LISTEN_NOTES_KEY
    }
  })
  const data = await res.json()
  return (
    <main>
      
        <Grid templateColumns={"repeat(12,1fr)"}>
          <GridItem colSpan={1}></GridItem>
            <GridItem colSpan={10}>
                <SimpleGrid minChildWidth={"150px"} spacing={5} width={"100%"} height={"75vh"} overflow={"auto"}>

                  {data.podcasts.map(podcast =>
                    <Podcast key={podcast.id}  data={podcast}/>
                  )}
                </SimpleGrid>
            </GridItem>
            <GridItem colSpan={1}></GridItem>
        </Grid>

    </main>
  )
}