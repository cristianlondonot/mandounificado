import React, {useState, useEffect} from 'react'

const Campo23 = () => {
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
        id="uuid-f7eeafce-5ef2-4592-851d-58f03f8d3b97"
        xmlns="http://www.w3.org/2000/svg"
        width={170.79}
        height={151.38}
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 70.79 51.38"
        className='m-auto'
      >
        <polygon
          fill={cambiarColorSegunCarencias('CAMPO 23')}
          className="uuid-79076d3c-9b9c-4ea4-a42e-b7c197db6fd5"
          points="45.38 5.95 45.62 6.47 46.11 8.18 45.87 10.39 46.36 12.59 47.34 14.06 49.52 13.82 51.48 13.33 52.95 11.86 54.67 10.39 56.39 9.16 57.86 8.18 58.84 9.9 58.59 11.86 58.59 13.82 58.35 16.03 58.1 18.01 58.1 19.97 58.35 21.93 58.84 24.14 59.57 25.61 60.8 27.32 61.78 29.04 63.25 30.75 64.48 31.98 65.95 33.7 67.42 34.92 68.89 35.9 69.38 36.39 68.4 37.37 67.66 38.11 66.68 38.84 65.95 39.33 64.72 39.82 64.23 39.33 63.49 38.6 63.25 38.35 62.76 37.86 62.02 37.37 61.53 37.13 60.8 36.88 60.31 37.62 59.82 38.35 59.33 39.09 59.08 40.09 58.59 40.82 58.35 41.56 58.1 42.3 57.61 43.03 57.12 44.01 56.39 44.75 55.65 45.24 54.92 45.48 53.44 45.48 51.73 45.73 50.75 45.73 48.79 45.48 47.34 45.48 45.87 45.24 45.13 44.99 42.19 44.5 40.72 44.26 39.74 43.77 38.27 44.01 37.29 44.5 36.31 45.24 35.57 45.73 35.08 46.46 34.59 46.71 33.85 47.44 32.63 48.67 31.65 49.65 30.67 50.14 29.93 50.38 29.69 50.38 28.95 50.14 27.97 49.16 26.26 47.93 24.78 46.95 23.56 45.97 22.33 44.99 20.37 43.77 19.15 43.03 18.9 42.79 17.68 42.05 16.45 41.07 15.47 40.33 14.49 38.6 13.02 36.39 11.55 34.92 9.83 32.96 8.38 31 7.4 29.04 5.93 26.83 4.46 24.63 2.74 22.91 2.25 22.66 2.01 22.17 1.27 20.95 1.03 19.48 1.27 18.74 3.72 17.01 6.17 15.54 7.65 14.55 8.63 13.08 9.83 11.61 11.55 10.39 13.26 8.92 14.98 7.45 16.7 6.2 17.43 5.71 18.17 5.46 20.13 4.24 22.82 3.26 24.78 3.01 26.5 3.26 28.46 4.24 29.93 5.71 31.16 7.2 32.87 7.94 34.59 6.96 35.82 4.97 37.29 3.01 38.76 1.54 40.47 1.05 42.43 1.79 43.9 3.01 44.64 4.48 45.38 5.95"
        />
      </svg>
    </div>
  )
}

export default Campo23