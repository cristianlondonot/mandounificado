import React, {useState, useEffect} from 'react'

const Sabaneta = () => {
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
        id="uuid-70d3bcf1-ea24-4ba8-ad21-b077ecb44442"
        xmlns="http://www.w3.org/2000/svg"
        width={198.3}
        height={267.62}
        viewBox="0 0 198.3 267.62"
        className='m-auto'
      >
        <polygon
          fill={cambiarColorSegunCarencias('SABANETA')}
          className="uuid-50416e98-4177-4036-890c-94d9dd2751c2"
          points="166.7 164.96 163.83 168.69 162.11 171.59 160.96 174.17 160.96 174.46 159.24 178.47 157.23 183.09 155.79 185.67 154.65 187.39 150.05 191.98 143.74 197.75 140.3 200.9 136 204.34 132.55 207.79 129.97 210.08 129.4 210.94 127.67 211.8 125.09 212.95 121.65 214.67 120.79 215.53 117.92 217.83 115.34 221.27 114.19 223.59 104.43 222.16 98.41 221.56 91.24 219.55 85.52 217.83 81.5 214.39 82.65 211.23 82.36 206.35 82.08 204.06 82.36 200.9 83.8 199.18 83.8 197.17 83.51 195.74 83.23 194.85 82.36 195.14 80.64 195.14 79.78 194.28 75.19 188.54 73.47 186.24 72.61 184.24 71.17 182.2 67.44 179.05 65.72 175.6 64.86 172.16 65.72 167.83 65.15 165.25 64.29 162.38 63.43 159.51 61.42 156.64 59.12 154.35 58.55 149.76 57.69 144.02 57.12 141.7 54.53 142.87 53.1 141.99 51.38 140.55 49.94 140.27 49.08 139.98 47.93 137.4 47.07 136.25 45.06 135.1 42.48 134.24 41.93 132.81 41.65 131.37 41.36 130.22 40.78 129.65 39.35 129.94 38.2 129.65 37.63 128.19 38.2 126.76 40.5 125.03 39.92 123.31 38.49 121.02 38.2 118.72 39.06 116.71 39.06 114.11 38.78 110.09 36.48 105.79 35.91 105.79 35.33 106.36 34.47 105.79 34.47 104.06 33.61 103.2 33.04 103.78 31.89 104.35 31.32 104.06 31.32 102.92 31.03 102.06 30.17 102.34 29.59 102.34 28.73 101.77 29.02 96.89 29.31 94.88 29.88 93.16 30.74 90.87 31.89 89.41 32.75 87.97 33.32 85.39 34.19 83.1 34.47 78.79 35.91 77.07 36.19 75.32 36.48 74.18 36.19 73.03 35.33 70.73 35.62 67.86 35.62 64.42 34.76 61.53 34.47 60.09 34.47 59.81 34.76 58.37 34.47 57.22 35.05 54.93 43.92 55.5 47.93 55.79 54.25 55.79 59.98 55.22 68.88 55.22 71.46 54.64 73.18 53.78 74.9 53.21 77.2 53.21 78.63 53.49 87.24 53.21 88.65 52.35 91.81 52.06 93.82 51.77 95.83 52.63 104.43 52.63 106.16 52.35 108.45 51.49 111.32 52.06 115.34 52.63 118.49 53.21 123.08 53.78 125.95 52.92 129.11 52.63 131.69 51.77 133.13 50.63 135.42 48.33 138.86 44.03 140.59 44.6 141.45 44.89 142.02 45.75 142.02 48.04 143.17 50.91 142.88 52.63 144.6 55.79 146.32 56.94 148.33 57.8 151.49 61.24 153.5 63.54 156.94 67.29 158.95 68.73 158.95 69.59 157.51 71.31 154.93 74.75 153.78 77.36 152.92 84.24 152.64 88.83 150.92 92.01 150.63 95.17 151.2 98.9 150.92 102.06 149.48 104.35 148.91 106.07 148.62 112.1 148.05 116.71 149.19 122.45 150.05 126.18 150.92 127.33 156.37 130.51 161.82 133.38 166.12 136.54 168.13 139.12 169.57 145.17 169.28 149.18 167.27 154.92 165.84 156.64 165.84 157.79 166.7 164.96"
        />
      </svg>
    </div>
  )
}

export default Sabaneta