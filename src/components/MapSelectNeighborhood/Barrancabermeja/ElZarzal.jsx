import React, {useEffect, useState} from 'react'

const ElZarzal = () => {
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
        id="uuid-6a903b80-bc9e-46e5-89d9-7f123e6f1daa"
        xmlns="http://www.w3.org/2000/svg"
        width={402.13}
        height={297.94}
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 302.13 197.94"
        className='m-auto'
      >
        <polygon
          fill={cambiarColorSegunCarencias('EL ZARZAL')}
          className="uuid-5320b729-94bb-47f3-b7d5-b0b48370eb91"
          points="300.85 55.66 251.38 119.16 250.11 120.67 249.86 120.93 246.83 124.97 234.45 140.67 233.94 141.69 229.14 147.75 223.33 155.1 191.5 196.07 190.99 195.06 188.72 194.8 186.19 195.31 184.43 195.06 182.4 194.3 180.13 194.05 178.11 193.79 176.09 193.79 174.07 193.79 172.07 193.29 169.79 192.53 167.77 191.77 165.75 191.02 164.23 190 162.72 188.74 161.2 187.73 158.68 185.71 156.91 184.43 155.14 182.66 153.62 181.39 152.11 179.62 150.34 178.87 148.57 180.13 146.8 181.39 144.53 182.4 142.51 181.65 141.24 180.38 139.73 178.87 138.46 177.6 137.2 175.84 136.44 173.81 134.93 171.77 133.41 170 132.4 168.74 130.91 166.72 130.15 164.44 129.64 162.17 127.87 161.64 126.11 161.64 123.83 161.41 122.32 160.13 120.29 158.89 118.53 158.36 117.01 157.37 115.24 156.36 113.22 156.36 110.95 156.61 108.93 157.12 106.9 158.61 105.39 160.4 103.87 161.92 102.36 162.93 100.34 163.94 98.31 165.2 96.29 165.46 94.27 165.46 92.25 165.46 89.49 165.46 87.47 165.2 85.45 164.7 83.18 164.95 81.41 165.46 79.64 165.46 77.62 166.47 75.6 166.47 73.83 165.71 73.07 163.94 72.06 161.92 70.8 159.88 69.53 158.13 68.02 156.61 66 155.85 63.97 155.1 61.45 155.1 59.43 154.84 57.66 155.33 55.89 156.84 53.62 157.88 51.59 158.61 49.32 159.12 46.79 159.12 44.52 158.89 42.5 158.89 40.73 158.89 39.22 157.6 37.7 155.85 36.69 154.32 35.68 152.57 34.41 151.05 33.4 149.52 31.89 148.25 30.37 147.24 29.11 145.73 28.35 144.21 28.1 141.69 28.1 139.66 27.85 137.87 27.59 135.35 26.33 134.08 24.81 133.07 22.79 132.32 20.52 131.56 18.25 130.8 16.48 129.54 14.96 128.27 13.19 126.99 11.68 125.47 10.18 123.71 9.17 121.94 7.91 119.66 6.39 118.15 5.13 116.63 4.12 115.09 2.6 113.58 1.09 112.08 1.34 110.04 1.84 108.02 1.84 105.77 1.34 104.76 3.87 103.47 5.89 102.46 7.91 100.95 9.42 99.68 11.68 98.17 14.2 96.65 16.73 94.88 18.25 93.87 21.78 90.82 24.56 89.05 26.08 88.04 27.59 87.03 30.62 85.01 32.9 83.49 34.41 82.23 35.93 80.97 37.45 79.68 38.96 78.42 41.74 76.65 44.02 75.13 45.53 74.12 47.05 73.11 48.56 71.85 50.08 70.33 51.34 69.07 53.62 66.77 56.65 64.77 58.42 63.76 61.2 61.72 62.71 60.71 64.23 59.47 66 58.21 67.51 56.92 70.29 55.15 73.07 53.64 76.61 51.11 79.13 49.85 80.9 48.58 83.43 47.57 85.45 46.31 87.72 44.77 89.49 43.51 91.74 41.74 94.27 40.48 96.8 38.96 98.57 37.7 100.08 36.94 101.85 37.19 103.87 36.94 105.64 36.18 107.66 35.68 109.94 34.92 112.21 33.89 113.22 33.38 116.25 32.63 119.79 32.37 123.07 31.87 126.61 30.6 129.39 29.59 132.4 28.58 134.67 28.33 137.71 27.82 140.49 27.32 143.26 26.56 147.05 25.55 150.34 24.79 153.62 24.29 155.9 24.03 158.93 24.29 162.21 23.78 164.23 23.28 168.28 22.25 171.06 21.74 174.07 21.23 176.59 20.5 178.36 19.97 181.14 18.96 182.66 18.2 184.43 17.21 186.19 15.93 188.47 14.43 189.98 13.4 192.26 13.66 194.78 13.66 197.31 13.15 199.58 12.67 202.36 11.63 204.64 11.38 206.66 10.88 208.68 10.37 210.45 9.61 212.97 8.35 215 8.1 217.52 7.59 219.8 8.35 222.32 8.6 224.09 8.85 226.11 8.6 228.64 8.35 230.66 7.84 233.44 7.34 235.21 6.83 235.97 6.58 237.99 5.57 240.77 5.07 243.04 4.56 245.82 4.56 248.35 4.05 250.62 3.55 252.62 3.3 254.39 2.79 256.16 2.29 257.92 1.78 259.69 1.78 261.71 1.78 263.74 1.53 265.5 1.28 267.53 1.02 269.55 1.78 271.06 2.79 272.58 4.05 273.84 5.32 275.36 6.58 276.37 8.35 276.87 10.37 277.38 12.41 277.38 14.18 277.63 16.46 277.38 18.73 276.87 21 276.37 23.02 276.12 25.05 274.85 27.32 275.36 29.09 275.61 31.36 276.12 32.88 277.38 34.39 278.89 36.18 280.16 37.7 281.42 39.21 282.68 40.48 284.2 42.5 285.72 43.76 287.23 45.53 289 47.07 291.02 48.58 292.79 49.85 294.29 51.11 296.05 52.12 298.08 52.88 299.59 54.14 299.84 54.39 300.85 55.66"
        />
      </svg>
    </div>
  )
}

export default ElZarzal