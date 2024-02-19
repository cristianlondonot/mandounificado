import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Zarandas = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.91 83.7" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('ZARANDAS', municipio.toUpperCase())}
              className="cls-1"
              d="M5.31,40.8c2.8-.5,6.1-.9,9.4-1.7a48.93,48.93,0,0,0,8.7-2.7c1.8-.8,4.4-2.3,4.5-3.7C28.61,22.3,36.81,16,41,7.6c1.3-2.5,3-4.8,4.7-7.6,2.7,5.8,6.7,10.1,13.8,10.1a4.29,4.29,0,0,1,3.1,1.6c8.9,15.4,23.8,21,40,24.2,6.7,1.3,13.6,1.9,20.3,2.8-1.3,1.7-2.4,3.5-6.3,1.5-9.2-4.9-21.3,3.8-21.2,14.4,0,2.2-1.6,4.4-2.6,6.6-2.3,5.6-5,11-6.8,16.8-1.4,4.2-3.3,5.8-7.9,5.7-7.4-.2-13.2-4-19.3-7.4-5.9-3.3-12.1-6.3-18.2-9.4-.7-.4-1.9-.9-2.3-.6-5.5,3.7-13.4,3.1-17.4,9.8a12.26,12.26,0,0,1-6.3,4.9c-1,.3-3.1-2.8-4.6-4.5C.41,65.9-4.39,54.3,5.31,40.8Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Zarandas