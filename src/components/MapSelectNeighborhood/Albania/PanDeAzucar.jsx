import React, {useState, useEffect} from 'react'

const PanDeAzucar = () => {
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
        id="uuid-21ee311f-a3b0-41c2-8412-60a5b4309383"
        xmlns="http://www.w3.org/2000/svg"
        width={198.3}
        height={267.62}
        viewBox="0 0 198.3 267.62"
        className='m-auto'
      >
        <polygon
          fill={cambiarColorSegunCarencias('PAN DE AZUCAR')}
          className="uuid-24f10132-3ad3-49a8-a82c-a262a93e0a8e"
          points="198.97 130.76 197.82 132.23 195.81 133.95 192.93 135.97 190.62 138.57 188.32 140.28 184.01 141.45 179.42 144.32 175.37 145.49 170.77 146.35 166.45 147.22 161.84 149.82 157.84 150.67 154.38 151.24 147.48 152.97 145.73 153.26 142.87 152.4 140.57 151.82 139.11 152.4 135.68 156.43 134.24 160.48 133.09 161.63 128.48 162.78 124.74 165.66 122.15 165.66 117.83 166.82 114.95 168.83 112.65 169.98 109.2 170.26 107.76 171.42 107.47 172.85 106.32 178.32 105.17 181.49 102.58 189.57 102.29 190.43 99.41 187.27 97.97 185.83 96.82 184.68 92.22 183.79 85.33 183.79 82.17 183.79 76.12 184.97 70.94 186.98 65.48 190.15 60.87 189.57 57.7 188.71 51.08 187.57 47.34 187.27 43.91 186.98 39.31 186.98 35.57 187.27 33.55 187.57 32.11 187.84 30.96 188.71 28.66 191.01 25.78 193.6 22.9 193.32 19.74 194.18 17.72 195.9 13.69 199.38 12.25 200.53 8.8 203.12 8.51 203.12 8.23 202.55 6.21 199.96 6.5 198.23 5.92 197.05 4.2 196.48 1.32 196.2 .17 196.48 -.41 196.77 -.67 195.33 -.67 194.18 -.41 192.45 1.03 191.59 1.89 188.71 3.04 184.39 3.04 180.63 2.76 179.2 3.91 177.46 6.21 171.7 6.5 169.11 5.35 167.39 4.2 165.95 6.79 163.07 12.54 159.9 13.69 159.04 14.56 154.99 14.84 152.4 13.98 150.38 11.1 146.93 6.79 142.59 9.09 135.1 9.95 128.46 10.24 122.7 10.24 117.52 18.3 119.54 24.34 121.55 28.95 123.28 34.99 125.01 37.29 126.45 42.47 132.23 45.9 134.82 51.08 140.28 57.13 138.27 64.32 134.53 66.91 132.23 68.07 129.04 71.52 124.14 74.97 118.39 76.41 114.07 77.85 111.77 79.87 108.6 83.03 106.59 85.62 105.72 87.92 107.45 91.38 110.62 93.08 110.9 95.38 110.04 98.55 107.74 99.99 106.01 104.88 101.67 109.2 96.49 110.06 95.34 110.64 93.04 112.36 88.12 114.38 86.68 117.26 79.77 118.41 75.14 121 70.54 123.01 69.67 127.33 68.24 131.36 65.93 132.22 64.49 136.25 67.08 137.98 67.95 139.97 69.1 140.83 69.96 142.27 70.26 149.2 78.91 153.23 86.97 157.53 96.78 159.85 99.65 162.44 102.24 165.03 104.26 167.31 105.43 172.49 106.59 177.1 106.59 179.98 107.45 185.16 110.04 188.61 112.92 190.91 115.51 196.67 123.85 198.97 130.76"
        />
      </svg>
    </div>
  )
}

export default PanDeAzucar