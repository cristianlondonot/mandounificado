import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ElMoral = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 468.4 311.62"
      >
        <path
          fill={getColorByCarencias('EL MORAL', municipio.toUpperCase())}
          className="cls-1"
          d="M466.1,78.52a41.86,41.86,0,0,0-11.7-8.8c-2.6-1.2-5.5-2.1-8.2-3.3q-4.5-2-8.7-4.2c-5.8-3-11.5-6.3-17.3-9.4A105.51,105.51,0,0,0,401.5,45c-6.4-2-12.8-3.5-19.4-5-5.1-1.1-10.3-2.3-14.8-5.2a27.72,27.72,0,0,1-9.6-11.6,17.63,17.63,0,0,1-1.4-7.1c0-2.4.6-4.8.8-7.2.2-2.1.4-5.1-1.6-6.4-1.5-1.1-3.8-1.2-5.6-1.3-4.3-.2-8.6.5-13,.2-7.1-.4-14.2-.7-21.2-.8-6.8-.2-13.7-.1-20.5-.2C283.3.12,270.1-1.38,259,4c-4.3,2.1-6.8,6.4-8.5,10.7-1.8,4.5-3,9.2-5.1,13.6a16.82,16.82,0,0,1-9.7,8.8c-3.9,1.3-8.2,1.3-12.3,1V49l-4.9,5.5-10.7,10.2h-5.5l-4.9,5.5-5.5,5.5H181l-10.3,5.5H159.8l-5.5,4.9h-4.9l-5.5,5.5H117.4l-10.3,5.5H85.9L75,102.62H48.9v-5.5H43.4v15.8l-5.5,5.5v15.8H33v10.5L27.5,155H22v5.5H17.4V166l-5.5,4.9,5.5,10.8V192h4.9v5.5L17.4,203H6.5v-5.5H1V203H0a21.3,21.3,0,0,1,.3,2.5,37.51,37.51,0,0,0,.9,7.5c1.4,4.7,6,8.3,9.7,11.2s7.4,5.3,11,8,6.7,5.8,10.3,8.3A72.47,72.47,0,0,0,56,251.42c16.7,4.5,34.3,5.2,50.8,10.5,2.3-3,2.3-6.8-1.3-9a1,1,0,0,1-.2-1.7,9.62,9.62,0,0,1,8.7-4c3.7.4,7.3,1.7,11,2.2,9.5,1,19.1.7,28.4,3.3a161.29,161.29,0,0,0,19.3,4c6.8,1.1,13.6,2.1,20.2,4.1a43.78,43.78,0,0,1,16.8,8.8c4.7,4.2,5.7,10.6,5,16.6a33.06,33.06,0,0,0-.6,5.4,2.71,2.71,0,0,0,1.7,2.6,27.17,27.17,0,0,0,7.9,2.1,84.21,84.21,0,0,0,11.2.7,63.21,63.21,0,0,1,10.6.9,16,16,0,0,1,4.8,1.6,37.57,37.57,0,0,1,4.7,3c4.5,3.2,9.2,6.2,13.9,9.1l2.5-2.5v-4.9l5.5-5.5,4.9-5.5h5.5l10.9-10.3h4.9l5.5-5.5v-5.5l5.5-5.5v-4.9h5.5v-10.9h4.9v-5.5H330v-4.9l5.5-5.5v-5.5l10.3-5.5,5.5-4.9v-5.5l10.9-5.5v-5.5h4.9v-5.5l5.5-5.5v-26.1l10.9-10.9,10.3-5.5,5.5-4.9,5.5-5.5v-5.5l4.9-5.5,10.9-10.3,10.3-10.9,5.5-4.9,10.9-5.5v-5.5l4.9-5.5h5.5v-4.9h10.7C467.7,80.22,466.9,79.32,466.1,78.52Z"
        />
      </svg>
    </div>
  )
}

export default ElMoral