import React from 'react'
import { Link } from 'react-router'
import './nav.css'

const Nav = () => {
  return (
    <nav className="nav">
      <span>Categories</span>
      <Link to="create">Add</Link>
      <Link to="browse">Browse</Link>
      <Link to="stats">Stats</Link>
    </nav>
  )
}

export default Nav
