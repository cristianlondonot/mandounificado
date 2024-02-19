import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const CabeceraMunicipalDeRuitoque = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return(
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.15 45.82">
        <path
          fill={getColorByCarencias('CABECERA MUNICIPAL DE RUITOQUE', municipio.toUpperCase())}
          className="cls-1"
          d="M40.39,34.12a8.37,8.37,0,0,1-6.5,2.2,27.12,27.12,0,0,0-22,7.4c-1.2,1.1-3.4,1.3-5.5,2.1.1-9.9-3.7-18.6-5.9-27.6-.6-2.6-1.4-4.6,2.7-5.2,6.8-1,9.7-7.9,14.8-11.7,3.1-2.4,4.6-.8,6.8-.8,2.9,4.5,2.6,10.1,5.6,14.9,2.8,4.5,4.9,9.4,8.7,13.4C40.39,30.12,42.19,31.72,40.39,34.12Z"
        />
      </svg>
    </div>
  )
}

export default CabeceraMunicipalDeRuitoque