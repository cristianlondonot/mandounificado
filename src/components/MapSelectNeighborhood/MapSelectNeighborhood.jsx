
import React, { lazy, Suspense } from 'react';
import './MapSelectNeighborhood.sass'

const MapSelectNeighborhood = ({carenciaColor, municipio, vereda }) => {
  const municipioFormat = municipio.charAt(0).toUpperCase() + municipio.slice(1).toLowerCase();
  const formattedVereda = vereda.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');

  const MapComponent = lazy(() => import(`./${municipioFormat}/${formattedVereda}.jsx`));

  return (
    <div className='w-full' id='mapNeighborhoodSelect'>
      <Suspense fallback={<div>Loading...</div>}>
        <MapComponent carenciaColor={carenciaColor} />
      </Suspense>
    </div>
  );
};

export default MapSelectNeighborhood;
