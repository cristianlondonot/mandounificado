import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const AltoDeVacas = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 141.83 185.89"
      >
        <path
          fill={getColorByCarencias('ALTO DE VACAS', municipio.toUpperCase())}
          className="cls-1"
          d="M0,129.59c2.3-6.4,1.6-11.3,8.5-15.1,10.5-6,19.9-14.6,24.3-27a21.73,21.73,0,0,0,.8-8.3c-.2-9.5,2.2-18.4,5.8-27.1.5-1.2,1.5-2,.7-3.8-4.2-9.2-4.1-18.4,1.4-27.2.2-.4.6-.9.6-1.3C38.9,7.09,49,7.69,56.3,5.39a30,30,0,0,0,7.9-4.2c2.1-1.5,3.5-1.6,5.6-.2s2.1,2.4,1.4,5c-2.3,8.9,1.5,17.7,1.1,26.7,0,1.1,1.5,2.3,2.4,3.3,3.9,3.8,4.7,8.7,6,13.7,2.8,10.2,6.7,20.1,17.7,24.7,1.5.6,3.5,1.2,4.8.7,7.5-3,15.6-.8,23.2-3.7,5.7-2.2,10,2.7,14.5,5.4,1.2.7,1.2,2,.2,3-6.3,6-4.9,15.8-10.5,21.9-5.7,6.3-6.7,14.2-9.2,21.7a17.59,17.59,0,0,0-.9,5.5c-.2,5,2,10.1-4.1,14-3.6,2.3-2.3,8.5-4.1,12.9-3.2,7.5-9.5,12.6-12.8,19.8a28.51,28.51,0,0,1-2.6,4.1c-1.4,2,.8,6.2-2.8,6.2-2.6,0-3.3-4-3.8-6.2-1.1-4.8-6.2-3.6-8.2-6.9-5.4-8.5-10.3-17.7-17.1-25.1-8.3-9.1-16.2-19.4-29.4-22.4-1.8-.4-2.6-1.6-3.6-3a6.35,6.35,0,0,0-6.7-2.7C16.9,121.49,8.5,123.59,0,129.59Z"
        />
      </svg>
    </div>
  )
}

export default AltoDeVacas