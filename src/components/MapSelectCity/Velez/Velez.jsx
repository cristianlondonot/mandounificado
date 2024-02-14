import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Tooltip } from 'react-tooltip'
import '../../../App.sass'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'


const Velez = ({departamento, municipio, filterMap}) => {
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
        viewBox="0 0 419.7 1080"
        style={{
          strokeWidth: '2px',
          stroke: '#fff',
          enableBackground: "new 0 0 419.7 1080",
        }}
        xmlSpace="preserve"
      >
        <g>
          <path
            fill={getColorByCarencias('ACO DE PEÑA')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="Aco De Peña"
            onClick={handleNeighborhoodClick} 
            data-url-name="aco-de-peña"
            className="st0"
            d="M273.5,990.2c7,9-0.3,16.8-3,24.3c-3.9,11-10,21.2-15.2,31.7c-2.4,4.9-5,9.8-7.5,14.8c-0.8,0-1.7,0-2.5,0 c1.1-9.9,3-19.2,11.8-25.7c4.1-3,6.4-7.2,1.5-12.2c-2.2-2.3-3.4-5.6-4.9-8.5c-0.4-0.7-0.4-2.1,0.1-2.7c4.3-5.5,1.3-9.1-2.7-13.2 c-2.2-2.2-3.3-5.7-4.1-8.8c-1-3.9-1.4-7.9-1.9-11.9c-0.2-1.8,0-3.7,0-5.5c0.7-0.5,1.4-0.9,2.2-1.4c0.4,1.1,1.2,2.2,1.3,3.3 c0.3,6.3,5.8,7.6,9.8,9.8c4.7,2.7,10.2,4.2,15.3,6.2L273.5,990.2z"
          />
          <path
            fill={getColorByCarencias('ZARANDAS')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="Zarandas"
            onClick={handleNeighborhoodClick} 
            data-url-name="zarandas"
            className="st0"
            d="M176.6,720.5c2.8-0.5,6.1-0.9,9.4-1.7c3-0.7,6-1.5,8.7-2.7c1.8-0.8,4.4-2.3,4.5-3.7 c0.7-10.4,8.9-16.7,13.1-25.1c1.3-2.5,3-4.8,4.7-7.6c2.7,5.8,6.7,10.1,13.8,10.1c1.1,0,2.6,0.8,3.1,1.6c8.9,15.4,23.8,21,40,24.2 c6.7,1.3,13.6,1.9,20.3,2.8c-1.3,1.7-2.4,3.5-6.3,1.5c-9.2-4.9-21.3,3.8-21.2,14.4c0,2.2-1.6,4.4-2.6,6.6c-2.3,5.6-5,11-6.8,16.8 c-1.4,4.2-3.3,5.8-7.9,5.7c-7.4-0.2-13.2-4-19.3-7.4c-5.9-3.3-12.1-6.3-18.2-9.4c-0.7-0.4-1.9-0.9-2.3-0.6 c-5.5,3.7-13.4,3.1-17.4,9.8c-1.3,2.2-3.9,4.1-6.3,4.9c-1,0.3-3.1-2.8-4.6-4.5C171.7,745.6,166.9,734,176.6,720.5z"
          />
          <path
            fill={getColorByCarencias('PUERTO RICO')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="Puerto Rico"
            onClick={handleNeighborhoodClick} 
            data-url-name="puerto-rico"
            className="st0"
            d="M61.1,17.6c3,1,6,2.1,10.3,3.6c1-1.4,2.8-3.9,4.9-6.8c3.9,0.7,3.1,4.1,2.6,6.9c-1.4,7.5-3.2,15-4.7,22.6 c-1,5,3.1,8.4,8.3,7.1c5.3-1.3,10.5-2.5,15.8-3.6c7-1.4,12,1.1,16.5,6.8c1.8,2.3,5.1,3.4,7.3,4.7c1.6,3.8,2.2,9.2,5.1,10.9 c3,1.8,8.1-0.1,12.9-0.4c-10.4,21.7-29.2,33.4-49.1,45c-0.4-2.6-1.2-5.5-1.2-8.5c-0.1-6.1-1.8-7.1-7.8-7 c-10.1,0.1-16.5,7.3-25.6,11.5c-1.3-6.9-2.2-13.9-4-20.6C50.6,84,50,79.2,53,73.2c2.7-5.6,2.3-12.7,3.2-19.2 C57.7,42.4,59.3,30.8,61.1,17.6z"
          />
          <path
            fill={getColorByCarencias('EL GAITAL')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="El Gaital"
            onClick={handleNeighborhoodClick} 
            data-url-name="el-gaital"
            className="st0"
            d="M279.3,724.7c-2.4,7.7-4.3,14.8-7,21.6c-2,5.1-5.3,9.6-7.3,14.6c-2.6,6.7-3.5,14.3-7.1,20.4 c-3.2,5.5-9.1,9.4-13.4,14.4c-6.7,7.8-13.7,15.5-19.5,23.9c-7.5,10.9-14.1,22.6-20.9,34c-1.1,1.8-1.3,4.1-2.1,6.7 c-7.3-6.3-16.1-6.5-23.8-6.3c-4.4-3.4-8.4-6.3-12-9.7c-1.6-1.5-3.1-3.9-3.4-6c-0.6-4.9-0.8-9.9-0.3-14.8c0.1-1.4,2.7-3.7,4.3-3.8 c3.6-0.2,7.3,0.7,11,1.1c8.5,1,12.6-1.9,15.5-9.5c1.1-2.8,4-6,6.7-6.9c6.3-2,8-7,11.2-11.8c6.3-9.6,5.8-21.1,10.8-31 c2-3.8,3.1-4.8,7.2-2.1c7.3,4.7,14.9,9.6,24.3,7c2.2-0.6,4.7-2.8,5.7-5c3.5-7.1,6.4-14.4,9.5-21.6c0.7-1.7,1.6-3.5,1.5-5.2 C269.9,727.4,270.3,726.8,279.3,724.7z"
          />
          <path
            fill={getColorByCarencias('LA TABLONA')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="La Tablona"
            onClick={handleNeighborhoodClick} 
            data-url-name="la-tablona"
            className="st0"
            d="M213.2,161.6c-0.9-7.2-1.7-14.1-2.7-22.1c6.4,3.1,11.6,4.7,15-2.8c6.8,1.8,13.6,3.7,20.3,5.4 c1.2,0.3,2.5,0.2,3.7,0c2.4-0.4,6.2-2.1,6.8-1.3c4,5.2,8.4,10.6,10.6,16.7c1.6,4.6,1.6,9.5,6.3,12.4c0.7,0.4,1.1,1.6,1.4,2.5 c1.5,4,3,8,5,13.3c-2.5,4.4-6,10.6-9.5,16.8c-1.7,3-3.1,4.7-6.3,1c-3.2-3.7-7.8-4-12.6-4.3c-7.6-0.5-15.2-2.6-22.8-3.9 c-9.6-1.6-19.3-2.5-28.7-4.7c-5.4-1.2-10.4-4.2-15.6-6.4c0-0.8,0-1.6-0.1-2.4c5.8-1.6,11.7-3.1,17.5-4.7c1.6-0.4,4.1-1.2,4.3-2.1 c0.8-4,0.8-8.2,1.2-12.7C209.1,162.2,211,161.9,213.2,161.6z"
          />
          <path
            fill={getColorByCarencias('EL RECREO')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="El Recreo"
            onClick={handleNeighborhoodClick} 
            data-url-name="el-recreo"
            className="st0"
            d="M199.4,514.8c2.9,2.4,5.5,4.2,7.7,6.3c2.3,2.2,4.8,4.5,6.1,7.4c4.7,10.1,8.8,20.3,4.2,31.8 c-0.7,1.7-0.6,4.1,0.2,5.7c2.1,4.6,3.4,8.5,0.8,13.8c-2,3.9-1.6,8.3-8.1,6.8c-1.4-0.3-4.3,2-5.2,3.8c-3.3,5.9-9.2,7.1-14.7,8.8 c-5.1,1.6-8.8,3.6-6.7,11.2c-7.2-7.4-13-3.6-20.4-0.1c2.2-7.3,3.6-13.6,6.1-19.3c2.1-4.7,4.9-8.5,1-13.9c-2.6-3.6-3.6-8.3-4.9-12.7 c-0.4-1.2,0.3-3.2,1.2-4.3c3.8-4.5,8.4-8.5,11.8-13.3c3.6-5.1,6.1-11,9.5-16.2C191.6,524.8,195.9,519.4,199.4,514.8z"
          />
          <path
            fill={getColorByCarencias('CAÑO BONITO')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="Caño Bonito"
            onClick={handleNeighborhoodClick} 
            data-url-name="caño-bonito"
            className="st0"
            d="M161.8,69.2c0.3,5.7-4.2,12,2.1,15.9c2.3,1.4,6.2,0.2,9.4,0.2c-1.6,6.7-2.2,14.8-9.5,20.5 c-5.4,4.2-10.3,9.3-14.7,14.5c-2.2,2.6-4,6.4-4.2,9.7c-0.5,8.4-5.3,14-12.3,15.7c-7.3,1.8-10.7,5.8-13,12c-0.3,0.9-1,1.7-2.2,3.8 c-5.8-11.8-11.9-22.4-16.2-33.7c-1.8-4.8-0.8-10.2-9.7-8.1c0.3-0.7,0.5-1.4,0.8-2.1c6.8-4.6,13.7-9.1,20.5-13.7 c4.1-2.8,9-4.9,12.2-8.5c6.3-7.3,11.6-15.5,17.6-23.2c1.1-1.4,3.1-2.8,4.8-2.9C152,68.9,156.6,69.2,161.8,69.2z"
          />
          <path
            fill={getColorByCarencias('CUBA')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="Cuba"
            onClick={handleNeighborhoodClick} 
            data-url-name="cuba"
            className="st0"
            d="M147.7,667.9c7,0.5,13.8,1.6,18.8-5.6c1.3-1.9,5.5-1.9,8.4-2.9c0.2-2.3,0.3-4.3,0.4-5.5 c11.2-5.8,21.9-11.4,32.5-17c0.5,0.3,1,0.7,1.5,1c-4.7,13.7,2.7,24.9,5.9,37.5c-5.2,12.1-16.5,21.9-19.2,35.8 c-5.8,1.6-11.7,3.1-18.8,5c-1.5-4.6-3-9.3-4.6-14c-0.8-2.5-1.1-6.4-2.8-7.1c-9.9-4.2-8.1-15.8-14.6-22 C153,671.2,150.2,669.7,147.7,667.9z"
          />
          <path
            fill={getColorByCarencias('QUEBRADA LARGA')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="Quebrada Larga"
            onClick={handleNeighborhoodClick} 
            data-url-name="quebrada-larga"
            className="st0"
            d="M198.7,172.9c-2.4,0.6-5.8,1.4-9.1,2.5c-2.6,0.9-5,2.1-7.5,3.3c-0.8,0.4-2.1,1.4-2.1,1.9 c1,7.7-7.4,12.2-6.3,20.3c0.6,4.5-6.4,7.2-10.6,5.1c-6.3-3.3-12.5-6.3-12.4-15.3c7.8,2.2,8.4-5.1,11.1-9.6c1.8-3-0.2-5.1-3.7-4.9 c-1.8,0.1-3.5,0.8-5.9,0.9c13.3-5.8,10.6-18.4,12.6-28.8c0.2-1.2-2.1-2.8-3.8-4.9c0.1-0.4,0.4-2,0.6-2.9c9.7,1.6,16.6-3.5,23.4-8.8 c0.8-0.6,2.4-0.4,3.6-0.6c4.4-0.9,8.3-2.2,11.4-6.1c3.9-4.7,9.2-7.8,17.3-7.5c-1.4,4.7-2.2,9.3-4.2,13.2c-1.8,3.5-5,6.2-8.1,10 c0.4,0.9,1.6,3.1,2.6,5.1c-2.2,2.4-4.1,4.5-6.4,7c3.1,1.4,5.5,2.6,6.9,3.2C205,161.7,202,167,198.7,172.9z"
          />
          <path
            fill={getColorByCarencias('VISTA HERMOSA')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="Vista Hermosa"
            onClick={handleNeighborhoodClick} 
            data-url-name="vista-hermosa"
            className="st0"
            d="M172.1,209.2c0.8-0.9,2-2.3,3.2-3.6c1.9-2,3.7-3.4,2.5-7.2c-1.6-5.4,4.2-9.9,9.9-8.3c10.7,2.9,21.3,6,32,8.8 c2.1,0.5,4.5-0.7,6.6-0.2c4.4,1,8.6,2.9,13,3.7c4.3,0.8,8.7,0.4,13,1.1c3.4,0.5,6.6,1.7,10.3,2.7c-6.2,12.2-18.9,18.8-19.1,32.6 c-6-0.5-11.7-0.6-17.3-1.6c-7.3-1.3-14.4-2.1-20.7-7.9c-6.3-5.7-15-8.7-22.6-13C179.4,214.1,176,211.6,172.1,209.2z"
          />
          <path
            fill={getColorByCarencias('ABSINIA')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="Absinia"
            onClick={handleNeighborhoodClick} 
            data-url-name="absinia"
            className="st0"
            d="M145.6,749.8c-0.3,10.8,4.8,17.8,11.7,23.3c4.4,3.5,9.8,6.5,15.2,8.1c11.3,3.4,22.9,5.7,35.5,8.8 c0.8,4.4-2.4,8.4-7.9,10.7c-5.2,2.2-9.4,4.3-10.3,11c-0.7,5.7-6.2,5.4-10.6,5.2c-5.8-0.2-11.5-1-17.8-1.6 c2.7-9.6-5.8-14.2-11.5-20.3c-2.2-2.3-5.2-4-7-6.6c-4.8-6.8-12.2-9.8-18.9-14.1c-3.1-2-6.9-6.4-6.6-9.3c0.4-4.1,5.2-5.5,9.9-4.5 c4.8,1,8.8-0.3,11.7-4.7C140.4,753.7,142.7,752.4,145.6,749.8z"
          />
          <path
            fill={getColorByCarencias('LAS PALMAS')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="Las Palmas"
            onClick={handleNeighborhoodClick} 
            data-url-name="las-palmas"
            className="st0"
            d="M139.8,625.6c-9.8-9.5-19.5-19-29.9-29.1c0.3-6.1,6.8-15.3,13.7-17.7c7.1-2.5,12.2-6.7,16.3-13.3 c1.5-2.5,8.4-2.3,12.8-2.3c12.3,0.1,12.3,11.3,16.2,18.9c0.3,0.6-0.2,1.8-0.6,2.7c-2.3,6-4.6,11.9-6.9,17.8 c-0.4,0.9-0.8,2.1-0.6,2.9c1.6,7.1-2.9,9.6-8.2,12.1C148.1,619.8,144,622.9,139.8,625.6z"
          />
          <path
            fill={getColorByCarencias('LA HELIADA')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="La Heliada"
            onClick={handleNeighborhoodClick} 
            data-url-name="la-heliada"
            className="st0"
            d="M211.7,782.8c-15.7,4.8-29.3-3-43.9-8c-9.4-3.2-12.3-10.6-17.8-16.6c-0.1-0.1-0.4-0.2-0.4-0.4 c-1-6-2.2-11.9-2.7-18c-0.1-1.4,2.2-3,3.4-4.5c6.1-7.4,12.2-14.8,18.2-22.3c0.6-0.8,1-1.8,1.8-3.2c4.5,6.7,2.1,12.2-0.1,16.9 c-3.4,7.3-2.7,14,0.8,20.5c2.9,5.5,6.8,10.6,10.7,15.6c3,4,9.4,2.3,12.7-3.1c5.1-8.2,14.6-11.1,22.3-6.6c2.7,1.6,4,3.4,2.5,7 C216.5,767.3,214.4,774.6,211.7,782.8z"
          />
          <path
            fill={getColorByCarencias('TEBAIDA')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="Tebaida"
            onClick={handleNeighborhoodClick} 
            data-url-name="tebaida"
            className="st0"
            d="M124.3,830.3c5.1-6.3,11.4-6.3,18-5.6c1.6,0.2,3.2-0.4,4.9-0.6c3.7-0.4,7.4-0.9,11.2-1.3 c0.6,4.9,1.9,9.9,1.5,14.8c-0.4,4.5,0.1,7.5,4.1,9.8c3.2,1.8,6.1,4.2,9.8,6.8c-1.5,1.8-3.1,3.3-4.1,5.2c-2.7,5.3-6,10.5-7.5,16.2 c-1.8,7.2-3.5,9-10.8,7.3c-1.8-0.4-3.7-0.2-5.4-0.7c-4.3-1-7.9-2.6-8.1-8.1c-0.1-2-1-4.7-2.5-5.8c-5.5-4.2-6.9-9.8-7.5-16.2 C127.1,844.6,125.5,837,124.3,830.3z"
          />
          <path
            fill={getColorByCarencias('RIO NEGRO CARCAJERO')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="Rio Negro Carcajero"
            onClick={handleNeighborhoodClick} 
            data-url-name="rio-negro-carcajero"
            className="st0"
            d="M115,638.1c2.9,3.2,6.3,6,8.5,9.6c4,6.4,7.2,12.1,14.8,16.7c7.9,4.8,17.8,11,19.9,22.4 c0.8,4.3,2.2,7.9,7.1,9.7c4.2,1.5,4.7,8.5,1.7,12.8c-0.8,1.2-1.6,2.6-2.8,3.2c-8.9,4.4-9.4,16.1-17.7,20.7 c-5.6-10.5-3.3-21-1.4-31.6c0.2-1,0.2-2.1,0-3.1c-2-8.6-19-19.4-28.6-17.3c-2.4-9.5-4.8-19.1-7.1-28.7c-0.2-0.7,0.2-2,0.7-2.2 c6.4-2.1,3.7-7,3.1-11.2C113.9,638.9,114.4,638.5,115,638.1z"
          />
          <path
            fill={getColorByCarencias('EL TAGUAL')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="El Tagual"
            onClick={handleNeighborhoodClick} 
            data-url-name="el-tagual"
            className="st0"
            d="M126.7,402.1c0.8-1.3,1.5-3.5,3-4.5c7.3-5.2,14.7-10.2,22.3-14.9c4.2-2.6,7-5.5,7.2-11 c0.3-7.5,1.9-14.9,2.9-21.9c2.7-3.8,5.5-8,8.5-12c1-1.3,2.6-2.3,3.9-3.4c2.2-1.8,4.4-3.6,5.9-4.7c0,0.1,0.1,1.9,0.2,3.7 c13,5.3,13,5.3,8.5,18.5c-0.2,0.7-0.6,1.7-1.2,2.1c-7,3.8-9.3,11.1-13.2,17.2c-0.9,1.3-1.7,3-1.6,4.5c0.4,7.4-1.6,13.6-8.2,17.7 c-0.3,0.2-0.7,0.6-0.8,0.9c-2,5.2-3.8,10.6-6.1,15.7c-0.8,1.7-3.5,4.3-4.3,4C144.9,410.4,136.3,406.4,126.7,402.1z"
          />
          <path
            fill={getColorByCarencias('SAN JOSE')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="San Jose"
            onClick={handleNeighborhoodClick} 
            data-url-name="san-jose"
            className="st0"
            d="M176.8,85.3c7.4,3.9,13.5,7.3,19.8,10.3c1.7,0.8,4.1,0.8,6,0.5c4.5-0.7,5.9,1.1,5.4,5.3 c-0.2,1.6-0.3,3.3-0.1,4.9c0.7,6.1-1.2,9.6-6.7,13.7c-5.4,4-10.5,6.6-16.7,8.4c-5.3,1.6-9.9,5.7-15.1,8.2c-1.5,0.7-4.9,0.7-5.5-0.2 c-3.2-5.3-7.7-4.4-12.5-3.5c-0.9,0.2-2-0.2-3.3-0.3c-0.5-5.2,1-8.5,5.1-12.2c7.3-6.5,13.8-14,19.7-21.9 C175.4,95.5,175.4,90.5,176.8,85.3z"
          />
          <path
            fill={getColorByCarencias('MONTE OSCURO')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="Monte Oscuro"
            onClick={handleNeighborhoodClick} 
            data-url-name="monte-oscuro"
            className="st0"
            d="M195.6,883.1c6.6,12.7,3.4,23.9-2,34.8c-5.4-0.8-11.1-5-16.9,0.9c-6,6,1.7,11.6-0.4,17.3 c-8.6,0-17.4-0.1-26.2,0.1c-2.9,0.1-5.9,1.9-8.5,1.3c-4.1-0.8-8-3-13.8-5.3c3.2-1,4.8-2,6.2-1.9c7.3,0.6,15-4,17.6-10.8 c2.1-5.6,2.8-12,9.3-15.1c1-0.5,1-3,1.8-4.4c0.6-1.2,1.8-3.1,2.5-3c7.6,0.9,10.9-5.2,15.6-9.1c0.8-0.7,2.7-1.4,3.1-1 C189.3,892,192.5,888.5,195.6,883.1z"
          />
          <path
            fill={getColorByCarencias('GUALILO')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="Gualilo"
            onClick={handleNeighborhoodClick} 
            data-url-name="gualilo"
            className="st0"
            d="M176.2,609.8c1.6,1.1,4.6,2.1,5,3.8c0.4,1.7-1.4,4.3-2.8,6c-2.7,3.2-5.9,5.9-8.9,8.9c-0.3,0.3-0.6,0.7-0.5,1.1 c0.3,5.2,0.5,10.3,1.1,15.5c0.3,3,1.3,5.9,1.8,8.8c0.1,0.9-0.3,2.4-0.9,2.7c-8.4,4.3-16.7,11.2-26.7,6.2 c-6.4-3.2-14.9-5.1-16.9-13.9c-0.4-1.6,0.1-4,1.2-5.1c8.7-9.9,17.1-20.2,30.1-25c3.9-1.4,7.1-4.6,10.8-6.7 C171.2,611,173.3,610.7,176.2,609.8z"
          />
          <path
            fill={getColorByCarencias('SAN PEDRO')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="San Pedro"
            onClick={handleNeighborhoodClick} 
            data-url-name="san-pedro"
            className="st0"
            d="M181.4,327.1c2.1-4.9,3.9-8.5,5.3-12.3c2.1-6.1,5.8-12.5,5.2-18.4c-0.6-6.2,0.8-10.7,3.8-15.2 c0.9-1.4,3.6-2.8,5.1-2.5c8.5,2,16,6.2,22.6,12c0.3,0.3,0.6,0.6,0.9,0.9c2.4,2.5,6.4,4.8,6.6,7.4c0.2,2.6-3.5,5.5-5.6,8.2 c-3.4,4.3-6.8,8.6-10.6,12.6c-1.5,1.7-4.1,2.3-5.8,3.9c-2,2-4.1,4.2-5,6.7c-2.3,6.4-3.7,7-9.6,3.7c-2.1-1.1-4.8-1.1-6.9-2.2 C185.3,330.9,183.6,328.9,181.4,327.1z"
          />
          <path
            fill={getColorByCarencias('LIMONCITO')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="Limoncito"
            onClick={handleNeighborhoodClick} 
            data-url-name="limoncito"
            className="st0"
            d="M178.2,540.7c-4-5.3-8.2-9.8-11.2-15c-2.2-3.8-3.9-8.6-3.9-12.9c0-8.2,0.8-16.4,2.5-24.4 c1.1-5.4,4.3-10.4,6.8-16.2c5.6,4.8,9.5,10.7,14.4,11.7c10.4,2.2,11.2,7.6,8.8,15.8c-0.1,0.4,0,0.8,0.2,1.2 c3.6,8.1,0.2,13.7-5.4,19.8C185.3,526.2,182.4,533.5,178.2,540.7z"
          />
          <path
            fill={getColorByCarencias('PEÑA TAMBOR')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="Peña Tambor"
            onClick={handleNeighborhoodClick} 
            data-url-name="peña-tambor"
            className="st0"
            d="M199.5,931.5c7.9,1.5,9.5,0.2,11.6-6.8c1.7-5.4,4.2-10.6,6.9-17.4c3.5,5.4,5.8,8.9,8.7,13.4 c3.4-1.2,7.3-2.6,10.7-3.9c0.9,2.3,1.9,5,3.1,7.6c1.5,3.2,0.5,6.1-2.7,5.8c-6.4-0.6-5.5,3.8-5.2,7c0.4,3.8,2,7.5,3.1,11.2 c-0.7,0.3-1.3,0.5-2,0.8c-0.8-2.2-1.7-4.4-2.4-6.6c-1.1-3.5-2.2-7-3.3-10.6c-6.6,1.8-12.3,4.3-13.4,10.7c-0.3,2,4.3,4.8,6.7,7.4 c-7.7,1.5-15.1-1-20.9-6c-2.4-2.1-2.2-7.5-2.8-11.4c-0.4-3.3-0.3-6.8-0.2-10.1c0-2.4-0.4-5.1,0.5-7.3c3-7.9,5.2-15.8,3-24.2 c7-0.6,13.7-1.1,20.3-1.6c3.7-0.3,4.6,2.4,3.5,4.8c-1.8,3.9-3.8,8.6-7.2,10.9c-5.5,3.7-6.9,9.4-8.4,14.6 C207.8,925.4,205.4,929.4,199.5,931.5z"
          />
          <path
            fill={getColorByCarencias('LA SOLEDAD')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="La Soledad"
            onClick={handleNeighborhoodClick} 
            data-url-name="la-soledad"
            className="st0"
            d="M118.6,454.9c-0.1-5.7-3.5-7.9-8.4-7.7c4.6-13.9,9.2-27.5,13.5-40.5c6.6,2.1,12,4.5,17.6,5.4 c8.7,1.4,12.7,8,16.1,14.4c0.9,1.8-3.9,6.6-6.3,10c-1.1,1.6-3.4,2.8-3.8,4.5c-1.8,7.2-6.2,12-13.3,10.9c-4.9-0.8-8.2,1-12,2.6 C121.1,454.9,120,454.7,118.6,454.9z"
          />
          <path
            fill={getColorByCarencias('MANTELINA BAJA')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="Mantelina Baja"
            onClick={handleNeighborhoodClick} 
            data-url-name="mantelina-baja"
            className="st0"
            d="M144.5,475.2c5.9,6.3,9.8,11.9,15.1,15.7c3.7,2.7,3.7,5.2,3.3,8.7c-1.1,9.7-2.7,19.5-3.3,29.3 c-0.3,5.2-3.5,8.1-7.2,8.4c-3,0.3-7.2-2.2-9.2-4.8c-2-2.5-2.2-6.7-2.7-10.2c-0.5-3.6,0.3-7.5-0.5-11c-1.9-8.6-6.7-14.4-16.3-14.4 c-1.3-9.3,2.2-14.5,10.3-16.6c1.8-0.5,3.4-1.8,5.1-2.7C141.3,476.6,143.5,475.6,144.5,475.2z"
          />
          <path
            fill={getColorByCarencias('LLANADAS')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="Llanadas"
            onClick={handleNeighborhoodClick} 
            data-url-name="llanadas"
            className="st0"
            d="M133.8,819c-2.8,1.9-5.5,3.7-8.3,5.6c-2.3-8.2-8.2-15-6.5-24.2c0.4-2-3.6-4.7-5.5-7.2c-1-1.2-2.6-2.6-2.6-3.8 c0.2-5.5,0.9-11.1,1.6-16.6c0.1-1.1,1.3-2,1.1-1.8c6.8,4.4,13.5,8.5,19.9,12.9c2.3,1.6,4,3.9,6,5.9c5.5,5.4,11.1,10.7,16.3,16.3 c4.5,4.9,2.8,11.1-3.5,12.7C146.2,820.4,140,824.4,133.8,819z"
          />
          <path
            fill={getColorByCarencias('MIRADOR')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="Mirador"
            onClick={handleNeighborhoodClick} 
            data-url-name="mirador"
            className="st0"
            d="M161.3,148.9c-0.6,4.4-0.5,9-1.9,13.2c-1.2,3.5-3.6,6.8-6.1,9.7c-2.4,2.9-6.3,5-2.9,9.9c2.5-0.5,5-1.1,7.5-1.6 c0.3,0.4,0.6,0.8,0.9,1.1c-3.2,2.1-6.4,4.2-9.5,6.4c-1.4,1-2.4,2.5-4.1,4.4c-1.7-0.6-4.6-0.4-4.8-5.1c-0.1-2.2-3.2-4.5-5.1-6.5 c-3.6-3.7-7.8-7-11.1-11c-5.4-6.5-1.4-15.6,6.3-19c5.5-2.4,10.8-6.6,14.6-11.3c3.7-4.5,7.6-3.2,11.7-3.1c0.3,0,1.3,4,0.6,5.4 C154.4,147.9,154.2,147.8,161.3,148.9z"
          />
          <path
            fill={getColorByCarencias('SAN IGNACIO')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="San Ignacio"
            onClick={handleNeighborhoodClick} 
            data-url-name="san-ignacio"
            className="st0"
            d="M243.7,277.5c-3.7,1.1-7.8,1.3-10.4,3.4c-2.3,1.9-2.9,5.8-4.3,9c-7.1-4.6-15.1-9.8-23.5-15.3 c13.3-7.6,19-19,10.9-34.9c7.7,1,15.2,2.3,22.8,2.8c4,0.3,4.5,2.2,4.7,5.6c0.2,3.8,1.1,7.6,2,12.9 C241.7,264.2,241.3,270.3,243.7,277.5z"
          />
          <path
            fill={getColorByCarencias('SANTA ROSA')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="Santa Rosa"
            onClick={handleNeighborhoodClick} 
            data-url-name="santa-rosa"
            className="st0"
            d="M211.4,591.3c-0.8,4.5-2.1,9-2.3,13.5c-0.4,8.1-0.2,16.2-0.3,24.4c0,1.1-0.2,3-0.9,3.3 c-4.8,2.5-9.7,4.7-14.5,7.1c-3.4,1.7-7.3,3-10,5.5c-2.5,2.4-5.3,4.5-7.7,2.4c-2.1-1.9-3.5-5.8-3.4-8.9c0.1-7.2,4.7-12.3,9.4-17.5 c2.7-3,3.8-8,4.4-12.2c0.4-3.4,1.4-5.7,4.6-6.1c8.4-1.1,14.6-5.5,19.5-12.4C210.5,590.7,211,591,211.4,591.3z"
          />
          <path
            fill={getColorByCarencias('EL LIMON')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="El Limon"
            onClick={handleNeighborhoodClick} 
            data-url-name="el-limon"
            className="st0"
            d="M239,949.4c1.3-1.9,2.2-3.4,2.7-4.2c-2.3-3.4-4.4-6.4-6.4-9.3c0.4-0.4,0.9-0.8,1.3-1.3 c6.8,2.7,12.3,7.5,17.1,12.8c2.5,2.8,4.9,3.5,8.3,3.9c4.9,0.6,9.8,1.9,14.5,3.5c5.8,2,6.6,5.9,3.1,10.8c-3.2,4.5-6.4,9-9.3,13.7 c-2.2,3.5-4.7,3.7-8.2,2.2c-4.5-1.9-10.1-2.3-10.6-9c-0.1-1.2-2-2.1-2.6-3.3c-0.8-1.5-1.9-3.3-1.8-5 C248,954.1,247.9,953.7,239,949.4z"
          />
          <path
            fill={getColorByCarencias('SAN BENITO')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="San Benito"
            onClick={handleNeighborhoodClick} 
            data-url-name="san-benito"
            className="st0"
            d="M110.8,680.9c-1.6-1.5-3.6-2.8-4.7-4.7c-3.5-6.1-5.9-12.8-10-18.4c-3-4-7.6-7-12.1-9.6 c-7.9-4.5-10.2-11-6.8-18.9c1.1-2.5,0.5-5.6,0.8-9.5c1.7,6.9,5.9,3.7,8.7,4.7c2.9,1.7,5.7,4.7,8.7,4.9c6.1,0.3,7.8,7.5,13.8,7.8 c0.5,0,2.2,6.5,1,7.7c-5.9,6.2-2.7,12.7-1.6,19c0.8,5.2,2.5,10.2,3.8,15.3C111.9,679.8,111.4,680.4,110.8,680.9z"
          />
          <path
            fill={getColorByCarencias('EJIDOS')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="Ejidos"
            onClick={handleNeighborhoodClick} 
            data-url-name="ejidos"
            className="st0"
            d="M246.1,935.8c1.9,0,4.8,0,7.6,0c-0.6-2.6-1.1-5.1-1.7-7.7c4.9,0,10.2,0.1,15.6-0.1c2.1-0.1,4.2-0.9,6.3-1.1 c2.1-0.2,4.2-0.1,6.3,0.2c0.7,0.1,1.3,1,2,1.4c3.2,1.4,8.7,2.3,9.1,4.3c1.2,5.9,0.9,12.3,0.3,18.4c-0.3,3.3-7.9,5.5-10.7,3 c-6.1-5.4-13.1-7.1-20.9-6.3c-1.1,0.1-2.7-0.1-3.4-0.8C252.8,943,249,938.8,246.1,935.8z"
          />
          <path
            fill={getColorByCarencias('PALO BLANCO')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="Palo Blanco"
            onClick={handleNeighborhoodClick} 
            data-url-name="palo-blanco"
            className="st0"
            d="M162.7,894.4c-1.7-2.4-3-4.4-3.4-4.9c2.1-5.4,4.4-10,5.8-14.9c1.9-6.9,4.4-14.3,11.6-15.9 c8.1-1.8,17.3-2.5,23.2,5.2c-2.8,6.2-5.5,11.9-7.9,17.7c-1.4,3.5-3.1,4.2-6.5,2.2c-1.5-0.8-4.9-0.9-5.7,0.1 c-4.1,4.9-8.5,8.9-15.3,9C163.9,893,163.3,893.9,162.7,894.4z"
          />
          <path
            fill={getColorByCarencias('EL UVITO')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="El Uvito"
            onClick={handleNeighborhoodClick} 
            data-url-name="el-uvito"
            className="st0"
            d="M177.6,939c-2.2,2.7-3.3,3.9-4.4,5.3c-0.8,1-2.2,2.1-2.3,3.2c-0.3,8.3-4.4,12.1-12.4,10.3 c-8.3-1.8-16.4-4.2-24.7-6.1c-6.6-1.6-13.4-2.9-21.2-4.5c2.4-1.4,4.3-2.2,5.9-3.4c2-1.5,4.9-3.1,5.4-5.1c1.2-4.8,3.4-3.4,6.3-2.2 c4.3,1.8,9.4,5.5,13,4.5c4.6-1.3,8.7-0.6,13.1-0.8C162.7,939.9,169,939.5,177.6,939z"
          />
          <path
            fill={getColorByCarencias('ROPERO')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="Ropero"
            onClick={handleNeighborhoodClick} 
            data-url-name="ropero"
            className="st0"
            d="M313.8,919.3c6.4-4.5,13.4-9.4,20.4-14.3c1.8-1.3,3.6-2.8,5.5-3.8c4.1-2,7.5-1.7,10.2,2.7 c2.2,3.7,5.1,6.9,7.5,10.4c2,3,1.9,5.6-1.8,7.4c-5.8,3-11.5,6.1-17.2,9.2c-1.8,1-3.3,2.3-5,3.5 C331.7,928.4,322.5,921.7,313.8,919.3z"
          />
          <path
            fill={getColorByCarencias('LA CAPILLA')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="La Capilla"
            onClick={handleNeighborhoodClick} 
            data-url-name="la-capilla"
            className="st0"
            d="M217.7,983.7c6.7-3.4,8.4-9.7,9.2-16.2c0.4-3.2,1-5.5,4.3-6.5c0.4-0.1,0.9-0.3,1.1-0.6c3.2-5,7.2-6.5,12.8-1.9 c-0.9,4.2-1.9,9-2.9,13.9c-0.3,1.6-1.3,3.6-0.7,4.7c4.5,8.1,1.6,14.8-3.6,21.3c-4.7-1.6-9.8-3.4-14.9-5 C218,991.9,219.1,987.1,217.7,983.7L217.7,983.7z"
          />
          <path
            fill={getColorByCarencias('CAMPO HERMOSO')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="Campo Hermoso"
            onClick={handleNeighborhoodClick} 
            data-url-name="campo-hermoso"
            className="st0"
            d="M124.7,640.2c-5.8-2.7-12.7-5.5-19.2-9c-4.6-2.4-3.5-17.2,1.3-20.6c1.6-1.2,3.3-2.4,5.2-3.2 c2.2-0.8,3.8-1.2,5.8,1.9c2.5,4,7.2,6.6,10.7,10c2.6,2.5,5.1,5.2,7.2,8.2c0.6,0.8-0.1,3.2-1,4.1 C131.8,634.4,128.5,636.9,124.7,640.2z"
          />
          <path
            fill={getColorByCarencias('TUN TUN')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="Tun Tun"
            onClick={handleNeighborhoodClick} 
            data-url-name="tun-tun"
            className="st0"
            d="M217.7,983.7c-1.5-6.1-6.4-8.1-11.8-9.4l0.2,0.2c-4.5-7.9-9-15.8-13.8-24.3c2.5-3.5,5.8-3.3,11-0.8 c5,2.5,11.2,3,16.9,4c1.2,0.2,3.2-0.3,3.8-1.2c4.3-6.1,7.1-1.1,12,1.7C220.5,959.1,224.5,974.4,217.7,983.7 C217.7,983.7,217.7,983.7,217.7,983.7z"
          />
          <path
            fill={getColorByCarencias('GUAYABAL')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="Guayabal"
            onClick={handleNeighborhoodClick} 
            data-url-name="guayabal"
            className="st0"
            d="M319.1,938.2c-0.5,5.3-7.5,11-13.4,11c-2.9,0-5.9,0.1-8.8-0.2c-1-0.1-2.7-1.7-2.6-1.9c2.6-5-2.5-12.1,4.3-16 c0.9-0.5,1.4-2,2.1-3c5.9-8.2,5.9-8.3,15-4.2c4,1.8,8.1,3.6,11.8,6c2.7,1.7,3.4,4.4-0.3,6C324.7,936.9,321.9,937.4,319.1,938.2z"
          />
          <path
            fill={getColorByCarencias('DOCTRINA PORTACHUELO')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="Doctrina Portachuelo"
            onClick={handleNeighborhoodClick} 
            data-url-name="doctrina-portachuelo"
            className="st0"
            d="M254.5,1005.1c-10.1,10.9,2.6,15.2,3.4,24.4c-2.6,2.7-6.6,6.8-11.1,11.4c-1.4-2.5-2.5-4.9-3.9-6.9 c-1.2-1.8-2.7-4.1-4.4-4.6c-5.5-1.4-4.8-7.1-7.6-10.2c-0.3-0.3,0.9-2.7,1.9-3.3c3.8-2.1,7.9-3.8,11.3-5.4c-1-5.4-1.8-9.9-2.7-14.5 c0.5-0.1,1-0.1,1.5-0.2C246.7,998.8,250.5,1001.9,254.5,1005.1z"
          />
          <path
            fill={getColorByCarencias('LAGUNETAS BAJO')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="Lagunetas Bajo"
            onClick={handleNeighborhoodClick} 
            data-url-name="lagunetas-bajo"
            className="st0"
            d="M205.9,974.3c0.8,1.4,1.2,3,2.3,4.1c1.6,1.5,3.9,2.3,5.2,3.9c1.2,1.4,1.5,3.6,2.2,5.5c-2-0.2-4.4,0.2-5.9-0.8 c-6.6-4.1-14.1-2.1-21-3.4c-3.1-0.6-7-2.8-8.3-5.4c-1-2.1,0.7-6.5,2.6-8.7c2.3-2.5,6.1-3.7,9.5-5.6c-1.3-2.4-2.2-4.1-3.1-5.7 c0.5-0.5,1.1-1,1.6-1.5c2.4,2.5,4.8,4.9,7,7.5c2.8,3.3,5.3,6.8,8,10.3C206.1,974.5,205.9,974.3,205.9,974.3z"
          />
          <path
            fill={getColorByCarencias('SAN VICENTE')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="San Vicente"
            onClick={handleNeighborhoodClick} 
            data-url-name="san-vicente"
            className="st0"
            d="M273.7,990.4c-5-7.8,2.9-12,5.1-17.8c1.5-3.9,4.1-7.5,6.4-11.1c1.2-1.9,2.6-4.4,4.5-5.1c3-1.2,7.2-3.3,7.7,3.5 c0.2,2.9,2.9,5.6,5.1,9.4c-8.7,6.5-17.6,13.1-26.6,19.8c1,1,2.1,2.1,3.1,3.1c-1.9-0.7-3.7-1.4-5.6-2 C273.5,990.2,273.7,990.4,273.7,990.4z"
          />
          <path
            fill={getColorByCarencias('PEÑA GRANDE')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="Peña Grande"
            onClick={handleNeighborhoodClick} 
            data-url-name="peña-grande"
            className="st0"
            d="M184.7,956.8c0.4,0.3,0-0.1-0.5-0.4c-3-2-7.6-3.4-8.5-6c-0.8-2.5,3.1-6.2,3.5-9.6c0.6-4.1-0.3-8.3-0.4-12.5 c0-2.6,0-7.4,0.5-7.5c3.9-0.5,8.2-1,11.7,0.3c2.1,0.8,3.6,4.6,4.2,7.3c0.7,3.3,0.8,7,0.1,10.4c-0.6,2.9-2.7,5.5-4.3,8.1 C189.1,950.2,187,953.3,184.7,956.8z"
          />
          <path
            fill={getColorByCarencias('MANTELINA ALTA')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="Mantelina Alta"
            onClick={handleNeighborhoodClick} 
            data-url-name="mantelina-alta"
            className="st0"
            d="M162.8,527c2.1,3,3,4.6,4.2,5.9c9.3,11.1,9.3,11.1-0.7,21.5c-2.4,2.5-4.6,5-6.4,7.1c-4.3-1.3-8.7-2.5-14-4.1 c-0.8-3.8,3.5-13.4,8.1-15.9C159.2,538.8,163,535.1,162.8,527z"
          />
          <path
            fill={getColorByCarencias('ALTAMIRA')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="Altamira"
            onClick={handleNeighborhoodClick} 
            data-url-name="altamira"
            className="st0"
            d="M168.4,472c-2.3,5.3-4.4,10.2-7,16.2c-3.6-4.4-7-9.4-11.2-13.6c-4.1-4.2-3.6-8.5-2.6-13.7 c0.5-2.7-1.3-5.9-2-8.4c5.9,1.5,11.5,2.7,17,4.5c1.4,0.4,2.4,2.8,3,4.4C166.8,465.2,167.6,469.1,168.4,472z"
          />
          <path
            fill={getColorByCarencias('PALMIRA')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="Palmira"
            onClick={handleNeighborhoodClick} 
            data-url-name="palmira"
            className="st0"
            d="M274.7,914.1c-0.4,2.6-0.5,5.2-1.3,7.7c-0.4,1.2-1.9,3-2.9,3c-5.6,0.1-11.2-0.1-16.8-0.6 c-1.8-0.2-3.6-1.7-5.2-2.8c-1.9-1.3-3.7-2.8-6.1-4.5c0.2-1.5,0.6-3.8,1.1-7.1c3.1,1.5,5.8,2.7,9.4,4.5c2.9-2,6.7-4.7,10-7 C267.2,909.7,271,911.9,274.7,914.1z"
          />
          <path
            fill={getColorByCarencias('HATO SANTA BARBARA')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="Hato Santa Barbara"
            onClick={handleNeighborhoodClick} 
            data-url-name="hato-santa-barbara"
            className="st0"
            d="M159.5,962.5c2.4-1.1,6.4-2,9.3-4.3c5.1-4,9.1-4.5,13.4,0.8c1.1,1.3,3,2,5.4,3.6c-5.5,4.2-13.7,6.4-10.7,15.6 c-2.3,0.5-4.3,1.4-6.2,1.2c-3.1-0.3-6.4-0.6-5.8-5.6C165.6,968.3,163.3,963.8,159.5,962.5z"
          />
          <path
            fill={getColorByCarencias('DOCTRINA NARANJOS')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="Doctrina Naranjos"
            onClick={handleNeighborhoodClick} 
            data-url-name="doctrina-naranjos"
            className="st0"
            d="M227.3,1015.6c-3.9-6.8-14-10.5-10.6-22c6.7,2.7,13.6,5.2,20.2,8.4c1.9,0.9,4.1,3.9,3.9,5.7 c-0.2,1.7-3.2,3.3-5.2,4.4C233.2,1013.5,230.5,1014.3,227.3,1015.6z"
          />
          <path
            fill={getColorByCarencias('LA ESPERANZA')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="La Esperanza"
            onClick={handleNeighborhoodClick} 
            data-url-name="la-esperanza"
            className="st0"
            d="M110.9,604.1c-9.5,4.2-12.4,10.9-11.1,20.2c-3.9,0.4-7.9,2.8-9.7-3.5c-0.3-1.1-4.7-1.1-7.3-1.7 C81.7,611.2,100.3,600.4,110.9,604.1z"
          />
          <path
            fill={getColorByCarencias('TUBAVITA')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="Tubavita"
            onClick={handleNeighborhoodClick} 
            data-url-name="tubavita"
            className="st0"
            d="M221.6,906.2c2.1-2.4,3.5-3.6,4.6-5.1c0.9-1.3,1.4-2.8,2.1-4.1c4.8,2.9,9.1,6.9,14.1,7.9 c5.2,1.1,11-0.6,16.6-0.4c-2,3-2.8,6.7-8,3.5c-2.8-1.7-7.9-3.9-11.3,2c-1.8,3.2-6.4,4.7-10.5,7.5 C226.8,913.9,224.2,910.1,221.6,906.2z"
          />
          <path
            fill={getColorByCarencias('SAN PABLO')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="San Pablo"
            onClick={handleNeighborhoodClick} 
            data-url-name="san-pablo"
            className="st0"
            d="M297.4,951.8c10.4,2.1,17.7-1.6,24.4-6.6c2.1,5.3,3.2,10.9-4.8,13.4c-0.2,0.1-0.3,0.3-0.4,0.4 c-10.7,9.5-10.7,9.5-17.2-3.8C298.9,954.6,298.5,953.9,297.4,951.8z"
          />
          <path
            fill={getColorByCarencias('NO INFO')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="No Info"
            onClick={handleNeighborhoodClick} 
            data-url-name="no-info"
            className="st0"
            d="M295.5,929.7c-6.6-2.9-12.8-5.6-19-8.4c-0.2-0.7-0.4-1.3-0.6-2c1.8-0.7,3.7-2.2,5.4-2c6.5,0.9,13,2.4,20.9,3.9 C299.1,925.2,297.1,927.7,295.5,929.7z"
          />
          <path
            fill={getColorByCarencias('EL AMARILLO')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="El Amarillo"
            onClick={handleNeighborhoodClick} 
            data-url-name="el-amarillo"
            className="st0"
            d="M219.3,944.6c0.2-4.4,1.5-7.4,6-6.6c1.1,0.2,2.7,2.9,2.5,4.3C227,949.2,222.5,943.9,219.3,944.6z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Velez