import PageHeader from '@components/common/PageHeader'
import React from 'react'
import Upcoming from '../home/Upcoming'

function EventsScreen() {
  return (
    <div>
      <PageHeader 
        title='Events'
        description={`
        Dive into a calendar filled with dynamic and enriching experiences tailored for legal professionals and enthusiasts alike. 
        `}
        />
      <Upcoming />
    </div>
  )
}

export default EventsScreen