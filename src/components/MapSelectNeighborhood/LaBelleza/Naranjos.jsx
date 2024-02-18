import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Naranjos = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 130.08 88.04"
      >
        <path
          fill={getColorByCarencias('NARANJOS', municipio.toUpperCase())}
          className="cls-1"
          d="M122.23,84.25h4.1c0-.09,0-.17,0-.26a3.15,3.15,0,0,0-2.36-2.08.5.5,0,0,1-.35-.61c.86-3,3.79-4.84,6.51-6a8.54,8.54,0,0,0-.82-1.92c-.83-1.42-1.94-2.63-2.44-4.22-.6-1.88-.77-3.88-1.43-5.74-1.33-3.79-2.78-7.55-4.28-11.27-.72-1.8-1.43-3.59-2.3-5.31-.78-1.56-1.65-3.08-2.55-4.57-1.82-3-3.76-6-5.33-9.2-.78-1.6-1.38-3.24-2-4.9a9.32,9.32,0,0,0-2.62-3.64c-1.07-.93-2.25-1.73-3.29-2.7a14.62,14.62,0,0,1-3-3.88,26.24,26.24,0,0,0-2.78-4.75,10.94,10.94,0,0,0-4-2.8A23.5,23.5,0,0,1,88.9,8.21a49.67,49.67,0,0,1-4.05-3.49,21.76,21.76,0,0,0-4.33-3.16A8.44,8.44,0,0,0,76.38.67C75,.7,73.61.93,72.22,1A14.26,14.26,0,0,1,67.49.47.47.47,0,0,1,67.15,0a10.46,10.46,0,0,1-.36,1.17,6.88,6.88,0,0,1-2.5,3.07,23.18,23.18,0,0,0-3.45,2.45C59,8.57,59.07,11.35,58,13.63a4.07,4.07,0,0,1-2,2.16,4.76,4.76,0,0,1-2.94,0A3.23,3.23,0,0,0,50,17.06c-.53.69-.87,1.52-1.33,2.26-1,1.61-2.49,2.47-4.27,1.37-1.33-.81-1.44-2.37-1.64-3.8-.11-.76-.19-1.53-.26-2.3a8.25,8.25,0,0,1-1.2-.28A7.57,7.57,0,0,0,39.41,14c-.15,0-.57,0-.67.08s0,.65,0,.82a7,7,0,0,1,0,1.37c-.07.71-.22,1.73-.91,2.13a5.17,5.17,0,0,1-1.61.31A4,4,0,0,0,34,20.09a6.07,6.07,0,0,1-1.85,1.72,3,3,0,0,1-2.22,0c-1.72-.58-3.05-2-4.42-3.12-1.13-.94-2.77-2.21-4.34-1.5-1.23.55-1.56,2.25-1.89,3.41a8.25,8.25,0,0,1-2,4A6,6,0,0,1,14.6,26a10.68,10.68,0,0,0-3.09,1c-1.66,1.06-2.15,3.34-3.2,4.9a.41.41,0,0,1-.19.16c1.2,1.2.62,3,0,4.48a11.26,11.26,0,0,1-2.26,3.68c-1.13,1.2-2.51,2.33-3.14,3.9s-.23,3-.2,4.46a5.37,5.37,0,0,1-1.1,3.47,3.35,3.35,0,0,1,1.82,3.84A20.29,20.29,0,0,1,1,61.23a20,20,0,0,0-1,2.14l1.27,1.28v3.79l2,2h2v2l1.79,2,2,2,2,1.79h2l3.79,2h5.79l4,2h5.79l2-2,3.79-2V74.45l-1.78-2v-2h5.79l2,2H61.64l4-2,2-2h1.79l2-1.79h2l2-2h1.78v-2l2,2h2l2,2v1.79l1.78,2,2,2h2l2,2v2h1.78v1.79H91v2h3.79l2-2v2h2v-2h3.78l2,2v-2h2l1.79,2h2v2l2,3.78h1.78v2h2l2-2h4Z"
        />
      </svg>
    </div>
  )
}

export default Naranjos