import React, {useState, useEffect}  from 'react'

const LaMesa = () => {
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
        id="uuid-f6a5b0a2-2401-458c-ad07-63a1697b0493"
        xmlns="http://www.w3.org/2000/svg"
        width={198.3}
        height={267.62}
        viewBox="0 0 198.3 267.62"
        className='m-auto'
      >
        <polygon
          fill={cambiarColorSegunCarencias('LA MESA')}
          className="uuid-a1e9af1a-4e03-4d1d-a354-771dabba9247"
          points="133.87 44.21 134.44 45.07 136.14 48.47 136.71 50.17 136.14 51.87 134.44 53.6 134.44 55.3 135.01 58.98 136.14 64.09 136.43 69.21 139.26 75.45 140.96 79.42 140.96 81.12 140.96 82.54 140.96 84.81 140.39 88.78 140.68 91.9 142.1 97.03 143.24 102.41 144.37 109.53 144.37 114.63 142.95 122.31 142.95 123.44 142.95 124.58 142.67 125.71 142.95 127.13 143.51 128.26 144.37 129.4 146.06 133.65 147.2 139.04 148.06 147 148.06 151.25 148.9 156.93 150.88 160.92 152.87 163.75 153.44 166.31 153.15 168.29 152.6 169.42 152.6 171.43 153.15 173.42 153.15 174.55 154.3 176.25 154.86 177.67 152.87 179.66 150.32 181.07 146.92 181.64 144.93 183.06 142.95 182.49 141.81 182.79 140.39 184.76 138.69 185.89 135.3 187.31 133.31 187.88 131.89 190.15 132.18 193.83 131.32 195.54 127.63 198.96 124.51 200.67 121.68 202.08 120.55 202.36 119.42 204.06 117.14 207.18 114.62 208.89 114.02 208.89 113.76 208.04 114.31 207.18 114.02 206.33 107.23 216 104.11 220.82 102.43 220.82 100.44 221.95 99.86 222.83 99.6 223.96 98.45 224.24 96.48 224.54 92.76 221.67 91.92 220.25 90.77 218.27 91.37 216.86 91.37 214.86 90.51 214.01 87.12 212.04 86.55 211.74 86.26 210.33 86.26 208.89 84.82 206.9 82.3 202.36 81.7 202.08 81.44 198.11 79.43 195.82 77.45 194.4 75.2 194.4 74.07 194.12 73.76 192.98 74.07 191 74.33 189.3 74.33 187.88 72.65 186.18 71.21 184.19 71.51 182.21 71.77 178.81 70.95 175.4 70.11 172.28 70.95 170.87 72.65 168.01 72.93 167.16 71.77 163.75 69.54 160.63 69.25 158.08 69.54 154.37 68.68 152.67 67.56 152.1 66.69 150.97 66.13 148.14 66.13 144.73 65.85 141.59 66.69 137.05 66.99 136.2 66.99 135.92 66.69 135.35 65.85 135.07 65.85 133.37 65.85 133.08 64.71 131.38 63.58 129.68 62.17 127.98 61.87 127.7 61.31 126.85 59.05 124.58 58.76 124.29 57.06 122.31 55.64 120.32 55.07 119.76 55.36 119.47 53.08 116.9 51.95 116.05 49.68 114.06 48.56 113.21 46.86 112.08 44.87 110.94 44.58 110.66 44.01 108.96 43.74 108.11 43.44 107.54 44.3 106.69 46.56 107.26 48.26 108.11 50.82 108.67 53.37 108.96 55.93 108.96 58.48 109.24 59.89 110.66 60.46 112.08 61.02 112.36 62.17 113.21 63.3 113.78 65.56 114.35 66.13 114.06 67.56 113.21 68.12 111.79 69.54 110.38 70.64 110.09 74.07 110.09 76.88 108.39 79.75 107.26 81.99 106.69 84.82 106.12 87.12 105.56 89.93 105.56 91.65 104.96 93.63 103.83 95.04 102.13 96.17 101 97.87 100.14 100.13 99.01 102.12 97.88 104.11 96.46 106.08 94.47 110.64 93.06 113.76 91.9 116.3 90.2 118.85 88.78 121.4 86.79 123.11 83.96 125.08 80.56 126.23 77.44 126.79 75.17 126.79 72.9 125.65 70.06 126.5 68.65 127.36 66.66 127.93 64.37 129.62 63.24 131.32 61.82 132.45 60.4 132.45 57.85 131.61 55.3 132.18 53.6 133.31 52.15 133.02 50.74 132.75 50.17 131.61 49.32 131.32 47.9 131.61 45.92 131.05 44.21 131.32 43.08 132.45 43.36 133.87 44.21"
        />
      </svg>
    </div>
  )
}

export default LaMesa