
import Image from 'next/image'
import styles from './page.module.css'
import Player from './components/player/Player'
import Podcast from './components/cards/Podcast'
import Episode from './components/cards/Episode'
import { Box, Grid, GridItem, SimpleGrid } from '@chakra-ui/react'
import SearchBar from './components/searchBar/SearchBar'
import PlayerContextProvider from './components/player/PlayerContextProvider'
import Navbar from './components/nav/Navbar'
import FormInput from './components/inputs/formInput/FormInput'


export default async function Home() {
  const res = await fetch('http://localhost:5000/best_podcasts')
  const data = await res.json()
  return (
    <main>
      
      <SearchBar/>  
      <Grid templateColumns={"repeat(12,1fr)"}>

        <GridItem colSpan={"1"}>

        </GridItem>

        <GridItem colSpan={"8"}>
            <SimpleGrid minChildWidth={"170px"} spacing={10} width={"100%"} overflow={"auto"}>

              {data.podcasts.podcasts.map(podcast =>
                <Podcast key={podcast.id}  data={podcast}/>
              )}
            </SimpleGrid>
          <Episode/>
        </GridItem>

        <GridItem colSpan={"12"}>
          <PlayerContextProvider>
            <Player/>
          </PlayerContextProvider>
        </GridItem>

      </Grid>


        
    </main>
  )
}