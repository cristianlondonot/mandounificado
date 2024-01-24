import React, { useState, useEffect } from 'react';
import Bucaramanga from './Bucaramanga/Bucaramanga';
import Floridablanca from './Floridablanca/Floridablanca';
import Albania from './Albania/Albania';
import './MapSelectCity.sass';
import Barrancabermeja from './Barrancabermeja/Barrancabermeja';

const mapComponents = {
  bucaramanga: Bucaramanga,
  floridablanca: Floridablanca,
  albania: Albania,
  barrancabermeja: Barrancabermeja,
  // Agrega más mapeos de municipios a componentes según sea necesario
};

const MapSelectCity = ({departamento, municipio, onSelectNeighborhood, lengthFactor }) => {
  const [veredaSeleccionada, setVeredaSeleccionada] = useState('');

  useEffect(() => {
    if (typeof onSelectNeighborhood === 'function') {
      onSelectNeighborhood(veredaSeleccionada);
    }
  }, [onSelectNeighborhood, veredaSeleccionada]);

  const handleNeighborhood = (vereda) => {
    setVeredaSeleccionada(vereda);
  };

  // Asegurar que `municipio` no sea undefined antes de llamar a toLowerCase()
  const municipioLowerCase = municipio ? municipio.toLowerCase() : '';

  const SelectedMapComponent = mapComponents[municipioLowerCase] || null;

  return (
    <div className={`w-full h-full `} id='mapCitySelect'>
      {SelectedMapComponent ? (
        <SelectedMapComponent departamento={departamento} municipio={municipio} onSelectNeighborhood={handleNeighborhood} lengthFactor={lengthFactor} />
      ) : (
        <p>Mapa no encontrado</p>
      )}
    </div>
  );
};

export default MapSelectCity;
