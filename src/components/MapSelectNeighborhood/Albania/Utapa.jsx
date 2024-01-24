import React, {useState, useEffect} from 'react'

const Utapa = () => {
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
        id="uuid-db0d2d09-747d-4035-a5fd-11274594761b"
        xmlns="http://www.w3.org/2000/svg"
        width={198.3}
        height={267.62}
        viewBox="0 0 198.3 267.62"
        className='m-auto'
      >
        <polygon
          fill={cambiarColorSegunCarencias('UTUPA')}
          className="uuid-4f989368-c96d-4a71-ae05-f4863ccd8dd8"
          points="154.61 103.97 154.02 104.26 149.35 108.62 144.65 112.37 142.61 114.4 140.85 116.42 139.68 117.58 136.17 120.76 131.48 125.98 126.8 131.48 122.72 136.42 122.13 137.28 121.25 138.42 119.8 139.86 115.7 143.64 111.88 149.14 108.37 155.49 105.15 160.99 103.11 167.67 102.52 170.26 101.94 173.73 101.64 178.09 101.94 182.73 102.23 184.45 102.23 185.03 101.35 192.26 97.83 198.33 97.54 199.8 96.65 203.84 95.49 209.33 95.49 215.43 95.79 220.05 96.65 226.7 96.96 230.49 96.37 231.93 82.32 233.39 80.85 233.39 79.1 232.23 77.63 230.2 77.33 229.92 76.75 227.28 76.19 224.39 75.31 221.21 73.85 218.61 72.08 216.01 70.04 213.09 67.4 210.49 63.89 207.61 62.43 207.02 60.96 205.29 60.38 201.82 61.83 199.48 65.64 194.86 66.82 191.42 66.52 188.81 65.36 182.73 65.07 178.96 63.31 176.93 59.8 174.92 55.39 172.01 53.06 169.98 51.89 166.51 50.71 163.03 53.35 157.52 54.52 156.36 53.94 152.6 54.23 149.71 53.06 148.27 50.71 145.96 50.71 141.91 49.83 140.73 47.79 136.42 46.9 133.5 47.2 130.9 48.38 129.16 50.43 128.01 51.89 126.56 53.94 123.38 54.52 119.6 53.64 118.16 52.46 116.42 53.06 115.26 55.7 112.95 57.75 110.06 60.38 107.44 64.19 105.7 65.64 101.37 66.24 97.9 65.64 95.87 64.48 91.83 63.6 84.6 62.71 82.86 63.6 80.53 63.89 79.08 64.19 75.04 63.89 71.57 62.43 68.36 60.38 65.18 58.33 63.74 54.52 62.29 51.6 60.56 48.38 56.51 46.62 52.73 44.86 48.39 43.69 45.21 47.5 43.77 50.71 43.48 54.82 43.77 58.04 44.06 60.67 42.9 63.02 41.74 65.36 40.59 68.58 39.7 71.21 39.14 72.39 38.83 72.68 38.83 76.75 37.99 79.96 37.67 82.89 37.09 85.54 36.83 86.71 36.83 88.76 36.52 91.69 35.65 94.32 35.07 98.71 34.49 101.06 34.23 102.23 34.23 104.86 34.23 106.61 34.23 106.9 34.78 106.9 37.41 108.08 38.83 109.25 39.98 110.72 41.45 112.18 42.61 114.23 44.35 115.7 45.5 117.15 47.24 118.62 48.1 120.97 50.13 121.25 50.99 120.37 52.73 120.09 54.17 120.97 55.33 122.72 57.96 125.34 59.98 126.5 62 128.25 63.16 129.44 64.6 131.48 65.76 132.65 66.92 134.71 68.65 135.87 69.54 138.22 70.41 139.38 72.14 141.14 76.19 141.44 77.93 142.61 80.82 144.08 84.6 144.65 86.91 144.95 88.94 145.83 90.09 147.59 92.11 149.63 93.85 151.1 95.87 153.45 99.34 153.74 101.65 154.02 102.23 154.61 103.97"
        />
      </svg>
    </div>
  )
}

export default Utapa