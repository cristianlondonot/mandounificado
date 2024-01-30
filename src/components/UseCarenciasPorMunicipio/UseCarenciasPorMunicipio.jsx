import React, { useState, useEffect } from 'react';

const UseCarenciasPorMunicipio = () => {
  const [carenciasPorMunicipio, setCarenciasPorMunicipio] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/cristianlondonot/mandounificado-spidersoft/main/data-factor.json')
      .then(response => response.json())
      .then(data => {
        const countByMunicipio = data.reduce((count, item) => {
          const municipio = item.MUNICIPIO; // Asumiendo que el nombre del municipio está en la propiedad NOMBRE

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

        // Asegúrate de que setea correctamente el estado como un array
        setCarenciasPorMunicipio(resultArray);
      })
      .catch(error => console.error('Error al cargar los datos:', error));
  }, []);

  const getColorByCarencias = (nombreMunicipio) => {
    const lengthFactor = carenciasPorMunicipio.find(item => item.municipio === nombreMunicipio)?.count || 0;

    let fillColor = '#656565'; // Color predeterminado
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
