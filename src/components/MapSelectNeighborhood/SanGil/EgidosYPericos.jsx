import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const EgidosYPericos = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 148.61 97.21" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('EGIDOS Y PERICOS', municipio.toUpperCase())}
              className="cls-1"
              d="M126.5,97.21c-3.7-2.6-8.7-4.5-3.8-10.1.3-.4-1.1-3.1-2.3-3.7-11.2-6-21.6-13.6-34.7-15.7-4.6-.7-8.7-4.9-13.3-7.6,0-1.8.5-4.3-.1-6.4-1.5-5.1-7-6.2-10.5-2.5-1.1,1.2-2.9,1.8-4.3,2.6a12,12,0,0,0-1.2-1.1c.8-3.6,1.8-7.1,2.3-10.7a113.8,113.8,0,0,0,1.1-13.1c0-1.5-.4-3.7-1.4-4.3-1.3-.8-3.9-1-5-.2-3.3,2.4-6.3,2.1-10.1,1.3-10.9-2-22-2.5-32.6,1-3.7,1.2-6.8,4.1-10.6,5.7C10.7,22.91,21.2,13.11,32.3,4c2.9-2.4,7.4-3.1,11.3-4,.7-.2,2.1,1.9,3,3.1,1.1,1.4,1.7,3.7,3.2,4.4,5.3,2.7,10.9,4.9,16.2,7.5,5.8,2.9,11.5,6,17.3,9,.7.3,1.3.9,2,1,11.8,1,20.5,9.3,31.1,13a191,191,0,0,1,21.8,9.4c3.7,1.8,8.2,4.2,9.6,7.5s.8,8.8-1.1,12.1C140.4,77.41,133.3,87,126.5,97.21Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default EgidosYPericos