import React from 'react';
import Santander from './Santander/Santander';

const mapComponents = {
  santander: Santander,
  // Agrega más mapeos de municipios a componentes según sea necesario
};

const MapSelectDepartment = ({filterMap, departamento, getColorByCarencias }) => {

  const SelectedMapComponent = mapComponents[departamento] || null;

  return (
    <div className={`w-full h-full `} id='mapCitySelect'>
      {SelectedMapComponent ? (
        <SelectedMapComponent filterMap={filterMap} departamento={departamento} getColorByCarencias={getColorByCarencias}/>
      ) : (
        <p>Mapa no encontrado</p>
      )}
    </div>
  );
};

export default MapSelectDepartment;
