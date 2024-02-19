import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaLibertadLosCuros = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 107.1 101.57">

        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA LIBERTAD LOS CUROS', municipio.toUpperCase())}
              className="cls-1"
              d="M47.1,86c.7-3.1,4.1-7.4,2.3-8.7-5-3.7-2.7-11.1-8.1-14-5.3-.1-4.9-4.7-5.2-7.7-.7-6.3-4.1-9.4-9.8-10.2-7.7-1-11.5-6.4-13.6-12.8a41.88,41.88,0,0,0-8.8-15C2.6,15.37,1.3,13.27,0,11c.6-.2,1.2-.6,1.4-.4,13.2,7.1,25.1,3.2,36.3-4.6C51-3.33,64.9.07,78.8,3.87c1.9.5,3.1,3.6,4.7,5.5,6.9,8.2,9.6,9.1,23.6,8.6-.1.3-.2.9-.3.9-7.1,1.2,2.7,12.6-7.8,12.4-7.9-.1-6.4,9.4-11.1,13.1-2.4,1.9-1,4.4.1,7,1.4,3.3,2.5,7.2-3.5,7.5-4,.2-4.1,7.4-9.6,5.5-.6-.2-1.8,1.5-3.4.1-3.4-2.9-4.9-1.6-4.8,2.6.1,2,.2,4-3.1,2.5-1.5-.7-2.3,1-2.5,2.4-.3,1.7.5,2.7,2.1,3.2,2.9.9,8,1.8,7.2,4.4-1.8,5.9,2.2,12.3-2.3,17.8-1.3,1.6-1.9,0-2.7,0-3-.1-4.2,1.6-4.6,4.2C54,101.17,48.3,94.77,47.1,86Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaLibertadLosCuros