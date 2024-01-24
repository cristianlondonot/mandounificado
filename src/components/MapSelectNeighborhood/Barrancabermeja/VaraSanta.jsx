import React, {useEffect, useState} from 'react'

const VaraSanta = () => {
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
        id="uuid-a53579bb-36f0-4d68-930d-bf1ce2b0e81a"
        xmlns="http://www.w3.org/2000/svg"
        width={211.23}
        height={188.41}
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 111.23 88.41"
        className='m-auto'
      >
        <polygon
          fill={cambiarColorSegunCarencias('VARA SANTA')}
          className="uuid-0331ea4a-7bcb-49ef-903a-1dfa848fcee3"
          points="84.55 46.62 84.8 46.87 85.05 48.87 84.55 50.63 84.05 52.38 84.55 54.13 85.55 55.63 87.55 54.88 89.06 55.63 90.81 56.38 92.54 56.63 94.79 57.88 96.54 58.38 98.55 58.63 100.55 59.13 102.8 59.39 104.8 59.13 106.55 59.89 108.06 60.89 109.56 62.14 108.06 63.14 106.05 63.14 104.3 63.89 103.05 65.39 100.8 66.41 99.3 67.41 97.54 68.92 96.29 70.17 95.04 71.67 93.29 71.67 91.31 71.67 87.55 71.67 85.05 72.17 82.8 72.67 80.55 72.67 78.54 72.67 76.29 73.42 74.54 73.67 72.79 74.17 71.04 74.42 69.03 74.67 67.53 75.92 65.53 76.42 63.03 78.2 61.53 79.2 59.52 79.95 58.27 81.45 56.52 82.7 54.77 83.45 53.27 84.96 51.28 86.21 49.28 86.96 48.28 87.21 47.78 85.46 47.78 83.7 48.03 81.7 48.53 79.7 48.28 77.7 47.53 75.67 46.28 73.67 44.53 72.67 42.78 72.42 40.77 71.92 39.27 70.67 37.52 69.92 35.27 69.42 33.26 69.42 31.51 69.67 29.51 69.42 27.01 68.67 25.26 68.17 23.5 67.67 22 66.41 21.25 64.39 20.75 62.64 19.5 60.89 18.5 59.13 17.25 58.13 15.5 58.38 13.24 57.63 11.51 58.38 9.51 58.63 7.76 57.63 6.99 55.88 7.51 53.88 8.24 51.88 8.76 50.12 9.24 47.87 9.51 45.87 8.99 43.87 8.51 42.1 8.24 40.09 7.99 38.59 7.76 38.34 6.99 36.59 6.74 34.84 6.74 33.09 6.99 30.81 7.26 29.06 5.98 27.31 4.48 26.06 2.73 25.31 1.98 23.55 1.98 21.55 1 19.78 1 17.78 2.73 16.52 4.48 15.27 6.26 14.02 8.51 13.02 10.49 11.77 12.49 10.52 14.49 9.77 16.5 9.27 18.5 8.52 20.25 7.52 22 6.01 24 5.26 25.76 4.01 27.51 5.01 29.01 3.51 30.51 2.26 32.01 1.26 34.02 1.01 36.02 1.26 37.02 3.01 36.02 4.51 34.27 5.51 33.26 7.52 33.01 9.27 34.77 9.02 36.77 8.77 38.52 9.02 40.27 9.77 41.52 11.27 42.27 13.02 43.53 14.77 44.53 16.02 46.03 17.28 47.78 17.03 49.53 16.02 51.28 15.77 53.52 15.77 55.27 16.27 56.77 17.53 58.52 18.03 60.02 19.28 61.28 20.55 62.28 22.55 62.28 24.55 62.03 27.06 61.78 28.81 61.78 30.81 62.03 32.83 63.03 34.34 64.53 35.84 66.53 36.09 67.78 38.09 68.53 39.84 70.29 40.34 72.29 40.34 73.79 39.34 75.29 40.59 76.54 42.35 78.29 43.62 80.05 44.37 81.8 44.87 83.55 45.62 84.55 46.62"
        />
      </svg>

    </div>
  )
}

export default VaraSanta