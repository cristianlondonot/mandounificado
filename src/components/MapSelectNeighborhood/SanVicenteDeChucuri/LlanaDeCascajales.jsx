import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LlanaDeCascajales = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 238.7 233.96"
      >
        <path
          fill={getColorByCarencias('LLANA DE CASCAJALES', municipio.toUpperCase())}
          className="cls-1"
          d="M225.4,136.06a62.24,62.24,0,0,0-8.4-2.5c-6.6-1.3-13.3.9-19.7,1.9a34,34,0,0,1-9,.3,21.07,21.07,0,0,1-8.6-3.6c-6.2-4.1-11.7-9.2-17.1-14.2s-10.7-9.6-16.4-13.9a23.08,23.08,0,0,0-9.1-4.6c-3.6-.8-7.3-.2-10.9.2a57,57,0,0,1-10.1.5c-1.6-.1-3.5-.2-4.7-1.2a4.7,4.7,0,0,1-1.4-3,34.88,34.88,0,0,0-1.2-5.4,6.74,6.74,0,0,0-2.6-3.8,21.84,21.84,0,0,1-3.1-2.2c-2.2-2.3-2.1-5.2-2.5-8.1-.6-4.3.8-8.7,1.2-12.9s.3-9.4-4-11.6c-3.9-1.9-8.2.1-11.9,1.5a63.16,63.16,0,0,1-6.1,2.2,9.48,9.48,0,0,1-5,.3c-4-1.1-4.3-7-3.1-10.2,1-2.6,2.7-4.8,4-7.3,1.1-2,1.5-5.1-1.2-5.9-2.1-.7-4.5-.2-6.7-.4-3-.3-5.7-2.4-8.2-4-1.5-1-3-2-4.6-2.9s-3.3-1.6-4.8-2.6c-3.3-2-6.2-4.4-9.6-6.2-2.2-1.2-4.6-1.9-6.7-3.3a10.94,10.94,0,0,1-3.8-5.4,14.1,14.1,0,0,1-.7-4.1c-.1-1.2-.2-3.2-1.6-3.5-2.3-.5-4.9.3-7.2.3-.1,0-.2,0-.2-.1h-.9v5.5l1.3,1.2-1.3,1.3v1.3L18.2,11H17V9.66L14.3,7H12.6v2.7L13.9,11v3.9l1.3,1.3v1.2l-1.3,1.3L12.6,20l-1.2,1.3-1.3,1.2,1.3,1.3h1.2l2.7,1.3h1.3v2.5l-1.3,1.3,1.3,1.3v2.5h2.5v5.2l-1.3,2.7-1.2,1.2v1.3l-1.3,1.3H14v-9H12.6l-1.2,1.2v1.3l-1.3,1.3v1.3l-1.3,1.2V43l-1.3,1.3v1.3l-1.2,1.3v1.3H5l-1.3,1.3H2.4v1.2H1.2L0,52v1.3H1.2v1.3l1.2,1.2h4V61H7.6v3.9l-1.2-1.2H3.6v2.5l1.3,1.3H6.2v1.3H7.4v3.9L8.7,74v2.5h2.7l1.2-1.3h1.3v-2.5l1.3-1.3H13.9v-2.5h1.3l1.3,1.2H19v-1.2l1.3-1.3h1.3l1.2,1.3,1.3,1.2h1.3l1.3,1.3v1.3L27.9,74h1.3l1.3-1.3h1.3v-3.9h2.5v3.9h5.2V74h1.3v3.9H39.5v1.3h-.9v2.5L39.9,83h2.7l1.2,1.3,1.3,1.3h1.3v1.2H43.7l-1.2-1.2-1.3-1.3H38.6v1.3l1.3,1.2v1.3l1.3,1.3,1.3,1.2h1.2l1.3,1.3,1.3,1.3h1.3v1.3H46.3v1.2H43.6L42.4,97l-1.3,1.3v1.3H39.8v1.2H35.9v4l1.3,1.3h1.4v1.3l1.3,1.3h6.5l1.3,1.2h1.2l1.3,1.3,1.4,2.4h2.5l1.3,1.3h1.3v1.2l1.3,1.3,1.2,1.3v-1.3h4l1.2,1.3,1.3,1.3-1.3,1.2v1.3l1.3,2.5H67l2.5,1.3,2.7,1.3,1.3,1.3,2.5,1.2,1.6,1.5,1.3,1.3v2.7l-1.3,1.2v1.3H73.7l-1.3-1.3-1.3-1.2H68.6l-1.3,1.2v3.9h1.3l1.2,1.3,1.3,1.3h5.2L79,142h5.2l1.2,1.3,1.3,1.3v5.2L85.4,151H80.2l-1.2,1.3H77.6v3.9l1.3,1.3v1.3l1.2,1.3,1.3,2.5,1.3,1.3,1.3,1.3,1.2,1.3,1.3,1.3V169l1.3,1.3-1.3,1.3H80v1.3l-1.2,1.2v4l1.2,1.2,2.7,1.3h3.9l1.3,1.3h1.3v-1.3h6.4l1.3,1.3h1.3l1.3,1.3h5.2l1.2-1.3h2.7l1.2,1.3v3.9l1.3,1.3h1.3l2.7,1.2h5.2v-3.9l1.2-1.3h1.3v6.5h1.3v3.9l-1.3,1.3v5.2h2.7v1.3l1.2,1.3v1.2h2.7v-2.5h1.3l1.2,1.3v1.2h1.3v1.3h3.9v-.8l1.3-1.2,1.3-1.3h1.2v6.5h4v1.2l-1.3,1.3h-1.3v1.3H141v6.5l1.3,1.2v1.3h1.3v1.3l1.3-1.3,1.2-1.3,1.3-1.2,1.3-1.3,1.3-1.3v-3.9h5.2v1.3l-1.3,1.2v4l1.3,1.2v1.3l1.2,1.3h1.3l2.7,1.3h6.4l1.3-1.3v-1.3h2.7l1.2,1.3h1.3l1.3,1.3h2.5l1.3,1.3h1.3V221l1.3-1.2h1.2v3.9h1.3V225h2.7l1.2-1.3,1.3-1.3v-2.5l1.3-1.3v-1.3h1.3v1.3h1.2v1.3l1.3,1.2v1.3l1.3,1.3h1.3V225h1.2v1.3l-1.2,1.3h-1.3l-1.3,1.2h-1.3v1.3h-1.2l-1.3,1.3,1.3,1.3h1.2l1.3,1.2h3.9l2.7-1.2v-1.3l1.3-1.3h2.5V234h2.7l-1.3-1.2v-2.7h1.3v1.3h2.5v-2.7h1.2V230h1.3v-2.5h2.5v-1.3l1.3-1.3H217v1.3l1.3,1.3v-1.3h1.2v-1.3h1.3v-1.3l-1.3-1.3h5.3V221h-2.7v-1.2h1.3v-1.3l1.3-1.3,1.2,1.3v1.3l1.3-1.3,1.3-1.3v-1.3H231v-1.2h-1.2V212h-1.3v1.3h-1.3v-2.7h1.3v-1.2h1.3v-2.7h3.9v-2.5h-1.3v-1.3h1.3l1.3-1.3v-1.3h1.2v-6.4h1.3v-1.3l-1.3-1.3V190H235v-2.5h-1.3l-1.3-1.3-1.3-1.3-1.2-1.2v-7.9h2.5v-1.3l1.3-1.2H235V172l1.2-1.3v-27.3h1.3l1.2-1.2a51.22,51.22,0,0,0-5.2-2.7A43.86,43.86,0,0,0,225.4,136.06Z"
        />
      </svg>
    </div>
  )
}

export default LlanaDeCascajales