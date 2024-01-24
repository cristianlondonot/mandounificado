import React, {useEffect, useState} from 'react'

const Campo25 = () => {
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
        id="uuid-f3023a17-f2de-4ee8-901c-51521580562f"
        xmlns="http://www.w3.org/2000/svg"
        width={77.14}
        height={75.23}
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 77.14 75.23"
        className='m-auto'
      >
        <polygon
          fill={cambiarColorSegunCarencias('CAMPO 25')}
          className="uuid-7b4167fb-ee4c-4076-b3bd-682a1685d083"
          points="76.14 2.08 76.14 2.33 75.39 3.83 74.4 6.07 73.4 7.81 72.41 9.8 71.41 12.04 70.66 13.53 69.67 15.54 68.67 18.28 67.93 20.52 66.93 22.76 65.69 24.75 64.94 27.01 63.94 28.51 62.95 30 62.2 31.74 61.21 33.23 59.71 34.73 58.72 36.22 57.72 38.23 56.98 39.72 56.23 41.47 55.23 43.46 54.49 45.45 53.74 47.19 52.75 48.68 51 49.43 49.01 50.18 47.52 50.92 47.02 52.67 46.52 54.41 46.52 56.15 46.77 58.14 46.77 60.13 46.52 62.14 45.78 63.64 45.03 65.38 44.78 67.37 43.81 68.86 42.56 70.36 41.57 71.6 41.07 72.1 40.32 70.6 39.58 69.11 38.08 67.87 36.09 67.12 34.35 67.62 32.86 69.11 31.36 71.1 30.12 73.11 28.38 74.11 26.64 73.36 25.39 71.85 23.9 70.36 21.91 69.36 20.17 69.11 18.17 69.36 15.44 70.36 13.45 71.6 12.7 71.85 12.7 70.6 12.7 68.86 12.95 67.12 12.7 65.13 11.95 63.39 11.21 61.89 10.71 59.88 9.71 58.14 8.97 56.65 8.22 54.91 7.22 53.41 5.98 51.92 4.26 51.17 3.01 49.68 1.27 48.44 1.02 46.69 1.52 45.2 2.02 43.21 2.52 41.22 3.01 39.23 4.26 37.46 4.74 35.72 5.23 33.73 5.73 31.74 6.73 30 7.97 28.01 8.97 26.24 10.46 24.25 11.7 22.51 13.2 21.02 14.44 19.53 15.93 18.28 17.68 16.79 19.17 15.54 20.66 14.78 22.65 14.03 24.4 13.28 26.14 12.54 27.88 11.79 28.13 11.54 29.62 10.79 31.61 10.05 33.36 9.8 35.35 9.8 37.34 9.55 39.08 9.3 40.82 8.8 42.81 8.55 45.03 8.8 46.77 9.55 49.01 10.05 50.26 11.29 52 12.29 53.24 13.53 54.74 14.53 56.73 14.28 58.22 13.28 59.71 12.04 61.46 12.54 63.45 12.54 64.44 11.04 64.94 9.3 66.43 8.06 68.18 8.06 69.92 7.31 70.66 5.57 70.91 3.83 72.16 2.08 73.65 1.09 75.39 1.59 76.14 2.08"
        />
      </svg>
    </div>
  )
}

export default Campo25