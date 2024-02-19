import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaAguada = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54.51 80.9">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA AGUADA', municipio.toUpperCase())}
              className="cls-1"
              d="M53.21,56.5l-1.2-1V54.3h-1.2V52H52V45.3h-1.2V42h-1.2V40.8h-1V39.6h-2.3V38.4l-1.2-1V31.7h1.2V26h1.2V22.7h1.2V19.4h-1.2V17.1h-1.2V14.8h-1.2V13.6l-1-1V11.4l-1.2-1.2V9h-1.1V8h-1.2V6.8h-1V8h-1.2V6.8h-2.3l-1-1.2h-1.2v-1h-3.3V3.4h-1.2l-1.2-1.2H27V1H26l-1.2-1h-3.3V1l-1.2,1.2V3.4h-1.2V4.6h-3.3l-1.2,1h-1.2l-1,1.2h-1.2V8l-1,1v1.2H9v1.2l-1.2,1.2h-3l-1.2-1.2V10.2h-.7a13.35,13.35,0,0,1-1.3,4.3c-.4.8-1,1.5-1.4,2.2-.3.5-.3.6.1,1A6.07,6.07,0,0,1,2,21.9a21,21,0,0,1-.9,5c1.8,1,3.5,2,5.3,3,1.5.9,3.1,1.6,4.6,2.6a5.2,5.2,0,0,1,2.4,5.3,8.73,8.73,0,0,1-.5,2.2c-.3.7-.8,1.2-1.1,1.9a1.8,1.8,0,0,0,.1,2.1,4.81,4.81,0,0,1,.8,1.6c.4,1.6-.3,3.2-.8,4.7a37,37,0,0,0-.8,4.8c-.4,1.8-1.1,3.4-1.5,5.2a26.07,26.07,0,0,0-.5,4.8,3.58,3.58,0,0,1,3,.5,15.67,15.67,0,0,1,2,2.5,5.5,5.5,0,0,0,1.7,1.3,7,7,0,0,0,2.5.1,7.39,7.39,0,0,1,4.3,1.2A23.94,23.94,0,0,0,26,72.8c1.3.5,2.7.5,4,1.1a11.84,11.84,0,0,1,3.3,3,8.15,8.15,0,0,0,4.3,2.7c2.5.7,5.2.7,7.7,1.3V79.1h-1V78h-1.2V75.8h1.2V74.6h1V71.3h1.2V70.1h1.2V69h1.2V65.5h1V63.3h1.2V62.1h1.2V61h1.2V60h1V57.7Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaAguada