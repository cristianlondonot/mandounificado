import React, {useState, useEffect} from 'react'

const PuebloViejo = () => {
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
        id="uuid-8e32847e-2097-4335-8a66-ef87b8efb6a7"
        xmlns="http://www.w3.org/2000/svg"
        width={198.3}
        height={337.65}
        viewBox="0 0 198.3 337.65"
        className='m-auto'
      >
        <polygon
          fill={cambiarColorSegunCarencias('PUEBLO VIEJO')}
          className="uuid-c958457c-a6bd-4069-ae3a-83e68257a8aa"
          points="86.28 41.33 86.54 45.63 85.99 47.63 87.15 50.2 88.55 51.35 90.01 51.35 91.7 54.52 93.71 55.38 95.16 53.92 96.29 53.64 97.45 56.24 96.57 57.38 95.71 58.81 96.29 60.81 97.71 61.96 97.99 63.1 97.71 63.96 97.99 66.54 97.99 68.28 97.16 69.13 97.71 70.28 96.57 72.85 95.45 77.43 95.71 78.58 97.16 80.29 98.59 80.89 99.16 82.32 99.45 87.47 99.71 88.9 99.99 89.47 102.6 91.76 102.6 92.62 102.3 93.48 102.85 97.48 109.74 103.49 110.6 106.64 111.72 108.09 112.59 109.52 115.47 116.1 117.47 117.53 118.61 119.25 120.04 122.42 121.77 125.85 123.46 129 125.46 134.75 126.89 136.18 128.03 137.32 128.6 139.61 128.6 141.61 129.47 148.2 129.17 149.91 126.6 151.06 126.89 153.92 126.89 154.78 125.46 156.78 124.32 157.92 124.03 159.66 123.16 160.52 123.74 162.24 123.74 163.95 122.03 166.82 120.6 169.39 119.73 172.25 121.16 178 122.6 180.86 124.89 183.72 130.03 189.47 132.9 190.04 134.9 190.9 138.04 188.89 141.2 188.32 142.34 188.61 148.91 190.32 150.35 191.75 151.21 192.9 151.49 194.04 152.92 200.34 152.92 201.77 152.92 205.2 153.49 210.07 153.22 216.38 152.07 219.82 152.35 222.11 153.22 222.96 154.35 224.99 156.35 229.85 156.08 233.29 154.92 235 154.65 235.86 154.65 238.18 155.78 241.61 156.65 242.75 158.65 244.47 161.79 249.33 162.36 250.76 163.22 252.77 162.66 253.05 161.51 254.48 161.22 255.34 160.08 257.63 160.08 258.49 160.08 258.78 158.93 259.63 156.93 262.49 155.78 264.21 154.65 265.95 153.22 268.24 150.92 271.67 150.07 272.53 147.48 276.25 145.2 280 142.34 283.71 141.48 285.43 141.2 285.72 140.34 287.15 138.34 289.72 137.47 290.89 133.47 296.33 132.61 297.47 132.33 298.04 130.33 300.9 128.32 303.77 126.32 306.05 124.03 308.34 123.74 308.63 119.18 313.78 116.3 315.78 114.61 319.53 111.72 322.96 111.17 323.82 110.86 324.39 109.74 325.82 108.86 318.67 108.86 317.52 110.29 315.78 112.29 310.06 112.59 306.05 111.17 300.05 109.16 297.47 104.85 294.32 99.45 291.46 94.02 288.29 93.16 287.15 92.29 283.43 91.15 277.71 91.7 273.1 92.01 267.1 92.55 265.38 94.02 263.07 94.29 259.92 93.71 256.2 94.02 253.05 95.71 249.91 95.98 245.33 96.85 238.46 97.99 235.86 100.6 232.43 101.99 230.71 101.99 229.85 99.99 228.42 96.57 224.68 94.55 222.39 91.43 218.96 89.41 218.1 87.7 216.96 85.99 213.81 86.28 212.09 85.15 209.21 85.15 206.92 84.54 206.06 83.68 205.77 81.99 205.2 81.14 204.06 80.26 204.06 79.71 202.91 79.71 200.34 78.53 199.77 77.14 197.76 75.7 196.62 74.85 196.33 73.41 195.47 69.97 188.61 67.68 183.72 68.27 181.72 69.11 180 69.97 179.14 70.27 177.43 70.84 173.13 72.84 168.82 73.98 168.53 74.85 166.53 74.27 163.1 72.84 159.07 73.12 157.35 73.98 156.49 75.7 155.35 76.28 152.77 75.12 150.2 74.55 147.34 75.41 142.19 75.12 139.33 73.41 136.18 70.54 133.03 65.4 130.15 60.53 127 56.82 124.42 52.23 120.42 49.1 115.82 46.23 109.52 45.95 105.78 47.09 105.49 46.8 103.78 45.38 101.49 47.09 98.34 48.52 96.34 50.23 90.9 51.66 86.9 52.53 83.46 52.23 81.17 53.1 78.29 53.1 74 52.82 70.56 52.23 67.99 52.82 66.82 53.39 64.53 54.24 61.1 53.1 56.52 51.66 52.21 49.38 49.06 48.8 43.91 47.66 38.76 46.8 35.33 45.66 33.32 43.36 32.18 40.79 30.18 39.93 27.58 38.51 24.14 35.93 20.71 35.08 19.28 38.22 16.71 39.93 15.85 41.36 14.39 42.79 14.11 48.8 13.25 49.96 12.96 54.82 11.82 56.82 14.68 59.4 14.99 61.1 14.68 63.68 14.99 65.97 16.13 67.68 16.13 69.97 17.28 70.84 19.28 72.27 21.86 72.27 23.29 75.12 27.86 78.53 32.18 79.71 32.75 82.54 33.32 83.41 34.18 84.54 40.19 85.15 41.33 86.28 41.33"
        />
      </svg>
    </div>
  )
}

export default PuebloViejo