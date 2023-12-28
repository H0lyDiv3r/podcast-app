import { Grid, GridItem, SimpleGrid } from '@chakra-ui/react'
import './globals.css'
import ChakraProviders from './providers/ChakraProviders'
import GlobalContextProvider from './providers/GlobalProvider'
import Podcast from './components/cards/Podcast'
import PlayerContextProvider from './components/player/PlayerContextProvider'
import Player from './components/player/Player'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'

export default function RootLayout({ children }) {
    
  return (
    <html lang="en">
      <body>
        <GlobalContextProvider>
          <ChakraProviders>
          <Navbar/>  
          <Grid templateColumns={"repeat(12,1fr)"}>


            <GridItem colSpan={"12"}>

              {children}
              {/* <Episode/> */}
            </GridItem>

            <GridItem colSpan={"12"}>
              <PlayerContextProvider>
                <Player/>
              </PlayerContextProvider>
            </GridItem>

          </Grid>
          </ChakraProviders>
        </GlobalContextProvider>
      </body>
    </html>
  )
}
