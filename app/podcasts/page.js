import React from 'react'
import ActionWrapper from '../components/test/ActionWrapper'
import Episode from '../components/cards/Episode'
import PodcastFull from '../components/podcast/PodcastFull'


// export const getServerSideProps = async()=>{
//   console.log("here")
// }

export default function page({testText}) {
  return (
    <>
      <PodcastFull/>
      {/* <Episode/> */}
    </>
  )
}
