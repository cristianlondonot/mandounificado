import React, {useState, useEffect}  from 'react'

const Pantanos = () => {
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
        id="uuid-9ed4cdca-36e3-40ef-bdfb-bce1089a8c42"
        xmlns="http://www.w3.org/2000/svg"
        width={198.3}
        height={267.62}
        viewBox="0 0 198.3 267.62"
        className='m-auto'
      >
        <polygon
          fill={cambiarColorSegunCarencias('PANTANOS')}
          className="uuid-eade33bc-1a96-4085-8897-3ab445875b49"
          points="176.41 165.74 177.59 171.02 177 174.52 174.65 176.87 173.48 181.01 172.89 188.62 172.3 195.08 171.13 202.1 169.39 205.6 168.8 206.77 164.7 208.53 160.02 209.75 155.33 208.53 151.24 207.42 147.72 205.6 142.46 203.86 138.35 203.27 135.48 201.51 133.72 198.58 131.37 196.25 125.46 196.25 120.24 195.66 114.94 191.56 112.05 188.62 106.73 181.01 102.64 173.37 101.51 166.91 99.77 162.24 97.95 160.48 95.62 159.89 91.51 161.65 84.49 162.24 77.51 159.89 68.14 156.96 63.41 155.8 56.43 152.28 51.75 147.55 47.06 143.44 41.8 138.77 33.6 134.09 27.76 128.23 20.71 120.03 22.47 115.3 26 104.75 31.26 99.49 36.54 94.21 45.84 87.78 51.75 82.52 55.8 79.58 57.6 76.06 57.6 71.98 55.21 65.48 53.51 62.57 54.04 57.87 58.73 60.81 60.49 63.13 62.88 65.48 67.51 67.83 71.6 67.83 76.88 69 82.14 71.98 84.49 76.06 85.12 79 88.05 81.34 92.14 83.69 97.95 84.86 103.23 84.86 109.07 84.28 118.5 83.69 126.05 84.28 130.16 84.86 133.72 84.28 136.59 86.61 141.87 90.13 147.13 91.89 150.07 94.8 154.16 100.12 162.94 117.64 166.46 128.23 166.46 135.25 167.04 141.11 169.98 148.14 174.65 156.96 174.65 162.24 176.41 165.74"
        />
      </svg>
    </div>
  )
}

export default Pantanos