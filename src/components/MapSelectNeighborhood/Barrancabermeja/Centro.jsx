import React, {useEffect, useState} from 'react'

const Centro = () => {
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
        id="uuid-ea247d5b-d414-403f-a7f0-288b42fec968"
        xmlns="http://www.w3.org/2000/svg"
        width={151.35}
        height={166.75}
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 51.35 66.75"
        className='m-auto'
      >
        <polygon
          fill={cambiarColorSegunCarencias('CENTRO')}
          className="uuid-b9c023ab-0607-4c16-a557-059f6f36b95a"
          points="12.74 0 12.74 0 13.17 0 13.59 .39 14.86 1.24 15.29 1.66 15.71 1.66 16.56 2.51 16.99 2.94 17.84 2.94 17.84 2.51 18.26 2.09 18.26 1.66 18.26 1.24 18.69 .81 18.69 .39 19.11 .39 19.11 0 19.11 .39 19.11 .81 18.69 1.24 18.69 1.66 18.69 2.09 18.69 2.51 21.66 2.51 25.06 2.51 27.61 1.24 28.88 3.36 29.3 4.21 29.73 4.21 30.58 4.21 31.85 4.67 32.7 4.67 33.13 4.67 33.55 5.06 33.98 5.06 33.98 5.52 34.83 6.37 35.25 6.37 34.83 6.76 34.83 7.22 34.4 7.22 34.4 7.64 34.4 8.03 34.4 8.46 33.98 8.46 33.98 9.34 34.4 9.34 34.83 9.34 35.25 9.34 35.67 9.73 35.25 9.73 35.25 10.16 34.83 11.04 33.98 11.89 33.55 12.32 32.7 14.01 33.13 14.01 33.55 14.01 33.55 13.59 33.98 13.59 34.4 13.59 35.67 12.32 36.1 12.32 36.1 11.89 37.37 10.62 37.37 10.16 37.37 9.73 37.8 9.73 38.22 9.73 38.22 10.16 37.8 10.16 37.8 10.62 38.22 11.04 38.65 10.62 41.2 9.34 44.13 8.46 47.11 9.73 47.11 10.62 47.11 12.74 46.68 16.56 45.83 20.39 44.98 23.36 43.71 26.33 43.28 30.19 45.41 32.74 48.38 33.59 50.93 35.71 51.35 38.68 50.5 41.66 47.96 45.48 46.68 48.03 46.26 48.45 44.98 51.03 43.71 54.43 42.01 57.4 40.35 60.8 39.92 63.78 37.37 65.9 33.98 65.9 31 64.62 28.03 64.2 25.06 65.9 22.08 66.75 19.96 64.2 19.11 61.23 17.84 57.83 15.71 55.71 14.44 52.73 13.17 50.19 10.62 48.03 10.19 46.75 9.77 43.35 9.34 42.08 8.49 40.38 8.07 37.41 7.22 36.13 6.8 35.71 6.37 35.29 5.95 34.86 5.95 34.44 5.1 33.16 4.67 32.31 3.4 30.61 2.97 29.73 2.55 29.3 2.55 28.45 2.12 27.61 2.12 27.18 2.12 26.76 2.12 26.33 1.7 25.48 .85 22.51 0 19.54 .85 16.14 3.4 13.17 3.4 10.16 3.4 6.76 2.97 3.82 6.37 5.91 9.34 6.76 11.47 8.03 11.89 8.03 13.17 8.03 14.01 8.46 14.86 8.46 15.29 8.46 15.71 8.46 16.14 8.46 16.56 8.46 16.56 8.92 16.99 8.92 16.56 8.46 15.71 7.64 14.86 6.76 14.01 5.91 13.59 5.06 13.17 4.67 12.74 4.67 12.74 4.21 12.32 3.36 12.32 2.94 12.32 2.51 12.32 2.09 11.89 1.66 12.32 .81 12.32 .39 12.74 0"
        />
      </svg>
    </div>
  )
}

export default Centro