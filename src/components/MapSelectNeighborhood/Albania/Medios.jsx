import React, {useState, useEffect} from 'react'

const Medios = () => {
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
        id="uuid-14735c61-e1e8-4832-aa66-24ad8b0e8545"
        xmlns="http://www.w3.org/2000/svg"
        width={198.3}
        height={267.62}
        viewBox="0 0 198.3 267.62"
        className='m-auto'
      >
        <polygon
          fill={cambiarColorSegunCarencias('MEDIOS')}
          className="uuid-4422a431-39be-4110-841c-3ac3ea9e8db3"
          points="158.32 221.5 154.85 225.83 152.58 228.15 151.14 229.31 148.54 230.17 145.38 230.46 142.49 231.32 137.89 230.75 134.71 230.17 130.68 229.59 127.8 229.02 125.49 229.88 123.77 230.17 115.12 230.17 113.11 229.31 111.09 229.59 107.92 229.88 106.51 230.75 97.86 231.03 96.42 230.75 94.12 230.75 92.4 231.32 90.66 232.19 88.08 232.76 79.15 232.76 73.38 233.34 67.04 233.34 63.01 233.05 54.1 232.48 54.67 231.32 56.11 227.55 57.84 225.54 59.86 223.81 60.72 220.06 61.02 218.34 60.43 216.03 60.43 213.99 61.02 211.11 60.72 208.23 60.15 206.79 58.14 205.64 56.11 204.2 54.67 203.04 51.79 201.58 50.07 199.56 48.62 197.55 46.61 193.22 46.03 189.77 44.02 186.31 41.42 183.72 40.27 180.26 39.98 175.94 41.42 171.59 43.15 169 45.17 166.7 46.9 164.39 47.47 161.78 47.47 158.89 47.77 156.88 47.18 154.29 47.18 150.25 47.47 148.21 48.91 144.75 50.07 143.6 52.38 141.87 53.82 141.87 55.26 140.72 58.71 140.72 60.43 139.28 64.73 136.69 66.17 136.11 67.9 136.11 69.34 135.54 71.65 133.81 73.96 131.21 77.98 125.74 79.71 124.88 80.86 123.15 82.89 120.24 83.46 117.94 83.46 114.48 83.17 113.62 82.02 112.75 80.59 113.04 79.42 113.91 78.57 113.91 78.27 113.62 77.41 111.6 80.59 108.98 83.76 102.65 86.05 99.19 86.91 97.75 88.08 97.46 89.52 93.69 87.78 90.24 85.77 85.05 85.2 81.88 85.47 78.71 84.61 75.26 84.61 72.37 84.9 69.18 85.77 65.44 87.49 60.83 88.93 56.51 90.66 52.45 93.54 49.28 97.58 46.11 101.33 43.23 103.91 40.61 105.35 38.31 105.93 36.87 107.09 36.29 109.95 35.43 110.52 34.56 111.09 34.28 111.96 35.72 114.55 39.17 115.99 42.63 116.85 45.25 119.45 47.26 121.76 48.42 122.9 50.43 123.77 53.89 124.92 59.1 125.49 64.28 127.8 67.45 129.24 71.8 130.4 76.41 129.53 79.86 128.96 82.17 128.38 83.32 128.96 85.91 129.24 89.37 129.24 93.69 128.38 96.6 128.66 98.9 127.8 102.36 126.36 106.39 124.64 111.89 123.2 113.91 121.46 117.07 122.9 119.38 123.2 121.11 122.04 121.4 122.33 125.17 125.21 131.5 128.38 136.11 132.98 140.15 136.73 142.74 141.64 145.91 146.82 148.81 149.7 151.98 151.42 155.15 151.71 158.03 150.84 163.24 151.42 166.12 152.58 168.71 152.01 171.31 150.27 172.46 149.4 173.32 149.12 175.05 150.57 179.11 151.14 182.57 150.27 184.58 149.12 184.87 147.1 189.19 146.52 193.51 146.23 195.24 145.38 196.1 144.52 197.83 143.93 199.85 146.23 204.77 149.7 211.69 151.14 212.55 152.01 212.84 153.41 213.99 154.85 216.03 156.02 216.61 156.02 219.2 156.59 220.35 157.46 220.35 158.32 221.5"
        />
      </svg>
    </div>
  )
}

export default Medios