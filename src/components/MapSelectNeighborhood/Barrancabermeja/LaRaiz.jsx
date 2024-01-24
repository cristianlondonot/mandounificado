import React, {useState, useEffect} from 'react'

const LaRaiz = () => {
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
        id="uuid-fe294086-36e0-4b10-80ec-08c0455333e5"
        xmlns="http://www.w3.org/2000/svg"
        width={213.22}
        height={226.76}
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 113.22 126.76"
        className='m-auto'
      >
        <polygon
          fill={cambiarColorSegunCarencias('LA RAIZ')}
          className="uuid-a13bb555-db16-4238-b08b-642d6c44afe1"
          points="64.38 3.53 64.63 5.28 64.63 8.06 64.63 10.06 64.38 12.32 63.63 14.57 63.13 16.58 63.13 18.58 63.13 18.83 63.38 20.59 64.13 22.59 65.88 24.35 67.64 25.1 68.89 26.6 69.89 28.61 70.89 30.38 72.65 30.88 74.4 31.13 76.16 30.13 78.14 30.63 79.39 32.14 80.9 33.64 82.15 35.14 83.9 36.4 85.91 36.9 87.91 37.15 90.67 37.4 92.93 37.9 94.18 39.4 95.93 40.66 97.69 41.93 99.44 43.68 100.94 44.94 102.7 45.19 104.2 46.69 105.45 48.44 106.21 50.7 106.96 52.2 107.71 53.96 108.21 55.98 108.71 58.47 108.96 60.22 108.96 60.49 108.71 62.25 107.96 64.25 107.21 66.51 107.46 68.51 107.96 70.27 108.71 72.52 108.96 74.78 109.21 76.55 109.46 78.31 109.72 80.06 109.72 80.31 109.46 82.57 108.96 84.57 107.96 86.58 107.21 88.6 106.71 90.36 105.96 92.11 105.45 94.12 105.2 95.62 105.2 95.87 105.71 97.87 106.96 99.15 108.96 100.13 110.22 101.9 111.22 103.64 111.97 105.41 112.22 107.15 112.22 107.42 111.72 109.15 110.97 110.93 109.72 112.43 109.21 114.18 108.96 114.68 108.21 116.19 108.21 116.44 107.46 118.19 106.46 120.2 105.71 121.7 104.95 123.48 104.45 124.48 103.45 124.48 101.45 124.48 99.19 125.48 97.19 125.73 95.43 124.98 93.93 123.73 92.17 122.98 90.17 121.95 88.16 121.7 85.91 121.45 84.15 120.45 82.9 118.69 80.9 117.69 78.64 117.44 77.16 116.44 75.66 115.19 73.9 115.19 72.15 115.69 70.39 116.94 68.64 117.94 66.88 118.94 64.63 118.94 62.88 118.69 61.12 118.69 59.37 118.94 57.61 119.45 55.36 119.45 53.35 119.2 53.1 117.69 52.6 115.94 52.1 114.18 51.35 112.68 50.35 110.93 50.1 109.4 49.84 106.92 49.59 105.14 49.09 103.41 48.59 101.63 48.34 99.63 47.84 97.37 47.84 95.62 47.84 95.37 48.34 93.11 48.34 90.86 48.34 90.61 48.09 88.1 47.59 85.57 46.59 83.07 45.33 81.31 43.83 79.81 42.08 78.81 40.32 77.56 38.82 75.53 37.84 73.02 36.56 71.27 35.56 69.77 34.33 68.51 32.83 67.26 31.3 65.76 29.32 64.48 27.79 62.98 26.56 61.23 25.54 59.97 24.53 57.74 24.03 55.98 22.78 54.71 20.3 51.95 18.54 50.95 16.77 49.2 15.01 48.95 13.26 49.95 12.28 51.45 11 53.23 9.52 54.23 7.26 54.48 5.74 53.48 5.26 51.7 5.26 49.45 5.74 47.44 6.51 45.69 7.77 44.44 9 42.43 10.02 40.91 10.75 39.4 10.27 37.15 8.52 35.89 6.26 35.39 4.76 34.64 2.98 35.39 1.98 35.39 1 34.39 1 34.14 6.26 31.38 9 29.11 12.51 26.1 14.28 24.1 17.77 21.34 20.53 17.56 22.55 14.32 24.53 11.55 25.04 11.04 25.81 9.06 26.06 8.31 27.06 5.28 27.29 5.03 28.06 3.78 29.32 2.77 31.07 2.27 31.3 2.02 33.56 2.77 35.56 3.78 36.08 4.03 38.07 4.03 38.32 3.78 41.07 2.52 42.58 2.02 45.58 1.02 47.59 1.27 50.6 1.52 53.1 2.02 55.61 2.27 59.37 2.27 62.37 3.28 64.38 3.53"
        />
      </svg>
    </div>
  )
}

export default LaRaiz