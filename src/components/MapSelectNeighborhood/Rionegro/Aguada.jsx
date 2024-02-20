import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Aguada = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 189.27 102.6"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('AGUADA', municipio.toUpperCase())}
              className="cls-1"
              d="M64.7,4.7C68.1,2.8,71.6,1,73.4,0c5.4.7,9.6.8,13.5,1.9,1.9.5,4.4,2.6,4.9,4.4,1.5,6.1,4,11.2,9.6,14.3.5.3,1.1.7,1.2,1.2,2.1,10.8,11.2,9.5,18.8,11,3.7.7,7.4,1.9,11.1,2.7,4.8,1.1,9.6,2.6,14.4,3.1,5.4.5,8.9,3.3,11.6,7.3,4.5,6.5,10.1,9.2,18.2,7.5,5.6-1.2,9.6,3.1,12.1,7.2,1.2,1.9-.1,6.5-1.7,8.7-4.1,5.4-9.6,9.8-13.5,15.4-3.5,5-5.6,11.1-8.9,17.9-4.7-1.4-11.1-2.5-16.8-5.1-7.7-3.6-15-8.2-22.3-12.7-6.5-4.1-13.8-2.9-17.8,3.6-2.1,3.4-3.7,7.1-5.7,10.9-.8-.7-1.4-1-1.5-1.4C97.9,87.1,91.5,79.1,82,73.5c-5.3-3.1-6.4-8.3-5.1-13.5s-1.1-7-5-6.7c-7,.6-10.6-2.3-13.4-8.7-3.6-8.3-14.2-11.5-22.9-8.4a55.76,55.76,0,0,1-13.5,2.7c-5.9.6-11.6,4.7-17.8.8C3.6,39.3,1.7,40.9,0,41c2.6-7.8,10.3-9.4,16.9-12.4l-.6-1.5c3,1.2,5.9,2.4,8.9,3.6q1.5-2.1,3.6-5.1c4.5,4.6,8.7,4.8,12.7.3,4.5-5,11.6-7.9,12.1-15.5C57.8,9,61.9,7.6,66,6.2A15.26,15.26,0,0,0,64.7,4.7Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Aguada