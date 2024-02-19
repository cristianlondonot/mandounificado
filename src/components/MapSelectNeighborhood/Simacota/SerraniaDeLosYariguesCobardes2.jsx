import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SerraniaDeLosYariguesCobardes2 = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95.72 139.8">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('SERRANIA DE LOS YARIGUES COBARDES', municipio.toUpperCase())}
              className="cls-1"
              d="M92.6,96.3A10.32,10.32,0,0,0,90,91.9c-2.5-2.5-5.7-4-8.6-5.8a9.25,9.25,0,0,1-3.5-3.3,6.52,6.52,0,0,1-.2-5.3A16.07,16.07,0,0,1,84.8,69a15.5,15.5,0,0,0,.1-4.3,36.7,36.7,0,0,0-2-7.2A25.63,25.63,0,0,1,81.7,48a39.34,39.34,0,0,1,.6-4.8,17.35,17.35,0,0,1,1.4-3.8c.6-1.2,1.4-2.3,2-3.5a19.79,19.79,0,0,0,1.5-4.7c.7-3.3,1-6.6,2-9.8A21.28,21.28,0,0,1,91,17.3c.7-1.1,1.5-2.2,2.2-3.4,1.5-2.2,2.7-4.6,2.5-7.4a5.67,5.67,0,0,0-2.1-4C90.8.2,86.6,0,83.2,0a51,51,0,0,0-11,1.4C59.9,4.3,48.7,10.3,36.6,13.9c-3.2,1-6.4,1.6-9.6,2.3a56.25,56.25,0,0,0-9,3.1,49.86,49.86,0,0,1-9.3,2.8c-2.9.5-5.8.7-8.7,1.2.3,0,.5.1.5.5a43.49,43.49,0,0,0,.2,5.1A27.19,27.19,0,0,0,3.5,39a46.17,46.17,0,0,0,2.8,4.8A31.65,31.65,0,0,1,9,48.5c.7,1.7,1,3.6,1.7,5.3a29.18,29.18,0,0,0,2.5,5A63.48,63.48,0,0,1,17.4,68a30.16,30.16,0,0,1,1.4,8.4c.1,2.5.1,5.3,1.1,7.6a5.28,5.28,0,0,0,2.4,2.5,27.54,27.54,0,0,0,3.8,2c2.4,1.2,4.8,2.3,6.7,4.2a11.65,11.65,0,0,1,2.4,3.4c.6,1.4,1,2.8,1.5,4.2a15.52,15.52,0,0,0,3.7,6c2.1,2,4.9,3.1,7.6,4.2,3.4,1.5,6.8,2.8,10.1,4.4a51,51,0,0,1,9.1,5.2,9.64,9.64,0,0,1,3.8,7.3c0,.7-.1,1.5-.9,1.8s-1.3.3-1.9,1c-1.1,1.5-.2,3.1.9,4.3a19.81,19.81,0,0,0,5.3,3.8,11.72,11.72,0,0,0,4.8,1.5,5.09,5.09,0,0,0,3.2-1,7,7,0,0,0,1.7-2.5l1.2-3a22.11,22.11,0,0,1,.5-2.5,46.67,46.67,0,0,1,3.1-8.1,43.88,43.88,0,0,0,3-9.3c1-5.7,1-11.4,1.6-17.1C93,96.7,92.7,96.6,92.6,96.3Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default SerraniaDeLosYariguesCobardes2