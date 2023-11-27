import PageHeader from '@components/common/PageHeader'
import React from 'react'
import Membership from '../home/Membership'
import Info from './Info'

function MembershipScreen() {
  return (
    <div>
      <PageHeader 
        title='Your membership of the South Sudan Law Society'
        description={`
        The South Sudan Law Society is the professional body for solicitors and a place where you can connect, grow and thrive. We're here to support you at every stage of your career, from qualification through to retirement, and to advocate on the issues solicitors have told us matter most.
        `}
        />
        <Info />
        <Membership />
    </div>
  )
}

export default MembershipScreen