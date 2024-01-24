import React, {useState, useEffect} from 'react'

const Honda = () => {
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
        id="uuid-17cb0084-8dcc-4c24-9da2-e33270db73d2"
        xmlns="http://www.w3.org/2000/svg"
        width={198.3}
        height={267.62}
        viewBox="0 0 198.3 267.62"
        className='m-auto'
      >
        <polygon
          fill={cambiarColorSegunCarencias('HONDA')}
          className="uuid-59aad304-4996-4061-be7b-b86addf6877c"
          points="169.54 57.22 170.69 61.27 170.98 65.92 171.26 68.81 170.41 69.96 169.54 73.14 169.25 74.01 168.95 74.88 167.22 76.61 164.61 77.77 163.76 78.64 163.76 83.84 163.47 85 162.6 86.45 160.85 87.6 159.7 89.34 158.85 93.7 157.41 96.88 155.39 99.48 154.53 101.79 154.82 103.53 154.53 106.16 153.66 108.76 148.45 114.54 142.38 119.48 136.88 123.82 130.53 129.6 124.45 133.36 120.98 136.25 119.54 139.72 117.81 146.11 115.48 153.63 114.91 160.01 113.17 170.13 112.31 171.6 111.14 173.34 111.72 174.78 112.6 175.94 116.07 177.96 117.51 179.41 117.22 180.56 115.19 181.43 114.61 181.72 114.91 182.59 113.17 186.35 109.7 187.79 107.69 188.08 107.39 189.82 107.39 190.68 108.54 191.84 111.14 192.71 112.01 193.58 112.6 194.73 112.01 201.99 110.86 205.17 110.57 205.46 110.57 205.74 110.86 205.74 111.14 206.03 111.14 206.32 111.14 206.61 111.14 206.9 110.86 206.9 110.57 207.19 109.41 206.32 109.41 206.03 109.13 206.03 108.54 205.46 106.82 207.19 106.23 207.48 105.94 208.06 105.36 208.64 104.78 208.93 103.92 209.79 103.64 210.08 102.47 211.26 101.61 212.13 101.03 212.71 100.75 213 100.45 213.29 100.17 213.29 99.87 213.58 99.58 213.29 99.29 213.29 99 212.71 98.14 211.84 96.98 210.66 96.69 210.37 96.4 210.08 96.4 209.79 95.83 209.21 95.53 209.21 95.25 209.21 94.95 208.64 94.67 208.06 94.37 207.77 94.08 207.48 94.37 207.19 94.67 206.61 94.37 206.61 93.51 206.61 92.36 207.19 91.48 207.48 91.48 208.35 91.19 208.93 90.33 210.08 90.04 210.37 90.04 210.08 89.75 209.5 89.47 207.77 89.17 207.48 89.75 206.03 88.31 205.46 85.42 204.59 77.31 202.56 73.28 201.12 69.51 201.12 68.36 201.12 66.64 199.96 65.19 197.91 63.17 196.76 60.28 197.05 60.58 195.31 60.86 193.29 60.28 191.55 59.7 189.82 58.25 188.66 55.65 187.79 54.22 186.35 54.22 185.19 55.08 181.14 54.78 179.7 53.92 177.67 51.03 175.07 49.58 175.65 47.56 177.67 44.09 179.12 40.33 181.14 35.7 181.72 33.97 181.14 33.39 178.54 34.54 177.09 35.12 176.23 34.83 175.65 33.97 175.36 33.11 175.94 32.53 175.65 32.23 174.49 32.81 172.18 32.23 172.18 29.06 174.49 28.19 174.78 27.03 175.36 28.19 171 28.76 166.37 28.76 165.5 29.06 163.48 29.64 161.46 29.92 156.23 30.22 155.07 29.92 151.6 31.65 148.71 33.39 146.97 35.12 145.82 36.86 145.24 40.33 144.95 42.94 143.19 46.11 140.01 49 138.57 50.17 138.28 51.03 137.99 55.08 137.12 58.83 136.54 60.86 133.94 64.62 131.63 68.94 130.47 71.83 128.44 73.84 125.55 74.14 125.26 75 122.66 76.45 120.06 78.76 116.28 82.81 112.81 86 108.18 87.15 103.24 89.17 98.04 91.48 93.41 91.48 89.63 90.9 86.45 90.9 82.4 91.48 78.64 92.06 73.43 93.51 68.52 94.67 63.87 95.53 61.27 95.83 60.98 99 58.08 103.92 57.51 109.7 57.51 113.47 57.51 120.11 55.48 122.42 56.35 125.89 57.22 130.53 58.95 135.44 61.27 139.48 62.71 144.69 61.84 146.13 61.27 148.45 60.4 151.35 58.95 152.79 57.51 155.97 55.48 160.29 54.04 163.47 54.61 165.48 55.19 167.51 56.06 169.54 57.22"
        />
      </svg>
    </div>
  )
}

export default Honda