import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Culebrilla = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 235.55 184.71"
      >
        <path
          fill={getColorByCarencias('CULEBRILLA', municipio.toUpperCase())}
          className="cls-1"
          d="M219.4,161.59a9.1,9.1,0,0,0,3-1.4,12.13,12.13,0,0,0,1.4-1l.3-.3a6.94,6.94,0,0,1-.5-1.3c-.1-.4-.2-.9-.3-1.4a3.84,3.84,0,0,1,.5-2.6A4.38,4.38,0,0,1,229,152c.4.2,1.2.7,1.6.5a1,1,0,0,0,.4-.7c.3-.7.5-1.5.8-2.2a2.88,2.88,0,0,1,2.5-1.9,75,75,0,0,1,0-13.4c.3-2.2,1-4.3,1.2-6.5a5.08,5.08,0,0,0-.5-3.2,5.19,5.19,0,0,0-1.9-1.7,11.24,11.24,0,0,1-3.6-2.9,7.33,7.33,0,0,1-.9-5.4,17.91,17.91,0,0,0,.3-6.1,12.78,12.78,0,0,0-1.6-3.8,18.12,18.12,0,0,1-2.2-4.4,7.75,7.75,0,0,1,0-4c.6-2.6,2-5.1.9-7.8-.7-1.7-2.2-3.1-3.3-4.6a31,31,0,0,1-2.9-5,28.8,28.8,0,0,1-2.7-11.2,30.63,30.63,0,0,1,2.2-11.9c1.3-3.8,2.7-7.6,3.1-11.7-1.4-.2-2.9-.3-4.3-.6a11.46,11.46,0,0,1-7.3-4.6c-1.5-2.2-2.2-4.9-3.6-7.2a4.53,4.53,0,0,0-2.6-2.3,10.42,10.42,0,0,0-4.3-.2c-2.9.3-6,.6-8.3-1.5a12.38,12.38,0,0,1-2.5-3.9,13.57,13.57,0,0,0-3-4.1,47,47,0,0,0-8.7-6.1,71.08,71.08,0,0,0-19.9-7.3,93.41,93.41,0,0,0-10.6-1.6c-3.4-.3-6.8-.4-10.2-.7-7.1-.5-14.4-1.9-21.5-.8-2.8.4-5.5,1.6-8.3,1.8s-5.7-.9-8.5.3A12.25,12.25,0,0,0,95,7.89a14.78,14.78,0,0,1-2.5,2.5,1.86,1.86,0,0,1-2.1-.4,15,15,0,0,1-2.9-2.7c-1.6-2-2.6-4.7-4.7-6.3-2.3-1.7-4.9-1-7,.5-1.9,1.4-3.9,3.2-6.5,2.9s-4.7-2-6.8-3.5l-.6.6-3.1,3.1H55.7l-3.1,3.1-2.8,3.1-3.1,2.8-3.1,3.1-3.1,3.1-2.8,3.1v14.8l2.8,3.1V47l-2.8,2.8v3.1L40.5,56l3.1,3.1,3.1,2.8V65l3.1,3.1V74h5.9v3.1l6.2,6.2v3.1l3.1,3.1-3,5.7v9l3.1,6.2-3.1,3.1v9l-3.1,3.1-3.1,2.8-5.9,3.1-3.1,3.1-6.2,3.1-5.9,5.9-3.1,6.2H28.5l-2.8,2.8v3.1l-6.2,3.1-5.9,5.9-3.1,6.2L0,181.19c3.7.8,7.2,2.2,11,2.8a49.35,49.35,0,0,0,11.5.6c7.8-.6,15-4.1,22-7.2,6.4-2.8,12.9-5.7,19.8-7.1,7.4-1.5,15-.8,22.5-.6a182.73,182.73,0,0,0,23.4-.2c8-.7,15.7-2.9,23.5-4.9,8.5-2.2,17-4.3,25.6-5.9a37.41,37.41,0,0,1,7.4-.9,44.93,44.93,0,0,1,7.3.6,46.44,46.44,0,0,1,14.9,4.8,19,19,0,0,1,7.9,7.5,11.92,11.92,0,0,0,2-.8c1.2-.7,1.7-1.8,2.5-2.8a12,12,0,0,1,2.6-2.4c1.1-.7,2.3-1.2,3.4-1.9a19.1,19.1,0,0,0,3.2-2.4c1.4-1.2,3.1-2.2,4.9-1.2C216.8,160.19,217.7,161.79,219.4,161.59Z"
        />
      </svg>
    </div>
  )
}

export default Culebrilla