import React, { useState, useEffect } from 'react';
import Santander from './Santander/Santander';

const mapComponents = {
  santander: Santander,
  // Agrega más mapeos de municipios a componentes según sea necesario
};

const MapSelectDepartment = ({ departamento, onSelectNeighborhood }) => {
  const [veredaSeleccionada, setVeredaSeleccionada] = useState('');

  useEffect(() => {
    if (typeof onSelectNeighborhood === 'function') {
      onSelectNeighborhood(veredaSeleccionada);
    }
  }, [onSelectNeighborhood, veredaSeleccionada]);

  const handleNeighborhood = (vereda) => {
    setVeredaSeleccionada(vereda);
  };

  //console.log(departamento)

  const SelectedMapComponent = mapComponents[departamento] || null;

  return (
    <div className={`w-full h-full `} id='mapCitySelect'>
      {SelectedMapComponent ? (
        <SelectedMapComponent departamento={departamento} />
      ) : (
        <p>Mapa no encontrado</p>
      )}
    </div>
  );
};

export default MapSelectDepartment;
