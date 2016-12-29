import React from 'react'
import { Link } from 'react-router'
import './nav.css'

const Nav = () => {
  return (
    <nav className="nav">
      <span>Categories</span>
      <Link to="create">Add</Link>
      <Link to="browse">Browse</Link>
      <span>Stats</span>
    </nav>
  )
}

export default Nav
