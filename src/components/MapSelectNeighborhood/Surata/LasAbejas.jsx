import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LasAbejas = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 157.39 171.49"
      >
        <path
          fill={getColorByCarencias('LAS ABEJAS', municipio.toUpperCase())}
          className="cls-1"
          d="M101.89.3c-.1,0-.1.1-.2.2s-.1.1-.1.2V.6h0a1.38,1.38,0,0,1-.3.4h-.1l-.1.1c-1.9,1.2-3.7,2.6-5.5,4C94,6.4,92.49,8,90.79,9.2s-3.5,2.1-5.2,3.2a19.24,19.24,0,0,0-4.8,3.7,13.59,13.59,0,0,0-2.3,5.2c-.8,3.4-1.3,6.9-3.5,9.8-2,2.7-4.9,4.5-7.4,6.8A15,15,0,0,0,63,46c-.7,3.1-.9,6.4-1.4,9.5-1.3,7.7-7.4,13.5-9.2,21.1-.9,4-1.2,8.1-3.7,11.5a25.76,25.76,0,0,1-3.2,3.4,8.18,8.18,0,0,0-2.3,4.4c-.3,1.7-.3,3.4-.7,5.1a10.05,10.05,0,0,1-2.5,4.5c-1.7,1.8-3.9,3.6-4.5,6.1a13.48,13.48,0,0,0,.1,5.3c.4,1.9,1.3,3.8,1.6,5.7.6,3.8-2,6.5-4,9.3a22.27,22.27,0,0,0-2.4,4.9c-.7,1.7-1.3,3.3-2.1,5a29.71,29.71,0,0,1-6.4,8.9,26.2,26.2,0,0,1-10.8,5.7,22.42,22.42,0,0,1-5.2.6,4.62,4.62,0,0,0-3.2.9,15.3,15.3,0,0,0-1.8,1.8,4.39,4.39,0,0,0-1.2,1.8c-.4,1,.6,1.3,1.4,1.7,1.6.7,3.3,1.3,5,1.9a14,14,0,0,0,6,1.2h.3a.63.63,0,0,1,.6-.5c8.5,0,17.1,3.3,25.7,1.5a12.63,12.63,0,0,1,7.9.9c2.3,1,4.4,2.4,6.9,3a6.08,6.08,0,0,0,4-.1,19.1,19.1,0,0,0,3.2-2.4,5.56,5.56,0,0,1,3.4-1.5,18.16,18.16,0,0,1,4.6.6,13,13,0,0,0,9-1.8c2.6-1.5,4.8-3.5,7.3-5.1a21.35,21.35,0,0,1,4.2-2.3,15.84,15.84,0,0,1,4.3-1,18.43,18.43,0,0,0,5.2-1c1.2-.4,2.3-1,3.5-1.5v-.3a32.85,32.85,0,0,0,1.1-4.5c.8-5.6-.4-11.3-2.1-16.6l-2.7-8.1c-.7-2.3-1.7-4.8-1.7-7.2,0-3.9,2.5-7.3,5.1-10a56.62,56.62,0,0,1,10.6-8.2c3.9-2.5,8-4.7,11.4-7.8a64.82,64.82,0,0,0,10.2-12.5c1.5-2.3,3-4.5,4.6-6.8,1.8-2.6,3.7-5,5.7-7.4s4.2-4.9,6-7.5a21.29,21.29,0,0,0,3-6.9c.3-1.2.6-2.5.9-3.7.4-1.4.8-2.8,1.3-4.2a25.6,25.6,0,0,0,1.4-7.8c-.2-6.5-2-12.8-1.6-19.3-.1,0-.2-.1-.3-.1-1.1-.3-2.1-.7-3.2-1a15.67,15.67,0,0,0-3-.5c-9.1-1.5-18.2-3.1-27-5.8A78,78,0,0,1,109.89,4a54.66,54.66,0,0,1-7-4A1.49,1.49,0,0,0,101.89.3Z"
        />
      </svg>
    </div>
  )
}

export default LasAbejas