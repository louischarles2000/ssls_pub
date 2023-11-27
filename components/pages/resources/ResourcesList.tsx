import React from 'react'
import ResourceDropDown from './ResourceDropDown'
import { other_resources, publications } from '@utils/data'

const laws = [
  'Code of Criminal Procedure Act (2008)',
  'Code of Civil Procedure Act (2007)',
  'Investment Promotion Act (2009)',
  'Judiciary Act (2008)',
  'Land Act (2009)',
  'Local Government Act (2009)',
  'Nationality Act (2011)',
  'Passports and Immigration Act (2011)',
  'Penal Code Act (2009)',
  'Police Service Act (2009)',
  'Prison Service Act (2003)',
  'Public Premises Eviction Act (2006)'
];

function ResourcesList() {

  return (
    <div className='md:w-[70%] mx-auto'>
      <h2 className='font-bold text-[20px] mb-6'>All Resources</h2>
      <div className='border-b-[1px] border-[#ccc]'>
        <ResourceDropDown 
          title='Publications'
          list={publications}
          />
        <ResourceDropDown 
          title='Laws'
          linkless={laws}
          />
        <ResourceDropDown 
          title='Other Resource'
          list={other_resources}
          />
      </div>
    </div>
  )
}

export default ResourcesList