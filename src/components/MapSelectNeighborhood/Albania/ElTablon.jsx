import React, {useState, useEffect} from 'react'

const ElTablon = () => {
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
        id="uuid-05ac1278-0242-441a-8880-18a7284501b6"
        xmlns="http://www.w3.org/2000/svg"
        width={198.3}
        height={267.62}
        viewBox="0 0 198.3 267.62"
        className='m-auto'
      >
        <polygon
          fill={cambiarColorSegunCarencias('EL TABLON')}
          className="uuid-1898bea8-2ca4-4aa4-841f-e4fdb3c8ba76"
          points="175.43 171.01 171.5 177.93 167.56 182.86 163.12 187.3 157.7 191.73 152.3 196.16 147.85 199.64 147.85 200.14 144.42 202.1 143.43 202.6 140.96 203.1 139.99 203.57 135.07 204.57 133.08 205.06 127.68 206.53 125.7 208.02 123.73 209.49 123.24 210.48 120.28 212.94 116.35 216.87 115.36 218.84 114.88 219.83 113.39 222.33 111.92 223.82 110.93 224.79 108.96 227.25 107.97 228.74 106.5 232.67 106.01 233.66 105.56 235.13 104.07 238.09 102.11 240.55 101.13 241.54 98.18 244.98 97.68 245.47 97.68 245.97 96.21 242.52 95.22 240.06 89.8 231.7 86.36 228.74 84.88 226.77 82.91 220.86 82.91 216.87 83.41 215.4 85.37 212.45 85.87 206.53 82.41 198.17 80.45 194.69 78.96 193.2 78.48 189.27 80.45 183.35 80.94 172.48 79.95 164.1 79.95 158.2 79.95 155.74 77.49 144.9 76.99 142.94 75.52 140.97 73.06 138.51 61.73 135.55 59.76 135.06 54.34 136.05 48.94 139.49 45.49 138.02 40.57 137.02 31.69 127.14 27.76 122.22 25.33 117.3 22.87 107.4 24.36 102.47 26.82 98.05 29.73 93.12 29.73 90.17 28.75 87.23 30.22 85.74 30.72 82.75 32.68 80.78 35.15 77.33 35.15 75.86 34.65 70.93 39.08 68.95 39.57 66.01 38.1 54.68 38.1 51.24 37.11 47.29 35.15 45.33 32.68 42.86 29.23 32.97 26.33 27.56 23.37 21.65 28.75 27.07 31.69 27.56 35.15 31 38.1 34.95 42.53 36.42 45.98 38.39 50.91 42.86 56.81 46.32 60.75 46.32 63.22 46.8 64.69 49.26 64.69 51.72 66.17 54.18 69.11 55.17 77.99 58.63 88.82 63.55 93.75 65.52 97.68 66.99 105.06 76.34 111.42 81.26 115.85 84.71 117.82 88.2 120.28 90.66 123.24 91.16 126.19 92.15 127.68 95.09 129.65 100.51 131.61 104.94 134.57 107.95 133.58 110.89 132.11 111.88 131.12 114.83 131.61 125.18 134.08 136.55 136.54 146.39 140.96 150.32 142.45 154.75 142.45 158.7 146.38 161.64 151.31 162.63 153.27 163.62 154.76 168.05 156.73 169.52 160.16 172.97 163.12 173.97 169.03 176.96 172.97 172.97 174.95 171.5 175.43 171.01"
        />
      </svg>
    </div>
  )
}

export default ElTablon