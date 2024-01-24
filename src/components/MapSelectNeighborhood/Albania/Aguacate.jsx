import React, {useState, useEffect} from 'react'

const Aguacate = () => {
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
        id="uuid-3c946150-3736-4c69-9803-0b7ad922026f"
        xmlns="http://www.w3.org/2000/svg"
        width={198.3}
        height={267.62}
        viewBox="0 0 198.3 267.62"
        className='m-auto'
      >
        <polygon
          fill={cambiarColorSegunCarencias('AGUACATE')}
          className="uuid-51162172-5325-4e4f-a08b-463062256d2e"
          points="150.25 68.24 149.97 68.8 149.12 68.8 148 68.8 147.42 69.37 147.14 70.21 147.42 71.06 147.14 72.18 146.87 73.03 146.59 74.44 146.87 75.56 147.42 77.25 147.71 78.12 147.71 79.25 147.14 80.94 146.3 82.07 146.01 82.91 146.3 84.04 147.14 84.6 148 84.88 148.55 84.88 149.97 86.01 150.8 87.14 151.38 89.11 151.65 91.36 151.38 92.49 150.52 92.49 149.39 92.77 148.84 93.9 149.68 95.03 150.25 95.31 150.52 97.28 150.25 99.53 149.39 101.51 148.27 103.2 148 103.48 146.59 105.19 144.63 106.6 142.66 107.73 140.4 109.42 138.43 111.11 136.47 112.8 134.77 114.21 132.51 116.46 129.99 119.02 128.01 121.55 127.74 124.94 126.61 127.47 126.61 131.16 127.45 133.97 129.42 136.23 129.71 138.48 129.13 141.3 128.01 144.4 127.74 147.5 129.42 149.75 131.12 151.44 131.96 152 133.92 153.69 134.21 154.54 134.77 155.69 135.62 158.79 136.47 161.61 137.88 162.73 138.15 162.73 139.85 163.86 140.68 164.7 142.38 166.68 144.36 169.24 146.3 171.49 147.42 174.31 148 176.28 147.42 179.66 147.14 183.91 147.42 186.73 147.71 188.42 147.71 188.7 148 192.92 147.14 196.3 146.87 196.59 146.01 199.69 145.46 202.22 144.08 204.19 140.98 206.73 137.6 209.29 135.05 211.82 130.54 215.77 129.99 214.08 129.71 213.51 129.42 211.26 127.16 207.88 125.75 205.88 123.78 204.19 122.1 202.22 121.25 201.09 120.97 199.12 120.4 196.87 119 193.21 117.88 190.39 117.59 188.7 115.89 184.75 114.77 183.06 112.51 182.22 111.39 181.35 109.41 179.66 108.29 178.53 106.32 177.41 105.2 176 103.5 174.87 102.38 172.9 99.87 170.93 98.17 168.37 97.33 167.24 97.61 165.83 98.46 164.14 98.17 163.3 95.91 161.32 94.51 160.48 93.11 158.79 91.7 157.66 89.73 155.97 88.32 154.82 86.9 153.41 85.77 152.29 84.65 150.88 84.65 148.34 84.37 147.78 82.67 147.78 80.15 147.78 79.02 147.78 76.77 148.06 72.53 148.62 70.01 149.19 67.18 150.03 65.22 150.31 64.09 150.31 61.54 150.6 58.73 151.16 55.64 151.44 51.72 152.29 51.43 152.29 50.3 152.57 47.74 153.13 46.65 148.9 46.65 146.93 46.65 143.27 46.9 140.74 48.03 139.04 49.17 136.23 49.74 135.38 51.12 133.97 52.84 131.44 53.97 129.44 54.78 128.32 55.1 127.19 55.38 125.78 55.64 123.24 55.38 120.99 54.78 119.3 54.78 117.33 54.78 115.61 54.78 113.92 55.1 112.23 55.64 110.54 56.47 109.42 57.89 106.88 57.89 106.32 57.33 103.48 57.04 102.63 57.04 102.35 58.16 100.94 59.02 99.53 59.85 98.12 60.42 97.56 61.84 97.56 63.23 97.56 64.92 98.12 66.62 98.69 68.88 99.53 70.57 100.38 72.82 100.1 74.22 99.53 75.91 98.69 77.89 97.28 79.02 95.59 78.73 93.9 77.89 92.21 77.33 90.8 77.04 89.39 77.33 87.98 78.17 87.14 80.42 87.14 82.4 87.42 84.37 87.42 85.77 86.57 86.63 86.01 86.63 84.6 86.35 82.63 86.35 80.38 86.9 78.12 87.47 76.69 88.88 76.13 89.73 76.13 90 76.97 90 78.69 90 80.38 90.57 81.5 91.7 81.22 92.83 79.53 93.66 77.54 95.91 75.56 97.61 74.15 99.01 73.31 101.53 72.75 102.93 72.75 103.78 73.87 104.35 75.56 106.03 76.69 106.61 75.56 106.88 74.15 107.16 72.75 107.16 71.62 108 70.77 109.13 70.49 110.54 70.21 112.51 70.21 114.49 70.21 117.3 70.21 120.4 70.21 122.65 70.49 124.35 69.65 125.2 66.83 126.33 64.83 128.58 63.71 130.83 64.27 132.24 66.55 133.92 70.21 134.77 71.06 135.34 71.62 137.02 71.62 137.6 69.08 135.9 65.42 134.5 62.86 133.09 60.33 131.67 56.38 133.37 53.85 133.64 53.85 136.18 52.44 138.43 51.85 139.85 52.72 140.4 53.28 141.53 55.26 144.91 59.76 146.87 62.86 147.71 63.71 148 64.27 149.12 64.55 149.68 64.55 150.8 65.14 150.8 66.27 150.52 67.11 150.25 68.24"
        />
      </svg>
    </div>
  )
}

export default Aguacate