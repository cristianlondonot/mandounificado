import React, {useState, useEffect} from 'react'

const SanPablo = () => {
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
        id="uuid-147a1f9a-ce5b-42b6-bced-1d6f65c87f0b"
        xmlns="http://www.w3.org/2000/svg"
        width={198.3}
        height={267.62}
        viewBox="0 0 198.3 267.62"
        className='m-auto'
      >
        <polygon
          fill={cambiarColorSegunCarencias('SAN PABLO')}
          className="uuid-46341c94-353d-4778-a357-c54c7e488d49"
          points="168.53 93.4 167.33 95.42 163.7 97.43 162.09 99.45 159.66 104.73 158.86 106.74 158.45 108.35 154.82 111.58 152.4 112.79 151.59 113.2 150.38 113.2 148.77 112.4 147.15 112.4 145.13 112.4 144.33 113.6 143.53 114.42 141.1 123.32 140.7 124.94 140.29 126.55 137.06 130.58 136.67 131.38 135.85 134.61 135.05 135.42 134.24 135.83 133.44 137.04 133.03 138.65 131.82 139.06 127.39 144.33 126.98 147.93 128.19 158.45 128.59 163.3 128.19 166.53 128.59 173.78 128.19 185.52 127.78 185.12 125.37 184.72 124.16 184.32 122.95 183.91 122.14 184.32 121.32 183.91 120.52 182.7 118.91 181.09 118.11 180.29 116.49 180.29 114.88 180.29 112.86 180.29 111.24 180.29 110.43 179.47 108.83 177.01 107.2 175.41 105.19 173.39 103.17 172.18 99.94 172.18 97.53 172.18 95.51 172.18 92.68 170.96 90.66 170.16 87.84 168.55 84.61 166.53 82.2 164.52 80.18 164.11 76.95 163.7 73.72 162.9 69.68 162.09 67.26 162.09 66.05 162.5 65.24 164.91 64.03 167.73 63.22 169.75 62.01 170.57 60.8 168.55 59.99 166.93 58.39 166.53 56.76 166.53 55.56 167.34 54.35 168.55 53.14 168.95 51.12 168.95 49.5 168.55 47.89 169.75 45.07 170.96 42.64 171.37 42.25 170.96 39.85 170.96 38.24 169.75 36.23 168.55 34.21 167.73 31.78 167.34 30.98 166.53 29.77 166.13 30.57 165.32 30.98 164.11 31.78 162.5 33.41 159.66 35.01 158.01 36.62 156.41 41.84 154.42 48.3 154.02 51.12 154.42 52.73 154.02 53.94 153.59 55.16 150.36 55.56 149.99 55.56 149.14 56.76 146.32 57.58 142.72 59.19 139.86 63.22 137.04 65.24 135.02 66.05 133.81 67.26 133.01 72.51 128.56 72.51 128.17 77.75 124.53 78.56 124.53 80.98 123.72 83.8 119.65 86.23 116.02 88.64 112.79 91.87 110.78 95.1 111.19 97.53 109.56 101.15 107.15 101.56 107.15 103.58 107.15 103.97 107.15 107.61 107.15 112.45 107.15 115.27 104.73 118.5 102.27 123.34 99.84 128.19 98.65 128.59 98.65 131.42 98.65 132.62 98.65 133.03 98.24 135.05 96.22 138.28 93.4 139.08 93.4 143.12 93.79 147.56 92.58 147.95 92.19 150.38 88.15 154.41 82.47 154.82 82.1 155.22 82.1 161.28 88.15 165.71 92.19 168.53 93.4"
        />
      </svg>
    </div>
  )
}

export default SanPablo