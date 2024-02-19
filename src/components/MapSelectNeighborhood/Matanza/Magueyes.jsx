import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Magueyes = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 60.5 56.4"
      >
        <path
          fill={getColorByCarencias('MAGUEYES', municipio.toUpperCase())}
          className="cls-1"
          d="M59.2,49.8c.4-.2,1.3-.6,1.3-1.1s-.5-.9-.8-1.2a18.72,18.72,0,0,0-2.9-2c-1.2-.7-2.4-1.3-3.6-1.9-3.2-1.5-6.4-2.8-9.5-4.5A21,21,0,0,1,39.6,36c-1.3-1.2-2.5-2.4-3.9-3.5a7.94,7.94,0,0,1-2.6-3.9,24.3,24.3,0,0,1-.8-4.7c-.3-1.6-.3-3.4-1.1-4.8-.8-1.2-2.2-2-3.2-3.1a19.39,19.39,0,0,1-2.7-4.3,11.72,11.72,0,0,1-.9-2.4,15.17,15.17,0,0,1-.3-2.1c-.2-1.4-.6-3.1-2.3-3.3a24.73,24.73,0,0,0-3.8.5,4.14,4.14,0,0,1-3.3-1.2c-.9-.8-1.4-1.9-2.4-2.5h0A3.29,3.29,0,0,1,11,0V.5L9.4,2.1V3.7L7.8,5.1V8.3L6.2,11.4v4.9H4.8v1.4L1.6,20.9V24H0v4.9l1.6,1.4v1.6H3.2v1.6H6.3l1.6,1.6H9.5l1.6,1.4h1.4v1.6h1.6v1.6h1.6v1.6h1.6v1.4h1.4l1.6,1.6h1.6v1.6H25v1.6h3.2l1.6,1.4h1.4v1.6h4.9v1.6h4.7v1.6h1.4v1.4h1.6L45,56.4c3.2-1.2,6.6-2.1,9.6-3.9A24.93,24.93,0,0,0,59.2,49.8Z"
        />
      </svg>
    </div>
  )
}

export default Magueyes