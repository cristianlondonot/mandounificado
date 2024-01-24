import React, {useEffect, useState} from 'react'

const MesetaDeSanRafael = () => {
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
        id="uuid-58e49739-f45d-4c74-a870-da2fedf0eb07"
        xmlns="http://www.w3.org/2000/svg"
        width={228.73}
        height={209.55}
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 128.73 109.55"
        className='m-auto'
      >
        <polygon
          fill={cambiarColorSegunCarencias('MESETA DE SAN RAFAEL')}
          className="uuid-c153f0be-2f62-4f30-9447-ea82853a0190"
          points="87.87 7.57 87.62 8.33 87.62 8.58 87.11 10.1 86.61 15.17 86.1 18.71 85.6 20.98 86.1 24.77 86.1 27.32 86.1 28.33 86.1 30.6 86.86 32.37 90.9 35.66 92.67 38.44 94.69 39.97 95.45 40.2 96.97 40.73 98.23 40.73 100.25 40.2 104.29 39.19 107.83 39.19 108.08 39.19 110.1 39.45 111.62 39.97 112.13 40.2 112.63 40.2 114.15 40.96 116.42 42.5 117.43 43.99 119.2 46.04 119.96 46.52 120.95 47.53 122.21 48.29 124.23 49.07 124.99 49.32 120.46 50.33 120.21 50.33 118.44 49.83 116.17 49.57 114.65 50.58 114.4 52.35 113.64 54.12 111.87 53.87 110.1 53.62 108.59 55.13 107.58 56.9 106.06 58.42 104.04 58.67 102.02 57.41 100.5 56.65 98.74 57.15 96.71 58.16 95.7 59.93 94.95 61.97 94.44 64 93.43 66.02 91.91 67.03 89.89 66.52 88.12 66.02 86.1 65.51 84.59 66.02 85.34 67.79 86.86 69.3 88.63 70.06 90.65 70.31 92.42 70.82 93.93 71.85 94.95 73.62 94.44 75.39 93.93 77.41 93.93 79.43 94.19 81.95 94.69 83.47 95.45 85.26 96.21 87.77 96.97 89.56 97.47 92.06 97.47 93.85 96.71 95.87 94.95 95.87 93.43 94.61 91.16 94.08 88.88 94.61 87.11 95.11 85.09 94.86 83.58 93.58 82.06 92.33 80.54 91.07 79.55 89.56 77.53 89.05 75.51 89.28 73.74 88.8 72.23 87.26 70.96 85.51 69.45 84.48 68.19 85.74 67.43 88.52 67.43 90.55 67.17 92.33 65.91 94.08 63.89 94.36 62.37 95.62 61.87 97.39 62.37 99.66 63.13 101.43 64.4 103.45 65.15 104.97 65.15 106.76 63.64 108.27 61.87 108.53 60.1 108.02 58.33 107.01 56.56 106.76 54.79 105.98 53.03 104.46 51.76 102.69 50.25 101.68 48.73 100.42 46.96 99.41 45.45 98.15 43.68 98.15 41.66 98.4 40.39 99.66 40.39 101.43 39.91 103.96 37.87 104.21 35.85 103.96 33.59 103.7 31.82 102.95 31.32 101.68 30.81 99.91 30.29 97.89 30.29 95.87 31.55 94.08 32.33 92.06 32.33 90.31 31.32 88.29 30.29 86.5 28.77 85.26 27.28 84 25.23 83.47 23.97 82.46 22.22 80.69 20.45 78.67 18.69 77.41 16.66 76.14 15.13 74.88 13.63 73.62 11.61 72.35 10.1 70.82 8.83 68.8 8.58 66.77 8.58 64.75 8.31 62.98 7.82 60.71 6.79 58.92 5.02 57.66 3.27 57.15 1.74 56.39 1.48 54.63 2.24 52.86 1.99 50.84 1 49.32 1 47.53 3 46.79 4.79 46.79 6.79 47.05 8.58 47.05 10.35 46.52 11.86 45.28 13.36 44.27 14.14 42.5 15.13 40.73 15.13 38.96 15.13 36.94 16.66 35.91 18.69 36.16 20.96 36.41 21.97 34.9 21.7 32.88 20.96 31.11 20.18 28.83 18.69 27.07 16.9 25.3 18.18 24.01 20.18 23.76 21.97 23.76 23.97 23.25 26.01 22.24 27.78 21.49 29.55 20.48 31.04 19.46 33.09 18.71 35.36 17.95 37.87 17.44 39.64 17.19 41.66 17.44 43.42 17.44 44.94 16.18 45.19 16.18 45.7 14.41 45.7 13.65 44.94 13.65 43.68 12.87 44.94 12.37 45.19 12.12 47.47 10.35 49.74 9.34 52.02 8.83 54.29 8.58 56.06 7.82 60.1 5.04 62.63 2.26 64.4 1.23 64.9 1 65.66 1 66.42 1.23 67.17 1.74 67.68 2.77 70.46 6.56 71.47 7.57 72.99 8.58 73.24 8.58 75.26 9.08 76.52 9.08 78.04 8.58 80.06 7.57 82.06 5.8 84.08 5.55 85.6 6.81 86.36 7.32 86.61 7.57 87.37 7.82 87.87 7.57"
        />
      </svg>
    </div>
  )
}

export default MesetaDeSanRafael