import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const CruceDeRobledo = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        id="uuid-4c0f2ece-fc1d-42bc-b6fc-2b48bb15f483"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 61.23 131.8"
      >
        <path
          fill={getColorByCarencias('CRUCE DE ROBLEDO', municipio.toUpperCase())}
          className="uuid-57acbce8-2fdd-427d-ac77-4a5edcd9cce2"
          d="M58.94,76.65c-.68-2.36-1.21-4.77-2.36-6.96-.07-.14-.11-.27-.12-.4-.18-.24-.3-.5-.36-.78-1.8-7.4-3.6-14.9-5.3-22.3-1.1-4.6-2.4-9.3-2.8-14-.2-3.1,1.9-6.5,1.2-9.4C47.5,15.1,44.8,7.6,42.5,0h-2.3c-3.4,9.2-8.5,18.2-9.7,27.7-1.3,10.4-9.3,19.1-6.6,30.2.2.6-.8,1.5-1.1,2.3-3.8,9.7-7.7,19.3-11.3,28.5,3.5,2.8,5.6,4.6,7.7,6.3-3.7,9.2-11.5,10.8-19.2,12.1,2.9,7.9,5.8,15.7,9.1,24.7,8.2-4.5,15.6-8.6,23-12.7.9-.5,1.9-1.5,2.7-1.4,8.6,1.4,10.3-5.9,13.3-10.9,4.87-8.17,5.87-18.7,13.13-24.78-1.04-1.66-1.74-3.47-2.29-5.38Z"
        />
      </svg>
    </div>
  )
}

export default CruceDeRobledo