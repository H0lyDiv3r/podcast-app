import { Box,Image } from '@chakra-ui/react'
import React from 'react'
import SearchBar from '../searchBar/SearchBar'
import Link from 'next/link'

const Navbar = () => {
  return (
    <Box position={"sticky"} top={"0"} zIndex={1} display={"flex"} alignItems={"baseline"}>
      <Link href={"/"}>
        <Box display={"flex"} alignItems={"baseline"} w={"300px"}><Image src={"https://brand-assets-cdn.listennotes.com/brand-assets-listennotes-com/production/media/image-65c70439d8e2fc4087d33e7c668a5be4.png"} width={"100%"} alt='home'/></Box>
      </Link>
        <SearchBar/>
    </Box>
  )
}

export default Navbar