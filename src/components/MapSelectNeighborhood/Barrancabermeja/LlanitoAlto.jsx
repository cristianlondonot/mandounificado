import React, {useEffect, useState} from 'react'

const LlanitoAlto = () => {
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
        id="uuid-c5848921-ab8d-49ea-a677-7ba5a84887a2"
        xmlns="http://www.w3.org/2000/svg"
        width={273.47}
        height={232.95}
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 173.47 132.95"
        className='m-auto'
      >
        <polygon
          fill={cambiarColorSegunCarencias('LLANITO ALTO')}
          className="uuid-b01a2d03-cf22-48cf-a377-79fb38998a4b"
          points="152.76 44.24 154.51 45.76 155.26 47.51 155.26 49.49 155.26 51.51 155.51 53.26 156.76 54.75 158.01 56.25 158.76 58.25 159.26 59.75 160.75 61 162.5 61.25 164.5 62.27 165.75 63.76 166 65.76 167 67.26 170.24 71.01 166 69.51 164 69.01 162.25 68.51 160.01 68.26 158.26 67.76 156.51 67.76 154.76 68.26 153.01 69.26 151.27 70.26 149.52 70.01 147.77 70.51 146.27 72.01 145.77 73.77 144.77 75.27 143.02 76.02 140.78 75.52 138.28 75.02 136.03 74.27 133.78 73.77 131.79 72.78 130.29 71.26 128.54 70.26 126.54 69.76 124.79 68.76 124.29 70.51 124.04 72.51 124.04 74.77 124.29 77.02 124.29 79.02 124.79 81.02 125.04 82.76 124.79 84.76 123.8 86.76 122.8 88.26 121.3 89.76 120.05 91.75 119.05 93.52 118.3 95.52 117.8 97.52 117.8 99.77 117.55 102.01 117.55 104.26 117.8 106.01 117.8 108.03 117.55 110.03 117.3 112.02 117.05 114.52 116.8 116.52 116.55 118.79 116.3 120.79 115.8 122.53 114.8 124.03 113.08 124.53 111.83 126.03 111.58 128.03 110.08 126.78 108.83 125.53 107.08 125.53 106.58 127.28 107.08 129.03 107.58 130.77 105.84 131.79 104.09 130.77 102.34 130.3 100.84 128.78 100.59 127.03 99.59 125.28 97.84 125.03 96.35 124.03 94.35 123.28 92.6 122.78 90.35 122.28 88.1 122.28 85.86 122.53 84.11 122.53 82.36 122.28 80.11 122.03 78.12 120.79 75.62 119.29 73.64 118.52 73.64 120.54 74.89 122.53 76.62 124.03 78.62 125.03 79.36 126.78 78.37 128.53 76.87 129.53 75.12 129.78 73.14 130.03 71.39 130.03 68.9 130.77 67.15 130.55 64.9 130.3 62.65 130.03 60.41 128.78 58.16 128.78 55.91 128.78 53.66 129.28 51.92 129.53 50.17 129.03 48.67 128.03 46.67 127.78 44.42 128.03 42.93 129.28 40.43 129.53 38.68 129.53 36.18 129.03 34.21 128.28 32.46 128.03 30.46 127.03 30.71 124.53 30.21 122.78 29.46 120.79 28.21 119.29 27.21 117.52 26.71 115.02 25.96 113.27 25.96 111.03 24.97 109.28 24.47 107.53 23.47 105.76 22.47 103.76 21.97 102.01 20.72 100.27 19.47 98.52 18.22 97.02 16.23 95.25 14.23 94.02 12.73 93.27 11.48 91.53 10.48 89.76 9.73 87.78 9.23 86.01 7.73 84.53 6.24 83.76 4.49 84.53 2.74 85.28 1.99 85.51 2.24 85.03 3.24 82.76 4.49 81.02 5.49 78.77 5.99 76.52 6.99 74.77 7.48 72.51 8.23 70.51 8.23 70.01 8.73 68.51 9.48 66.51 10.23 64.76 11.48 63.02 12.48 61.52 14.23 60 16.47 59.25 18.47 58.75 20.22 57.75 21.47 56 22.47 54.25 23.22 52.51 24.22 49.74 24.47 47.74 25.71 45.51 26.71 44.02 27.46 42.25 28.96 40.02 30.21 37.75 30.71 35.5 31.46 33.76 31.71 31.76 32.21 29.76 33.21 27.51 34.46 24.74 35.18 22.25 35.93 20.25 37.43 17 38.68 14.73 39.93 12.49 40.93 10.49 41.93 8.49 42.68 6.49 43.17 4.5 43.92 2.48 44.67 1 45.17 1 47.42 1.98 48.92 2.73 50.92 3.25 52.91 4 54.41 4.75 55.91 5.74 57.41 6.74 59.41 7.74 61.65 8.99 63.15 9.49 65.4 10.74 67.9 11.49 70.15 10.99 70.4 8.99 71.14 6.99 72.14 5.5 73.89 6.49 75.62 6.74 77.62 7.74 79.36 7.24 80.61 5.74 82.36 5.99 84.11 6.24 85.86 6.24 88.35 6.49 90.35 7.24 92.35 7.99 94.6 8.24 95.85 6.49 97.59 5 99.34 5.74 100.84 6.99 103.09 7.99 104.84 8.99 106.58 9.74 108.83 10.99 110.33 11.99 111.83 12.99 113.83 14.73 115.55 16.5 115.8 18.5 116.8 20 118.55 20.75 119.8 21.75 120.05 23.5 120.3 25.49 121.8 27.26 123.3 28.51 125.04 29.76 127.29 31.01 129.04 31.51 131.04 32.51 133.03 33.26 134.78 33.26 136.28 34.51 138.28 36 140.03 37.25 141.53 38.25 143.52 39.52 145.52 41.02 147.27 42.25 148.77 43.77 150.52 44.51 152.76 44.24"
        />
      </svg>
    </div>
  )
}

export default LlanitoAlto