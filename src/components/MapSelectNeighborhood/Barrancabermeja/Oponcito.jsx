import React, {useEffect, useState} from 'react'

const Oponcito = () => {
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
        id="uuid-23d449d7-aa23-487f-aca6-f4c1559d4953"
        xmlns="http://www.w3.org/2000/svg"
        width={149.85}
        height={207.13}
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 49.85 107.13"
        className='m-auto'
      >
        <polygon
          fill={cambiarColorSegunCarencias('OPONCITO')}
          className="uuid-e9df0780-136f-4db9-87a5-470e1487b126"
          points="46.73 28.36 46.23 28.36 45.22 28.36 44.47 28.36 43.96 27.86 43.71 27.36 43.46 27.1 43.21 26.6 42.45 26.35 42.2 26.6 41.95 27.1 41.7 27.61 41.2 28.11 40.19 28.36 39.44 28.36 38.93 28.63 39.18 29.39 40.69 30.4 40.95 30.9 40.95 31.65 40.44 32.41 39.44 33.16 38.68 33.67 38.18 34.42 37.93 34.93 38.43 35.43 38.93 35.43 39.94 34.93 40.44 34.67 41.2 34.42 41.95 34.67 42.71 34.93 43.46 34.93 43.96 35.68 44.22 36.69 44.72 37.94 44.72 38.95 44.47 39.71 43.71 39.71 42.45 39.96 40.95 39.71 39.44 38.95 38.18 38.2 36.92 38.2 35.91 38.7 35.66 39.2 35.66 39.45 35.91 40.48 36.92 41.24 37.93 41.99 38.68 41.99 38.93 41.99 39.44 42.24 40.44 43 40.44 44.26 39.94 45.26 39.44 46.02 38.68 46.52 37.67 46.02 36.92 45.01 36.67 44.51 36.42 44.01 36.16 43.75 35.41 43.25 34.4 43 33.4 43.25 32.39 44.26 32.64 45.26 33.4 46.77 34.65 47.78 35.41 49.54 36.42 50.8 36.92 51.55 37.93 52.31 38.43 52.56 38.68 52.56 39.18 53.32 38.93 54.07 38.18 54.57 37.42 54.57 36.67 54.07 35.91 53.32 35.16 52.56 34.15 52.31 32.89 52.81 31.38 53.32 30.63 53.57 29.87 53.82 29.87 54.07 29.37 54.57 29.12 55.33 29.12 55.58 29.37 56.59 29.87 58.1 30.38 59.1 30.88 60.11 31.89 61.12 32.64 61.37 33.4 61.12 34.15 60.36 35.16 59.61 36.16 58.35 36.92 57.84 37.93 58.1 38.68 58.6 39.44 59.1 39.44 60.11 38.68 61.37 37.67 62.63 36.67 64.41 35.66 65.41 35.66 65.92 35.66 66.42 35.91 66.92 36.42 67.43 36.92 67.93 36.67 68.94 35.91 69.69 35.41 70.2 34.65 70.95 34.91 71.45 35.66 71.96 37.42 71.96 39.44 71.96 41.45 71.71 42.96 71.45 45.22 71.2 46.48 71.2 47.49 71.2 48.24 71.45 48.75 71.96 48.75 72.71 48.49 73.22 47.24 73.47 45.22 73.97 44.22 74.47 42.96 74.47 42.45 74.47 41.45 74.73 41.2 75.25 40.95 75.5 40.19 75.75 39.44 76 38.68 76 38.18 76.26 37.93 77.26 37.42 78.52 36.92 80.03 36.42 80.79 36.16 81.29 35.66 82.55 35.66 83.3 35.66 83.55 35.66 84.06 36.16 85.31 35.91 86.32 35.66 87.35 35.41 88.1 35.41 89.61 35.66 91.12 35.91 92.38 35.91 93.89 35.66 95.65 35.41 96.66 34.91 98.17 34.15 98.67 33.4 98.92 32.89 98.42 33.14 97.41 33.65 96.41 33.9 95.4 33.9 94.39 33.4 94.14 32.89 93.89 31.89 94.39 30.88 95.9 29.87 97.41 29.37 97.67 28.87 97.67 27.86 96.91 27.11 95.65 26.1 93.89 25.6 93.39 24.59 93.64 23.83 95.15 23.58 95.65 23.08 96.91 23.33 98.67 23.33 98.92 23.83 99.68 24.84 100.43 26.6 101.69 27.61 102.7 27.61 103.45 27.61 103.7 27.36 104.21 27.11 104.71 26.85 104.71 25.85 105.72 25.34 105.21 23.83 104.21 22.32 102.95 20.81 101.19 19.56 99.93 18.05 98.17 17.04 96.41 15.78 94.65 15.03 93.14 14.52 90.87 14.27 88.86 14.27 86.85 14.52 84.81 14.78 82.55 14.78 80.53 15.03 78.52 14.02 76.76 12.51 77.77 10.75 79.02 8.99 80.53 7.48 82.04 5.46 82.55 3.22 82.8 2.21 81.29 1.71 79.02 1.96 76.76 1.46 75 1.21 74.47 1.71 73.97 2.72 72.71 3.98 71.2 4.96 69.69 5.21 67.68 5.97 65.92 6.72 64.41 6.97 62.37 6.97 60.36 6.72 58.35 6.72 56.59 7.23 54.83 7.73 53.06 9.24 52.31 11.25 51.55 13.01 50.8 14.02 49.29 14.78 47.53 15.53 45.51 16.54 43.5 17.29 41.74 18.05 40.23 19.05 38.2 20.06 36.69 21.57 35.18 22.58 33.67 23.33 31.91 24.34 30.4 25.34 28.89 26.1 26.6 27.36 24.59 28.36 22.32 29.12 20.06 30.12 17.29 31.13 15.26 31.89 13.75 32.89 11.48 33.9 9.47 34.91 7.71 35.91 5.44 36.67 3.93 36.67 3.68 37.93 4.44 39.18 5.69 40.95 4.94 41.45 3.18 42.45 1.42 43.46 1.16 43.71 1.67 43.46 3.68 44.47 5.19 45.73 6.95 45.73 8.97 44.72 10.48 43.71 11.73 42.96 13.49 43.71 15.26 44.47 17.02 44.97 18.8 46.23 20.06 46.48 21.82 45.73 23.33 44.72 24.84 44.47 26.85 44.72 27.36 44.97 27.1 46.73 28.36"
        />
      </svg>
    </div>
  )
}

export default Oponcito