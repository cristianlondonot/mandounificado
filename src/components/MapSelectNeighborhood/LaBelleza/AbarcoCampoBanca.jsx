import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const AbarcoCampoBanca = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 241.48 239.06"
      >
        <path
          fill={getColorByCarencias('ABARCO CAMPO BANCA', municipio.toUpperCase())}
          className="cls-1"
          d="M241.32,136.36c-6-6-16-6-23-12-1-2-4-4-4-7-10,2-15-9-17-16-14,5-28,0-38-9s-10-25-9-39c0-1-3-2-4-4,0-2,4-3,4-5,0-3-6-4-5-6,0-6.65,2.7-11.5-.47-18-2.74.28-4.69,2.92-7.53,2-2,0-1-2-1-3-1,4-3,8-8,6-4-2-4-3-6-6-2-4-9,3-11,1-5.33-4.44-5.92-12-2.48-18.58h-7.49L95.56,0H89.77l-2,3.79v2l2,2v7.79l-2,3.79-2,2H82l-4-2-3.78-2h-4l-2,2-3.79,2-2,2-2,1.78-3.79,6-2,5.8-2,5.79-3.79,4-4,1.78H41l-2,2H37l-1.79,2-2,2h-2v9.8l2,5.8v4l-2,5.79-2,5.79-1.78,4-4,5.79H17.6l-4,2H4l-4,3.79v11.81l2,3.78,2,4v1.78L3,125.91c8.15-3.67,14.87-9.19,23.37-4.55,1,0,4,3,5,3,22,9,45,11,68,9,3-1,7,2,8,7,0,2,4,1,5,3,2,12,6,22,7,34,3,0,6,0,8,3,2,4,3,8,6,10,7,6,12,13,19,17,3,2,7,5,8,7,6,10.64,15.5,20.82,26.79,24.7v-9h2v-4h1.79l4-1.78,2-2,3.79-2,2-1.78,2-2v-2l1.78-2v-5.79l2-5.79,2-4,2-3.79,3.79-5.79,4-6,1.78-3.79v-2l2-2v-5.79l1.78-2-1.78-5.8,1.78-5.79,2-4,2-4,3.78-3.78,4-2v-2l2-1.78h1.78l0,0Z"
        />
      </svg>
    </div>
  )
}

export default AbarcoCampoBanca