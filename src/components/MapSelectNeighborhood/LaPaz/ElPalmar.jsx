import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ElPalmar = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 240.9 239.38"
      >
        <path
          fill={getColorByCarencias('EL PALMAR', municipio.toUpperCase())}
          className="cls-1"
          d="M.4,8.1c-.2-.6.8-.9,1-.3L1.7,9h.2v.9a6.29,6.29,0,0,0,1.9,3.9,12,12,0,0,1,2.1,1.7,4.79,4.79,0,0,1,.9,2.6,5.53,5.53,0,0,1-.7,2.5c-.6,1.1-1.2,2.1-1.7,3.2a11,11,0,0,0-.9,6.7,47.67,47.67,0,0,0,1.7,6.2,23.93,23.93,0,0,1,1.1,6.5c0,2.5-.2,5.1-.4,7.6-.3,4.9-.3,10,2.6,14.2,2.5,3.7,6.2,6.5,9.7,9.3a39.4,39.4,0,0,1,4.9,4.1c1.6,1.8,2.5,4.2,4.4,5.8,1.6,1.4,3.6,2.2,5,3.7a7.1,7.1,0,0,1,1,1.4c2.5.1,5.1.3,7.6.5a62.69,62.69,0,0,1,8.7,1.1,36.12,36.12,0,0,1,7.3,3,38.29,38.29,0,0,0,8,2.9,14.21,14.21,0,0,1,5.2,1.9c8,5.8,9.7,19.6,21.2,20.2,2,.1,4-.1,5.9.6a8.22,8.22,0,0,1,4.3,3.9,25.78,25.78,0,0,1,2,5.5,7.65,7.65,0,0,0,4,4.8c2.2,1.2,4.5,2.2,6.6,3.6a45.07,45.07,0,0,1,5.9,4.7c4.1,3.9,6.2,9.2,9.6,13.7,3.2,4.3,6.4,8.7,10.7,11.9a30.67,30.67,0,0,0,7.6,4,59,59,0,0,1,8.2,3.4,58.71,58.71,0,0,1,6.5,4.6,25,25,0,0,0,3.8,2.5,24.64,24.64,0,0,0,3.8,1.4,14.88,14.88,0,0,1,6.3,3.4c1.8,1.8,3.5,3.8,5.2,5.6a24.39,24.39,0,0,0,5.9,4.8c1.9,1.1,4.1,1.9,6.1,2.9a60.31,60.31,0,0,1,11.9,7.3c3.4,2.8,5.8,6.2,6.4,10.7.3,2.1.2,4.2.6,6.3a9.8,9.8,0,0,0,2.9,5.7c1.5,1.4,3.2,2.7,4.8,4.1a35.16,35.16,0,0,0,5.6,3.9c1.4.8,3.5,1.7,5.1.8,1.3-.8,2-2.5,2.6-3.9.7-1.8,1.2-3.6,1.8-5.4a29.18,29.18,0,0,1,2.3-4.7,34.18,34.18,0,0,0,2.1-4.3c.3-.7.6-1.5.9-2.2H229.5l-3.8-1.9V203.7l-1.9-1.9V190.6h-7.4l-3.6-1.9-1.9-1.9-1.9-1.7h-1.7l-1.9-3.8v-5.5l1.9-3.8,1.7-3.6v-9.3l-1.7-1.9v-1.7l1.7-1.9V138.8l1.9-1.9v-3.6l-1.9-1.9-1.7-1.9v-1.8h-3.8V126h-2v1.7l-1.9-1.7-1.7,1.7L196,126v-1.9l-1.9-1.9h-1.7l-3.8-1.9h-1.9l-1.7-1.7h1.7v-1.9H185v-1.9h-3.8l-3.6-3.6h-1.9v-1.9h-5.5l-1.9-1.9h-5.5l-1.9-1.9v-1.9H159v1.9h-1.9v1.9h-1.7v-1.9h-3.8v-1.9l-1.9-1.9H148l-1.9-1.7-3.8-1.9h-1.7l-1.9-1.9H137l-1.9-1.9V92.6l-1.9-1.9h-1.9V88.8h1.9V86.9h-3.6l-1.9-1.7h-3.8l-1.7-1.9-1.9-1.9V79.5H109.1l-3.6-3.6V74l-1.9-1.9h-1.7L100,70.4V68.5l-1.9-1.9V63H96.2l-1.9-1.9V59.2l1.9-1.7-1.9-1.9V53.7H92.6l-1.9-1.9V49.9H88.8V48.2l-3.6-1.9H83.3V42.7H81.4V38.9H79.5v1.9H77.8l-1.9,1.9H74l-1.9,1.7H70.4l-1.9-1.7V38.9L66.6,37l-1.7-1.9L63,33.4H61.1l-1.9-1.9H57.3l-1.7-1.9V26H50.1l-1.9,1.9H44.4L42.5,26V22.2H40.8l-1.9-1.9V16.7L37,14.8l-1.7-1.9L31.5,11H29.6L26,9.1,24.1,7.4H22.2V5.5H18.6L16.7,3.6H14.8V1.7L13.1,0H7.4V1.7L5.7,3.6H1.9V5.5H0V9.1H.7A5.39,5.39,0,0,1,.4,8.1Z"
        />
      </svg>
    </div>
  )
}

export default ElPalmar