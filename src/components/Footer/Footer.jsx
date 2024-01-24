import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-green-800 text-primary-content">
      <aside>
        <Link to={'/'} className="btn btn-ghost logo text-xl h-full">
          <img src="/img/brand/logo-completo-santander-blanco.png" alt="" className='w-auto h-40' />
        </Link>
        <p className="font-bold text-white mt-8">
          spidersoftware accion unificada ver 5.1
        </p> 
        <p className='text-white'>Copyright © 2023 - All right reserved</p>
      </aside> 
    </footer>
  )
}

export default Footer