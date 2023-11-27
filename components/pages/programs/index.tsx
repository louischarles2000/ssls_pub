import PageHeader from '@components/common/PageHeader'
import React from 'react'
import Programs from '../home/Programs'

function ProgramsScreen() {
  return (
    <div>
      <PageHeader
        title='Programs '
        description={`
        Embark on a journey of legal discovery through our specialized programs focusing on research excellence and community outreach. 
        `}
        />
      <Programs />
    </div>
  )
}

export default ProgramsScreen