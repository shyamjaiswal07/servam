import React from 'react'
import Album from '../component/Archeivment'
import SwipeableTextMobileStepper from '../component/Crousal'
import Mission from '../component/Mission'

const Home = () => {
  return (
    <>
    <SwipeableTextMobileStepper />
    < Mission />
    <Album />
    </>
  )
}

export default Home