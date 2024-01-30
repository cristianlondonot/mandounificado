import React from 'react'
import Navbar from '../Navbar/Navbar'
import FilterDpto from '../FilterDpto/FilterDpto'
import './Header.sass'

const Header = () => {
  return (
    <header>
      <Navbar />
      <div className="p-2 w-full filterDpto">
        <FilterDpto />
      </div>
    </header>
  )
}

export default Header