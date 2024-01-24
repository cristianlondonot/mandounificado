import React, {useEffect, useState} from 'react'

const SanRafaelDelChucuri = () => {
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
        id="uuid-bf74aa7d-0538-4744-abb1-88c8cede4def"
        xmlns="http://www.w3.org/2000/svg"
        width={230.1}
        height={215.47}
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 230.1 215.47"
        className='m-auto'
      >
        <polygon
          fill={cambiarColorSegunCarencias('SAN RAFAEL DEL CHUCURI')}
          className="uuid-8ef9cfe8-2254-4172-9f33-0d53593963fb"
          points="178.06 140.5 178.57 141 168.52 147.31 168.27 147.56 140.15 165.16 131.86 170.21 75.61 205.67 63.8 213.21 63.55 213.21 63.55 213.46 63.05 213.46 62.8 213.46 62.54 213.46 61.79 213.46 61.54 213.21 61.29 213.21 61.04 213.21 60.79 213.21 60.28 213.21 60.03 213.21 59.78 213.21 59.78 212.96 59.28 212.96 58.78 212.96 58.27 212.96 58.02 212.96 57.77 212.96 57.27 212.96 57.02 213.46 56.51 213.71 56.01 213.71 54.76 213.46 54.25 213.71 53.75 213.71 53.25 213.71 53 213.71 52.5 213.71 52.24 213.96 51.74 213.96 51.49 213.96 51.24 213.71 50.99 213.71 50.74 213.71 50.49 213.71 50.23 213.71 49.73 213.71 49.23 213.71 48.73 213.46 48.22 213.46 47.97 213.46 47.22 213.46 47.22 213.21 46.72 212.96 46.47 212.96 45.96 212.71 45.71 212.46 45.21 212.2 44.96 211.95 44.46 211.7 44.21 211.45 43.7 211.45 43.2 211.45 42.95 211.45 42.45 211.7 41.94 211.7 41.69 211.7 40.94 211.95 40.69 211.95 40.44 211.95 40.19 211.7 39.93 211.7 39.68 211.45 39.43 211.2 39.18 211.2 38.93 210.95 38.68 210.7 38.43 210.45 38.43 210.7 38.68 210.95 38.93 211.2 39.18 211.45 39.43 211.45 39.68 211.95 39.68 212.2 39.43 212.71 39.18 212.71 39.18 212.96 39.18 213.21 39.18 213.71 39.18 214.21 39.18 214.47 38.93 214.47 38.93 214.21 37.92 214.21 36.92 212.96 35.91 211.7 34.68 210.19 33.42 208.94 32.17 207.43 30.91 205.67 29.4 202.64 27.9 200.88 26.64 198.62 25.38 197.36 24.38 195.6 22.37 193.84 20.86 191.81 19.61 190.31 18.1 188.55 16.34 186.04 15.59 184.53 14.33 182.77 12.32 180.76 10.56 179.25 8.8 177.24 7.55 175.74 6.04 173.73 4.78 171.97 3.78 170.46 2.27 168.93 1.52 167.93 2.02 167.68 6.04 164.16 9.31 161.9 13.58 157.61 18.1 153.59 21.37 150.57 24.88 147.81 28.65 144.02 32.17 141.26 36.42 136.48 37.17 135.73 39.68 133.47 40.44 132.71 42.2 130.7 44.46 127.94 45.96 125.18 47.22 122.9 48.22 119.13 48.98 115.61 49.98 113.1 50.49 111.32 51.99 108.56 52.5 107.3 55.76 101.77 59.03 96.98 64.3 90.2 69.08 85.93 72.84 83.66 77.11 83.41 79.88 83.16 81.62 83.16 82.64 82.66 85.89 81.65 89.15 78.64 91.94 75.6 93.95 73.34 96.44 70.33 96.71 69.83 96.94 69.83 99.7 66.81 100.73 66.04 102.72 63.52 105.98 60.26 109 58.25 113.02 56.49 113.54 56.24 126.08 50.19 127.84 49.18 134.87 45.92 143.67 39.89 147.69 36.87 150.45 34.87 151.71 34.11 156.71 30.32 163.24 27.06 170.02 24.04 180.32 17.49 184.34 14.98 188.36 13.22 190.12 12.46 190.62 12.21 190.87 11.96 194.39 10.96 196.88 10.2 200.9 10.2 205.68 9.7 206.68 9.7 209.7 9.2 212.96 7.42 214.97 5.91 215.98 4.91 219.74 1.39 220.25 1.89 220.25 2.14 221.25 3.65 222 5.41 223.51 7.42 225.02 9.45 226.28 10.96 227.28 12.46 228.54 14.73 229.04 16.74 228.29 18.24 227.03 20.52 226.02 22.28 224.77 24.29 223.26 26.05 222 27.56 220.25 28.56 218.49 28.31 216.73 27.81 214.97 28.31 213.71 30.57 212.46 32.35 211.2 33.61 209.44 34.36 207.43 35.37 205.68 36.62 204.42 37.88 202.66 39.14 200.9 40.39 199.4 41.65 199.14 43.91 199.14 45.92 199.14 48.68 199.14 50.69 199.4 52.45 199.65 54.73 199.9 56.99 199.9 59.76 199.9 62.02 199.65 63.78 199.65 66.04 199.65 67.82 199.4 69.58 199.4 71.84 199.14 73.85 199.14 76.61 199.14 79.14 199.14 81.65 199.14 83.41 199.4 85.67 199.65 87.68 199.65 89.69 199.9 91.7 199.9 94.22 199.9 96.23 199.65 98.23 199.4 99.99 199.4 102.28 199.4 102.53 199.9 103.03 200.15 103.28 200.15 103.53 199.65 104.54 199.65 105.54 199.14 106.55 198.89 107.3 198.64 108.05 198.39 108.3 198.14 108.81 198.14 110.57 198.14 110.82 198.14 111.07 197.13 111.32 195.88 111.32 195.15 111.32 193.64 111.07 192.38 110.82 192.13 110.82 190.62 110.82 189.12 110.57 187.86 110.57 186.86 110.57 184.59 110.31 183.59 110.06 183.09 110.06 180.83 109.56 179.57 109.56 177.81 109.56 176.56 109.81 176.05 110.06 175.3 110.57 174.29 111.32 173.79 112.07 172.54 113.1 171.53 114.1 170.02 115.36 168.77 116.62 167.76 117.37 167.01 117.62 166 118.12 165.25 118.63 164.5 119.38 162.74 120.64 160.98 121.64 162.74 122.39 162.99 124.17 165.5 126.18 168.01 129.45 170.27 132.21 173.04 134.22 174.8 135.23 176.05 137.24 176.81 139 177.06 139.5 177.56 140 178.06 140.5"
        />
      </svg>
    </div>
  )
}

export default SanRafaelDelChucuri