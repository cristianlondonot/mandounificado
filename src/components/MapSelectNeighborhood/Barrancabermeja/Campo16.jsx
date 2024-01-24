import React, {useState, useEffect} from 'react'

const Campo16 = () => {
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
        id="uuid-e9d8978d-4e9e-4ff5-ba10-df672b9eae2a"
        xmlns="http://www.w3.org/2000/svg"
        width={164.01}
        height={149.26}
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 64.01 49.26"
        className='m-auto'
      >
        <polygon
          fill={cambiarColorSegunCarencias('CAMPO 16')}
          className="uuid-2d6fc862-6c7e-4af1-99fd-dabd9a614416"
          points="10.48 11.66 11.76 13.17 13.51 12.66 15.24 11.66 16.99 11.91 18.74 12.66 20.76 12.66 22.24 11.41 22.51 9.66 23.49 7.66 24.49 5.91 25.24 3.91 25.99 2.39 26.24 2.14 28.24 2.89 29.99 4.66 31.49 5.91 32.49 7.41 33.5 9.16 35.25 9.41 37.25 8.91 39 7.91 40.75 8.41 41.5 9.91 42 11.66 43 13.17 44.75 13.92 46.75 14.92 48 16.17 49.75 16.92 52 17.67 53.76 18.42 55.76 19.42 57.01 20.67 59.01 21.17 61.01 21.67 63.01 22.42 63.01 22.67 63.01 23.92 61.76 25.42 60.76 26.94 59.76 28.69 60.01 30.69 61.51 31.95 62.01 33.2 61.01 33.45 60.01 35.2 59.51 36.95 57.76 37.72 56.51 36.45 55.26 35.7 54.51 35.2 52.75 34.7 51.25 35.7 50 37.45 49.75 39.22 49 40.97 47.25 41.72 45.5 41.72 44 42.97 43.5 44.72 42.5 46.22 40.5 46.22 38.75 45.72 37.25 46.97 35.75 47.97 33.75 48.22 32.24 47.22 30.99 45.97 29.24 44.97 27.99 43.72 25.74 43.22 23.99 42.47 21.76 42.22 19.76 42.47 18.01 42.97 16.26 43.22 14.26 43.47 12.26 43.47 10.48 43.72 8.5 44.47 6.98 45.22 6.25 43.47 5.25 41.97 4.25 40.22 3.75 38.22 3.98 36.2 3.75 34.2 3.75 33.45 3.25 32.95 2.23 33.45 1.23 31.19 1 30.19 1 29.19 1 27.94 1 27.44 1 26.69 1 25.42 1 23.42 1 22.17 1.23 22.17 1.73 22.17 3.25 22.42 3.48 22.67 3.75 22.67 3.98 22.92 4.25 22.92 4.75 22.67 4.98 22.67 4.98 22.92 5.25 22.92 5.25 23.17 5.5 23.17 5.5 23.42 5.5 23.67 5.73 23.92 5.73 24.17 5.73 24.42 5.73 24.67 6.25 23.67 6.73 22.67 6.98 22.42 7.25 21.92 7.5 21.42 7.5 20.67 7.75 20.17 7.75 19.67 7.75 18.92 7.75 17.42 7.98 16.42 7.75 15.92 7.75 15.42 7.5 15.42 7.25 15.17 7.25 14.92 7.25 14.42 7.25 13.92 7.5 13.92 7.75 13.92 7.25 13.17 7.25 12.91 7.5 12.91 7.75 13.17 7.25 11.66 6.25 10.41 4.98 8.91 4.25 7.16 4.48 5.16 4.98 3.16 4.98 2.14 6.5 3.41 7.25 4.91 7.98 6.66 9.23 7.91 10 9.91 10.48 11.66"
        />
      </svg>
    </div>
  )
}

export default Campo16