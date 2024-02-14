import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Tooltip } from 'react-tooltip'
import '../../../App.sass'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'


const ValleDeSanJose = ({departamento, municipio, filterMap}) => {
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
        viewBox="0 0 1080 1080"
        style={{
          strokeWidth: '2px',
          stroke: '#fff',
          enableBackground: "new 0 0 1080 1080",
        }}
        xmlSpace="preserve"
      >
        <path
          fill={getColorByCarencias('SANTA TERESA LA ESMERALDA')}
          data-tooltip-id="my-tooltip" 
          data-tooltip-content="Santa Teresa La Esmeralda"
          onClick={handleNeighborhoodClick} 
          data-url-name="santa-teresa-la-esmeralda"
          className="st0"
          d="M733.9,91.7c-0.6,2.6-1.9,5-3.3,7.2c-1.5,2.4-3.2,4.7-5,6.9c-1.4,1.7-2.8,3.5-4.3,5.1c-2.8,2.9-6.1,5.2-9.1,7.9 c-3.4,3.2-5.8,7.2-8.2,11.1c-1.3,2-2.5,4.1-3.9,6.1c-1.2,1.8-2.6,3.6-3.9,5.3c-2.4,3.3-4.9,6.8-6.4,10.6c-1.6,4.2-1.9,9-1.7,13.5 c0.2,4.7,1.6,9.3,1.3,14.1c-0.3,4.7-1.5,9.3-2.5,13.9c-2.1,9.9-4.4,19.8-6.8,29.7c-1.2,5-2.5,10-3.8,14.9c-0.6,2.3-1.1,4.7-1.9,6.9 c-0.6,1.8-1.5,3.6-2.4,5.3c-0.8,1.4-1.9,3.1-2.1,4.8c-0.1,1.1,0.9,1.5,1.7,1.9c1.9,0.9,3.9,1.5,6.1,1.6c2.3,0.1,4.6,0,6.9,0 c2.3,0,4.5,0.2,6.8,0.8c2,0.5,3.9,1.2,5.9,1.8c4,1.3,8.4,2.7,12.6,2c4.5-0.8,7.8-4.1,11-7.1c1.6-1.5,3.2-2.8,5-4 c1.8-1.2,3.6-2.2,5.4-3.4c6.7-4.4,10.8-11.6,16.5-17.1c1.4-1.4,2.9-2.6,4.5-3.7c1.8-1.3,3.7-2.3,5.6-3.4c3.5-2.1,7-4.3,10.6-6.3 c3.6-2,7.5-3.7,11.5-4.6c4.4-1,9-1.2,13.5-1.3c4.5-0.1,9-0.1,13.5-0.7c4.7-0.6,9.2-1.9,13.4-4.1c3.1-1.6,6.4-2.9,9.2-5 c1.3-1,2.5-2.2,3.3-3.7c1-1.8,1.3-3.8,1.7-5.8c0.9-4,1.7-8.4,3.9-11.9c1.9-3.1,4.7-5.6,6.3-9c0.8-1.6,0.9-3.2,0.3-5 c-0.5-1.6-1.4-3-1.7-4.7c-0.2-1.6,0.2-3.3,1-4.7c0.8-1.5,2.1-2.6,2.8-4.2c1.5-3.3,0.2-7-1.2-10.1c-1.4-2.9-3.2-5.8-3.7-9 c-0.2-1.5-0.2-3,0.3-4.4c0.6-1.8,1.9-3.4,2.8-5.1c2.1-4.2,1.9-9.3,1.6-13.8h-8.6l-5.1-5.1v-9.7h-4.5v-5.1h-44.9l-5.1,5.1l-5.1-5.1 h-4.5l-5.1-4.5h-19.9v4.5H734C733.9,91.5,733.9,91.6,733.9,91.7z"
        />
        <path
          fill={getColorByCarencias('SANTA TERESA EL MOLINO')}
          data-tooltip-id="my-tooltip" 
          data-tooltip-content="Santa Teresa El Molino"
          onClick={handleNeighborhoodClick} 
          data-url-name="santa-teresa-el-molino"
          className="st0"
          d="M712.2,263.9c-4,1.3-8.3,0.5-12.3-0.7c-4.3-1.2-8.4-3.2-12.9-3.4c-2.6-0.1-5.3,0.1-7.9,0 c-0.1,0.3-0.2,0.7-0.2,1c0.5,0.2,1.1,0.5,1.6,0.7c9.5,5,10.9,16.6,11.5,26.2c0.2,2.7,0.4,5.4,0.4,8.1c0,3.3-0.6,6.5-1.7,9.6 c-2.1,6.3-5.8,11.9-8.9,17.6c-3.5,6.4-6.4,13.2-8.2,20.3c-1.7,7-2.2,14.1-2.1,21.2c0,3.6,0.1,7.1,0.5,10.7c0.4,3.7,1.1,7.3,1.7,10.9 c1.2,6.9,2.6,14,2.1,21c-0.2,3.5-0.9,6.8-0.9,10.3c0,3.5,0.5,6.9,1.1,10.3c1.5,8.3,1.9,16.7,3.6,25c0,0.2,0,0.3-0.1,0.4 c1,5.3,2.8,10.4,5.2,15.2c1.2,2.4,2.5,4.7,3.9,6.9c1.2,1.9,2.5,3.7,4.4,5c3.4,2.3,7.6,2.5,11.5,2.8c2.5,0.2,5.1,0,7.6,0.3 c1.3,0.2,2.4,0.7,3.6,1.1c1.2,0.4,2.4,0.7,3.7,0.7c5,0.3,9.7-2.3,14.7-2.3c0.5-1.1,0.8-2.3,1.1-3.4c1.8-6.7,2.2-13.8,4.8-20.3 c0.6-1.6,1.4-3.2,2.2-4.8c0.8-1.7,1.6-3.5,2.3-5.3c1.5-3.6,3-7.3,4.2-11c1.2-3.8,1.8-7.7,2.5-11.5c0.7-3.8,1.7-7.4,3.2-10.9 c3.1-7.3,6.1-14.5,9.9-21.4c1.8-3.3,3.1-6.8,4.2-10.4c1.1-3.6,2.2-7.2,3.9-10.5c1.7-3.3,4-6.2,6.1-9.3c2.2-3.3,3.5-7,5-10.6 c0.7-1.7,1.5-3.3,2.1-5c0.4-1.2,0.8-2.4,1.2-3.6c0.5-1.3,1-2.5,1.7-3.7c0.6-1,1.3-2,2.4-2.5c1.4-0.6,2.9-0.1,4.2,0.4 c1.4,0.6,2.8,1.2,4.3,1.6c2.9,0.9,6.6,2,9.5,0.7c1.4-0.6,2.6-1.6,3.9-2.5c1.4-1,2.7-1.9,4.3-2.5c3.5-1.4,7.3-1.6,10.9-1.2 c1.8,0.2,3.6,0.5,5.3,0.8c1.7,0.3,3.4,0.6,5,1.2c2.7,1,5.3,2.4,8.1,2.9c0.1,0,0.1,0,0.2,0c0.1,0,0.2,0.1,0.4,0.1 c0.4,0.1,0.9,0.1,1.3,0.1c0,0,0.1,0,0.1,0c0.4,0,0.8-0.1,1.2-0.2c4.1-1.3,6.3-5.6,9.5-8.1c1.7-1.3,3.7-2.2,5.6-3.2 c2.1-1.1,3.9-2.5,5.6-4.1c3.1-2.9,5.4-6.4,7.3-10.2c2.4-4.6,4.3-9.4,6.4-14.1c2.3-5.2,4.6-10.5,7-15.7c1-2.2,2.2-4.4,3.2-6.6 c0.7-1.7,1.3-3.6,2.5-5c0.6-0.7,1.4-1.1,2.3-1.4c1-0.3,2.1-0.5,2.9-1.1c1.7-1.1,2.9-3.1,3.2-5.1c0.3-2.1-0.1-4.1-0.3-6.1 c-0.2-2,0-4.1,0.4-6.1c1.4-6.2,5.1-11.6,6.8-17.7h-9v-14.8h5.1v-5.1l4.5-4.5v-5.1h5.1v-14.8l-5.1-5.1l-4.5-5.1v-19.9h4.5v-5.1h-4.5 v-4.5h-5.1L893,141.3h5.1v-19.9l-5.1-5.1l-4.5-5.1v-5.1l-5.1-4.5l-5.1,4.5h-14.8l-5.1,5.1h-10.1c0.2,3.6,0.4,7.2-0.5,10.7 c-0.5,2.1-1.3,3.9-2.5,5.7c-1,1.6-1.9,3.1-1.9,5.1c0,3.3,1.9,6.4,3.3,9.4c1.4,2.9,2.7,6.1,2.3,9.5c-0.2,1.8-0.9,3.2-2,4.6 c-1.1,1.4-2.1,2.8-2.4,4.6c-0.3,1.8,0.7,3.5,1.3,5.2c0.6,1.5,1,3.2,0.6,4.8c-0.8,3.4-3.6,6.3-5.7,9.1c-1.2,1.6-2.2,3.3-2.9,5.2 c-0.8,2.1-1.3,4.3-1.8,6.5c-0.8,3.7-1.3,7.4-4.1,10.2c-2.3,2.4-5.5,3.8-8.4,5.3c-1.9,0.9-3.8,2-5.8,2.8c-2.1,0.9-4.3,1.6-6.5,2.1 c-9,2-18.3,0.9-27.5,2c-8.7,1.1-16,5.8-23.4,10.3c-3.8,2.3-7.6,4.3-10.9,7.3c-2.8,2.5-5.1,5.5-7.5,8.4c-2.6,3.2-5.3,6.4-8.7,8.8 c-3.6,2.6-7.7,4.6-11,7.6C719.4,259.2,716.3,262.6,712.2,263.9z"
        />
        <path
          fill={getColorByCarencias('EL RECODO')}
          data-tooltip-id="my-tooltip" 
          data-tooltip-content="El Recodo"
          onClick={handleNeighborhoodClick} 
          data-url-name="el-recodo"
          className="st0"
          d="M433.8,213.4c2.4,3.6,4.9,7.3,6.7,11.3c0.9,1.9,1.6,3.9,2,5.9c0.5,2.1,0.6,4.2,0.8,6.4c0.8,8.7,1.3,17.6,4.3,26 c1.5,4.3,3.8,8.2,6.2,12c2.6,3.9,5.2,7.7,7.7,11.5c4.3,6.5,9.1,13.4,9.1,21.6c0,1.6-0.1,3.2,0,4.8c0.1,1.5,0.2,3.2,1,4.6 c0.9,1.5,2.7,1.6,4.2,1.5c1.8,0,3.6-0.2,5.4-0.3c4.8-0.1,9.5-0.4,14.3,0.3c4.3,0.6,8.3,2.4,12,4.6c3.4,2.1,6.4,4.6,9.2,7.5 c2.9,3,5.4,6.4,8.2,9.5c3,3.2,6.4,5.9,10,8.3c3.5,2.3,7.4,4,11.1,6.1c3.3,1.8,7,4.1,9.1,7.4c2.3,3.5,1.5,7.9,2.5,11.8 c0.1,0.2,0,0.4-0.1,0.5c0.4,0,0.9,0.1,1.3,0.2c3.4,0.8,6.3,3,8.9,5.2c2.7,2.3,5.3,5,8.2,7.1c3.5,2.5,7.4,4.7,11.4,6.2 c2.1,0.8,4.2,1.4,6.3,1.8c2.3,0.4,4.6,0.6,7,0.9c4.7,0.7,9.3,1.7,13.9,2.9c2.3,0.6,4.6,1.3,6.9,2c2.2,0.7,4.4,1.4,6.5,2.3 c7.1,3,13.2,8.4,21.1,8.9c2.3,0.1,4.6,0.1,6.9,0.1c2.3,0,4.7,0,7-0.1c3.8-0.1,7.6-0.4,11.3-1.1c0.3-2.4,0.5-4.7,0.5-7.1 c-0.2-7.2-1.7-14.4-2.9-21.5c-0.6-3.4-1.1-6.8-1.3-10.2c-0.2-3.6-0.2-7.3-0.1-10.9c0.2-6.8,0.9-13.6,2.8-20.2 c1.9-6.9,5-13.4,8.5-19.6c3.2-5.7,6.8-11.4,8.6-17.8c1.5-5.7,1-11.5,0.5-17.3c-0.4-5-1-10.3-3.1-14.9c-2.2-4.8-6.1-8.3-11.2-9.8 c-0.7-0.2-0.4-1.4,0.3-1.1c0.4,0.1,0.7,0.3,1.1,0.4c0-0.2,0-0.3,0.1-0.5c0-0.1,0-0.1,0.1-0.2c-1.5-0.1-2.9-0.3-4.4-0.8 c-1.3-0.4-2.9-1-3.9-2c-0.7-0.7-0.8-1.6-0.6-2.5c0.4-1.7,1.3-3.3,2.1-4.8c1-1.8,1.9-3.7,2.5-5.7c1.5-4.9,2.6-10,3.9-15 c1.3-5,2.5-10,3.6-15c1.2-5,2.3-10,3.4-15c1.1-5,2.2-9.9,3.1-14.9c0.4-2.4,0.7-4.7,0.6-7.1c-0.1-2.4-0.6-4.8-1-7.2 c-0.6-4.5-0.6-9.2,0.2-13.7c1.5-8.7,8-15.1,12.6-22.2c2.7-4.2,5.1-8.4,8.1-12.4c2.5-3.3,5.8-5.7,8.9-8.3c4.2-3.6,7.8-8.1,10.9-12.7 c1.6-2.3,3.1-4.7,4.1-7.4l-2.9,3.3h-14.8l-5.1,5.1h-25v-5.1h-34.7l-4.5,5.1h-19.9l-5.1,4.5H615l-10.2,10.2h-9.7l-5.1,5.1h-44.3v-5.1 h-5.1v-5.1h-19.9v-5.1h-19.9l-5.1,5.1v5.1l-5.1,9.7l-4.5,15.3l-5.1,10.2l-5.1,4.5l-5.1,5.1h-4.5v5.1l-15.3,5.1H436l-5.1,9.7v5.1 l-11.1,11.1c0.2,0.1,0.4,0.2,0.5,0.3C426.6,200.9,430.1,207.8,433.8,213.4z"
        />
        <path
          fill={getColorByCarencias('EL HOYO')}
          data-tooltip-id="my-tooltip" 
          data-tooltip-content="El Hoyo"
          onClick={handleNeighborhoodClick} 
          data-url-name="el-hoyo"
          className="st0"
          d="M231.2,812.4c-2-3.7-4.2-7.3-5.9-11.1c-1.7-3.9-3.1-7.9-4.5-11.9c-0.8-2.1-1.6-4.3-2.5-6.3 c-0.8-1.8-1.7-3.6-2.5-5.4c-1.5-3.7-2.5-7.6-2.9-11.5c-0.4-4.1-0.2-8.2,0.9-12.1c0.6-2,1.2-3.9,1-6c-0.1-2-1-4-1.8-5.8 c-0.8-1.8-1.6-3.5-2.1-5.4c-0.6-2.2-1.2-4.3-1.9-6.4c-1.3-4.3-2.8-8.5-4.1-12.8c-0.7-2.2-1.3-4.4-2.1-6.5c-0.7-1.8-1.3-3.6-1.8-5.5 c-0.9-3.7-1.5-7.6-1.1-11.4c0.2-1.8,0.5-3.6,1.2-5.4c0.7-1.8,1.7-3.4,2.5-5.1c1.8-3.6,3.3-7.4,4.1-11.4c1.6-7.6,0.7-15.6-2.6-22.6 c-1.5-3.2-3.5-6.2-6.1-8.6c-1.3-1.2-2.7-2.2-4.3-3.1c-1.5-0.9-2.8-1.9-3.9-3.2c-3.5-4.4-1.4-10.1,0.6-14.8c-0.2-0.1-0.3-0.3-0.3-0.6 c0.3-1.2,0.6-2.4,0.8-3.5c1-4.5,2-9,3.4-13.3c1.5-4.7,3.7-9,6-13.4c2.4-4.5,4.8-8.8,7.4-13.2c2.3-3.9,4.6-7.7,7.7-11 c2.8-3,6-5.6,9.2-8.1c3.5-2.8,7-5.6,9.6-9.2c5.1-6.8,7.3-15.1,11.3-22.5c2.2-4,4.6-7.7,5.7-12.1c1.2-4.8,1.1-9.7,2.1-14.5 c0-0.2,0.1-0.3,0.2-0.3c-0.2-3.6-1-7.2-1.7-10.8c-0.3-1.9-0.6-3.9-0.7-5.9c-0.1-1.8,0.1-3.6,0.2-5.3c0.3-3.3,0.7-6.6,0.7-9.9 c0-1.6-0.1-3.2-0.5-4.7c-0.2-0.9-0.6-1.3-1.3-1.8c-0.8-0.6-1.5-1.2-2.1-2c-0.9-1.2-1.1-2.7-1.1-4.2c0-1.4,0.2-2.7,0.1-4.1 c0-0.8,0.2-1.6,0.1-2.3c0-0.5-0.8-0.8-1.2-1.1c-1.4-0.8-2.8-1-4.4-0.9c-2.4,0.1-4.8,0.4-7.1,0.1c-1.9-0.2-3.9-0.8-5.5-2 c-1.7-1.4-2.3-3.5-2.2-5.7c0-0.8,1.2-0.8,1.2,0c0,1.3,0.2,2.5,0.8,3.5c-0.5-1.6-0.5-3.3-1.1-4.8c-0.4-1-1.2-1.9-2.1-2.5 c-1.2-0.6-2.5-0.6-3.8-0.8c-1.2-0.2-2.3-0.6-3.2-1.4c-0.8-0.7-1.4-1.5-1.9-2.4c-0.6-1-1.3-1.9-2.2-2.7c-1-0.8-2.1-1.5-3.2-2.2 c-2-1.3-4-2.7-5.8-4.2c-2-1.7-3.7-3.6-5.1-5.8c-1.3-1.9-2.4-3.9-3.5-5.8c-0.2-0.4-0.5-0.8-0.8-1.3v8.2h-5.1v5.1l-4.5,4.5v5.1 l-5.1,5.1h-5.1l-9.7,9.7h-5.1l-10.2,10.2v5.1l-4.5,4.5h-5.1l-5.1,19.9v44.9l-4.5,5.1v9.7H128v15.3l-5.1,4.5v40.3l-5.1,5.1v19.9 l5.1,4.5v5.1h5.1v5.1l-5.1,5.1v9.7l-5.1,5.1v9.7h-9.7L103,679v39.8l-5.1,5.1v9.7l-5.1,5.1v14.8l-4.5,5.1v14.8l-5.1,10.2v25H78v25 h-4.5v9.7l9.7-4.5h5.1l9.7,9.7v14.8l5.1-4.5h14.8v4.5l5.1,5.1h5.1l5.1-5.1h9.7l5.1,5.1l4.5,5.1h20.5l4.5-5.1h5.1v5.1l5.1-5.1h4.5 l5.1-9.7l10.2-10.2l4.5-5.1l10.2-4.5H240c0-0.9-0.1-1.8-0.2-2.6C238.8,827.6,235.2,819.7,231.2,812.4z"
        />
        <path
          fill={getColorByCarencias('PIEDRA DE RAYO')}
          data-tooltip-id="my-tooltip" 
          data-tooltip-content="Piedra De Rayo"
          onClick={handleNeighborhoodClick} 
          data-url-name="piedra-de-rayo"
          className="st0"
          d="M253.5,460c0.6,1.1,0.7,2.5,0.8,3.7c0.1,1.6,0.1,3.2,0.1,4.8c-0.2,3.3-0.6,6.6-0.8,10c-0.2,3.5,0.3,7,0.9,10.5 c0.6,3.4,1.4,6.8,1.4,10.3c0,0.3-0.2,0.5-0.5,0.6c0,0.2-0.1,0.4-0.1,0.6c3.1,2.7,7.6,3.9,11,6c4.2,2.6,8.6,5.5,11.5,9.6 c2.6,3.8,3.3,8.5,4.9,12.8c3.7,10,14.9,14.3,24.7,15.3c4.9,0.5,9.8,0.2,14.7-0.2c4.4-0.4,8.8-0.7,13.1,0.4 c8.6,2.2,15.8,9.7,18.6,17.9c1.5,4.3,1.9,8.9,2.1,13.5c0.2,5.7,0,11.3,1,16.9c1,5.9,1.9,11.4,1.1,17.4c-0.4,3.2-1.1,6.3-1.4,9.5 c-0.3,2.4-0.6,4.9-0.2,7.3c0.7,3.6,3.3,5.6,6.6,6.7c4.2,1.4,8.6,1.9,12.8,3.3c5.3,1.8,10.5,4.2,16,5.1c1.9,0.3,4,0.4,5.7-0.7 c1.4-0.9,2.3-2.5,2.8-4c1.2-3.3,1.4-7,1.7-10.5c0.3-3.8,0.3-8.1,1.7-11.7c0.7-1.7,1.8-2.9,3.6-3.3c1.3-0.3,2.3-0.4,3.3-1.5 c0.8-0.9,1.4-2,1.9-3c1.2-2.2,2-4.6,2.9-7c0.9-2.6,0.9-4.9,0.4-7.6c-0.8-3.7-1.6-8.2,1.2-11.3c1.4-1.6,2.8-3.1,3.9-4.9 c1.1-1.7,2-3.5,3-5.4c1.7-3.4,4.5-8.2,3.5-12.2c-0.6-2.4-2.2-4.3-3.4-6.4c-1.1-1.9-1.7-3.9-2.1-6c-1-4.8-0.9-9.8-0.4-14.6 c0.4-4.8,1.2-9.7,2.8-14.2c1-2.8,2.2-5.4,3-8.3c1-3.2,1.2-6.2,0.8-9.5c-0.7-5-0.5-9.5,1.7-14.2c2.2-4.5,5.4-8.5,7-13.3 c2-5.8,3.1-11.9,4.4-17.9c1.3-6,3-12.2,2.8-18.4c-0.2-5.3-1.8-10.4-2.8-15.6c-1.7-9.4-4-19.1-3.3-28.6c0.1-2.1,0.4-4.1,1.2-6 c1.1-2.4,2.7-4.5,4.1-6.7c1.7-2.7,2.8-5.4,2.9-8.6c0.1-2.8-0.2-5.6,0.6-8.3c0.5-1.7,1.3-3.3,2.6-4.5c1.4-1.3,3.1-2.2,4.5-3.5 c4-3.8,4.2-9.6,6.9-14.2c2.4-4.2,6.4-6.6,9.8-9.9c1-1,1.7-1.9,1.8-3.3c0.1-1.7,0-3.4,0.1-5.2c0-0.1-0.1-0.2-0.1-0.3 c0-0.1-0.1-0.1-0.1-0.1c-0.1,0-0.2-0.1-0.2-0.1c-1,0.7-2.2,1.2-3.3,1.6c-2,0.7-4,1.2-6,1.8c-0.9,0.3-1.9,0.6-2.8,0.9 c-1.1,0.4-2.1,0.9-3.2,1.3c-3.8,1.2-7.5-0.2-11.3-0.7c-0.1,0-0.2-0.1-0.3-0.2c-2.9,0.7-5.8,1.7-8.7,2.4c-6.6,1.4-13.3,1.7-19.9,2.8 c-3.3,0.5-6.4,1.4-9.4,2.8c-2.7,1.3-5.2,3-7.7,4.7c-2.4,1.8-4.8,3.8-7.3,5.5c-2.5,1.8-5.1,3.4-7.8,4.8c-5.5,3-11.2,5.3-17.2,7.1 c-3,0.9-6,1.6-9,2.2c-2.2,0.4-4.5,0.6-6.8,0.8c-2.5,0.2-5.1,0.4-7.5,1.2c-2.4,0.8-4.1,2.5-5.6,4.5c-3.2,4.2-5.5,9.2-8.4,13.6 c-1.6,2.4-3.2,4.8-4.5,7.4c-1.4,2.8-2.1,5.6-2.6,8.6c-0.3,2.2-0.8,4.4-1.8,6.4c-0.9,1.8-2.2,3.3-3.7,4.7c-4.4,4.1-9.4,7.5-14.6,10.4 c-1.4,0.8-2.8,1.5-4.2,2.3c-1.3,0.7-2.6,1.3-3.8,2.1c-2.2,1.5-3.4,3.9-4.5,6.2c-1.1,2.3-2.2,4.6-3.8,6.6c-1.9,2.4-4.2,4.6-5.3,7.5 c-1.3,3.5-1.3,8.7-6.1,9.1c-0.6,0.1-1.2,0-1.8-0.1c0,1.4-0.1,2.8-0.1,4.3c0,1,0,2.1-0.7,2.9c-1,1.2-2.8,1-4.1,0.6 c-1.5-0.4-3-1.1-4.4-2c-1.9-1.2-4-1.4-6.1-0.7c-2.1,0.7-4,2.2-5,4.2c-0.1,0.1-0.2,0.2-0.3,0.2C252.8,459.2,253.2,459.5,253.5,460z"
        />
        <path
          fill={getColorByCarencias('LOS MEDIO')}
          data-tooltip-id="my-tooltip" 
          data-tooltip-content="Los Medio"
          onClick={handleNeighborhoodClick} 
          data-url-name="los-medio"
          className="st0"
          d="M570.2,899.6c-0.2-7.1-2.1-13.9-5.1-20.3c-1.7-3.7-3.8-7.1-5.8-10.6c-1.9-3.4-3.8-6.8-5.9-10.1 c-2.1-3.3-4.3-6.6-7.2-9.2c-2.6-2.4-5.5-4.4-8-6.8c-2.7-2.6-4.6-5.8-7-8.7c-2-2.4-4.2-4.6-6.7-6.6c-5-4-10.8-6.8-16.9-8.7 c-12.5-4-25.8-4.5-38.8-5.8c-6-0.6-12-1.3-17.9-2.1c-5.6-0.8-11.3-2-16.5-4.4c-4.7-2.1-9.2-5.4-11.4-10.3c-1.3-2.8-1.5-5.8-1.5-8.8 c0-3.4,0.5-7.2-1.1-10.4c-1.3-2.5-3.5-4-5.9-5.4c-2.7-1.6-5.5-2.9-8.3-4.2c-2.8-1.3-5.4-2.9-8.2-4.3c-3.5-1.8-7-3.4-10.1-5.7 c-2.5-1.9-4.9-4.3-6.3-7.2c-0.9-1.9-1.1-3.8-1.2-5.8c-0.6-6.6-3.1-12.7-5.1-19c-2.1-6.6-2.5-13.2-1-20c1.6-7.2,5.8-13.4,9.1-19.9 c1.7-3.4,3.2-6.8,3.9-10.6c0.4-2.3,0.9-4.4,1-6.7c0.1-2.2-0.1-4.4-0.1-6.5c0-2,0-4.1,0.6-6.1c0.5-1.6,1.2-3.2,1.9-4.7 c1.1-2.5,2.1-4.9,2.3-7.5c-0.2,0-0.4,0-0.7-0.1c-5.5-0.7-10.7-3.1-15.9-4.9c-4.3-1.5-8.8-2.2-13.2-3.5c-2.9-0.9-5.7-2.2-7.2-5 c-2-3.8-1.1-8.8-0.5-12.9c0.5-3.2,1.1-6.5,1.4-9.7c0.3-3.3,0-6.4-0.6-9.7c-0.5-2.9-1.1-5.7-1.4-8.6c-0.4-2.8-0.3-5.6-0.4-8.5 c-0.1-9.9-0.8-20.2-8-27.7c-3.4-3.6-7.6-6.5-12.5-7.6c-4.8-1.1-9.7-0.5-14.5,0c-9.4,1-19.9,0.1-28.2-4.7c-4-2.3-7.6-5.6-9.4-9.8 c-1.9-4.4-2.4-9.4-5-13.5c-3-4.7-7.9-7.7-12.6-10.5c-3.1-1.9-6.7-2.9-9.5-5.1c0,0.3-0.1,0.6-0.2,1c-0.6,4.7-0.8,9.5-2.5,14 c-1.6,4.1-4.2,7.6-6,11.5c-1.8,3.8-3.4,7.7-5.1,11.5c-1.8,3.8-3.8,7.4-6.6,10.6c-2.8,3.3-6.4,5.9-9.8,8.6c-3.2,2.6-6.4,5.3-9,8.5 c-1.4,1.7-2.7,3.5-3.8,5.5c-1.3,2.1-2.6,4.3-3.9,6.4c-2.6,4.4-5,8.8-7.3,13.3c-2.2,4.3-4.1,8.8-5.4,13.5c-1.1,4-1.9,8-2.9,12 c0.4,0,0.7,0.3,0.5,0.7c-0.6,1.5-1.3,3-1.8,4.5c-1,2.7-1.8,5.8-0.8,8.6c1.2,3.5,4.6,4.7,7.3,6.8c5.5,4.2,9,10.5,10.6,17.1 c1.9,7.4,1.4,15-1.1,22.2c-0.6,1.8-1.4,3.6-2.2,5.3c-0.9,1.9-2.1,3.6-2.8,5.5c-1.4,3.7-1.6,7.7-1.2,11.5c0.5,4.1,1.9,7.7,3.1,11.6 c1.3,4.3,2.8,8.6,4.2,13c1.4,4.2,2.5,8.5,3.9,12.7c1.2,3.5,3.6,6.7,3.7,10.5c0.1,1.9-0.4,3.8-0.9,5.6c-0.6,2.1-1,4.1-1.1,6.3 c-0.3,4.2,0.2,8.4,1.3,12.5c1.1,4.1,3.1,7.7,4.7,11.5c1.6,3.9,3,7.9,4.4,11.9c1.6,4.1,3.5,8,5.6,11.8c2,3.6,4,7.2,5.7,11 c2.9,6.3,5.1,13,5.4,20h55.6l5.1,4.5h5.1v5.1h4.5l5.1,5.1v5.1h5.1v1c1.7-0.5,3.5-1,5.3-1.4c9.9-2.2,21-3.5,31-1.4 c7.3,1.5,13,5.3,16,12.1c1.3,3,2.3,6.2,3.4,9.3c1.4,3.8,3.2,7.3,5.6,10.6c1.8,2.6,4.3,5.3,7.6,5.5c2.6,0.2,5.1-1.1,7.3-2.5 c5.1-3.3,9.6-7.7,15.4-9.7c2.8-0.9,6-1.3,8.8-0.5c2.4,0.7,4.2,2.7,5.6,4.6c4.5,6.1,6.9,13.7,9.4,20.7c2.5,7,5,14.1,8.3,20.7 c3.2,6.3,8.3,15.5,16.3,16.3c9.5,0.8,15.3-10,18.3-17.4c3.3-8.1,5.5-16.9,10.7-24.1c5.4-7.5,13.7-13.2,22.5-15.7 c9.4-2.6,19.6-2.4,29.1-0.6c9.3,1.7,17.5,6.2,25.2,11.6C568.5,898.3,569.4,898.9,570.2,899.6z"
        />
        <path
          fill={getColorByCarencias('GUACAL')}
          data-tooltip-id="my-tooltip" 
          data-tooltip-content="Guacal"
          onClick={handleNeighborhoodClick} 
          data-url-name="guacal"
          className="st0"
          d="M707.3,719.2c-1.4-4.2-2.3-8.6-3.4-13c-1.1-4.5-2.1-9.1-2.9-13.6c-0.7-3.8-1.1-7.6-2.1-11.4 c-0.9-3.3-2.3-6.6-4.6-9.2c-1.3-1.5-2.9-2.8-4.4-4.1c-1.7-1.4-3.3-2.8-5-4.1c-7.1-5.6-14.7-10.2-22.7-14.4c-1.9-1-3.8-2-5.7-3 c-1.9-1-3.8-2-5.5-3.3c-2.9-2.2-4.9-5.2-6.7-8.3c-1-1.6-1.9-3.2-2.9-4.8c-1.1-1.7-2.4-3.3-3.8-4.9c-2.7-3.2-5.5-6.1-8.5-9 c-5.9-5.6-12.2-10.7-18.5-15.8c-6.4-5.1-12.6-10.4-19-15.6c-6.4-5.1-12.8-10.4-17.8-16.9c-4.6-6-5.2-13.6-8.2-20.4 c-0.1-0.2,0-0.5,0.1-0.6c-0.8-0.7-1.5-1.5-2.1-2.4c-3.4-4.9-4-11.2-4.9-16.9c-0.8-5.6-1.6-12-5.9-16.1c-1.3-1.3-3-2.2-4.5-3.2 c-2-1.3-4-2.6-6-3.8c-4-2.5-8-5-12-7.6c-4-2.6-8-5.2-11.9-7.9c-3.6-2.5-7.2-5.1-10.5-8c-5.2-4.6-8.7-10.7-10.5-17.5 c-1-3.7-1.1-7.7-1.6-11.5c-0.5-3.8-1.3-7.8-3.2-11.1c-1.1-1.9-2.8-3.3-4.2-4.9c-1.3-1.4-2.2-2.9-2.8-4.6c-0.6-1.9-1.1-3.8-1.7-5.6 c-0.7-2.1-1.5-4.2-2.4-6.2c-1.9-4.3-4.1-8.4-5.9-12.7c-1.5-3.5-2.6-7.1-3.8-10.7c-2.2-6.3-4.8-12.6-8.8-18 c-3.9-5.4-9.3-9.4-15.7-11.1c0,1.5,0,2.9-0.1,4.4c-0.2,2.6-1,5-2.4,7.2c-1.3,2.3-3,4.4-4.3,6.7c-1.2,2.3-1.5,4.8-1.7,7.4 c-0.2,5.2,0.4,10.4,1.2,15.5c0.8,5,1.7,10,2.7,15c1,4.9,2.3,9.7,2.2,14.7c-0.2,6.1-1.8,12.2-3.1,18.1c-0.7,3.1-1.4,6.2-2.2,9.3 c-0.7,2.8-1.3,5.8-2.3,8.5c-1.8,4.5-4.9,8.4-6.9,12.9c-1.1,2.5-1.8,5.1-1.9,7.9c-0.1,3,0.9,5.9,0.9,8.9c0,5.8-3.2,11.2-4.9,16.6 c-1.5,4.8-2,10.1-2.3,15.1c-0.2,4.9-0.1,10,1.6,14.7c1.5,4,5.3,7.3,4.6,11.9c-0.6,4-2.7,8-4.5,11.5c-0.9,1.6-1.8,3.3-2.8,4.8 c-1.1,1.7-2.8,3.1-4,4.8c-1.4,2-1.2,5.2-0.8,7.5c0.4,2.2,1.1,4.4,0.9,6.7c-0.2,2.2-1.1,4.4-1.9,6.5c-0.9,2.2-1.8,4.5-3.2,6.5 c-1.2,1.8-2.3,2.5-4.4,2.9c-2.8,0.6-3.4,3.5-3.8,6c-0.6,3.8-0.7,7.6-1.1,11.4c-0.3,3.3-0.8,6.9-2.6,9.8c-1.5,2.3-3.6,3.3-6.1,3.4 c-0.1,2-0.6,3.9-1.4,5.8c-0.7,1.7-1.5,3.3-2.2,5c-0.8,2.1-1.1,4.2-1.2,6.4c-0.1,4.2,0.5,8.5-0.5,12.7c-0.8,3.6-1.7,7-3.2,10.3 c-1.5,3.4-3.4,6.6-5.1,9.8c-3.7,6.9-6.3,14.1-5.9,22.1c0.3,6.6,3.1,12.6,5,18.8c1,3.1,1.7,6.3,2,9.5c0.2,2.3,0.4,4.5,1.5,6.5 c4.1,7,12,9.6,18.7,13.4c5,2.9,10.6,4.9,15.4,8.1c2,1.3,3.7,3.1,4.6,5.3c1.2,3,1,6.5,0.9,9.7c0,3.3,0.2,6.6,1.8,9.6 c1.3,2.5,3.2,4.5,5.5,6.2c4.8,3.5,10.8,5.2,16.6,6.3c5.8,1.1,11.8,1.8,17.7,2.4c6.6,0.7,13.2,1.2,19.8,1.9c12.3,1.3,25.1,3.3,36,9.7 c5.4,3.2,10.1,7.6,13.8,12.7c1.3,1.8,2.5,3.6,4.1,5.2c1.1,1.2,2.4,2.3,3.7,3.3c2.8,2.3,5.6,4.4,7.9,7.2c4.8,5.8,8.4,12.6,12,19.2 c3.8,6.8,7.4,13.5,8.9,21.2c0.6,2.9,0.8,5.9,0.8,8.8c5.7,4.2,11.3,8.4,17.8,11.3c10.9,4.9,22.8,5.2,34.5,3.8 c6.3-0.7,12.6-1.9,18.9-2.7c4.6-0.6,9.3-1.2,14-0.6c3.8,0.5,7.5,1.7,10.8,3.5l0.4-0.4c-0.2-1.9-0.2-3.8-0.2-5.7 c0.2-10.4,2.9-20.6,5.2-30.6c1.1-4.8,2.4-9.8,2.6-14.7c0.1-4.4-0.7-8.8-1.8-13.1c-2-7.9-5.3-15.9-4.7-24.2c0.3-4.2,1.7-8.2,4.1-11.8 c2.8-4.2,5.5-8.3,8.2-12.6c10.7-17.2,20-35.6,25.9-55c1.7-5.7,3.2-11.5,4.2-17.4C710,726.4,708.5,722.8,707.3,719.2z"
        />
        <path
          fill={getColorByCarencias('SAN ISIDRO')}
          data-tooltip-id="my-tooltip" 
          data-tooltip-content="San Isidro"
          onClick={handleNeighborhoodClick} 
          data-url-name="san-isidro"
          className="st0"
          d="M735.1,550.3c-0.4-3.4-1-6.9-1.6-10.3c-1.1-7-2.1-14-3.1-21c-1-6.7-2.4-13.2-1.2-20c0.6-3.1,1.9-6.1,3-9.1 c0.6-1.6,1.1-3.1,1.5-4.7c-0.3-0.1-0.6-0.5-0.4-0.9c0,0,0-0.1,0.1-0.1c-5.6,0.2-10.8,3.2-16.5,2c-1.2-0.3-2.4-0.7-3.6-1.1 c-1.4-0.4-2.7-0.6-4.2-0.6c-2.5,0-4.9-0.1-7.3-0.3c-4-0.3-8.1-1.1-11.2-3.9c-1.8-1.6-3-3.7-4.2-5.8c-1.4-2.3-2.6-4.7-3.8-7.1 c-2.3-5-4-10.2-4.8-15.6c0-0.1,0-0.3,0.1-0.4c-0.3-1.5-0.5-2.9-0.7-4.4c-0.6-4-1-8.1-1.5-12.1c-0.5-3.9-1.3-7.7-1.8-11.6 c-0.4-3.2-0.5-6.4-0.2-9.5c0.1-0.6,0.1-1.2,0.2-1.9c0,0-0.1,0-0.1,0c-4.6,0.8-9.3,1-14,1.1c-2.4,0-4.7,0-7.1,0c-2.1,0-4.3,0-6.4-0.3 c-7.8-1.3-13.8-7-21.1-9.5c-9.1-3.1-18.5-5.6-28.1-6.7c-2.2-0.3-4.4-0.5-6.5-1.1c-2.1-0.5-4.1-1.3-6.1-2.2 c-3.7-1.6-7.4-3.7-10.6-6.3c-2.9-2.3-5.4-5-8.3-7.3c-2.7-2.1-5.8-4.2-9.3-4.2c-0.8,0-0.8-1.2,0-1.2c0,0,0.1,0,0.1,0 c0,0-0.1-0.1-0.1-0.2c-0.5-1.9-0.6-3.9-0.7-5.8c-0.1-2-0.5-4-1.6-5.7c-1.1-1.7-2.8-3.1-4.4-4.2c-3.4-2.5-7.2-4-10.9-6.1 c-3.7-2-7.3-4.4-10.5-7.1c-3.2-2.7-5.9-5.9-8.6-9.1c-5.2-6.2-11.4-11.7-19.1-14.7c-4.5-1.7-9.1-1.9-13.8-1.8c-2.3,0-4.7,0.1-7,0.1 c-1.8,0.1-3.5,0.3-5.2,0.2c-0.5,0-1-0.1-1.4-0.2c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0,0.1,0.1c0.1,0.1,0.1,0.1,0.2,0.2 c0.1,0.1,0.1,0.3,0.2,0.4c0,0,0,0.1,0,0.1c0.1,0.1,0.1,0.2,0.1,0.4c0,0,0,0.1,0,0.1c0,0,0,0,0,0c0,0,0,0,0,0.1 c-0.1,2.6,0.6,5.8-1.1,8c-1.2,1.6-2.8,2.8-4.3,4c-2.1,1.7-4.1,3.4-5.6,5.6c-3,4.3-3.3,9.9-6.4,14.1c-2.4,3.3-6.9,4.7-8.2,8.8 c-0.4,1.2-0.5,2.5-0.6,3.7c1.5,0.4,2.9,0.9,4.4,1.5c12.6,5.5,18.1,19.3,22.3,31.5c0.7,1.9,1.3,3.9,2,5.8c0.9,2.2,1.9,4.3,2.9,6.4 c2,4.1,3.9,8.2,5.6,12.4c1.5,3.7,1.8,8,4.3,11.1c1.3,1.6,2.9,3,4.2,4.7c1.1,1.4,1.8,3.2,2.4,4.9c1.3,3.7,1.7,7.6,2.2,11.5 c0.2,2,0.5,4,0.8,6c0.3,1.9,1,3.8,1.7,5.6c1.2,3.2,2.8,6.2,4.9,8.8c2.3,2.9,5.3,5.3,8.2,7.6c7.6,5.8,15.7,11,23.8,16.1 c4.1,2.6,8.2,5.2,12.3,7.8c2.7,1.8,5.1,3.4,6.8,6.2c3.1,5.1,3.5,11.4,4.4,17.2c0.9,5.8,2.2,12.1,6.9,16.1c0.4,0.4,0.1,0.9-0.4,1 c0.6,1.4,1.1,2.9,1.6,4.4c1.1,3.4,1.8,6.9,3.3,10.2c1.6,3.6,4.2,6.7,7,9.6c5.7,6,12.4,11,18.8,16.3c6.3,5.2,12.7,10.5,19.1,15.6 c6.3,5.1,12.5,10.4,18,16.3c2.8,2.9,5.5,6,7.7,9.4c2.1,3.2,3.7,6.6,6.1,9.6c2.6,3.2,6.2,5.1,9.8,7c3.8,2.1,7.7,4,11.5,6.2 c7.7,4.4,14.8,9.7,21.5,15.4c2.8,2.4,5.2,4.9,6.8,8.2c1.5,3.1,2.2,6.5,2.8,9.9c0.8,4.4,1.5,8.8,2.4,13.2c1,4.5,2.2,9,3.2,13.5 c0.9,4.1,2.3,8,3.8,12c0.4,1.1,0.8,2.1,1.2,3.2c0.6-3.4,1-6.9,1.4-10.4c0.5-5,0.4-10,1-15c0.5-4.7,1.5-9.4,2.9-14 c0.8-2.4,1.6-4.8,2.6-7.2c0.8-1.9,1.5-3.9,2.7-5.5c0.7-1,1.5-1.8,2.5-2.1c-0.2-0.7-0.4-1.5-0.6-2.2c-0.6-1.9-1.6-3.8-1.9-5.8 c-0.4-2.5,0.1-4.9,1-7.2c2.3-5.9,5.2-11.6,6.6-17.8c1.5-6.5,1.3-13.4,1.1-20.1c-0.2-6.7-0.6-13.3-0.6-20c0.2-13.4,4.3-26.3,4.9-39.6 C735.5,557.2,735.5,553.7,735.1,550.3z"
        />
        <path
          fill={getColorByCarencias('CERRO MANGO')}
          data-tooltip-id="my-tooltip" 
          data-tooltip-content="Cerro Mango"
          onClick={handleNeighborhoodClick} 
          data-url-name="cerro-mango"
          className="st0"
          d="M837,613.9c-1.4-0.8-1.4-3-1.3-4.4c0-0.9,0.1-1.7,0.2-2.6c0.2-1.3,0.1-2.7,0.1-4c0.1-3,0.2-6,0.2-9.1 c0-2.6-0.1-5.2-0.1-7.9c0-1.8,0.2-3.7,0.3-5.5c0.1-1.8,0.2-3.8-0.1-5.6c-0.1-0.7-0.4-1.4-0.9-1.9c-0.7-0.7-1.7-1.2-2.6-1.6 c-0.9-0.4-1.9-0.8-2.8-1.4c-1.1-0.6-2.1-1.3-3.1-1.9c-2.2-1.3-4.5-2.4-7-2.6c-2.2-0.2-4.3-0.5-6.4-1.2c-2.2-0.7-4.2-1.7-6.2-3 c-3.9-2.5-7.3-5.8-9.9-9.6c-1.2-1.9-2.3-3.9-3.1-6c-0.7-1.9-1.3-3.9-1.5-5.9c0,0-0.1,0-0.1,0.1c-0.2,0.1-0.3,0.1-0.5,0.2 c-0.1,0.2-0.3,0.3-0.6,0.2c-0.7-0.3-1.4-0.3-2.1-0.4c-1.5-0.1-3.2-0.1-4.7-0.6c-1.3-0.5-1.9-1.5-2.1-2.9c-0.2-1.6,0.1-3.1,0.1-4.7 c0-1.9-0.5-3.8-1-5.6c-2.2-7.5-6.5-14.6-6-22.6c0.1-0.9,0.3-2-0.3-2.8c-0.4-0.5-1.1-0.9-1.6-1.3c-1-0.6-2-1.2-3-1.7 c-3.8-2.2-7.7-4.3-11.2-6.9c-0.8-0.6-1.7-1.3-2.5-1.9c-0.5-0.4-1.1-0.8-1.7-0.9c-0.8-0.2-1.3,0.9-1.6,1.5c-0.8,1.5-1.6,3.1-2.7,4.4 c-0.6,0.8-1.5,1.7-2.5,1.1c-1.2-0.7-1.7-2.6-2.2-3.8c-0.7-1.5-1.4-3.1-2.4-4.5c-1.1-1.4-2.5-2.2-4.3-2.4c-1.4-0.1-2.9-0.1-4.3,0 c-0.1,0.6-0.3,1.2-0.4,1.8c-0.9,3-2.1,5.8-3.1,8.7c-1.2,3.2-1.8,6.4-1.8,9.9c0,3.5,0.4,7,1,10.4c0.6,3.5,1.1,6.9,1.6,10.4 c1,6.9,2.1,13.8,3.1,20.7c0.5,3.3,0.9,6.5,1,9.8c0,3.3-0.2,6.7-0.5,10c-0.7,6.7-2,13.2-3.1,19.8c-0.5,3.3-1.1,6.6-1.3,9.9 c-0.2,3.3-0.2,6.6-0.1,9.9c0.1,6.7,0.6,13.4,0.6,20.1c0,6.4-0.4,12.9-2.4,19.1c-0.9,3-2.1,5.8-3.3,8.7c-1.2,2.9-2.8,5.9-3.2,9 c-0.3,2.2,0.3,4.2,1.1,6.2c0.6,1.6,1.2,3.2,1.5,4.9c0.3,0,0.7,0.1,1,0.3c2,0.9,3.4,3.1,4.8,4.6c1.7,1.9,3.7,3.8,6.2,4.5 c3.4-2.5,5.4-6.5,8.8-9c1.6-1.2,3.3-2.3,4.9-3.7c1.7-1.4,3-3.1,4.1-5c2.3-3.8,4.4-7.8,7.3-11.2c1.4-1.6,2.8-3.2,4.2-4.8 c1.5-1.7,2.8-3.6,4-5.5c2.4-3.7,4.6-7.5,6.9-11.3c1.1-1.8,2.3-3.6,3.6-5.3c1.2-1.7,2.6-3.4,3.8-5.1c1.3-2,2.3-5.3,5.1-5.6 c2.1-0.2,4.4,0.6,6.4,1.2c2.5,0.8,5.1,1.8,7.4,3c0.9,0.5,2.2,1.2,3.1,2.2c3.5-3.3,9-4.1,13.5-5c3.4-0.7,6.9-1.4,10.3-2 c2.3-0.4,4.6-0.8,6.8-1.4C837.7,614.2,837.3,614.1,837,613.9z"
        />
        <path
          fill={getColorByCarencias('SAN ANTONIO')}
          data-tooltip-id="my-tooltip" 
          data-tooltip-content="San Antonio"
          onClick={handleNeighborhoodClick} 
          data-url-name="san-antonio"
          className="st0"
          d="M890.8,681.7c-2-0.8-3.9-1.8-5.8-2.8c-3.2-1.7-6.7-2.8-10.2-3.7c-3.5-0.9-7-1.5-10.6-2.2 c-3.7-0.7-7.3-1.5-11-1.7c-3.6-0.2-7.2,0-10.8,0.7c-4,0.7-8,1.5-12,2c-7.3,1.1-14.7,2-22,3.2c-2.5,0.4-5.1,0.7-7.6,0.8 c-2.5,0.1-5,0-7.4-0.7c-1.8-0.6-4.6-2.1-3.9-4.4c0.4-1.2,1.4-2.2,2.3-3c1.3-1.3,2.3-2.7,3.2-4.2c3.9-6.5,6.3-13.8,7.3-21.4 c0.9-6.9-0.2-14.5,4.2-20.4c0.1-0.1,0.2-0.3,0.3-0.4c-0.3-0.4-0.7-0.7-1-0.9c-1.1-0.8-2.4-1.4-3.6-2c-2.4-1.1-5-2-7.6-2.7 c-1-0.3-2.1-0.5-3.1-0.5c-1.1,0-1.8,0.3-2.4,1.2c-0.9,1.3-1.6,2.8-2.5,4.1c-1.1,1.7-2.5,3.3-3.6,4.9c-2.5,3.5-4.7,7.2-6.9,10.9 c-2.1,3.5-4.3,7.2-6.9,10.4c-2.7,3.4-5.8,6.3-8.1,10c-1.2,1.9-2.3,3.8-3.5,5.8c-0.9,1.6-1.9,3.2-3.1,4.6c-2.4,2.7-5.7,4.3-8.3,6.7 c-2.4,2.4-4.3,5.3-6.9,7.5c0,0.3-0.3,0.7-0.7,0.6c-0.1,0-0.2,0-0.3-0.1c0,0,0,0,0,0c-1.2-0.3-2.3-0.8-3.3-1.5 c-2.2-1.5-3.8-3.5-5.6-5.5c-1-1.1-2.8-3.3-4.5-2.3c-1.2,0.7-1.9,2.2-2.5,3.4c-1.1,2.3-2,4.7-2.9,7.1c-1.6,4.5-2.8,9-3.6,13.7 c-0.8,5-0.9,10.1-1.2,15.1c-0.3,4.9-0.9,9.7-1.7,14.5c-1.7,9.8-4.3,19.3-7.7,28.7c-6.8,18.6-16.3,36.1-27.2,52.7 c-2.6,3.9-5.6,7.6-6.9,12.2c-1.2,4-1.1,8.2-0.4,12.2c1.3,8.2,4.7,16,5.7,24.3c0.6,4.5,0.1,8.7-0.7,13.1c-1,5-2.2,10-3.3,14.9 c-2,9-3.9,18.2-3.4,27.5l0.8-0.9l10.2-5.1h54l10.2,5.1v5.1l3.5,3.1c4.6-0.3,9.2-0.8,13.7-1.8c8.1-1.6,15.9-4.5,22.9-9 c4-2.5,7.6-5.6,11.1-8.7c3.7-3.2,7.3-6.5,10.9-9.8c3.7-3.4,7.4-6.9,11.1-10.3l-3.8-3.4v-10.2h-4.5v-9.7l4.5-5.1v-10.2h5.1v-4.5h5.1 l5.1-5.1h4.5l5.1-5.1v-15.3h5.1l5.1-4.5h4.5l5.1-5.1v-10.2l5.1-4.5v-5.1h5.1v-10.2h4.5v-19.9h-4.5v-4.5h4.5v-10.2h5.1v-25h10.2v-4.5 h-5.1V704l5.1-5.1h4.5v-14.8L890.8,681.7z"
        />
        <path
          fill={getColorByCarencias('VEGA DE PLAZA')}
          data-tooltip-id="my-tooltip" 
          data-tooltip-content="Vega De Plaza"
          onClick={handleNeighborhoodClick} 
          data-url-name="vega-de-plaza"
          className="st0"
          d="M916.9,616c-6.1-0.4-12.1-0.3-18.2-0.3c-2.1,0-4.2,0-6.3,0.1c-1.8,0-3.7,0-5.5-0.6c-1.5-0.5-2.7-1.4-3-3.1 c-0.3-1.9,0.1-4,0.5-5.9c1-5,1.6-10.1,2.8-15.2c1.3-5.4,3-10.6,4.9-15.7c1.1-2.7,3.2-7-0.2-8.9c-2.2-1.3-5.1-1.5-7.6-1.8 c-2.8-0.2-5.6-0.3-8.5-0.4c-3-0.1-6,0-8.9,0.5c-0.9,0.2-1.9,0.4-2.6,1c-0.6,0.5-1,1.2-1.4,1.9c-1.1,2.1-2.3,4.3-3.2,6.5 c-1.2,2.7-2.1,5.4-3,8.2c-0.8,2.7-1.6,5.4-2.5,8.1c-0.7,2.1-1.5,4.1-2,6.2c-0.8,3.6-1.1,7.5-2.6,10.9c-0.7,1.7-1.8,3.2-3.2,4.3 c-1,0.8-2,1.3-3.1,1.7c0,0.2-0.1,0.4-0.4,0.5c-1.8,0.7-3.6,1.2-5.4,1.6c-3.7,0.8-7.4,1.3-11.1,2c-2.9,0.5-5.8,1.2-8.7,1.8 c-2.7,0.6-5.4,1.3-7.8,2.7c-2.7,1.6-4.2,4.4-5.1,7.3c-1,3.3-1.1,6.8-1.2,10.2c-0.2,3.6-0.7,7.1-1.4,10.6c-0.8,3.6-1.9,7.1-3.4,10.4 c-0.8,1.7-1.6,3.3-2.5,4.9c-0.9,1.5-1.8,3-3,4.3c-0.9,1-2.1,1.9-2.7,3.1c-0.6,1.1,0.3,2,1.2,2.5c2,1.2,4.5,1.4,6.7,1.4 c5.3,0.1,10.5-1,15.7-1.8c8-1.2,16.1-2.1,24-3.5c3.6-0.6,7.1-1.4,10.8-1.5c3.4-0.1,6.8,0.2,10.1,0.8c3.6,0.6,7.3,1.4,10.9,2.1 c3.4,0.7,6.7,1.5,10,2.6c3.1,1.1,5.9,2.6,8.8,4l-0.5-0.5l4.5-5.1v-4.5h5.1v-10.2l5.1-5.1v-19.9h5.1v-4.5h4.5l5.1-5.1h5.1v-7.9 C921,616.3,919,616.1,916.9,616z"
        />
        <path
          fill={getColorByCarencias('EL CERRO')}
          data-tooltip-id="my-tooltip" 
          data-tooltip-content="El Cerro"
          onClick={handleNeighborhoodClick} 
          data-url-name="el-cerro"
          className="st0"
          d="M968,449.9v-49.4h-5.1v-30.1h-14.8V355l4.5-4.5v-15.3l-4.5-4.5v-5.1h4.5v-14.8l-4.5-5.1v-14.8H943v-5.1h-5.1 v-14.8h5.1V251h-5.1v-5.1h-9.7v-5.1l-5.1-5.1v-4.5h-8.9c0,0.6-0.1,1.2-0.2,1.8c-1.2,8.4-7.6,15.3-8,23.9c-0.2,4,1.5,8.2-0.7,11.9 c-0.5,0.9-1.3,1.7-2.1,2.4c-0.8,0.7-1.8,1.1-2.8,1.4c-1,0.3-2,0.6-2.8,1.4c-0.6,0.7-1,1.6-1.4,2.4c-0.9,2-1.7,3.9-2.6,5.8 c-1.3,2.6-2.5,5.3-3.7,7.9c-2.4,5.3-4.7,10.7-7,16c-1.9,4.4-3.8,8.8-6.4,12.9c-2.3,3.7-5.2,6.9-8.8,9.4c-1.9,1.3-4,2.3-6.1,3.4 c-2,1.1-3.5,2.6-5.1,4.3c-2.5,2.7-5.9,6.3-10,5.2c-1-0.2-2.1-0.4-3.1-0.8c-1.6-0.6-3.2-1.3-4.8-1.9c-1.6-0.6-3.2-1-4.9-1.3 c-3.6-0.7-7.3-1.4-11-1.1c-1.9,0.1-3.8,0.6-5.5,1.3c-1.6,0.6-2.9,1.6-4.3,2.6c-1.2,0.9-2.4,1.8-3.8,2.4c-1.4,0.6-2.9,0.7-4.4,0.5 c-3.1-0.3-6.2-1.1-9.1-2.4c-1.3-0.6-3-1.6-4.5-0.9c-1,0.5-1.7,1.8-2.2,2.8c-1.2,2.4-1.8,5-2.8,7.4c-1.6,3.5-2.8,7.2-4.4,10.7 c-1.6,3.4-4,6.4-6.1,9.5c-2.1,3.1-3.6,6.5-4.8,10.1c-1.2,3.5-2.2,7.1-3.6,10.5c-1.5,3.5-3.5,6.7-5.1,10.1c-1.7,3.5-3.3,7.1-4.8,10.6 c-1.5,3.6-3.2,7.2-4.2,11c-0.9,3.7-1.4,7.5-2.2,11.3c-0.8,3.8-2.1,7.4-3.5,11c-1.4,3.6-2.9,7.1-4.5,10.6c-1.5,3.2-2.8,6.4-3.7,9.8 c-0.8,3.4-1.4,6.8-2,10.2c-0.5,2.6-1,5.2-2,7.6c0.3,0,0.6,0,0.9,0c1.9-0.1,4.1-0.2,5.9,0.6c1.5,0.7,2.6,1.9,3.4,3.2 c0.9,1.4,1.6,3,2.2,4.6c0.3,0.7,0.6,1.6,1.1,2.2c0.3,0.4,0.4,0.3,0.8,0c0.6-0.5,1-1.3,1.4-2c0.5-0.8,0.9-1.5,1.4-2.3 c0.5-0.8,0.9-2,1.8-2.5c1-0.5,2,0,2.8,0.6c1.8,1.1,3.4,2.6,5.2,3.8c3.7,2.5,7.6,4.5,11.4,6.8c1.1,0.7,2.6,1.4,3.1,2.7 c0.4,1,0.2,2.1,0.1,3.1c-0.5,8.2,4.2,15.4,6.2,23.1c0.4,1.7,0.8,3.5,0.8,5.3c-0.1,1.5-0.4,3.2,0,4.7c0.4,1.5,2,1.6,3.3,1.7 c1.4,0.1,2.9,0.1,4.2,0.5c0.1-0.1,0.2-0.1,0.3-0.1c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0c0.2-0.1,0.3-0.2,0.5-0.3c0.1,0,0.1,0,0.2-0.1 c0-0.2,0-0.4,0-0.6c0.1-0.8,1.2-0.8,1.2,0c-0.2,2.7,0.6,5.2,1.6,7.7c1.6,4.3,4.4,8.1,7.8,11.2c3.4,3.1,7.6,5.6,12.1,6.8 c1.1,0.3,2.2,0.5,3.3,0.6c1.2,0.1,2.4,0.2,3.5,0.5c2.3,0.6,4.4,1.8,6.4,3c1,0.6,2,1.3,3,1.8c0.9,0.4,1.8,0.8,2.7,1.3 c1.5,0.8,2.7,1.9,3.1,3.6c0.4,1.8,0.3,3.7,0.3,5.5c-0.1,1.9-0.3,3.8-0.3,5.7c-0.1,2.4,0.1,4.8,0.1,7.2c0,3-0.1,6.1-0.1,9.1 c0,1.4-0.1,2.8-0.1,4.3c0,0.9-0.2,1.8-0.2,2.7c-0.1,1.1-0.4,3.9,1.1,4.2c1.6,0.4,3.5-0.1,5-0.6c1.7-0.5,3.3-1.7,4.3-3.1 c2.3-3,2.7-6.9,3.4-10.4c0.3-1.8,0.7-3.7,1.3-5.5c0.8-2.5,1.7-5,2.5-7.5c1.7-5.4,3.3-10.9,5.9-15.9c0.8-1.6,1.5-3.4,2.7-4.7 c1.4-1.5,3.4-1.8,5.4-2c2.9-0.3,5.8-0.3,8.7-0.2c2.8,0.1,5.5,0.2,8.3,0.5c3.4,0.4,9.2,1,9.6,5.4c0.2,1.6-0.4,3.3-1,4.8 c-0.8,2.2-1.7,4.3-2.4,6.5c-1.9,5.4-3.3,11-4.4,16.6c-0.5,2.5-0.8,5.1-1.3,7.6c-0.4,2-0.9,4-0.9,6c0,0.8-0.1,1.7,0.4,2.3 c0.4,0.6,1.2,1,1.9,1.2c1.7,0.6,3.6,0.6,5.4,0.5c10.1-0.1,20.2-0.3,30.2,0.8v-1.1l5.1-4.5l-5.1-5.1h5.1v-30.1h-5.1v-30.1l5.1-4.5 v-5.1l4.5-5.1v-5.1l5.1-4.5l5.1-5.1v-5.1h5.1l4.5-5.1h5.1l5.1-4.5l5.1-5.1v-19.9l-5.1-5.1v-14.8L968,449.9z"
        />
        <path
          fill={getColorByCarencias('LLANO HONDO')}
          data-tooltip-id="my-tooltip" 
          data-tooltip-content="Llano Hondo"
          onClick={handleNeighborhoodClick} 
          data-url-name="llano-hondo"
          className="st0"
          d="M470.9,318.4c-0.9-1.2-1.1-2.6-1.3-4c-0.4-3.2,0.2-6.4-0.3-9.6c-0.7-4.1-2.4-7.8-4.5-11.4 c-2.2-3.7-4.6-7.2-6.9-10.8c-2.6-3.9-5.4-7.7-7.8-11.8c-2.1-3.6-3.6-7.5-4.7-11.5c-2.2-8.4-2.5-17.1-3.5-25.6 c-1-8.7-6.5-15.6-11-22.7c-1.9-3-3.9-6-6.3-8.6c-1.6-1.7-3.5-3.3-5.7-4.2l-2.8,2.8v5.1l-5.1,5.1l-14.8,9.7h-14.8l-14.8,14.8h-5.1 l-5.1,5.1h-14.8v5.1h-14.8v5.1h-5.1l-5.1,4.5v5.1l-9.7,5.1l-5.1,5.1l-10.2,9.7l-9.7,10.2l-5.1,4.5v5.1l-5.1,5.1l-4.5,5.1l-10.2,4.5 l-5.1,5.1l-4.5,5.1v25l-5.1,4.5v5.1h-5.1v5.7l-9.7,4.5v5.1l-2.3,2.3c-0.4-0.4-0.8-0.8-1.4-0.9c-1.4-0.2-2.8,0.9-3.9,1.5 c-2.1,1.2-4.6,1.8-7,1.4c-1.4-0.2-2.8-0.7-4.2-1.2l-0.4,0.2v5.5l-4.9,5.5v5.5h-5.5v4.9h-5.4c0.8,1.2,1.5,2.4,2.2,3.6 c1.3,2.1,2.5,4.3,3.9,6.3c1.6,2.2,3.5,4.2,5.7,5.8c2,1.6,4.2,3,6.4,4.4c1.1,0.7,2.2,1.4,3,2.3c0.8,0.9,1.4,1.9,2.1,2.9 c0.7,1,1.4,1.9,2.5,2.4c1.2,0.6,2.6,0.6,3.9,0.8c2.5,0.4,4.3,2,5.2,4.3c0.6,1.6,0.6,3.2,1.1,4.8c0.6,2,2.4,2.6,4.3,2.8 c0.5,0.1,0.5,0.5,0.4,0.8c1.3,0.2,2.6,0.2,3.9,0.2c3.1-0.1,6.2-0.8,9.1,0.7c0.7,0.4,1.7,0.8,2.1,1.6c0.3,0.6,0.2,1.2,0.2,1.8 c-0.1,1.2,0,2.3-0.1,3.5c-0.1,1.6-0.3,3.3,0.2,4.9c0.3,1.1,1.1,2,2,2.7c0-0.1,0-0.2,0.1-0.3c1.1-2.3,3.2-4,5.6-4.9 c2.1-0.8,4.5-0.9,6.6,0c1.6,0.7,3,1.7,4.6,2.3c1.1,0.4,3.3,1.2,4.3,0.2c0.7-0.8,0.5-2.2,0.5-3.1c0-1,0-2.1,0.1-3.1 c0.4,0.2,0.8,0.3,1.2,0.4c2.5,0.4,4.2-1.1,4.9-3.3c0.7-2.1,1-4.4,2.1-6.4c1.3-2.4,3.2-4.4,4.9-6.5c3.2-4,4-9.7,8.2-12.8 c1.3-0.9,2.7-1.6,4.1-2.3c1.3-0.7,2.6-1.4,3.9-2.1c2.7-1.5,5.4-3.1,8-5c2.4-1.7,4.8-3.6,7-5.7c1.5-1.5,2.8-3.1,3.6-5 c1-2.5,1.2-5.1,1.7-7.7c0.5-2.7,1.6-5.2,2.9-7.6c1.4-2.5,3.1-4.8,4.6-7.3c1.4-2.3,2.8-4.6,4.1-7c2.3-3.9,4.9-8.8,9.4-10.4 c4.5-1.6,9.4-1.1,14-2c6.2-1.2,12.3-3,18.2-5.3c5.8-2.4,11.4-5.4,16.5-9c5-3.5,9.5-7.7,15.1-10.3c5.8-2.7,12.2-3.3,18.6-4 c3.4-0.4,6.9-0.8,10.3-1.5c3.4-0.7,6.7-2.1,10.2-2.7c0.4-0.1,0.7,0.2,0.7,0.5c1.9,0.3,3.8,0.8,5.7,1c1.8,0.2,3.5-0.1,5.1-0.8 c1-0.4,1.9-0.9,3-1.2c0.9-0.3,1.8-0.6,2.7-0.8c3-0.9,6.4-1.6,9-3.5C471.5,319.1,471.2,318.8,470.9,318.4z M227.6,382.6 c-0.3,0.2-0.5,0.4-0.8,0.7c-0.1-0.3-0.2-0.7-0.2-1C226.9,382.3,227.3,382.4,227.6,382.6z"
        />
      </svg>
    </div>
  )
}

export default ValleDeSanJose