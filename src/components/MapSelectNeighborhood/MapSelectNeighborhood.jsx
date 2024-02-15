
import React, { lazy, Suspense } from 'react';
import './MapSelectNeighborhood.sass'

const MapSelectNeighborhood = ({carenciaColor, municipio, vereda, filterMap }) => {

  const municipioFormat = municipio.split(/[\s-]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');

  //const municipioFormat = municipio.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
  const formattedVereda = vereda.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');

  const municipioFormatData = municipio.split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')

  console.log(municipioFormat)
  const MapComponent = lazy(() => import(`./${municipioFormat}/${formattedVereda}.jsx`));

  console.log(filterMap)
  return (
    <div className='w-full' id='mapNeighborhoodSelect'>
      <Suspense fallback={<div>Loading...</div>}>
        <MapComponent filterMap={filterMap} municipio={municipioFormatData} carenciaColor={carenciaColor} />
      </Suspense>
    </div>
  );
};

export default MapSelectNeighborhood;
