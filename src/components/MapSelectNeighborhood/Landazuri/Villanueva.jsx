import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Villanueva = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88.4 84.49" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('VILLANUEVA', municipio.toUpperCase())}
              className="cls-1"
              d="M85.1,29a5.52,5.52,0,0,0-3.8,0c-.8.2-1.9.6-2.7,0-1.1-.7-.7-2.5-.5-3.6a20.43,20.43,0,0,1,2.4-5.2c.8-1.7,1.8-3.7,1.2-5.6-.5-1.5-1.8-1.8-3.2-2a12,12,0,0,1-4.2-.7.61.61,0,0,1-.1-1c.6-.5,1.3-1,1.9-1.6a2.68,2.68,0,0,0,.7-2.4v-.1c-1.5-1.8-2.9-3.9-4.9-4.9-2.8-1.3-6.1-.3-9.1-1.2-6.6-2.1-10.5.9-16.1,4.5-5.8,3.8-8.1,8.6-11.5,14.4-1.9,3.2-3.2,6.7-3,10.2-4.9-.5-9.9,1.5-14.3,3.1S9.3,36.19,5,38a8.05,8.05,0,0,1,2.8,4.2,9.21,9.21,0,0,1-.8,5.4c-1.2,3-3.7,6.3-3.2,9.7.3,1.9,1.8,3.2,2.3,5,.7,2.5-.4,5.2-1.4,7.5s-2.4,4.4-3.5,6.6c-1,2-1.8,4.1-.6,6.1a10,10,0,0,0,1.6,2l.3-.3H3.8v-1.3l-1.3-2.4v-1.3H3.8v-1.3H5.1v-1.3H6.2v1.3H8.8v-1.3h1.3l1.3-1.1h1.1v-1.3h2.6v-1.3h1.1v-1.3h1.3l1.3-1.1v-1.3h1.3l1.1-1.3h1.3v-2.6h1.3v-3.7h1.3v-1.3h1.3L27.5,59h1.3v-1.1h1.3v-1.3h2.4v-1.3h1.3V54l1.3,1.3v-2.1h2.4v-1.3h1.3l1.3-1.3H38.8v-1.3h6.3l1.1,1.3h5v-2.4h1.3v-1.3h1.3v-1.3l1.3-1.3v-1.1l1.1-1.3v-1.3h1.3v-1.3h1.3v-1.1h2.4l1.3,1.1,1.3,1.3h3.7l1.3,1.3h2.4v-1.3h1.3l1.3-1.3,1.3-1.1h1.1l1.3-1.3h1.3v-1.3h5l1.5.8c1.2-1.1,3-1.7,3.1-3.6A6.21,6.21,0,0,0,85.1,29Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Villanueva