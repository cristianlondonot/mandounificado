import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SanJose = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 149.95 344.21"
      >
        <path
          fill={getColorByCarencias('SAN JOSE', municipio.toUpperCase())}
          className="cls-1"
          d="M5.9,229.3v6.2H2.8l-2,2c3.1,2.5,6,5.1,9.5,7,1.8,1,3.6,1.9,5.4,3a10.41,10.41,0,0,1,3.6,3.3c1.6,2.9,1.8,6.4,1.8,9.6a95.51,95.51,0,0,1-1,12c-.5,3.9-1.1,7.9-1.8,11.8a64.17,64.17,0,0,0-1.4,8.6,23.47,23.47,0,0,0,.8,8.3,9.62,9.62,0,0,0,2.4,4.7,31.78,31.78,0,0,0,3.5,2.6c2.7,2,5.9,5.2,4.2,8.7-.8,1.8-2.2,3.3-3,5.1a12.91,12.91,0,0,0-1.3,6.1c.3,4.4,3.7,7.6,7.2,9.9a57,57,0,0,0,6.8,3.9,22.33,22.33,0,0,0,7.1,2.1,5.2,5.2,0,0,0,3.8-1.3c1.6-1.3,3.2-2.6,4.7-3.9,3.4-2.8,6.8-5.6,9.9-8.7a99.17,99.17,0,0,0,8.9-11.6c2.8-3.9,6.1-7.9,10.3-10.2,2-1.1,4.1-1.9,6.1-3a20.25,20.25,0,0,0,5.2-4.4c2.6-2.9,5-6.1,7.9-8.8a23.55,23.55,0,0,1,10.9-5.5c3.6-.8,7.3-2,10.1-4.7s3.7-6.5,3.5-10.4a.6.6,0,0,1,.3-.6v-.2c0-.1,0-.1.1-.2a.54.54,0,0,1,.4-.3h0c-2.2-3.1-2.6-7.8-2.9-11.4-.3-4.5-.1-9.1-.1-13.6a47,47,0,0,0-1.2-9.9c-.8-3.4-1.4-6.9-2.3-10.3a14.87,14.87,0,0,0-4-6.7,38,38,0,0,1-4.6-5.2,9.68,9.68,0,0,1-1.4-3.3,4.59,4.59,0,0,0-1.3-2.7c-2.1-2-5.2-2-7-4.4a.65.65,0,0,1,.4-1c2.5-.6,3.8-2.1,4.8-4.4,1.7-3.9,3.6-7.8,5.5-11.6.6-1.2,1.3-3.1,2.6-3.9,1.5-.9,3.3-.2,4.8.4.9.3,1.5.4,2-.6a5,5,0,0,0,.4-4.6c-.6-1.5-1.4-2.9-2.1-4.4a13.5,13.5,0,0,0-1.9-3.3,15.7,15.7,0,0,0-4.5-3.1,14,14,0,0,1-4.8-3.9c-2.5-3.5-2.4-8.3-1.9-12.4.6-4.8,2-9.4,3.2-14.1,1.5-6,1.2-12.2.8-18.3a32.23,32.23,0,0,1-.2-7.6c.3-2,1.4-3.7,2.4-5.5a19.92,19.92,0,0,0,2.9-9.2c.2-3.1,0-6.2.1-9.3a26.83,26.83,0,0,1,1.5-8.9,9.18,9.18,0,0,1,2.8-4.2c2.3-1.5,5.2-.3,7.4.9,3.2,1.8,6.1,4.2,9.2,6.3,2.5,1.7,5.6,4,8.8,3.8a4.06,4.06,0,0,0,3.6-2.4c.6-1.5,0-3.3-.6-4.7-1.5-3.7-4.1-6.9-6.5-10a20.65,20.65,0,0,1-2.5-4c-1.3-3.2-1.5-6.7-3-9.8-2.3-5.1-7.9-7.3-10.4-12.1a16.71,16.71,0,0,1-1.1-4.4,5.1,5.1,0,0,0-2.3-3.7,7.18,7.18,0,0,1-2.4-2.5,12,12,0,0,1-1.3-3.3c-.7-2.7-.7-5.6-1-8.4a34.45,34.45,0,0,0-1.8-7.7c-1.5-4.3-3.8-8.3-7.3-11l-.9.9h-2.8V4h-3.1V6.8H99.6L96.8,9.9V13H93.7v6.2L90.6,22v3.1H84.7V22H78.5l-3.1,3.1V46.3l-2.8,6.2v5.9l2.8,3.1v3.1l-2.8,2.8v9.4l-3.1,2.8v3.5l-3.1,2.8L63.3,89H57.4v3.1H54.3l-3.1,3.1v3.1l-3.1,2.8v6.2l-2.8,2.8-3.1,3.1H39.1l-2.8,3.1v9H33.2v15.3H30.1L27,143.7v2.8l3.1,3.1v3.1H27v3.1H24.2v2.8l-3.1,3.1H18l-3.1,3.1-2.8,3.1v2.8L9,173.8H5.9V180L9,182.8l3.1,3.1v9H9V198H2.8L0,201.1v3.1H2.8L5.9,207l-3.1,3.1v3.1H0v12.1l2.8,3.1H5.9Z"
        />
      </svg>
    </div>
  )
}

export default SanJose