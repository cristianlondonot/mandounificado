import React, { useState, useEffect } from 'react';

const UseCarenciasPorMunicipio = ( tipoCarencia ) => {
  const [carenciasPorMunicipio, setCarenciasPorMunicipio] = useState([]);

  console.log(tipoCarencia)
  //funcion filtro

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/cristianlondonot/mandounificado-spidersoft/main/data-factor.json')
      .then(response => response.json())
      .then(data => {
        let filteredData = data;
  
        if (tipoCarencia && tipoCarencia !== 'DEFAULT') {
          filteredData = data.filter(item => item.FACTOR_SIMPLIFICADO === tipoCarencia);
        }
  
        const countByMunicipio = filteredData.reduce((count, item) => {
          const municipio = item.MUNICIPIO;
  
          if (count[municipio]) {
            count[municipio]++;
          } else {
            count[municipio] = 1;
          }
  
          return count;
        }, {});
  
        // Convertir el objeto a un array de objetos
        const resultArray = Object.entries(countByMunicipio).map(([municipio, count]) => ({
          municipio,
          count,
        }));
  
        setCarenciasPorMunicipio(resultArray);
      })
      .catch(error => console.error('Error al cargar los datos:', error));
  }, [tipoCarencia]);
  

  const getColorByCarencias = (nombreMunicipio) => {
    const lengthFactor = carenciasPorMunicipio.find(item => item.municipio === nombreMunicipio)?.count || 0;

    let fillColor = '#656565';

    if (lengthFactor <= 3) {
      fillColor = '#387905';
    } else if (lengthFactor <= 20) {
      fillColor = '#feba00';
    } else if (lengthFactor <= 50) {
      fillColor = '#F2860D';
    } else if (lengthFactor <= 150) {
      fillColor = '#fc6107';
    } else if (lengthFactor >= 200) {
      fillColor = '#FC0707';
    }

    return fillColor;
  };

  return { getColorByCarencias };
};

export default UseCarenciasPorMunicipio;
