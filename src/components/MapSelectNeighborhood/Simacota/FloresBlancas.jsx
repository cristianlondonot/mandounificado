import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const FloresBlancas =  ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        id="uuid-51e2e139-910b-4fa6-be24-0f1dda1f81c8"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 42.35 29.78"
      >
        <path
          fill={getColorByCarencias('FLORES BLANCAS', municipio.toUpperCase())}
          className="uuid-6363217f-d176-42be-9375-1c1c6e434aa5"
          d="M38.54.9c5.7,7.6,5.1,9.8-2.5,14.7-3,1.9-5.7,4.8-7.7,7.9-3.8,5.9-6.1,7.1-13.1,5.8-3.1-.6-6.2-.9-9.3-1.2-5.7-.6-7.3-3.2-4.8-8.3,2.5-5.2,5.2-10.3,8.2-15.3C12.54-.9,14.34-1.2,19.94,2.3c7,4.3,13,3.8,18.6-1.4Z"
        />
      </svg>
    </div>
  )
}

export default FloresBlancas