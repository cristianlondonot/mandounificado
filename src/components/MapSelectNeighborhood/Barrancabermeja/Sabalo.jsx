import React, {useEffect, useState} from 'react'

const Sabalo = () => {
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
        id="uuid-98c94184-73d5-4056-8783-aa9cc732b846"
        xmlns="http://www.w3.org/2000/svg"
        width={187.69}
        height={211.1}
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 87.69 111.1"
        className='m-auto'
      >
        <polygon
          fill={cambiarColorSegunCarencias('SABALO')}
          className="uuid-f3a260ad-b3e1-4a10-858b-7c4cecb79183"
          points="73.28 4.25 75.27 5.72 77.02 5.99 78.77 6.24 79.77 8.24 80.02 10.49 80.51 12.73 80.51 14.73 79.52 16.23 78.27 18 78.02 19.74 78.27 21.49 79.02 23.49 79.52 24.98 79.77 27.23 78.77 28.73 76.77 29.5 75.27 30.75 74.77 32.99 74.52 34.74 74.52 36.74 74.52 38.74 74.52 40.48 74.77 42.75 75.02 44.5 75.52 46.49 77.27 47.49 79.02 48.24 81.26 49.72 82.76 50.99 84.51 51.99 85.76 53.48 86.51 54.98 85.26 56.48 83.51 57.48 81.76 59.23 80.02 60.97 78.27 62.47 76.02 64.99 74.02 67.23 72.28 68.98 70.78 71.23 69.53 72.48 68.03 73.97 66.29 75.99 64.79 77.49 62.54 79.49 61.04 80.73 59.3 82.23 57.32 83.73 55.82 84.98 54.57 86.23 53.08 87.47 51.08 87.47 49.58 88.49 49.58 90.22 48.58 91.99 46.84 91.72 45.09 90.97 44.09 92.47 43.59 94.24 41.84 93.24 40.84 91.49 39.85 89.72 38.6 88.22 36.6 87 34.6 86.73 33.86 88.49 35.35 89.99 36.6 91.24 38.1 92.22 37.85 94.24 37.35 95.96 38.1 97.73 38.6 99.48 37.35 100.98 35.85 99.98 35.6 97.21 35.35 95.48 34.6 93.24 33.36 91.99 31.61 91.24 29.86 90.74 27.86 90.74 26.12 91.99 25.37 93.72 25.37 95.48 27.12 95.96 29.11 96.73 30.86 97.98 32.11 99.73 32.36 101.47 32.86 103.22 34.35 104.72 34.35 106.72 32.61 107.72 30.61 106.97 29.61 108.71 31.36 109.48 29.36 109.98 28.11 108.96 27.37 109.73 25.87 108.46 26.37 106.22 26.37 103.97 26.62 102.22 27.61 100.73 27.12 98.98 25.37 99.98 23.87 100.73 22.12 100.23 22.62 98.48 23.62 96.73 23.12 94.96 21.37 94.24 19.38 93.72 18.13 92.47 16.9 90.97 14.41 89.99 12.41 89.99 10.91 91.24 8.66 92.22 8.16 90.74 8.91 88.97 10.16 87.47 11.91 86.23 13.66 84.98 14.9 83.48 13.41 82.48 11.66 80.98 13.41 80.73 15.4 80.98 17.4 81.48 18.13 79.74 16.65 78.49 14.65 78.74 12.91 77.49 13.41 75.99 12.16 74.74 11.16 73.23 9.16 73.23 8.41 71.48 6.42 71.48 4.67 72.23 2.92 71.48 3.17 69.73 1.42 68.98 1.18 67.23 3.17 67.48 5.17 68.73 6.92 68.23 5.42 66.98 5.42 65.24 7.17 63.99 8.91 64.99 10.66 63.99 10.16 62.22 9.66 60.47 10.16 58.73 11.91 58.73 13.16 59.97 14.65 61.22 14.9 59.23 16.15 57.73 17.88 57.23 18.88 55.73 19.38 53.98 19.63 51.99 19.88 49.72 20.13 47.72 20.38 45.23 20.63 43.23 20.87 41.25 20.87 39.23 20.63 37.49 20.63 35.24 20.87 32.99 20.87 30.75 21.37 28.73 22.12 26.73 23.12 24.98 24.37 22.99 25.87 21.49 26.87 19.99 27.86 18 28.11 15.98 27.86 14.23 27.37 12.23 27.37 10.24 27.12 7.99 27.12 5.72 27.37 3.75 27.86 1.98 29.61 2.98 31.61 3.48 33.36 4.47 34.85 5.99 36.85 6.99 39.1 7.49 41.34 8.24 43.84 8.74 46.09 9.24 47.83 8.49 48.83 6.99 49.33 5.24 50.83 3.75 52.58 3.25 54.32 3.48 56.07 2.48 57.8 1.48 59.55 1 61.29 1 63.04 1.48 65.29 1.73 67.03 2.23 69.03 2.73 73.28 4.25"
        />
      </svg>
    </div>
  )
}

export default Sabalo