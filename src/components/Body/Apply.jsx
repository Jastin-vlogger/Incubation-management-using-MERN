import React from 'react'

import { NavLink } from 'react-router-dom'
import './Apply.css'

function Apply() {
  return (
    <div className='centerDiv'>
      <NavLink to={'/apply'} >Apply</NavLink>{' '}
    </div>
  )
}

export default Apply
