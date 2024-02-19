import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Pulpapel =  ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 113.15 154.43"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('PULPAPEL', municipio.toUpperCase())}
              className="cls-1"
              d="M0,43.74c.2-2.5.3-4.2.4-5.3,3.6-.6,6.5-.7,9.1-1.6,7.7-2.8,8-7.9,2.4-14.2-2.6-2.9-3-7.9-3.9-12-.6-2.7-.1-5.5-.1-7.6,3.3-1,6.4-2.1,9.5-2.8,6.2-1.4,9.1,3.5,10.1,7.6,1.8,7.7,8,10.5,13.4,13.8,10.2,6.3,20.8,12,31.4,17.5C79.9,43,84.8,49,88.9,56.34a286.31,286.31,0,0,0,16.2,25.8c4.8,6.8,8.4,13.7,7.3,22.2s2.9,17.4-1,25.9c-3.4,7.4-6.8,14.7-10.4,22-1.5,3.2-3.7,2.5-5.8.4-3.7-3.7-5.3-13-3.5-18.1.6-1.6.7-4.8-.1-5.4-5.1-3.2-10.5-5.8-15.8-8.7-3.1-1.7-6.4-3.1-9.1-5.3-2.4-2-4-5-6.2-7.2a13.35,13.35,0,0,1-3.4-13.4c1.9-7.7-.6-11.8-7.9-14.9a14.35,14.35,0,0,1-6.1-4.7c-4.6-7.2-11.2-11.3-18.8-14.7-2.9-1.3-5-4.8-7.2-7.5-.7-.9-.8-2.4-1.1-3.7-2-7.9-3.8-9-11.1-6.7C3.5,42.84,2.1,43.14,0,43.74Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Pulpapel