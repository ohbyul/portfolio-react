import React, { useEffect, useState } from 'react'
import { AppContent, AppFooter, AppHeader } from './index'
import moment from 'moment';

import '../assets/css/common.css'// pc공통 css
import '../assets/css/style.css';// pc추가 css

const DefaultLayout = (props) => {
  //path
  // const path = location.pathname;
  // const uppperPath = path?.split('/')[1]
  // const lowerPath = path?.split('/')[2]
  const [ isActiveLeft , setIsActiveLeft] = useState(false)

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
