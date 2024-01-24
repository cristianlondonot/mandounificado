import React, {useState, useEffect} from 'react'

const Mochila = () => {
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
        id="uuid-b596363d-6282-4846-beb0-c65cc2e34a82"
        xmlns="http://www.w3.org/2000/svg"
        width={198.3}
        height={267.62}
        viewBox="0 0 198.3 267.62"
        className='m-auto'
      >
        <polygon
          fill={cambiarColorSegunCarencias('MOCHILA')}
          className="uuid-4d63810d-ee29-4670-b7e5-470c70e68a33"
          points="119.68 60.72 118.75 62.11 116.87 67.24 116.41 70.98 114.08 72.85 110.81 74.71 108.01 78.95 104.76 84.56 101.48 89.68 99.15 95.27 96.82 105.55 96.36 113.01 96.82 118.6 96.82 125.18 97.29 127.04 96.36 136.84 97.29 143.41 97.29 148.54 98.69 153.67 99.61 157.4 101.48 161.61 105.22 168.65 108.49 172.38 111.74 175.63 114.54 178.91 117.35 178.91 120.6 177.51 122.48 175.63 125.27 173.78 128.07 171.9 131.34 172.38 133.67 174.71 136.9 177.51 142.03 180.3 144.36 181.24 146.7 183.1 149.03 184.5 151.36 187.77 155.56 190.56 168.15 193.83 169.56 193.83 168.63 194.29 165.35 195.23 161.62 196.17 157.43 197.1 154.16 197.57 150.43 198.03 146.7 198.03 144.36 198.5 141.57 200.84 140.17 201.76 138.29 202.23 136.47 203.63 133.67 204.57 129.01 206.48 126.67 207.87 123.88 209.27 120.6 210.67 117.35 211.61 113.62 212.53 109.41 213.46 107.07 214.4 105.22 214.4 103.82 213.94 100.55 213.46 97.29 212.53 93.56 212.07 90.29 212.07 88.41 212.07 87.95 212.07 85.16 212.53 82.82 212.07 80.03 211.13 77.22 210.21 74.88 209.27 73.03 207.87 71.15 207.87 68.83 207.4 64.63 206.48 61.86 204.57 59.53 202.69 56.73 199.44 53.94 196.17 53 194.29 52.07 192.44 50.67 189.16 49.73 186.37 48.81 182.18 47.87 179.37 47.87 177.51 47.87 176.11 48.33 174.71 48.33 173.3 47.87 171.9 46.48 170.98 45.08 170.5 42.74 170.5 41.35 170.04 39.47 169.11 39.01 167.71 39.01 166.77 39.01 165.84 33.41 165.38 31.55 165.38 30.15 165.84 28.74 166.77 30.15 165.84 32.01 163.98 33.88 152.27 37.14 142.47 38.07 139.65 40.41 133.58 42.74 124.24 43.2 119.08 44.14 116.27 46 114.87 52.07 101.82 52.54 98.55 51.6 93.88 52.07 91.08 52.54 89.68 53 87.35 57.67 76.58 58.13 74.71 60.01 73.31 61.4 71.91 63.69 70.98 68.83 70.05 71.63 70.98 75.36 71.91 77.22 72.85 78.16 75.64 80.03 76.12 84.22 73.79 89.35 69.58 91.69 69.12 94.96 66.78 95.42 66.32 100.09 63.05 101.94 60.72 108.49 54.14 109.89 54.14 110.81 54.62 111.28 54.62 112.68 55.08 112.68 54.62 113.14 54.62 113.62 54.14 114.08 53.68 114.08 53.22 115.01 54.14 115.48 54.62 116.41 56.01 117.81 57.45 118.29 58.38 118.75 58.86 119.68 60.26 119.68 60.72"
        />
      </svg>
    </div>
  )
}

export default Mochila