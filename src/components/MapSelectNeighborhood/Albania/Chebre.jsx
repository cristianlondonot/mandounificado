import React, {useState, useEffect}  from 'react'

const Chebre = () => {
  const [carenciasPorVeredaBarrio, setCarenciasPorVeredaBarrio] = useState([]);
  const [promedioTotalCarencias, setPromedioTotalCarencias] = useState(0);

  useEffect(() => {
    fetch('../https://raw.githubusercontent.com/cristianlondonot/mandounificado-spidersoft/main/data-factor.json')
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
        id="uuid-708a367e-7969-426f-b41e-f521355f8636"
        xmlns="http://www.w3.org/2000/svg"
        width={198.3}
        height={267.62}
        viewBox="0 0 198.3 267.62"
        className='m-auto'
      >
        <polygon
          fill={cambiarColorSegunCarencias('CHEBRE')}
          className="uuid-bd1ce196-1db0-45a2-aa27-e72c2ef05cb3"
          points="185.21 87.21 181.69 90.25 180.43 93.72 179.13 95.46 176.51 98.08 173.9 100.24 173.9 104.19 173.44 106.81 169.98 108.54 168.24 109.86 166.94 112.46 165.2 113.76 164.78 115.5 163.9 117.24 164.34 119.42 163.9 121.19 162.16 122.06 161.3 123.8 162.16 126.84 159.99 129.02 157.37 130.76 153.89 131.62 153.03 133.8 151.73 135.98 149.99 138.15 147.37 139.89 145.64 141.66 144.33 144.72 143.02 146.44 143.46 148.18 136.94 158.63 136.08 160.37 136.94 162.53 135.64 164.71 134.34 164.71 133.03 165.15 132.6 166.89 133.46 168.19 127.37 173.42 124.77 178.62 123.03 181.71 119.55 180.41 116.5 179.93 113.02 181.27 105.64 184.75 100.88 185.19 92.62 184.31 88.71 183.01 84.79 182.14 76.97 182.14 70.88 182.14 68.28 181.27 61.75 176.02 59.57 173.84 57.41 173.42 54.79 174.72 52.19 175.14 47.84 173.42 44.36 168.63 41.32 166.01 34.79 164.27 32.22 165.15 29.18 163.85 26.56 160.79 25.26 159.93 23.09 160.79 21.78 160.37 20.91 158.19 19.61 156.89 16.57 156.45 13.09 157.33 18.31 142.98 19.61 137.28 19.17 132.5 19.61 129.88 21.35 127.28 23.52 125.98 25.26 125.54 27.88 125.1 33.49 125.1 42.18 122.93 46.96 122.06 50.89 122.5 53.93 122.5 68.7 115.94 69.58 115.5 70.44 116.8 70.44 120.75 67.84 128.16 67.4 132.06 68.28 135.1 69.58 136.84 71.32 138.59 73.49 139.02 75.66 137.72 76.97 135.54 78.27 135.54 80.01 137.72 83.05 134.67 84.37 133.8 94.36 129.02 95.24 124.67 95.24 124.24 93.5 124.67 90.88 125.98 89.15 127.28 88.71 127.28 87.41 125.98 86.97 119.85 89.58 111.16 92.19 108.98 97.84 109.86 103.02 109.42 105.64 108.98 108.24 110.28 110.84 110.28 115.2 109.86 117.37 108.11 122.59 103.77 125.63 101.59 127.37 101.15 129.98 102.03 131.72 102.03 131.72 101.15 131.72 99.82 133.03 99.38 134.34 98.94 135.64 101.59 136.94 102.45 143.9 102.45 149.11 101.59 153.03 100.24 157.37 97.64 159.55 94.6 161.3 91.12 163.04 89.38 165.64 89.38 169.12 87.63 172.13 86.77 173.9 86.77 176.51 85.03 177.81 82.85 181.29 82.43 182.12 83.73 185.21 87.21"
        />
      </svg>
    </div>
  )
}

export default Chebre