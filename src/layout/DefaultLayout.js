import React, { useEffect, useState } from 'react'
import { AppContent, AppFooter, AppHeader } from './index'

import '../assets/css/common.css'// pc공통 css
import '../assets/css/style.css';// pc추가 css

const DefaultLayout = (props) => {
  //path
  const path = window.location.pathname;
  return (
    <div id='wrap'>
		  <AppHeader {...props} />
      <div id='container'>
        <div id='contents'>
          <AppContent  {...props}/>
        </div>
      </div>
      <AppFooter />
    </div>
  )
}

export default DefaultLayout
