import React, {useState, useEffect} from 'react'

const LaUnion = () => {
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
        id="uuid-cb8a2983-7371-4c7e-836a-ffb4fd9b614c"
        xmlns="http://www.w3.org/2000/svg"
        width={181.65}
        height={250.94}
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 81.65 150.94"
        className='m-auto'
      >
        <polygon
          fill={cambiarColorSegunCarencias('LA UNION')}
          className="uuid-d99a01c4-e1a0-4752-bcce-45290fcea12d"
          points="28.71 8.56 28.71 8.81 28.71 9.82 28.71 11.59 28.46 13.6 28.96 15.89 31.23 17.41 32.24 19.17 33.75 21.44 35.52 24.21 36.52 26.73 37.03 28.77 37.78 31.29 37.78 33.81 38.04 36.08 38.29 38.63 38.79 40.39 38.79 42.89 38.79 45.41 38.79 47.43 38.79 49.97 39.55 51.73 40.81 54 42.07 56.02 42.83 57.78 43.58 60.31 44.84 62.34 46.1 64.11 47.36 65.37 49.13 66.88 50.39 68.14 51.9 69.15 53.92 70.66 55.66 71.92 57.43 73.2 59.7 74.72 61.21 75.73 62.72 76.99 63.98 77.99 64.49 80.01 64.23 82.53 64.49 84.55 64.49 86.82 66 87.85 68.02 88.86 69.78 89.59 71.8 90.35 72.81 91.86 74.07 93.37 75.33 95.66 75.83 97.43 76.08 99.7 76.33 101.71 76.84 103.73 77.59 105.49 78.35 108.04 79.11 110.05 80.12 112.32 80.62 114.34 80.12 116.35 78.6 118.37 76.84 119.4 75.07 119.9 73.31 120.66 71.8 121.92 70.79 123.69 69.78 125.7 69.28 128.22 69.02 130.24 68.77 132.28 68.52 134.55 68.27 136.29 68.27 138.08 68.52 140.07 68.77 142.11 68.77 144.13 68.77 146.14 67.51 147.4 66.75 147.66 66.75 147.4 64.99 146.9 63.23 146.9 61.71 147.91 59.95 147.4 57.93 147.15 56.17 146.65 54.42 146.14 52.41 145.39 51.15 146.65 49.89 148.16 47.87 149.42 45.85 149.93 43.84 149.67 41.82 149.67 39.8 149.67 37.78 149.17 36.78 147.66 35.26 148.66 33.25 149.67 31.48 148.41 29.72 148.41 27.95 148.16 26.19 146.65 24.68 145.89 22.66 145.64 20.89 145.89 19.13 146.9 17.37 147.15 15.6 146.14 14.36 144.63 13.6 142.87 13.33 140.83 12.83 139.08 12.58 136.82 13.08 134.78 13.86 133.03 14.84 131.25 15.85 129.23 15.6 127.22 14.84 125.2 14.84 122.93 15.6 121.17 14.84 120.16 15.85 119.13 16.86 117.36 18.12 115.6 19.13 113.83 18.37 112.07 18.63 110.3 19.63 109.04 20.14 107.01 19.63 105.24 18.63 103.48 18.63 101.46 20.14 100.7 21.65 99.7 21.65 97.68 21.15 95.89 22.41 94.63 22.15 92.89 22.15 90.87 23.67 89.36 24.17 87.34 23.42 85.56 22.66 83.29 21.9 81.52 21.65 79.25 21.4 77.49 21.65 74.97 21.9 72.93 22.15 71.17 22.15 69.4 20.89 67.89 19.38 66.63 17.87 65.62 16.1 64.86 14.59 64.36 12.83 63.6 11.06 63.35 9.3 62.85 7.3 62.09 5.54 61.59 3.5 61.06 2.74 60.81 2.74 59.55 2.49 57.78 1.99 56.02 1.74 56.02 1.99 54.26 3.27 52.49 5.01 52.24 5.29 51.48 5.77 50.47 6.55 47.95 8.04 47.43 10.08 47.43 11.84 48.44 13.86 48.71 13.6 46.94 12.83 44.93 12.83 43.16 12.83 42.89 13.33 41.13 14.59 39.63 15.6 37.85 15.6 36.08 15.6 35.83 14.84 33.81 14.11 32.3 14.11 30.54 14.11 30.29 14.11 28.77 14.11 28.52 14.11 28.27 14.11 26.73 14.11 26.48 14.36 24.72 14.84 22.7 15.6 20.68 15.6 18.67 14.84 16.9 14.36 15.12 13.08 13.6 11.59 12.34 9.05 11.08 7.03 10.58 5.01 10.08 3.27 9.82 1.23 10.33 1 8.81 1 8.56 1.74 6.55 1.74 4.53 1.99 2.49 2.74 1 4.78 1 6.55 1.74 8.56 3 10.56 3.5 12.58 4.03 14.36 5.03 16.36 6.04 18.63 6.8 20.89 7.3 22.66 7.55 24.93 8.06 27.2 8.31 28.71 8.56"
        />
      </svg>
    </div>
  )
}

export default LaUnion