import React from 'react'
import { Link } from 'react-router-dom';

const BreadcrumbsMaps = ({departamento, municipio, vereda}) => {

  const formatDepartamento = departamento.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const formatMunicipio = municipio.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const formatVereda = vereda.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  return (
    <div className='w-full'>
      <div className="text-sm breadcrumbs p-0">
        <ul className='p-0'>
          <li className='m-0 color text-slate-400'>
            <Link to={`/departamento/${departamento}`}>{formatDepartamento}</Link>
          </li> 
          <li className='m-0 color text-slate-400'>
            <Link to={`/departamento/${departamento}/municipio/${municipio.toLowerCase()}`}>{formatMunicipio}</Link>
          </li> 
          <li className={`${vereda ? '' : 'hidden'} m-0 color text-slate-400`}>{formatVereda}</li>
        </ul>
      </div>
    </div>
  )
}

export default BreadcrumbsMaps