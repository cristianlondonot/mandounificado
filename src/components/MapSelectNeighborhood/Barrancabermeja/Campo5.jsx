import React, {useState, useEffect} from 'react'

const Campo5 = () => {
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
        id="uuid-919410e2-e6cd-4efa-a39e-6929fed483b4"
        xmlns="http://www.w3.org/2000/svg"
        width={150.81}
        height={140.34}
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 50.81 40.34"
        className='m-auto'
      >
        <polygon
          fill={cambiarColorSegunCarencias('CAMPO 5')}
          className="uuid-40af09db-6c23-4e8b-bb37-48ec76d5dc36"
          points="49.07 10.64 49.31 11.14 49.31 12.88 48.09 14.13 46.84 15.62 45.35 16.87 45.35 18.63 44.85 20.88 45.6 22.62 46.84 23.87 47.84 25.36 49.07 26.86 49.81 28.6 49.81 30.37 49.07 32.36 46.84 32.86 45.1 33.36 43.1 32.86 41.11 32.61 39.37 32.86 37.37 32.86 35.88 34.61 35.38 36.1 35.38 37.85 34.38 39.34 32.64 39.34 30.89 38.6 29.15 37.85 26.9 37.6 24.41 37.1 22.91 36.1 21.17 34.86 19.42 33.61 17.43 32.61 16.18 31.37 14.94 30.12 13.94 28.6 11.95 29.1 11.2 31.12 9.95 32.36 8.21 33.11 6.48 33.36 5.24 34.61 4.74 35.85 4.47 35.85 3.24 34.36 1.98 33.11 2.23 31.87 2.97 30.37 2.23 28.11 1.73 26.11 1.73 24.12 1.98 22.37 2.23 20.63 2.23 18.63 1.98 16.87 2.23 15.12 1.48 13.38 1.23 11.63 1 9.64 1 8.39 2.97 9.14 5.24 9.14 6.96 8.39 7.96 7.15 9.7 7.15 10.95 8.64 12.69 8.14 13.44 6.13 14.44 4.38 16.18 5.13 17.93 5.88 19.67 4.88 20.17 3.14 21.92 4.14 23.41 5.38 24.41 4.14 26.4 4.38 28.4 3.89 29.39 2.39 30.64 1.39 31.89 2.89 33.63 3.89 35.63 4.38 37.62 4.88 38.87 6.38 39.86 8.39 40.86 10.39 42.36 11.38 44.1 11.38 45.85 11.38 47.84 11.38 49.07 10.64"
        />
      </svg>
    </div>
  )
}

export default Campo5