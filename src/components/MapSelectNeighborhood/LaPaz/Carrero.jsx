import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Carrero = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 151.7 205.1"
      >
        <path
          fill={getColorByCarencias('CARRERO', municipio.toUpperCase())}
          className="cls-1"
          d="M148,186.3l-1.9-1.7-1.7-1.9-1.9-3.8-1.9-1.7-1.9-1.9v-1.9l-1.7-1.9-1.9-1.9v-1.9l-1.9-1.7v-1.9l-1.9-1.9-1.7-1.9v-3.6l-1.9-1.9v-11l-1.9-1.9V140h-1.9v-1.9l-1.7-1.7h-1.9l-3.8-3.8v-1.9h-1.7l-1.9-1.7v-1.9l-1.9-1.9v-3.6h1.9V84.4l1.9-3.6h-1.9L109.1,77V75.1l-1.7-1.7-1.9-1.9-1.9-3.8-1.9-3.6V58.6L100,56.7V54.8l1.7-1.9h5.7V51.2l1.7-1.9h-1.7l-1.9-1.9V45.5l-1.9-1.7V38.1L100,36.4H94.3l-1.7-3.8-1.9-1.9-1.9-3.6v-2l-1.9-3.6.5-.5-2.2-.3c-3.6-.4-7.3,0-10.9,0s-7.2-.2-10.5-1.7c-2.8-1.3-4.6-4-7-5.8a16.3,16.3,0,0,0-4.5-2.4,24.91,24.91,0,0,1-4.7-2.1c-1.5-1-3-2.1-4.4-3.2a26.29,26.29,0,0,0-4.4-3c-3.1-1.4-6.7-1-10.1-.9-3,.1-6.3-.1-8.9-1.6a5.34,5.34,0,0,0-1.5,1.5A12.78,12.78,0,0,1,16,4.4a13.5,13.5,0,0,1-3.3,1.9A21.58,21.58,0,0,0,9.3,8a5,5,0,0,0-2,3.1A8.84,8.84,0,0,1,5.8,15c-.8.9-2.1,1.6-2.6,2.8-.4,1,.6,2.2,1.1,3a25.38,25.38,0,0,1,2.3,3.4,7.82,7.82,0,0,1-1,7.5A7.69,7.69,0,0,1,.2,34.6h0V35h0a.9.9,0,0,1,.1.5v1.4a.55.55,0,0,1-.3.5c0,1.6,0,3.2.1,4.8a19.36,19.36,0,0,0,1.5,6.3c.8,1.8,1.9,3.9,3.9,4.5,1.6.4,3.1.4,4.5,1.4a4.57,4.57,0,0,1,2,3.8c0,1.6-.2,3.3.7,4.7s2.5,1.8,3.5,2.9a4.83,4.83,0,0,1,1,4.2c-.2,1.7-.6,3.3-.8,4.9a24.78,24.78,0,0,0-.6,6.1,9.86,9.86,0,0,0,2.7,5.6c2.5,2.5,6.4,2.8,9.8,3.1,1.8.2,3.6.4,5.4.7a63.13,63.13,0,0,1,7.2,1.8c2.4.7,4.7,1.4,7.1,1.9A19.74,19.74,0,0,1,53.3,96,17,17,0,0,1,58,99.2a12.71,12.71,0,0,1,2.6,4.3,13.54,13.54,0,0,0,1.9,3.8,8.79,8.79,0,0,0,5.3,2.5c2.1.4,4.3.4,6.4.7a13.58,13.58,0,0,1,5.2,1.9,35.87,35.87,0,0,1,7.6,6.4,30.77,30.77,0,0,1,5.9,7.9,6.36,6.36,0,0,1,.6,1.8,12.21,12.21,0,0,1-.1,2.7,6.15,6.15,0,0,0,0,2.7,5.78,5.78,0,0,0,1.8,2.3c.7.7,1.4,1.3,2.1,1.9a26.22,26.22,0,0,1,2.2,2.5c1.6,1.9,3.1,3.9,4.5,5.9s2.9,3.9,4.3,5.8a30.09,30.09,0,0,1,3.1,5.9c.8,2.1,1.5,4.2,2.4,6.2s1.7,3.8,3.5,4.9c1.5.9,3.2,1.4,4.4,2.7a4,4,0,0,1,1.2,3.6,22.19,22.19,0,0,0,.2,9.6c1,3.3,3.8,4.8,7.1,5.4.5.1.4.6.1.9a.37.37,0,0,1,.1.3c-.1,4.4-.5,9.3,1.6,13.3h4.9l1.7-1.9h1.9v-1.9l1.9-1.7v-3.8h1.9l1.7-1.9,1.9-1.7h3.8v-1.9Z"
        />
      </svg>
    </div>
  )
}

export default Carrero