import PageHeader from '@components/common/PageHeader'
import React from 'react'
import ResourcesList from './ResourcesList'
import Related from './Related'

function ResourcesScreen() {
  return (
    <div>
      <PageHeader
        title='Resources '
        description={`
        Find guidance, publications, laws and resources on topics in your areas of interest.
        `}
        />
      <div className='lg:p-[8rem] md:p-8 pt-8 px-5'>
        <ResourcesList />
        <Related />
      </div>
    </div>
  )
}

export default ResourcesScreen