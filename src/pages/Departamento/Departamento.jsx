import React, { useState } from 'react';
import MapSelectDepartment from '../../components/MapSelectDepartment/MapSelectDepartment';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import MenuLeftDefault from '../../components/MenuLeftDefault/MenuLeftDefault';
import DptoState from '../../components/DptoState/DptoState';
import UseCarenciasPorMunicipio from '../../components/useCarenciasPorMunicipio/useCarenciasPorMunicipio';
import FilterDpto from '../../components/FilterDpto/FilterDpto';

const Departamento = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const departamento = location.pathname.split('/').pop(); // Obtener el último segmento de la URL

  const [botonPresionado, setBotonPresionado] = useState('default');

  const handleBotonPresionadoChange = (boton) => {
    setBotonPresionado(boton);
  };

  const handlePathClick = (pathId) => {
    navigate(`/departamento/${pathId}`);
  };

  const tipoDeMapa = 'Departamento';

  const { getColorByCarencias } = UseCarenciasPorMunicipio();

  console.log(botonPresionado)

  return (
    <>
      {/* <div className="p-2 w-full filterDpto pt-[288.5px] lg:pt-[168.5px]"> */}
      <div className="p-2 w-full filterDpto pt-[72.5px] lg:pt-[82.5px]">
        <FilterDpto />
      </div>
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content relative ">
          <div className="p-4 w-full">
            <DptoState municipio={departamento} />
          </div>
          <div className="p-4">
          {tipoDeMapa === 'Departamento' && (
            <MapSelectDepartment 
              departamento={departamento}
              onNavigateToMunicipio={() => handlePathClick('Municipio')}
              getColorByCarencias={getColorByCarencias()}
              filterMap={botonPresionado}
            />
          )}
          </div>
        </div>
        <div className="drawer-side pt-[288.5px] lg:pt-0">
          <MenuLeftDefault
            onBotonPresionadoChange={handleBotonPresionadoChange} 
          />
        </div>
      </div>
    </>
  );
}

export default Departamento;
