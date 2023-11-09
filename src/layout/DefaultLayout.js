import React, { useEffect, useState } from 'react'
import { AppContent, AppFooter, AppHeader } from './index'

const DefaultLayout = (props) => {
  //path
  const path = window.location.pathname;
  return (
    <div id='wrap'>
      <AppHeader {...props} className='bg-white dark:bg-gray-900' />
      <div id='container'>
        <div id='contents'>
          <AppContent  {...props} />
        </div>
      </div>
      <AppFooter />
    </div>
  )
}

export default DefaultLayout
