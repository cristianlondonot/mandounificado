import React, {useState, useEffect} from 'react'

const Canutillo = () => {
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
        id="uuid-7f301df2-bde5-4cee-8dbf-ade72b423bc6"
        xmlns="http://www.w3.org/2000/svg"
        width={198.3}
        height={267.62}
        viewBox="0 0 198.3 267.62"
        className='m-auto'
      >
        <polygon
          fill={cambiarColorSegunCarencias('CANUTILLO')}
          className="uuid-a0f77c66-e20d-4b9b-8aee-7e6fe64e2bcd"
          points="164.05 94.67 160.61 99.84 156.3 105.01 152.55 107.05 149.14 108.77 146.55 110.78 144.26 112.22 141.38 116.53 138.21 120.29 131.89 122.59 131.33 123.74 130.46 126.32 131.04 129.2 130.46 130.63 129.89 133.22 130.17 136.12 129.02 138.13 127.88 141 127.01 143.01 126.43 145.03 126.73 145.86 127.01 146.17 130.46 144.45 132.76 143.85 135.92 145.03 138.51 145.03 137.92 147.04 136.77 149.62 136.21 151.63 136.49 153.65 137.07 153.93 139.95 153.65 141.38 153.93 143.11 155.94 143.96 156.52 145.98 156.52 151.12 155.08 153.99 155.37 155.73 155.66 156.01 155.94 156.58 156.23 156.86 157.09 156.86 158.53 156.86 159.39 157.45 160.28 158.02 163.44 158.3 164.3 158.89 165.74 159.46 167.75 159.46 168.61 158.89 172.06 158.02 173.52 157.74 174.38 157.74 176.11 157.45 176.39 157.45 176.97 154.29 177.54 151.99 178.69 145.68 179.55 142.24 180.7 140.23 182.14 137.07 185.88 136.77 186.16 136.77 186.47 135.92 186.74 134.2 187.03 132.18 187.34 130.17 187.34 128.74 187.34 126.73 187.34 124.71 186.47 122.99 185.88 120.98 185.59 118.96 185.59 117.82 185.88 116.67 186.16 115.52 187.34 114.36 188.2 112.07 189.06 110.05 189.64 108.05 189.64 106.33 189.64 104.62 188.77 102.89 187.34 101.46 185.88 101.17 185.59 100.02 184.15 98.88 182.43 97.43 179.84 96.29 176.39 95.42 175.24 94.57 174.96 93.71 174.96 92.83 175.24 91.7 175.82 90.55 176.11 88.24 176.11 85.95 176.68 84.21 177.54 82.49 178.12 80.49 178.12 79.33 178.41 78.48 178.41 70.71 176.39 68.12 174.67 66.7 172.63 65.26 171.77 63.82 170.62 62.39 170.05 59.23 168.32 57.24 166.6 55.8 165.16 53.79 164.88 52.07 166.03 50.34 167.18 49.18 168.32 47.18 169.19 45.46 169.19 43.73 167.18 41.71 165.16 39.71 162.86 37.4 158.53 36.26 155.94 35.68 153.65 34.82 150.49 34.82 147.32 34.24 143.3 34.82 137.27 34.54 136.12 34.54 132.07 34.24 128.62 34.54 124.03 35.96 117.68 37.4 114.23 39.42 111.07 41.43 107.62 43.15 105.01 45.17 103.86 46.6 102.71 46.89 100.42 48.04 97.25 48.62 96.39 48.9 96.39 48.9 96.68 49.18 96.68 49.48 96.39 49.48 96.11 49.76 95.82 50.04 95.53 50.34 95.24 50.04 94.96 49.76 94.96 49.76 94.67 49.76 94.38 50.04 94.09 50.04 93.81 50.04 93.52 50.34 93.23 50.34 92.94 50.34 92.63 50.62 92.63 50.62 92.35 50.92 92.06 51.2 92.06 51.2 91.77 51.49 91.77 51.77 91.51 52.07 91.51 52.35 91.77 52.35 91.51 52.64 91.51 52.92 91.22 53.21 91.22 53.21 90.93 53.49 90.93 53.49 90.65 54.08 90.33 54.36 90.65 54.36 90.93 54.08 90.93 53.79 91.22 54.36 92.06 54.93 92.63 55.51 92.06 56.08 91.77 56.65 91.51 56.95 91.22 57.24 91.22 57.8 90.33 58.1 90.33 58.39 90.05 58.67 90.05 58.96 90.05 58.96 89.76 59.23 90.93 59.23 91.51 58.96 92.35 59.51 93.23 60.08 94.38 60.08 94.96 60.08 95.24 60.08 95.53 60.38 96.39 60.95 96.11 61.24 95.53 61.52 94.67 62.39 93.81 62.1 92.94 62.1 93.23 62.67 93.52 63.24 93.81 63.24 94.09 63.24 94.38 63.82 95.53 64.11 96.11 64.11 96.39 65.83 99.27 67.27 98.12 67.55 97.83 69.86 96.11 69.27 95.24 66.98 96.68 66.4 96.11 66.11 95.53 66.7 94.38 66.98 93.23 66.4 91.51 63.54 93.23 62.96 92.63 62.96 92.06 62.96 91.77 62.67 91.51 62.67 91.22 62.39 90.93 62.1 90.65 62.1 90.33 62.39 90.05 62.39 89.76 62.1 89.47 62.1 88.92 62.39 88.92 63.24 88.35 62.96 86.05 64.39 82.6 66.11 80.85 70.14 79.7 71.29 80.85 72.73 82 76.46 82.86 78.18 82.86 80.2 82.6 81.92 83.46 85.36 84.01 87.1 84.3 89.11 83.15 90.55 81.16 91.4 78.55 93.71 77.98 95.71 78.27 96.58 79.13 97.15 80.59 98.02 80.85 99.45 80.28 100.32 80.85 102.04 82.86 104.05 83.75 105.74 83.15 110.05 84.3 112.07 86.05 114.36 89.21 117.24 90.33 118.96 90.05 120.68 89.21 122.12 89.47 123.57 90.93 127.88 94.38 129.6 94.96 133.61 94.96 138.8 94.96 141.38 95.53 143.96 96.39 149.42 96.97 152.55 96.68 157.45 94.38 159.74 93.52 161.76 93.81 164.05 94.67"
        />
      </svg>
    </div>
  )
}

export default Canutillo