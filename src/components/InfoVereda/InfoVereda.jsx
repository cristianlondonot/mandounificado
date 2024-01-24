import React, {useEffect, useState} from 'react'
import './InfoVereda.sass'
import { useParams } from 'react-router-dom';

const InfoVereda = () => {

  const { vereda, municipio } = useParams();
  const [datos, setDatos] = useState([]); // Estado local para almacenar los datos

  const veredaFormateado = vereda.toUpperCase().replace(/-/g, ' ');
  const municipioFormateado = municipio.toUpperCase().replace(/-/g, ' ');

  useEffect(() => {
    // Cargar datos desde el archivo JSON local
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/cristianlondonot/mandounificado-spidersoft/main/data-factor.json');
        const data = await response.json();
        setDatos(data);
      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    };

    fetchData();
  }, [municipioFormateado]);

  // Función para obtener la cantidad de habitantes en el municipio
  const habitantesEnMunicipio = () => {
    const totalHabitantes = datos
      .filter(dato => dato.NOMBRE === veredaFormateado)
      .reduce((total, dato) => total + dato.HABITANTES, 0);

    return totalHabitantes.toLocaleString(); // Aplicar formato de separadores de miles
  };

  return (
    <div className={`${!vereda ? 'hidden' : ''} infoCity`} >
      <div className="stats stats-vertical shadow">
  
        <div className="stat">
          <div className="stat-title">Habitantes</div>
          <div className="stat-value">
            <div className="estado">
              <div className={`estado-alert text-start`}>
                <span className='font-sm text-medium text-slate-90 w-full'>{habitantesEnMunicipio()}</span>
              </div>
            </div>
          </div>
          <div className="stat-desc mt-1">{habitantesEnMunicipio()} habitantes en {veredaFormateado} </div>
        </div>
        
        <div className="stat">
          <div className="stat-title">Alcalde</div>
          <span className="font-bold text-2xl mb-1">José Fernando</span>
          <div className="stat-desc">Sánchez Carvajal</div>
        </div>
        
        <div className="stat">
          <div className="stat-title">Partido militante</div>
          <div className="w-20 my-2"><img src="/img/brand/floridablancaenorden.png" alt=""  className='w-full'/></div>
          <div className="stat-desc">Floridablanca en orden</div>
        </div>
        
      </div>
    </div>
  )
}

export default InfoVereda