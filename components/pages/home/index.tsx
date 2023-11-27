import React from 'react'
import TopCarousel from './TopCarousel'
import About from './About'
import Upcoming from './Upcoming'
import TopHeader from './TopHeader'
import Membership from './Membership'
import Programs from './Programs'
import Action from './Action'
import News from './News'

function HomeScreen() {
  return (
    <div>
      <TopHeader />
      {/* <TopCarousel /> */}
      <About />
      <Upcoming />
      <Membership />
      <Action />
      <Programs />
      <News />
    </div>
  )
}

export default HomeScreen