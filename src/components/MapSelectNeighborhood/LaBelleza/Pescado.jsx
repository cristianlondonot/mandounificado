import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Pescado = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 144.57 224.29"
      >
        <path
          fill={getColorByCarencias('PESCADO', municipio.toUpperCase())}
          className="cls-1"
          d="M4.63,108.12c2,2,9-5,11-1,2,3,2,4,6,6,5,2,7-2,8-6,0,1-1,3,1,3,2.84.95,4.78-1.69,7.53-2-.16-.34-.33-.68-.53-1a1,1,0,0,1,1,1c-.16,0-.32,0-.47,0,3.16,6.47.47,11.32.47,18-1,2,5,3,5,6,0,2-4,3-4,5,1,2,4,3,4,4-1,14-1,30,9,39s24,14,38,9c2,7,7,18,17,16,0,3,3,5,4,7,7,6,17,6,23,12a1.29,1.29,0,0,0,.16.17l2-2,2-2,2-2v-3.78l1.78-2,2-3.78V194.91l-2-1.79v-4l-1.78-2v-1.78l-2-2-2-2h-2v-3.79H133l-2-2v-2h2V152.14l-2-2v-4l-2-2h-2v-1.78l-1.78-2h-7.8l-2-2-1.78-2h-4v-1.78l-2-2v-5.8l2-2v-4l-2-3.79v-2h-1.78l-2-2h-2v-1.78H96l-2-2v-7.8H92v-2H88.21V82h-2V80h2v-7.8h-2l-2-2,2-2V64.37h-2v-2l2-2h2v-2l2-2v-2l-2-3.79v-2h-2l2-2V44.77h-2l-2-2-1.78-2-2,2h-7.8v-2l-2-1.78V27.18l2-2V21.38l2-4v-2l1.78-1.78v-2H72.62l-2,2-2,1.78-3.78,2-4-2H57l-4-1.78H49.23l-2-2v2l-2,1.78H41.44V9.58l-3.79-2h-2l-2-1.78-2-2-1.79-2L27.85,0h-4L20.05,1.78l-2,2H16L12.26,7.57l-2,2v11.8l2,3.79L14,31l2,4,2,4,3.78,5.79,2,7.8v5.79l2,4,2,2v3.79l-2,4-2,3.79-5.79,4-4,2-3.79,3.79-4,2L2.46,89.55H2.15C-1.29,96.09-.7,103.68,4.63,108.12Z"
        />
      </svg>
    </div>
  )
}

export default Pescado