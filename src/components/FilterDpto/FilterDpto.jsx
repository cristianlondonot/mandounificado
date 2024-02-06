import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import jsonData from '../../../data-factor.json';

const FilterDpto = ({ selectedDepartamentoProp }) => {

  const {municipio, vereda} = useParams();

  const municipioFormateada = municipio ? municipio.replace(/-/g, ' ') : '';
  const veredaFormateada = vereda ? vereda.replace(/-/g, ' ') : '';


  const navigate = useNavigate();
  const [selectedDepartamento, setSelectedDepartamento] = useState(
    selectedDepartamentoProp || 'santander'
  );
  const [selectedMunicipio, setSelectedMunicipio] = useState('');
  const [selectedVereda, setSelectedVereda] = useState('');

  const handleDepartamentoChange = (e) => {
    const departamento = e.target.value;
    setSelectedDepartamento(departamento);
  };

  const handleMunicipioChange = (e) => {
    const municipio = e.target.value.toLowerCase().replace(/\s+/g, '-');
    setSelectedMunicipio(municipio);
    const nuevaRuta = `/departamento/${selectedDepartamento}/municipio/${municipio}`;
    navigate(nuevaRuta);
  };

  const handleVeredaChange = (e) => {
    const vereda = e.target.value.toLowerCase().replace(/\s+/g, '-');
    setSelectedVereda(vereda);
    const nuevaRuta = `/departamento/${selectedDepartamento}/municipio/${municipio}/vereda/${vereda}`;
    navigate(nuevaRuta);
  };

  const [municipiosUnicos, setMunicipiosUnicos] = useState([]);
  const dptoSelect = 'SANTANDER';

  useEffect(() => {
    const municipiosDelDepartamento = jsonData.filter(
      (item) => item['DEPARTAMENTO'] === dptoSelect
    );

    const uniqueMunicipios = Array.from(
      new Set(
        municipiosDelDepartamento.map((municipioUnit) =>
          municipioUnit['MUNICIPIO'].toLowerCase()
        )
      )
    ).map((nombreCiudad) => ({
      label: nombreCiudad,
      value: nombreCiudad,
    }));

    setMunicipiosUnicos(uniqueMunicipios);
  }, [dptoSelect]);

  const [veredasUnicos, setVeredasUnicos] = useState([]);

  useEffect(() => {
    const veredasDelDepartamento = municipio
    ? jsonData.filter((item) => item['MUNICIPIO'] === municipio.toUpperCase())
    : jsonData;
  
    const uniqueVeredas = Array.from(
      new Set(
        veredasDelDepartamento.map((veredaUnit) =>
          veredaUnit['NOMBRE'].toLowerCase()
        )
      )
    )
      .map((nombreVereda) => ({
        label: nombreVereda,
        value: nombreVereda,
      }))
      .sort((a, b) => a.label.localeCompare(b.label)); // Ordenar alfabéticamente
  
    setVeredasUnicos(uniqueVeredas);
  }, [selectedMunicipio]);


  return (
    <div className="filters md:flex gap-4 mb-5 w-full text-green-dark">
      <div className="selectGroup w-full">
        <div className="title">
          <h5 className="text-lg font-semibold">Departamento</h5>
        </div>
        <select
          className="select select-bordered select-sm w-full max-w-md bg-gray-700"
          disabled
          value={selectedDepartamento}
          onChange={handleDepartamentoChange}
        >
          <option value="INIT" disabled>
            Departamento
          </option>
          <option value="santander">Santander</option>
        </select>
      </div>

      <div className="selectGroup w-full text-green-dark">
        <div className="title">
          <h5 className="text-lg font-semibold">Sub Región</h5>
        </div>
        <select
          className="select select-bordered select-sm w-full max-w-md"
          
          onChange={handleMunicipioChange}
          value={municipioFormateada ? municipioFormateada : ''} 
        >
          <option value="">Seleccione un municipio</option>
          {municipiosUnicos.map((municipio, index) => (
            <option key={index} value={municipio.value}>
              {municipio.label.charAt(0).toUpperCase() + municipio.label.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="selectGroup w-full text-green-dark">
        <div className="title">
          <h5 className="text-lg font-semibold">Vereda</h5>
        </div>
        <select className="select select-bordered select-sm w-full"
          
          onChange={handleVeredaChange}
          value={veredaFormateada ? veredaFormateada : ''} 
        >
          <option value=""> </option>
          {veredasUnicos.map((nombre, index) => (
            <option key={index} value={nombre.value}>
              {nombre.label.charAt(0).toUpperCase() + nombre.label.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterDpto;
