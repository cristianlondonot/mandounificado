import React, { useState, useEffect } from 'react';

const UseCarenciasPorVereda = ( tipoCarencia ) => {
  const [carenciasPorVeredaBarrio, setCarenciasPorVeredaBarrio] = useState([]);

  //console.log(tipoCarencia)
  
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/cristianlondonot/mandounificado-spidersoft/main/data-factor.json')
      .then(response => response.json())
      .then(data => {
        let filteredData = data;

        if (tipoCarencia && tipoCarencia !== 'DEFAULT') {
          filteredData = data.filter(item => item.DATA_FILTER === tipoCarencia);
        }

        const countByVeredaBarrio = filteredData.reduce((count, item) => {
          const veredaBarrio = `${item.NOMBRE} - ${item.MUNICIPIO}`;
        
          if (count[veredaBarrio]) {
            count[veredaBarrio]++;
          } else {
            count[veredaBarrio] = 1;
          }
        
          return count;
        }, {});


        // Convertir el objeto a un array de objetos
        const resultArray = Object.entries(countByVeredaBarrio).map(([veredaBarrio, count]) => ({
          veredaBarrio,
          count,
        }));

        // Asegúrate de que setea correctamente el estado como un array
        setCarenciasPorVeredaBarrio(resultArray);
        //console.log(resultArray)
      })
      .catch(error => console.error('Error al cargar los datos:', error));
  }, [tipoCarencia]);
  
  const getColorByCarencias = (nombreVeredaBarrio, nombreMunicipio) => {
    const veredaMunicipio = `${nombreVeredaBarrio} - ${nombreMunicipio}`;
  
    const lengthFactor = carenciasPorVeredaBarrio.find(item =>
      item.veredaBarrio === veredaMunicipio
    )?.count || 0;
  
    let fillColor = '#656565'; // Color predeterminado
    if (lengthFactor <= 3) {
      fillColor = '#387905';
    } else if (lengthFactor <= 6) {
      fillColor = '#feba00';
    } else if (lengthFactor <= 9) {
      fillColor = '#F2860D';
    } else if (lengthFactor <= 12) {
      fillColor = '#fc6107';
    } else if (lengthFactor >= 13) {
      fillColor = '#FC0707';
    }
  
    return fillColor;
  };
  return { getColorByCarencias };
}


export default UseCarenciasPorVereda;