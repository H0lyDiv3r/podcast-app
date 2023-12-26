import getGenre from '@/app/data/genres'
import { Text } from '@chakra-ui/react'
import React from 'react'

const PodcastGenreList = ({genre_ids,...otherProps}) => {
  return (
    <>
        {getGenre(genre_ids).map((genre,idx)=>
            <Text key={idx} {...otherProps}>#{genre}</Text>
        )}
    </>
  )
}

export default PodcastGenreList