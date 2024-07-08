import { UserProfile } from '@clerk/nextjs'
import React from 'react'

function Settings() {
  return (
    <div className='flex items-center justify-center h-full mt-12'>
        <UserProfile/>
    </div>
  )
}

export default Settings