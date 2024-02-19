import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Chanchon = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 104.2 147.19"
      >
        <path
          fill={getColorByCarencias('CHANCHON', municipio.toUpperCase())}
          className="cls-1"
          d="M103.3,64.8V62.3L102,59.6V57.1l-1.3-2.5,1.3-2.7V45.4H99.3l-1.2-2.5-2.7-2.7V37.7L92.9,35V32.5l-1.3-2.7-1.3-3.9V20.7L89,19.4V15.5L90.3,13,89,10.3V9L87.8,6.3,85.1,5,83.8,3.8,82.6,2.5,81.3,1.2,80,0H45.7c.6,1.6,1.5,3.1,2.1,4.7a7.17,7.17,0,0,1,.6,2.9.76.76,0,0,1,.2.4.9.9,0,0,1-.4,1.1,4.33,4.33,0,0,1-.1.5c-.3,1-.8,2-1.2,3s-.5,2-.7,3a26.38,26.38,0,0,1-1.7,6.1c-1.8,3.9-4.2,7.6-5.6,11.7a30.9,30.9,0,0,1-1.8,5.1,16.44,16.44,0,0,1-1.4,2.2,4.53,4.53,0,0,0-1,2.1c-.4,2-.1,4.1-.2,6.1a20.81,20.81,0,0,1-.6,3.6.47.47,0,0,1,.5.6c-2.1,6.7-7.1,12.1-9.3,18.8-2.1,6.3,0,13.2-2,19.6-1.7,5.5-6,9.3-8.9,14-.8,1.2-1.4,2.6-2.2,3.8s-1.5,2.6-2.3,4a45.71,45.71,0,0,0-4,8.7c-.8,2.6-1,5.3-1.7,7.9a11.78,11.78,0,0,1-4,6.2c.4.6.9,1.1,1.3,1.6a23.57,23.57,0,0,0,8.4,5.5,21.1,21.1,0,0,0,4.8,1.2,23.11,23.11,0,0,1,5.2,1.2,32.78,32.78,0,0,0,5.1,1.5,12,12,0,0,0,5.6-.8,31.55,31.55,0,0,1,5.3-1.3,34,34,0,0,0,4.6-.6,9.07,9.07,0,0,0,3.6-2,11.51,11.51,0,0,1,4-2.6c1.4-.5,2.9-.7,4.3-1.1a19.49,19.49,0,0,0,5.1-2.3c3.3-1.9,6.3-4.1,9.4-6.3s6.3-4.1,9.6-6a65.74,65.74,0,0,1,16.5-6.7V105l1.2-2.5,1.3-2.7,1.3-3.9,1.3-2.7L99.1,92V89.3L97.9,88V85.5l1.2-1.3,1.3-1.2,1.3-2.7,1.3-2.5,1.2-2.7V65.9Z"
        />
      </svg>
    </div>
  )
}

export default Chanchon