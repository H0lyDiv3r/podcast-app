import Image from 'next/image'
import styles from './page.module.css'
import Player from './components/player/Player'
import Podcast from './components/cards/Podcast'
import Episode from './components/cards/Episode'
import { Box } from '@chakra-ui/react'
import SearchBar from './components/searchBar/SearchBar'
import PlayerContextProvider from './components/player/PlayerContextProvider'


export default async function Home() {
  const res = await fetch('http://localhost:5000/best_podcasts')
  const data = await res.json()
  return (
    <main>
      <SearchBar/>
      <PlayerContextProvider>
        <Player/>
      </PlayerContextProvider>
        {/* <Box display={"flex"}>

          {data.podcasts.podcasts.map(podcast =>
            <Podcast key={podcast.id}  data={podcast}/>
          )}
        </Box> */}
        
        {/* <Episode/> */}
    </main>
  )
}