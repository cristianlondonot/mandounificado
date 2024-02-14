import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Tooltip } from 'react-tooltip'
import '../../../App.sass'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Paramo = ({departamento, municipio, filterMap}) => {
  const navigate = useNavigate();

  //esta función es la que asigna el color según la cantidad de carencias que tiene la vereda o el barrio
  const { getColorByCarencias } = UseCarenciasPorVereda( filterMap.toUpperCase() );


  //Esta función abre la vereda o barrio seleccionado. Toma los datos de data-name-url y los ingresa a navigate 
  const handleNeighborhoodClick = (event) => {
    const { dataset } = event.target;
    const nombreVeredaBarrioUrl = dataset.urlName;

    if (typeof municipio === 'function') {
      municipio({ nombre: nombreVeredaBarrioUrl });
    }

    if (nombreVeredaBarrioUrl) {
      navigate(`/departamento/${departamento}/municipio/${municipio}/vereda/${nombreVeredaBarrioUrl}`);
    } else {
      console.error('No se ha proporcionado el nombre de la ciudad.');
    }
    
  };
  return (
    <div className="w-full h-full">
      <Tooltip id="my-tooltip"  />
      <svg
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 1080 1757.6"
        style={{
          strokeWidth: '1px',
          stroke: '#fff',
          enableBackground: "new 0 0 1080 1757.6",
        }}
        xmlSpace="preserve"
      >
        <path
          fill={getColorByCarencias('LA LAGUNA')}
          data-tooltip-id="my-tooltip" 
          data-tooltip-content="La Laguna"
          onClick={handleNeighborhoodClick} 
          data-url-name="la-laguna"
          className="st0"
          d="M1006.2,211.7v-4.9h-4.9v-16.4l-5.5-21.2h-5.5V159l-5.5-5.5v-10.3l-4.9-16.4l-5.5-4.9v-5.5l-5.5-10.3l-5.5-10.9 V84.4h-4.9v-4.9l-5.5-5.5H948l-5.5-5.5v-5.5h-4.9v-4.9h-5.5v-5.5l-5.5-10.3h-10.3l-10.9,4.9l-15.8,5.5h-5.5l-5.5,5.5h-31.5l-5.5,4.9 h-10.3l-5.5,5.5l-10.9,5.5l-4.9,5.5h-10.9l-5.5,4.9H709l-10.3-4.9h-10.9l-4.9,4.9h-5.5v5.5l-5.5,5.5l-5.5,10.9v31.5l5.5,5.5v21.2 l5.5,15.8l-5.5,10.3l-5.5,16.4h-4.9l-5.5,10.3l-5.5,10.9l-5.5,4.9v5.5l-4.9,5.5v5.5l-5.5,5.5v5.5l-5.5,4.9l-5.5,5.5l-10.3,5.5 l-5.5,10.3h-4.9l-5.5,5.5v5.5l-5.5,5.5V313l-5.5,5.5v2.7c1.9,0.1,3.7,0.2,5.6,0.1c4.5-0.2,8.9-1.4,12-4.9c3.2-3.7,4.5-9,6.1-13.5 c1.5-4.4,3.3-9,6.6-12.4c3.8-3.9,9.6-5.5,14.8-6.4c6.1-1.1,12.4-1,18.6-0.9c6.3,0.2,12.7,0.3,19,0.3c7.2,0.1,14.4,0.3,21.6,0.5 c3.5,0.1,7,0.3,10.5,0.5c1.8,0.1,3.7-0.1,5.5-0.2c4-0.2,9.1-0.7,12.7,1.4c4.3,2.5,2.9,8.5,2.3,12.5c-0.4,2.5-0.4,5.2,0.3,7.7 c0.8,2.6,2.4,5.1,4,7.3c3,4,7.2,6.7,11.9,8.2c3,1,6.1,1.5,9.1,2.2c3.3,0.7,6.5,1.5,9.7,2.3c6.4,1.7,12.7,3.6,18.8,6.2 c12.2,5.2,23.1,12.9,35.3,18c2.7,1.1,5.4,2,8,3.3c2.1,1.1,4.1,2.4,6,3.8c3.4,2.6,6.4,5.8,9.1,9.1h1.5v-5.5h16.4l4.9-5.5h5.5l5.5-5.5 l5.5-4.9l4.9-5.5h16.4l15.8-10.9l5.5-4.9v-5.5l15.8-15.8v-5.5l5.5-10.9h15.8l15.8-4.9V276h5.5l5.5-5.5l4.9-5.5l5.5-10.3l5.5-16.4 l5.5-10.3v-5.5l4.9-5.5h5.5v-5.5H1006.2z"
        />
        <path
          fill={getColorByCarencias('LA PALMITA')}
          data-tooltip-id="my-tooltip" 
          data-tooltip-content="La Palmita"
          onClick={handleNeighborhoodClick} 
          data-url-name="la-palmita"
          className="st0"
          d="M211.2,599.8l4.9,5.5V621l5.5,5.5v10.3l5.5,5.5v5.5h5.5l4.9,10.3v5.5l10.9,10.9v4.9l-5.5,5.5l-10.3,5.5 l-5.8,2.9c0.2,0.1,0.3,0.2,0.5,0.3c6,3.8,12.2,7.3,17.8,11.6c2.5,1.9,4.8,3.9,6.8,6.3c1.9,2.1,2.7,4.5,3.2,7.2 c0.6,2.8,0.8,5.8,1.7,8.6c0.9,3,3.7,3.9,6.5,4.3c6,1,12.6,0.4,18.7-0.3c11.9-1.4,25.8-4.7,35.4,4.5c2.4,2.3,4,5.2,6,7.8 c2.4,3.1,5.7,4.8,9.1,6.4c6,2.9,11.5,6.7,16.9,10.7c4.9,3.7,9.8,8,12.7,13.5c2.8,5.2,2.7,10.4,1.8,16.1c-1,6.2-2.8,12.5-2.5,18.8 c0.1,2.5,0.7,4.8,2.5,6.6c1.7,1.7,4,2.8,6.3,3.6c10.4,3.8,21.7,3.4,32.2,0.7c6.2-1.6,12.7-3.7,19.2-3.4c5.9,0.3,10.8,3.1,14.4,7.7 c5.4,6.8,8.5,22.4,19.9,20.8c6.7-1,12.3-5.7,18.9-7.3c7.9-1.9,16.1-3.2,24.2-3.8c0.6,0,1.1,0.5,1.1,1.1c-0.2,3-0.3,6.4,1.3,9.1 c1.6,2.7,4.6,3.9,7.6,4.6c2.5-6.8,0.4-14.3,1.6-21.3c0.3-1.5,0.6-3.2,1.8-4.4c1-1,2.4-1.5,3.4-2.4c2.2-2,3.9-4.5,4.6-7.4 c0.6-2.6,0.6-5.3,1.1-7.9c0.9-4.7,3.5-8.6,7.8-10.8c2.1-1.1,4.2-2.1,6.2-3.5c2.2-1.5,4-3.4,6-5c4.5-3.4,10-4.1,15.5-4.5 c12.8-0.8,25.3,0.7,37.8,3c4.5,0.8,8.9,1.6,13.4,2.3v-1h-4.9v-5.5l-5.5-5.5v-21.2l5.5-4.9v-43.1l4.9-5.5v-15.8h5.5v-10.3l5.5-5.5 V621l4.9-21.2h5.5l1.4-1.4c-5.3-3.3-10.5-6.7-15.6-10.3c-6.5-4.6-15.5-3.4-23.1-3.8c-3.5-0.2-6.9-0.7-10.2-1.6 c-1.8-0.5-3.8-1-5.2-2.3c-2.4-2.3-1.1-6.1-0.8-8.9c0.3-2.9,0.4-5.8-0.4-8.6c-0.9-3.3-2.9-5.6-5.4-7.6c-5-4-11.3-6.3-17.4-7.9 c-6.5-1.7-13.2-2.6-19.9-3.7c-3.2-0.5-6.3-1-9.4-1.7c-3.4-0.7-6.7-1.8-10.1-2.6c-8.3-1.8-16.9-1.6-25.3-2.5 c-3.2-0.4-6.3-1.4-9.4-1.9c-3-0.6-5.4,0.2-7.4,2.3c1.6,1.3,2.8,3,2.9,5.2c0.2,2.6-1,5-2.7,6.9c-0.2,0.3-0.7,0.4-1.1,0.3 c-9.7-3.2-19.8-4.8-29.9-6.4c-8.7-1.4-17.4-2.8-25.8-5.5c-8.5-2.7-16.5-6.7-23.4-12.3c-3.5-2.9-6.9-5.8-10.6-8.5 c-3.7-2.6-7.4-5.2-10.8-8.2c-3.3-2.9-6.5-6.1-7.5-10.4c-0.8-3.3-0.6-6.7-1.2-10h-12.5v-5.5h-15.8l-5.5-5.5h-5.5l-4.9,5.5h-5.5 l-5.5,5.5v5.5l-5.5,5.5l-4.9,5.5v4.9h-16.4l-4.9,5.5h-10.9v5.5l-5.5,5.5v4.9l-4.9,5.5v5.5l-5.5,5.5v4.9l-5.5,5.5l-5.5,10.9l-4.9,4.9 l-5.5,10.9H216l-4.9,5.5h-5.5l5.5,4.9V599.8z"
        />
        <path
          fill={getColorByCarencias('LA LAJITA')}
          data-tooltip-id="my-tooltip" 
          data-tooltip-content="La Lajita"
          onClick={handleNeighborhoodClick} 
          data-url-name="la-lajita"
          className="st0"
          d="M88.7,992.8v5.5h5.5l5.5,5.5h5.5l4.9,5.5h5.5v5.5l5.5,4.9h10.9v5.5h11.6c0.2-0.3,0.4-0.7,0.7-1 c15.4-23.9,31.1-47.7,54.1-65.1c6.3-4.7,12.9-9.5,20.1-12.7c3.8-1.6,7.6-2.8,11.7-3.4c3.9-0.6,7.8-0.9,11.6-1.6 c7-1.3,12.7-5.3,19.1-8.1c6.7-2.9,13.7-4,20.8-5.6c8-1.9,16-4.1,23.7-7.1c7.6-2.9,15.4-5.4,23-8.1c15.5-5.5,31.1-10.9,47.2-14.7 c7.8-1.8,15.7-3.2,23.7-4.2c8.1-1,16.2-0.2,24.2-0.6c8.4-0.5,16.4-3.3,24.3-5.9c8.2-2.7,16.3-5.7,24.5-8.6c4.7-1.7,9.5-2.9,14.3-4.1 c4.6-1.2,9.6-2.6,13.1-5.9c3.9-3.8,3.9-8.9,2.1-13.8c-1.3-3.6-3.1-7.2-5.4-10.4c-0.3-0.1-0.5-0.2-0.6-0.5c-0.2-0.4-0.5-0.9-0.7-1.3 c-0.9-1.1-1.8-2.2-2.8-3.2c-0.2-0.2-0.3-0.5-0.3-0.8c-0.4-0.3-0.5-0.8-0.2-1.3c-1.6,0.2-3.3,0.4-4.9,0.7c-4.2,0.7-8.4,1.6-12.5,2.6 c-3.3,0.8-6.2,2.5-9.3,4c-5,2.4-10.7,4.6-16,1.8c-4.3-2.3-6.8-6.9-8.9-11c-2.5-4.9-5-10.1-9.6-13.3c-5.6-4-12.8-3.1-19.1-1.7 c-6.1,1.4-12.2,3.4-18.5,4.1c-4.9,0.5-10,0.1-14.9-0.7c-4.9-0.8-10.2-2.1-14.2-5.2c-3.9-3-4.6-7.6-4.3-12.3 c0.4-6.2,2.1-12.3,2.9-18.5c0.9-6.6-1.1-12.2-5.4-17.2c-4.3-5-9.9-8.8-15.3-12.5c-2.8-1.9-5.7-3.7-8.8-5.2c-3.2-1.5-6.7-3-9.2-5.6 c-2.4-2.4-4-5.4-6.1-8c-2.1-2.5-4.9-4.7-8-5.8c-6.1-2.2-13.1-1.4-19.4-0.7c-6.3,0.8-12.4,1.6-18.8,1.7c-4.6,0.1-12.6,0.5-15.5-4 c-3-4.6-1.5-11-4.3-15.7c-1.6-2.8-4.6-5.1-7-7c-2.8-2.3-5.9-4.3-9-6.2c-3.6-2.3-7.4-4.5-11-6.9l-2.9,1.4H216l-15.8,10.3l-15.8,10.3 l-5.5,5.5l-10.3,10.9L152.4,749v4.9l-4.9,5.5v10.9l-5.5,10.3v5.5l-5.5,5.5v4.9h-4.9v10.9l-5.5,5.5v4.9l-5.5,5.5v5.5h5.5v15.8h5.5 v21.2l4.9,5.5l-4.9,5.5h-5.5v10.3h-10.9v15.8h-5.5V940l-10.3,10.3v10.9l-5.5,4.9h-5.5l-4.9,5.5h-5.5l-5.5-5.5h-4.9v5.5h4.9v21.2 H88.7z"
        />
        <path
          fill={getColorByCarencias('PALMARITO')}
          data-tooltip-id="my-tooltip" 
          data-tooltip-content="Palmarito"
          onClick={handleNeighborhoodClick} 
          data-url-name="palmarito"
          className="st0"
          d="M152.4,1030.4l5.5,4.9v10.9h-5.5v5.5h5.5v10.3h5.5v5.5h5.5v5.5h5.5v4.9l4.9,5.5v10.9h-4.9v10.3h4.9v5.5l5.5,5.5 v68.5l5.5,5.5v10.9h4.9v4.9h5.5v32.7h5.5v6.4c3.1,1.5,6.2,3.3,9.2,5c6.7,4,13.3,8.2,20,12.3c12.4,7.5,23,17.3,31.4,29.1 c3.9,5.5,7.2,12.3,12.6,16.6c2,1.6,4.5,2.5,7,1.5c3.4-1.5,5.6-4.9,7.6-7.9c3.9-5.9,8.5-11.8,10.6-18.7c2.3-7.6-3.4-15-4.4-22.4 c-1.2-8.5-0.4-16.8,0.2-25.3c0.3-4.4,0.5-8.8,0.1-13.2c-0.4-4.7-1.5-9.2-2.5-13.8c-1.9-8.6-3.9-17.3-4.4-26.2 c-0.3-4-0.2-8.1,0.2-12.1c0.2-2.5,0.9-6.7,3.4-8.1c2.1-1.2,4.8,0.1,6.9-1.4c2.3-1.6,4.2-4.1,5.5-6.6c2-3.8,2.8-9.3-1.1-12.3 c-4.6-3.5-11.1-1.5-16.2-0.7c-4.3,0.7-11.5,1.8-13.6-3.3c-1.8-4.2-0.3-10.1,0.5-14.4c0.9-4.9,2.1-9.7,2.8-14.6 c1.2-8,1.6-16.3,4.7-23.9c3-7.3,8.6-12.9,12.5-19.7c-8.8-2.2-18.3-0.9-26.7-4.5c-3.2-1.4-6-3.6-7.3-7c-1.7-4.8-1.2-10.6-0.4-15.5 c1-6.3,2.9-12.5,4.6-18.6c1.7-6,3.5-12.3,3.6-18.7c0.1-6.3-3.6-11.9-3.9-18.1c-0.1-2.5,0.2-4.9,1.1-7.2c0.9-2.3,1.8-4.5,1.6-7 c-0.2-3.2-1.6-6.3-2.8-9.3c-1.3-3.1-2.2-6-2.7-9.3c-0.7-5.1-0.6-10.2-0.8-15.3c-2.6,0.9-5.1,1.9-7.6,3.2c-3,1.5-6,3.3-9.2,4.5 c-3.5,1.3-7.3,1.8-11.1,2.3c-4.3,0.5-8.5,1-12.6,2.2c-4,1.2-7.8,3.1-11.3,5.2c-6.9,4.1-13.5,9-19.6,14.2 c-19.5,16.6-33.4,38-47.2,59.3h1.6L152.4,1030.4z"
        />
        <path
          fill={getColorByCarencias('PEDREGAL ABAJO')}
          data-tooltip-id="my-tooltip" 
          data-tooltip-content="Pedregal Abajo"
          onClick={handleNeighborhoodClick} 
          data-url-name="pedregal-abajo"
          className="st0"
          d="M591.8,786.3c-12.3-2.2-24.9-3.5-37.4-2.2c-2.9,0.3-6,0.7-8.7,2c-2.4,1.2-4.3,3-6.3,4.7c-1.9,1.6-3.9,3-6.1,4.2 c-1.8,0.9-3.7,1.6-5.3,2.9c-4.6,3.7-4.4,9.5-5.3,14.8c-0.8,4.4-3.4,8.5-7.2,10.9c-0.9,0.6-1.7,0.9-2.2,1.9c-1.1,2.2-1,5.1-1.1,7.4 c-0.1,6,0.7,12-1.7,17.7c-0.2,0.4-0.8,0.6-1.2,0.5c-3.6-0.9-7.5-2.3-9.6-5.6c-1.8-2.7-2-6.1-1.8-9.3c-1.6,0.1-3.2,0.3-4.7,0.4 c1.6,1.3,2.8,3,3.7,4.8c0.5,0.7,1,1.3,1.4,2c3.1,4.7,6.3,10.5,6.7,16.2c0.3,4.6-2.3,8.9-5.9,11.6c-3.9,2.8-8.8,4.1-13.4,5.2 c-5.4,1.3-10.6,2.9-15.8,4.8c-8.1,2.9-16.2,5.8-24.4,8.5c-4.1,1.3-8.2,2.8-12.4,3.8c-2.3,0.6-4.7,0.9-7.1,1.1 c4.2,4.3,9.4,12.3,3.6,16.9c1.9,1.7,3.5,3.7,4.1,6.3c1.7,6.4-1.7,13.2-3.3,19.3c-1,3.8-1.2,7.8-2.2,11.6c-1,3.7-2.4,7.3-4.1,10.8 c-1.8,3.7-3.8,7.2-5.8,10.8c-1.7,3.1-3.7,6-5.6,9c-2,3.1-3.9,6.4-4.7,10c-0.3,1.4-0.6,3.7,0.1,5.1c0.5,1,2.1,1.4,3,2 c2.8,1.8,3.4,5.2,3.9,8.4c0.6,4.1,1.6,8.1,1.8,12.3c0.4,8.6-1.6,17-4.2,25.2c-2.7,8.5-5.6,17-8.6,25.5c-2.7,7.6-5.6,15.1-7.7,22.9 c-2.3,8.6-3.4,17.4-3,26.3c0.4,9.2,1.7,18.4,2.7,27.5c0.9,8.7,1.7,17.5,0.6,26.2c-1,8-2.9,15.8-3.9,23.8c-1,7.6-1.2,15.2,1.6,22.5 c2.5,6.8,6.9,13.5,12.8,17.8c3,2.2,6.3,3.6,10,3.8c3.8,0.2,7.5-0.7,11.1-2c7.7-2.8,14.7-7,22.7-8.7c9.2-2,18.7-1.2,28-0.9 c7.9,0.3,15.6-0.1,23.4-1c7.4-0.9,14.8-1.8,22.3-2.3l-1.1-2.2v-21.2l5.5-5.5h5.5l5.5-5.5v-5.5h4.9v-31.5l5.5-5.5v-26.1h5.5v-5.5 l5.5-5.5v-21.2l4.9-5.5v-47.9l-4.9-4.9v-5.5l-5.5-5.5l-5.5-4.9v-21.8h5.5v-26.7h5.5V940l4.9-10.9v-15.8l5.5-5.5v-15.8l5.5-5.5v-10.3 l5.5-5.5v-42.4l4.9-5.5h10.9v-10.3l5.5-5.5v-10.9l4.9-4.9v-2.2C602.8,788.4,597.3,787.3,591.8,786.3z"
        />
        <path
          fill={getColorByCarencias('PEDREGAL ARRIBA')}
          data-tooltip-id="my-tooltip" 
          data-tooltip-content="Pedregal Arriba"
          onClick={handleNeighborhoodClick} 
          data-url-name="pedregal-arriba"
          className="st0"
          d="M267,1053.2c1.7,3.3,5.5,4.8,8.9,5.7c8,2.1,16.5,1.3,24.5,3.6c0.7,0.2,1,1,0.7,1.6c-1.9,3.7-4.4,6.9-6.9,10.2 c-2.7,3.6-5,7.2-6.6,11.4c-1.4,3.8-2.2,7.8-2.8,11.8c-0.9,6.1-1.5,12.2-2.8,18.2c-1.2,5.5-2.6,11.1-2.6,16.8c0,2.3,0.3,4.4,2.7,5.4 c2.7,1.1,6.1,0.5,8.9,0.1c5.4-0.9,11.2-2.5,16.4,0c4,1.9,5.8,6.1,5.2,10.4c-0.6,5.2-3.9,9.8-7.9,13c-2.1,1.7-4.5,1-6.9,1.5 c-0.4,0.1-0.8,0.6-1.2,1.4c-0.5,0.9-0.8,1.9-1,2.9c-0.4,1.8-0.3,3.6-0.4,5.5c-0.1,4.3-0.1,8.5,0.3,12.8c0.5,4.8,1.4,9.6,2.4,14.4 c1.9,8.8,4.3,17.4,4.4,26.5c0,8.6-1.4,17.1-1.2,25.7c0.1,4.2,0.6,8.4,1.9,12.5c1.3,3.8,2.9,7.6,3.5,11.6c1,7-3.2,13.4-6.8,19.1 c-1.9,3-3.8,6-5.9,8.9c-1.7,2.4-3.7,4.8-6.3,6.2c3.6,2.9,7.5,5.6,12.3,4.4c4.6-1.2,7.6-5.6,11.3-8.2c4.6-3.3,10.7-4,14.9-7.9 c1.9-1.8,3.4-4,5.6-5.6c2.2-1.6,4.8-2.3,7.5-2.7c5.4-0.7,11.1,0.5,16.4-0.9c5.6-1.5,10.5-5,15.4-8c4.9-2.9,10-5.4,14.9-8.2 c4.8-2.7,9.8-5.8,13.5-10.1c3.6-4.2,6.1-9.3,10.3-13c1.8-1.6,4-2.7,5.6-4.6c1.2-1.4,1.8-3,2.3-4.7c-0.5,0-1,0-1.5-0.1 c-6.9-0.7-12.6-5.4-16.8-10.6c-4.3-5.5-7.7-12.1-8.8-19c-1.3-7.5-0.2-15.3,1.1-22.7c1.3-7.9,3.3-15.8,3.5-23.8 c0.2-9.3-0.9-18.5-2-27.7c-1.1-9.2-2.4-18.5-1.9-27.7c0.5-8.3,2.1-16.4,4.6-24.3c2.5-8,5.6-15.7,8.2-23.6c2.8-8.6,6.1-17,8.4-25.7 c1.1-4.3,2-8.6,2.2-13c0.3-4.7-0.2-9.1-1.1-13.7c-0.6-3-0.3-7.9-2.9-10.1c-1.1-0.9-2.5-1.3-3.6-2.2c-0.9-0.8-1.1-2-1.3-3.1 c-0.9-6.8,4-13.3,7.5-18.7c2.1-3.2,3.9-6.5,5.7-9.8c2-3.6,3.9-7.2,5.4-11c1.6-4,2.5-8,3-12.2c0.4-3.5,1.5-6.8,2.6-10.2 c1-3.2,2.1-6.6,2.2-10c0-3.8-1.8-6.7-4.7-9c-0.6-0.5-0.8-1.4,0-1.9c6.3-3.6,0.4-11-3-14.5c-0.4-0.4-0.4-0.8-0.2-1.2 c-0.9,0.1-1.8,0.1-2.7,0.1c-8.2,0.3-16.2-0.3-24.3,0.8c-8.4,1.1-16.8,2.7-25,4.8c-16.2,4.1-31.9,9.8-47.7,15.3 c-15.6,5.5-31.1,11.3-47.4,14.8c-3.5,0.7-6.8,1.6-10.1,2.6c0.1,6.2-0.1,12.5,1.2,18.5c1.4,6.3,6,12.1,5,18.8c-0.3,2.1-1.3,4-1.9,6.1 c-0.8,2.7-0.7,5.7-0.1,8.5c1.3,5.9,3.9,11.1,3.3,17.3c-1.1,12.2-6.2,23.6-8.1,35.6c-0.5,2.9-0.7,5.8-0.5,8.6 C265.7,1048.7,265.9,1051.2,267,1053.2z"
        />
        <path
          fill={getColorByCarencias('PALMAR')}
          data-tooltip-id="my-tooltip" 
          data-tooltip-content="Palmar"
          onClick={handleNeighborhoodClick} 
          data-url-name="palmar"
          className="st0"
          d="M229.9,1659.2c5.7-10.3,14.1-18.9,21.8-27.8c3.5-4,6.7-8.2,9.7-12.6c4.6-6.6,9.6-13.1,13.1-20.3 c1.8-3.6,3.4-7.7,3.9-11.7c0.4-3.5,0.6-7,0.6-10.5c0-3.6-0.2-7.3-1.5-10.7c-1.3-3.4-3.6-6.1-6.2-8.5c-2.5-2.3-5.2-4.5-7.3-7.2 c-2.1-2.8-3.6-6-4.8-9.3c-1.3-3.7-2.2-7.5-2.8-11.4c-0.6-4-0.4-8-0.6-12c-0.3-6.9-1.4-14.2,2.9-20.1c3.6-5,9.2-8.1,14.2-11.6 c13-9.1,20.2-23.1,26.5-37.3c1.6-3.7,3.2-7.4,4.9-11c1.8-3.8,3.7-7.5,5.3-11.4c1.5-3.7,2.7-7.6,3.1-11.6c0.4-3.9-0.1-7.7-1-11.5 c-1.7-7.3-4.9-14.4-9.4-20.4c-4-5.4-9-9-14.9-12.1c-5.1-2.7-10.5-5.1-15.1-8.7c-4.5-3.5-7.8-8-9.4-13.5c-0.3,0-0.6-0.2-0.7-0.5 c-1.1-2.3-3.3-4.5-3.8-7.1c-0.4-1.9,0.4-3.6,1.8-4.8c3.3-3,7.5-3.7,11.8-3.5c2.4,0.1,4.6,0,6.8-1.2c2-1,3.7-2.6,4.9-4.5 c1.1-1.9,1.5-4,2.5-6c1-2,2.5-3.3,4.5-4.4c0.4-0.2,0.8-0.3,1.2-0.5c-2.4-1.1-4.5-2.9-6.6-4.6c-4.4,0.9-8.2-2.3-11-5.6 c-4.8-5.7-8.4-12.4-13.1-18.3c-4.5-5.7-9.6-10.9-15.2-15.4c-5.9-4.8-12.4-8.4-18.9-12.4c-6.8-4.2-13.8-9.1-21.3-12.9v7.1l5.5,4.9 v21.2h-5.5v16.4h-5.5v4.9h-15.8v5.5H179v26.7h-31.5v21.2l-5.5,5.5v4.9l-5.5,5.5v5.5h-4.9v5.5h-5.5l-5.5,4.9v10.9h5.5l5.5,5.5v15.8 h-5.5v26.7l5.5,4.9v10.9l4.9,5.5v5.5h-4.9v5.5h4.9v4.9h5.5v16.4l-5.5,4.9l5.5,5.5l-5.5,5.5v-5.5l-4.9-5.5l-5.5,5.5v5.5h-5.5v15.8 l5.5,5.5h5.5v21.2h4.9v15.8h5.5v10.9l-5.5,4.9v5.5l-4.9,5.5v26.7l-5.5,4.9v10.9h-5.5v5.5h-5.5l-5.5,4.9h-4.9v5.5h-5.5v10.9h-5.5v4.9 h-5.5v5.5l5.5,5.5v5.5l5.5,4.9l5.5,5.5v16.4l4.9,5.5v10.3l5.5,5.5h5.5v-5.5l5.5-5.5l5.5-4.9v-5.5l4.9-5.5v-5.5l5.5-5.5v-5.5h5.5 V1678h4.9v-10.3h5.5v-5.5h5.5v-10.9l5.5,5.5v5.5h5.5v5.5h4.9l5.5,4.9l5.5,5.5l4.9,5.5l5.5,5.5l5.5,4.9H216v-4.9h5.5v-5.5h6 C223.6,1675.7,225.6,1666.9,229.9,1659.2z"
        />
        <path 
          fill={getColorByCarencias('JUAN CURI')}
          data-tooltip-id="my-tooltip" 
          data-tooltip-content="Juan Curi"
          onClick={handleNeighborhoodClick} 
          data-url-name="juan-curi"
          className="st0"
          d="M555.6,1454.9v-5.5h-5.5v-4.9l-5.5-5.5l-4.9-5.5v-15.8l-5.5-5.5v-5.5h-5.5v-31.5h-5.5v-26.7h5.5V1333l-5.5-5.5 v-5.5h5.5v-10.3h-5.5v-47.9l5.5-10.3v-21.2l-3.3-6.6c-11.6,0.6-23.1,2.8-34.7,3.4c-9,0.5-18-0.6-26.9-0.5c-5,0.1-9.9,0.6-14.7,1.8 c-4.1,1-7.9,2.7-11.7,4.4c-5.6,2.6-11.6,5.4-17.8,5.8c-0.6,2.3-1.4,4.5-3,6.3c-1.9,2.2-4.6,3.5-6.6,5.5c-4.6,4.5-7.2,10.5-11.9,14.8 c-4.4,3.9-9.5,6.8-14.6,9.6c-5.2,2.8-10.4,5.6-15.4,8.7c-4.8,3-10,6-15.8,6.5c-5.7,0.5-11.9-1-17.4,1.5c-2.7,1.2-4.4,3.5-6.4,5.6 c-2.1,2.2-4.6,3.6-7.3,4.8c-2.7,1.1-5.4,2.1-7.9,3.7c-1.9,1.2-3.6,2.8-5.3,4.3c-3.2,3-6.7,5.5-11.4,5.2c-0.7,0-1.3-0.2-1.9-0.3 c-1.4,0.6-2.8,1.2-4.1,2.1c-3.6,2.3-3.6,7.2-6.1,10.4c-2.3,2.9-5.8,5-9.5,5.3c-2.1,0.2-4.2-0.2-6.3-0.1c-2.2,0.1-4.2,1-6.1,2.2 c-1.5,1-2.6,2.4-1.8,4.2c0.8,1.8,2,3.4,3,5.1c0.4,0,0.9,0.2,1,0.8c0.7,3,2,5.9,3.9,8.4c7.1,9.4,19.7,11.7,28.6,18.9 c5.6,4.5,9.8,10.8,12.8,17.3c2.9,6.3,5.2,13.7,5,20.8c-0.2,7.8-3.3,14.9-6.7,21.8c-3.5,7.2-6.6,14.7-10,22 c-3.3,7-7.1,13.9-11.9,20.1c-2.4,3-5,5.9-7.9,8.3c-2.4,2-5.1,3.8-7.7,5.5c-4.9,3.3-10.7,7-12.6,12.9c-1.1,3.5-0.7,7.4-0.5,11 c0.2,4.3,0.2,8.6,0.4,12.9c0.2,3.9,1.2,7.8,2.3,11.5c1.1,3.6,2.6,7.2,4.8,10.3c2.1,2.8,4.9,5,7.4,7.4c2.5,2.3,4.7,4.9,6.2,8 c2.9,6.1,2.4,13.5,1.9,20c-0.6,7.6-3.3,14.4-7.2,21c-3.9,6.5-8.4,12.6-12.7,18.7c-3,4.2-6.4,8.1-9.9,12c-7.6,8.6-16,17.4-20.9,28 c-2,4.4-3.4,9.5-2.5,14.3c0.4,2.1,1.2,4,2.2,5.8h2.5l4.9-5.5v-5.5h5.5v-4.9h10.9v-5.5h10.3v-5.5h5.5v-5.5l5.5-4.9l4.9-5.5l5.5-5.5 v-5.5h5.5l5.5-4.9h4.9l5.5-5.5h5.5l5.5-5.5l4.9-5.5h5.5v-21.2h5.5l5.5,5.5h10.3v-5.5h10.9l4.9-4.9h26.7v4.9h21.2v-4.9l4.9,4.9h32.1 v-10.3h10.3v5.5h5.5v-5.5h5.5v-5.5h5.5v-10.3l4.9-5.5v-5.5h16.4l4.9-5.5l5.5-4.9h5.5l4.9-5.5l5.5-5.5v-5.5l5.5-4.9v-10.9h5.5V1487 l5.5-5.5h26.1l5.5-4.9v-21.8H555.6z"
        />
        <path
          fill={getColorByCarencias('EL MORAL')}
          data-tooltip-id="my-tooltip" 
          data-tooltip-content="El Moral"
          onClick={handleNeighborhoodClick} 
          data-url-name="el-moral"
          className="st0"
          d="M829.7,363.8c-3.4-3.5-7.3-6.7-11.7-8.8c-2.6-1.2-5.5-2.1-8.2-3.3c-3-1.3-5.9-2.7-8.7-4.2 c-5.8-3-11.5-6.3-17.3-9.4c-6-3.2-12.2-5.8-18.7-7.8c-6.4-2-12.8-3.5-19.4-5c-5.1-1.1-10.3-2.3-14.8-5.2c-4.2-2.8-7.6-7.1-9.6-11.6 c-1-2.3-1.4-4.7-1.4-7.1c0-2.4,0.6-4.8,0.8-7.2c0.2-2.1,0.4-5.1-1.6-6.4c-1.5-1.1-3.8-1.2-5.6-1.3c-4.3-0.2-8.6,0.5-13,0.2 c-7.1-0.4-14.2-0.7-21.2-0.8c-6.8-0.2-13.7-0.1-20.5-0.2c-11.9-0.3-25.1-1.8-36.2,3.6c-4.3,2.1-6.8,6.4-8.5,10.7 c-1.8,4.5-3,9.2-5.1,13.6c-2,4.1-5.3,7.3-9.7,8.8c-3.9,1.3-8.2,1.3-12.3,1v10.9l-4.9,5.5L571.4,350h-5.5l-4.9,5.5l-5.5,5.5h-10.9 l-10.3,5.5h-10.9l-5.5,4.9h-4.9l-5.5,5.5H481l-10.3,5.5h-21.2l-10.9,5.5h-26.1v-5.5H407v15.8l-5.5,5.5v15.8h-4.9V430l-5.5,10.3h-5.5 v5.5H381v5.5l-5.5,4.9L381,467v10.3h4.9v5.5l-4.9,5.5h-10.9v-5.5h-5.5v5.5h-1c0.1,0.8,0.3,1.7,0.3,2.5c0.2,2.5,0.2,5.1,0.9,7.5 c1.4,4.7,6,8.3,9.7,11.2c3.6,2.8,7.4,5.3,11,8c3.5,2.6,6.7,5.8,10.3,8.3c7.2,5.2,15.3,8.6,23.8,10.9c16.7,4.5,34.3,5.2,50.8,10.5 c2.3-3,2.3-6.8-1.3-9c-0.7-0.4-0.7-1.2-0.2-1.7c2.2-2.8,5.1-4.3,8.7-4c3.7,0.4,7.3,1.7,11,2.2c9.5,1,19.1,0.7,28.4,3.3 c6.4,1.8,12.8,3,19.3,4c6.8,1.1,13.6,2.1,20.2,4.1c6.1,1.8,11.9,4.5,16.8,8.8c4.7,4.2,5.7,10.6,5,16.6c-0.2,1.8-0.7,3.6-0.6,5.4 c0,1.3,0.6,2,1.7,2.6c2.4,1.2,5.3,1.7,7.9,2.1c3.7,0.6,7.5,0.6,11.2,0.7c3.5,0.1,7.1,0.2,10.6,0.9c1.7,0.3,3.3,0.8,4.8,1.6 c1.7,0.8,3.2,2,4.7,3c4.5,3.2,9.2,6.2,13.9,9.1l2.5-2.5v-4.9l5.5-5.5l4.9-5.5h5.5l10.9-10.3h4.9l5.5-5.5v-5.5l5.5-5.5v-4.9h5.5 v-10.9h4.9v-5.5h5.5v-4.9l5.5-5.5v-5.5l10.3-5.5l5.5-4.9v-5.5l10.9-5.5v-5.5h4.9v-5.5l5.5-5.5v-26.1l10.9-10.9l10.3-5.5l5.5-4.9 l5.5-5.5v-5.5l4.9-5.5l10.9-10.3l10.3-10.9l5.5-4.9l10.9-5.5v-5.5l4.9-5.5h5.5v-4.9H832C831.3,365.5,830.5,364.6,829.7,363.8z"
        />
      </svg>
    </div>
  )
}

export default Paramo