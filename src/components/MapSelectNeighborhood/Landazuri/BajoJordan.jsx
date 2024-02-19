import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const BajoJordan = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 69.7" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('BAJO JORDAN', municipio.toUpperCase())}
              className="cls-1"
              d="M69.7,17.6c-1.5.5-3.1.9-4.6,1.4a16.9,16.9,0,0,0-3.7,1.5c-3.1,1.9-5,5.7-8.6,6.7a4.63,4.63,0,0,1-4.7-1.5,8.26,8.26,0,0,1-1.4-3c-.3-1-.8-1.8-1.9-1.8a4.77,4.77,0,0,1-4.1-2.8,12.73,12.73,0,0,1-.7-5.8,22.75,22.75,0,0,1,.2-2.6c-2.3-.9-2.4-3.1-2.9-5.3C36.8,2,34.7.8,32.6,0c-2,4.5-1.4,9.9-4,14.2-1.1,1.8-2.2,3.5-3.1,5.3a29.7,29.7,0,0,1-3,4.8,14.34,14.34,0,0,1-4.7,3.8,27.33,27.33,0,0,0-5.4,3.4,19.09,19.09,0,0,0-4,4.9c-1.1,1.8-1.7,3.9-2.8,5.7A13.67,13.67,0,0,1,0,46.6v.7l1.3,2.4L2.6,51v1.3L1.3,53.6v1.1L2.6,56H3.9L5,57.3H6.3v2.4L7.6,61H8.9v1.3L7.6,63.6,6.3,66v3.7l1.3-1.1,1.3-1.3H10L11.3,66h1.1l1.3-1.3V62.1L15,60.8l1.3-1.3,1.1-1.1,1.3-2.6,2.6-1.3,2.4-1.1L25,52.1h3.7l3.7-3.7L35,47.1l1.3-1.3h1.1V44.5h5L45,43.4l1.1-1.3h1.3l3.7-3.7,2.6-1.3L55,35.8h5l1.3,1.3h2.4L65,35.8l1.3-2.4,2.4-1.3H70l1.1-1.3V29.5l1.3-1.3v-5l1.3-1.3V20.8L75,18.2V15.5A41.37,41.37,0,0,1,69.7,17.6Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default BajoJordan