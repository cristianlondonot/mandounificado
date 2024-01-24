import React, {useEffect, useState} from 'react'

const ElCretaceo = () => {
  const [carenciasPorVeredaBarrio, setCarenciasPorVeredaBarrio] = useState([]);
  const [promedioTotalCarencias, setPromedioTotalCarencias] = useState(0);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/cristianlondonot/mandounificado-spidersoft/main/data-factor.json')
      .then(response => response.json())
      .then(data => {
        const countByVeredaBarrio = data.reduce((count, item) => {
          const veredaBarrio = item.NOMBRE;

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

        // Calcular la suma total de carencias
        const totalCount = resultArray.reduce((total, item) => total + item.count, 0);

        // Calcular el promedio total de carencias
        const promedioTotal = totalCount / resultArray.length;

        // Guardar el promedio total en el estado
        setPromedioTotalCarencias(promedioTotal);
      })
      .catch(error => console.error('Error al cargar los datos:', error));
  }, []);
  
  const cambiarColorSegunCarencias = (nombreVeredaBarrio) => {
    const lengthFactor = carenciasPorVeredaBarrio.find(item => item.veredaBarrio === nombreVeredaBarrio)?.count || 0;
  
    let fillColor = '#656565'; // Color predeterminado
    if (lengthFactor <= 3) {
      fillColor = '#387905';
    } else if (lengthFactor <= 6) {
      fillColor = '#feba00';
    } else if (lengthFactor <= 9) {
      fillColor = '#F2860D';
    } else if (lengthFactor <= 12) {
      fillColor = '#fc6107';
    } else if (lengthFactor < 15) {
      fillColor = '#FC0707';
    }
  
    return fillColor;
  };
  return (
    <div className='w-full min-h-96'>
      <svg
        id="uuid-c9768a05-bff2-4960-984a-80e6f2e9611e"
        xmlns="http://www.w3.org/2000/svg"
        width={213.38}
        height={150.43}
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 113.38 50.43"
        className='m-auto'
      >
        <polygon
          fill={cambiarColorSegunCarencias('EL CRETACEO')}
          className="uuid-27a52731-1a9e-41cd-a20b-e86895ea321a"
          points="108.13 6.09 108.13 7.88 107.25 11.39 106.81 14.89 108.13 17.95 110.32 20.58 112.07 22.77 112.94 25.4 112.51 24.96 112.07 24.96 112.07 25.4 112.94 26.71 112.51 26.71 112.07 26.71 112.07 27.59 112.07 28.5 112.07 28.94 112.51 29.38 112.94 29.38 112.94 30.25 113.38 31.13 112.94 32.88 112.94 35.51 112.94 36.82 112.94 37.7 112.51 38.57 112.51 39.89 112.07 40.76 111.63 41.64 111.19 42.08 110.32 43.83 109.44 45.58 109.44 45.14 109.44 44.7 109.44 44.27 109 43.83 109 43.39 109 42.95 108.57 42.95 108.57 42.51 108.13 42.51 108.13 42.08 107.69 42.08 106.81 42.51 106.38 42.51 105.94 42.08 105.5 42.08 105.06 41.64 102.43 41.2 101.56 41.2 101.12 41.2 101.12 43.39 101.12 46.89 101.12 49.12 101.12 50.43 98.93 49.56 95.87 48.68 92.8 48.24 89.74 46.89 86.23 46.02 82.73 45.14 79.66 43.83 75.72 42.51 72.66 40.32 68.31 37.7 64.81 35.95 60.83 35.07 57.37 34.63 53.86 34.63 50.76 33.32 47.7 32 43.75 30.25 41.16 29.38 37.22 28.5 33.68 28.06 30.62 27.15 26.68 25.84 23.61 23.65 19.67 22.77 16.17 21.02 13.1 19.71 9.6 19.71 6.57 19.27 3.07 18.39 0 17.08 3.47 15.76 7.85 14.89 11.35 12.7 15.73 12.7 19.27 12.26 22.77 11.82 26.68 11.82 31.09 12.26 34.56 11.82 38.97 11.82 42.04 10.95 45.98 10.95 50.76 10.51 53.86 10.51 57.37 9.2 61.75 8.32 66.12 7.44 70.03 6.57 73.97 6.97 77.91 6.57 81.41 5.22 89.3 2.15 93.24 1.28 97.18 .84 101.12 .4 104.62 0 106.81 0 107.25 1.28 107.69 4.82 108.13 6.09"
        />
      </svg>
    </div>
  )
}

export default ElCretaceo