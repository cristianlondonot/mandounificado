import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Tooltip } from 'react-tooltip'
import '../../../App.sass'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaBelleza = ({departamento, municipio, filterMap}) => {
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
    <div>LaBelleza</div>
  )
}

export default LaBelleza