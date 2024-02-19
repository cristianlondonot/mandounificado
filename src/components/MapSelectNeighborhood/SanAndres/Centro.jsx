import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Centro = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        id="uuid-819d4bf2-c8aa-47e3-8d1d-9a8d350e73bf"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 70.06 131.11"
      >
        <path
          fill={getColorByCarencias('CENTRO', municipio.toUpperCase())}
          className="uuid-14c80199-c249-4abc-b2e1-d27cad5c4c36"
          d="M69.64,2.91c-11.8-.8-23.7-1.5-35.6-2.6-11.3-1-13.4-.1-18.6,10.2-1.1,2-1.8,4.3-2.9,6.3-2.26,3.87-4.57,7.74-6.86,11.62.23.28.31.67.06,1.07-1.26,2.03-2.69,3.94-3.85,6.03-.6,1.08-1.14,2.2-1.46,3.39-.22.83-.37,1.82-.01,2.62.22.49.15,1.08-.36,1.37-.02.01-.04.01-.06.02.39,1.41.74,2.6,1.14,3.79,1.5,4.5,3.4,8.8,4.5,13.3,1.2,5,2.9,8.8,7.8,11.7,5.1,3.1,8.6,7.9,6,14.8-2,5.4,0,9.5,4.2,13.1,1.7,1.4,3.7,4,3.4,5.7-1.8,9.7,3.7,17.4,6,25.8,7.2-2.8,14.4-5.7,22.5-8.9-3.1-7.1-6.2-14.5-9.5-22,7.3-4.5,6.8-4.3,5.1-11.6-.8-3.3-.5-7.9,1.2-10.8,6.2-10.7,5.5-22.5,3.2-33.2-2.5-11.2.5-19,7.2-27.1,3.4-4.1,8.9-7.6,6.9-14.6Z"
        />
      </svg>
    </div>
  )
}

export default Centro