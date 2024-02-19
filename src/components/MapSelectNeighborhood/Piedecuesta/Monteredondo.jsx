import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Monteredondo = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 119.86 95.42" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('MONTEREDONDO', municipio.toUpperCase())}
              className="cls-1"
              d="M118.39,88.5c-8.6-4-8.5-3.9-18.1.7-4.6,2.2-9.5,3.7-14.1,5.9-2.4,1.1-3.3-1-4.9-1.3A117.75,117.75,0,0,0,68.19,92c-12-.6-14.4-2-16.6-13.8-1-5.5-4.2-8.8-8.4-10.1-3.8-1.2-5.3-3.4-6.8-6.2-3.8-7.2-11.7-7.7-17.9-10.8-4-2-6.6-3.5-7.1-8.2-.8-6.5-5.8-11.2-9-16.2-5.2-7.9-.9-12.4,3.4-16.4A12.16,12.16,0,0,0,10.09,0c7.3,3.9,14.5,6.3,22.4,2.1,4.3-2.3,7.1-2.3,8.2,3.8,1.2,6.7,12.8,8.9,17.9,4.4,3.9-3.4,7.8-7.4,14.2-4.3,2.5,1.2,7.1,1.4,8.9-.2,5.4-4.5,8.2-.9,12,2.1,3.4,2.7,7.4,4.7,11.1,7,4.2,2.5,7,4.3,6.4,11-.6,6,4.1,12.6,7.1,18.7.5,1.1,1.5,2.2,1.4,3.5-.6,10.1,1.4,20.3-1.2,30.4C117.69,81.6,118.39,85,118.39,88.5Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Monteredondo