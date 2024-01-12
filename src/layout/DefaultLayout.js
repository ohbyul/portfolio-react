import React, { useEffect, useState } from 'react'
import { AppContent, AppFooter, AppHeader } from './index'

const DefaultLayout = (props) => {
  //path
  const path = window.location.pathname;
  return (
    <div id='wrap'>
      <AppHeader {...props} className='bg-white dark:bg-gray-900' />
      <div id='container' className='dark:bg-gray-800'>
        <div id='contents' className='dark:bg-gray-800'>
          <AppContent {...props} />
        </div>
      </div>
      <AppFooter {...props} className='bg-white dark:bg-gray-800' />
    </div>
  )
}

export default DefaultLayout
