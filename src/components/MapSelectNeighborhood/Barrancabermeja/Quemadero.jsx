import React, {useEffect, useState} from 'react'

const Quemadero = () => {
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
        id="uuid-e3ba5676-9593-45ff-9330-f7e648e8a8e1"
        xmlns="http://www.w3.org/2000/svg"
        width={227.22}
        height={163.26}
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 127.22 63.26"
        className='m-auto'
      >
        <polygon
          fill={cambiarColorSegunCarencias('QUEMADERO')}
          className="uuid-cd7778f9-31ef-4bec-a791-1ae6104c679c"
          points="107.64 46.58 98.83 50.01 94.92 51.48 90.51 51.97 86.15 51.48 81.7 52.45 76.81 53.47 71.91 54.45 68 55.92 64.57 55.92 59.23 56.41 54.82 56.41 51.39 57.39 46.46 57.39 42.58 57.88 37.65 57.39 33.24 57.39 29.37 57.88 25.45 58.37 20.56 58.37 16.64 60.82 11.71 61.8 7.83 63.26 4.41 61.8 1.47 59.35 1.47 55.92 1.47 52.45 0 49.03 1.96 48.54 5.87 47.07 9.75 44.62 12.73 41.69 16.15 40.22 19.54 37.77 22.03 34.83 25.94 33.37 28.88 31.41 33.77 27.94 37.65 26.96 40.63 24.51 44.54 24.02 47.97 23.54 51.39 22.56 54.82 22.07 59.23 20.6 63.1 20.6 67.55 20.6 71.91 19.62 76.81 18.64 84.15 18.64 88.06 18.64 91.49 18.64 93.94 15.7 96.38 13.26 99.81 10.32 102.75 8.36 107.15 6.36 109.6 3.43 113.03 1.96 116.94 1.96 119.88 0 120.37 3.43 120.37 7.34 120.37 10.81 117.43 14.24 116.45 18.15 117.43 21.58 118.41 25 118.9 25.98 118.9 26.47 118.9 26.96 118.9 27.45 119.39 28.43 119.39 29.41 119.88 29.9 120.37 30.92 121.84 32.88 122.33 33.86 123.31 35.32 123.31 35.81 123.8 36.3 124.28 36.79 124.77 37.28 125.75 38.75 126.24 42.18 127.22 44.13 124.77 44.13 120.86 44.62 116.45 45.11 112.05 45.6 107.64 46.58"
        />
      </svg>
    </div>
  )
}

export default Quemadero