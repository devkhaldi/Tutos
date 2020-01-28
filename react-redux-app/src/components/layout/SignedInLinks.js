import React from 'react'
import { NavLink } from 'react-router-dom'

function SignedInLinks() {
  return (
    <div>
      <ul className='right'>
        <li>
          <NavLink to='/'>New Project</NavLink>
        </li>
        <li>
          <NavLink to='/'>Log out</NavLink>
        </li>
        <li>
          <NavLink to='/'>
            <button className='btn btn-floating pink lighten-1'>EA</button>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default SignedInLinks
