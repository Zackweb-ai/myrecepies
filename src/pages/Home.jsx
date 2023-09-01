import React from 'react'
import Slide1 from '../components/Slide1'
import Slide2 from '../components/Slide2'
import Random from './Random'

export default function Home() {
  return (
    <>
    <h3 className='title'>Our most popular recipes</h3>
    <Slide1/>
    <h3 className='title'>Latest recipes</h3>
    <Slide2></Slide2>
    <Random></Random>
    </>
  )
}
