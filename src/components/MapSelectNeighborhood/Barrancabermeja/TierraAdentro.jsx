import React, {useState, useEffect} from 'react'

const TierraAdentro = () => {
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
        id="uuid-537d2321-fbc9-4c2c-bdc8-619c7d9ed2d1"
        xmlns="http://www.w3.org/2000/svg"
        width={178.18}
        height={157.97}
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 78.18 57.97"
        className='m-auto'
      >
        <polygon
          fill={cambiarColorSegunCarencias('TIERRA ADENTRO')}
          className="uuid-4b49969f-6f82-4241-9eae-45b27fa54244"
          points="71.62 54.68 71.62 54.43 71.87 53.68 71.62 53.93 71.11 54.43 69.86 53.17 68.35 51.89 66.84 50.4 65.58 48.64 63.82 47.36 62.05 46.13 60.29 45.35 58.28 45.87 56.77 46.88 55.76 48.64 54 49.12 52.24 48.87 50.73 47.64 50.48 45.87 48.72 45.35 47.96 47.11 46.96 48.64 46.2 50.4 44.94 52.17 43.68 53.42 42.68 51.89 42.68 48.12 42.68 43.84 42.68 42.1 41.67 40.57 39.66 40.06 38.65 38.55 37.39 37.04 35.63 36.29 33.87 37.04 32.61 38.81 30.85 39.81 29.09 39.06 27.33 39.31 25.56 40.06 24.31 41.07 23.05 42.58 22.04 44.11 19.78 45.87 18.52 47.36 17.26 48.87 16 50.63 14.99 51.64 14.49 50.4 13.74 48.64 12.73 47.11 11.47 45.6 9.71 44.87 7.95 44.34 5.68 43.84 3.92 43.36 2.16 42.83 1.15 41.34 1.91 39.81 3.17 38.3 4.17 36.54 5.43 35.03 6.94 33.77 8.7 32.77 10.21 31.76 11.98 30.75 13.23 28.97 14.49 27.46 16 25.7 17.51 24.44 19.02 23.43 21.03 22.68 23.05 22.18 24.81 21.42 26.07 19.91 27.58 18.4 28.84 17.12 29.59 15.36 30.09 13.35 30.6 12.09 31.6 13.35 33.37 14.61 35.38 14.86 36.13 16.62 37.9 17.12 39.41 17.88 41.42 17.88 42.93 18.65 43.18 20.67 44.69 22.18 45.95 23.18 47.96 23.43 48.97 25.2 50.73 25.2 52.24 24.19 52.24 22.18 53.25 20.67 54.76 20.16 56.01 18.65 56.01 16.37 57.27 15.11 58.78 13.6 60.29 12.09 62.05 11.33 63.82 10.58 65.58 9.07 67.34 7.81 69.35 7.56 71.11 6.55 71.62 4.77 71.87 3.01 72.37 1.25 74.13 1.77 75.14 3.53 75.64 3.76 75.64 4.54 75.14 6.55 76.15 7.81 76.9 9.57 77.15 11.59 76.4 13.35 75.14 15.36 73.63 16.87 72.62 18.65 71.62 20.67 71.11 22.68 70.11 25.95 70.11 27.96 71.11 29.47 72.37 31.01 72.37 32.26 72.62 34.28 72.88 36.04 73.63 37.8 73.38 39.56 73.63 41.34 73.63 43.36 73.38 45.12 73.13 46.88 73.13 48.87 73.63 50.89 74.39 53.17 73.63 54.68 73.38 55.94 72.88 55.44 71.62 54.68"
        />
      </svg>
    </div>
  )
}

export default TierraAdentro