import React, {useState, useEffect} from 'react'

const campo32 = () => {
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
        id="uuid-fb0dbfe7-376b-4134-a714-05fbf7e5539c"
        xmlns="http://www.w3.org/2000/svg"
        width={176.64}
        height={158.06}
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 76.64 58.06"
        className='m-auto'
      >
        <polygon
          fill={cambiarColorSegunCarencias('CAMPO 23')}
          className="uuid-0217ac91-67d8-4b27-98f3-3d658dec9cb6"
          points="72.93 56.48 52.03 53.29 50.8 53.04 49.1 52.55 47.38 52.06 45.66 51.32 43.93 50.58 41.97 49.6 40.49 48.61 39.02 47.38 37.79 45.66 36.07 45.4 34.1 45.4 32.13 45.91 30.41 46.89 28.94 47.38 26.97 47.38 25.25 46.89 24.02 45.66 22.3 44.66 21.07 43.18 19.1 42.94 17.38 42.69 15.9 41.46 14.67 39.99 13.94 38.51 13.69 36.79 13.44 34.82 12.71 32.86 11.72 31.36 10.74 29.91 9.76 28.16 9.51 26.44 8.77 24.72 7.3 23.49 5.82 22.76 4.35 21.28 3.86 19.56 2.63 18.08 1.15 17.84 1.4 16.36 1.64 14.64 2.38 12.67 2.87 11.18 2.13 9.21 1.89 7.49 1.89 5.77 3.12 4.05 2.38 2.57 2.38 2.08 3.61 3.06 7.79 6.26 10 7.98 12.95 10.19 21.56 16.85 34.35 26.71 50.55 39 57.93 44.91 64.57 50.09 72.93 56.48"
        />
      </svg>
    </div>
  )
}

export default campo32