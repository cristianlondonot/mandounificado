import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Almendro = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        id="uuid-709325ef-e91b-420d-a534-c79f66ed43e6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 99.62 130.23"
      >
        <path
          fill={getColorByCarencias('ALMENDROS', municipio.toUpperCase())}
          className="uuid-305fddd2-28a4-46af-8b08-de87ed5545ef"
          d="M78.82,16.23c-9.5,2.3-18.3,4.8-27.2,6.6-2.8.6-6.8.6-8.7-1-4.38-3.61-8.19-7.86-11.3-12.6C27.02,1.93,20.72-1.07,12.62.33,8.12,1.03.42,2.73.12,4.83c-.7,5.1,1.9,10.8,3.5,16.1.4,1.3,2.4,2.1,3.1,3.4,1.3,2.5,3,5.2,3,7.8-.1,4.4,1.6,7.4,5.3,9.1,3.45,1.69,3.23,3.25,2.02,4.78,1.28,4.45,3.63,8.56,3.67,13.32,0,.26-.09.46-.22.61.31,1.48.56,2.98.73,4.49.2,2.2-1.2,5.9-.3,6.5,7.4,4.9.3,14.1,6.2,19.2-2.4,12.1,9.7,13.1,15.4,17.7,4.2,3.4,6.2,5.5,6.3,10.5.1,3.9.8,7.8,1.2,11.9,4.6-1.8,8.1-2.7,11.1-4.5,4-2.4,8.9-4.8,10.9-8.5,2.1-3.9.3-8.5,5.1-12.9,4.6-4.3,5.2-13,7.4-19.8,2-6,3.4-12.2,5.7-18,2.7-6.7,6.2-13.1,9.4-19.6-7.8-9.4-23.4-12.7-20.8-30.7Z"
        />
      </svg>
    </div>
  )
}

export default Almendro