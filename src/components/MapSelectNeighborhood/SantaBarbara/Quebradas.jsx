import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Quebradas = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.4 126.9" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('QUEBRADAS', municipio.toUpperCase())}
              className="cls-1"
              d="M56.1,4.1a30.17,30.17,0,0,0-5.2-.2c-3.4,0-6.8,0-10.2-.3-1.6-.2-3.2-.4-4.8-.7s-3.1-.8-4.7-1.2A11.75,11.75,0,0,1,26.9,0a22.47,22.47,0,0,0-7.7,5.6,48.75,48.75,0,0,0-6.3,8.6,19.22,19.22,0,0,0-2.2,5.6,44.8,44.8,0,0,0-.6,6.2c-.1,3.4.1,7.1-1.8,10.1a11.85,11.85,0,0,1-4.6,4v1.1H5.4v5.6H7.3v1.9H5.4v3.5H7.3v3.7H9.2V65h1.9v7.3L12.8,74v7.3h1.9V94.2H12.8V105H11.1v3.7H9.2v1.7H7.3v3.7H3.8L1.9,116v1.7H0v3.7H1.9L0,123.3,1.9,125l1.9,1.9V125H5.5v-1.7H7.4v-1.9H9.3v-3.7h1.9V116h1.7v-1.9h1.9v-3.7h1.9v-1.7h3.5v-1.9h1.9v-1.9H24v-1.7h1.9v-1.9h1.7l1.9,1.9,1.9-1.9h1.9V95.9H31.4V90.3h3.5V84.9h3.7V83h3.5V77.7H44V74l1.9-1.7V68.6H44V65.1H42.1V63.2H40.4V61.3H38.5V52.2h1.9V48.7H38.5V45H36.3V43.1h1.9V41.2H36.3V33.9H34.4v-7h1.9V23.2H34.4l1.9-1.9V19.6h1.9l1.9-1.9h1.7V15.8h1.9V13.9l1.9-1.7,3.5-1.9H51l5.4-5.4-.3-.8Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Quebradas