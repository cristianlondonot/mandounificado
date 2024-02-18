import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaGuayana = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 146.72 167.61"
      >
        <path
          fill={getColorByCarencias('LA GUAYANA', municipio.toUpperCase())}
          className="cls-1"
          d="M120.7,115v1.8l1.6,1.8v1.8l1.8,3.3v1.8h1.8l1.8,1.8v12l1.6,1.8h1.8V148l1.8,1.6v1.8l-.8,1.5a35.29,35.29,0,0,1,3.2,2.1,30.92,30.92,0,0,1,6,6.5,34.14,34.14,0,0,0,5.3,6.1,15.31,15.31,0,0,0,.1-3,36.57,36.57,0,0,0-.5-5.7c-.4-3.1-.6-6.3-1.3-9.4-1-4.5-2.6-9-2.6-13.7a22.17,22.17,0,0,1,1.3-6.8,55.82,55.82,0,0,0,2.3-6.9,33.76,33.76,0,0,0,.4-7.8c0-2.2-.1-4.4-.2-6.5-.1-.1-.2-.2-.2-.3-1-2.4-.3-5-.1-7.5.1-2,.2-4.4-.8-6.2s-3-2.2-4.8-1.2a39.19,39.19,0,0,0-5.2,3.9c-1.4,1.1-3.3,2.3-5.2,1.9-3.6-.9-3.7-6-3.5-9,.1-2,.3-3.9.5-5.9a38.66,38.66,0,0,0-.2-6.8,23.83,23.83,0,0,1,.8-9.2,65.38,65.38,0,0,1,3.9-9.5,62.85,62.85,0,0,1,4.8-7.8,22.13,22.13,0,0,0,3.8-6.9c1.4-5.7-3.2-9.9-4.5-15-.7-2.6-.3-5.3-.8-7.9a12.25,12.25,0,0,0-3-5.6,57.68,57.68,0,0,0-6.9-6.2,81.89,81.89,0,0,0-8.3-5.8c-2.5-1.6-5-2.9-8-2.8a7.85,7.85,0,0,0-6.7,3.8c-1.3,2.2-1.9,4.8-2.9,7.2-.4,1-.9,1.9-1.2,2.8a24.69,24.69,0,0,0-1,2.9c-.7,1.9-1.6,4.1-3.3,5.2s-3.7.6-5.3-.4c-3.9-2.4-6.2-7-10.5-8.8a14.3,14.3,0,0,0-4.5-1.2c-1.3-.1-2.6.6-3.9.8a7.22,7.22,0,0,1-3.5-.6,32,32,0,0,1-3.9-1.6c-2.3-1-4.6-2.5-7.1-2.7a11.21,11.21,0,0,0-7,2.2,28,28,0,0,0-5.8,5.6A36.79,36.79,0,0,0,37.9,21c-1.9,3.5-3,7.5-4.7,11.1a23.27,23.27,0,0,1-3,5.3,7.31,7.31,0,0,1-3.6,2.9c-1.9.5-4.2-.2-5.9-1a23.67,23.67,0,0,1-5.6-3.7c-2.5-2-5.1-4.4-8.1-5.8v1.1H3.6v1.8H1.8v6.9H3.6v3.3l-1.8,1.8v1.8L0,48.31v6.9l1.8,1.6v1.8H3.6v6.9H5.2L7,67.31H8.8l1.8,1.8h1.6l3.5,1.6,3.3,3.5h1.8L22.6,76h1.8l1.6,1.6v1.8l1.8,1.8h1.8l5.1,5.1h3.5l1.6,1.8H52l3.3,1.8,3.5,3.3h1.6L62.2,95H64l1.8,1.8h5.1V95h1.8v-1.8h1.6v-1.8h3.5v1.8L79.6,95h1.6v1.8h3.5l1.8,1.6h1.6v1.8h1.8V102h8.7l1.6,1.8H102l1.8,1.6v2l1.8,1.6h3.3l1.8,1.8h1.8l3.3,1.8h1.8l1.8,1.8Z"
        />
      </svg>
    </div>
  )
}

export default LaGuayana