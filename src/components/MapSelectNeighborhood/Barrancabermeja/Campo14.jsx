import React, {useState, useEffect} from 'react'

const Campo14 = () => {
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
        id="uuid-dc18e100-4431-4dd5-89d7-c7f0de92aad3"
        xmlns="http://www.w3.org/2000/svg"
        width={185.76}
        height={165.58}
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 85.76 65.58"
        className='m-auto'
      >
        <polygon
          fill={cambiarColorSegunCarencias(veredaFormateada)}
          className="uuid-71d03cec-1184-4a9a-b025-69e25c3c7340"
          points="41.02 2.73 41.94 3.19 43.79 2.73 45.63 2.73 48.86 2.27 49.32 2.73 51.17 4.57 54.4 6 57.62 6.92 61.32 7.34 65.01 7.84 68.7 8.3 73.31 8.73 76.54 8.3 79.77 10.15 83.46 10.57 85.76 12.88 84.84 16.61 83 20.3 81.15 23.07 77.92 26.76 75.15 27.68 74.23 30.45 73.77 30.91 74.23 34.14 75.15 37.37 76.54 40.59 76.08 43.86 74.69 45.25 73.77 44.79 69.16 43.86 65.93 42.94 62.7 42.02 59.01 41.56 55.78 41.56 52.09 41.56 47.94 41.56 45.17 43.86 41.48 44.79 38.71 48.48 36.4 50.32 33.64 53.55 30.41 55.86 27.18 56.78 24.87 59.09 22.1 61.39 21.18 61.85 21.18 60.93 17.95 59.55 14.76 60.47 11.99 61.85 11.53 62.35 11.07 61.85 11.07 61.39 11.53 61.39 11.53 60.93 11.07 60.93 10.61 60.93 10.61 61.39 10.61 61.85 9.23 63.28 9.23 63.74 8.76 63.74 7.38 65.12 6.92 65.12 6.46 65.12 6.46 65.58 6 65.58 5.54 65.58 6.46 63.74 6.92 63.28 7.84 62.35 8.3 61.39 8.3 60.93 8.76 60.93 8.3 60.47 7.84 60.47 7.38 60.47 6.92 60.47 6.92 59.55 7.38 59.55 7.38 59.09 7.38 58.62 7.38 58.16 7.84 58.16 7.84 57.7 8.3 57.24 7.84 57.24 6.92 56.32 6.92 55.86 6.46 55.86 6 55.4 5.54 55.4 4.61 55.4 3.23 54.93 2.31 54.93 1.85 54.93 1.38 54.01 0 51.7 .46 51.7 3.23 49.86 6 48.01 8.76 45.71 9.69 42.02 11.07 38.29 13.84 35.98 17.03 35.52 17.95 31.83 18.88 28.6 21.18 26.76 23.49 23.99 23.03 20.76 22.1 16.61 19.8 14.3 18.41 11.53 19.8 7.84 20.26 4.15 21.18 0 22.57 0 24.87 0 29.02 .42 32.71 .42 34.56 .88 35.94 1.35 37.33 1.81 38.71 2.27 40.1 2.73 41.02 2.73"
        />
      </svg>
    </div>
  )
}

export default Campo14