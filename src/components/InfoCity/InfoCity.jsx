import React, { useEffect, useState } from 'react';
import './InfoCity.sass';
import { useParams } from 'react-router-dom';

const InfoCity = () => {
  const { municipio } = useParams();
  const [datos, setDatos] = useState([]); // Estado local para almacenar los datos

  const municipioFormateado = municipio.toUpperCase().replace(/-/g, ' ');

  useEffect(() => {
    // Cargar datos desde el archivo JSON local
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/cristianlondonot/mandounificado-spidersoft/main/data-poblation.json'); // Reemplaza 'ruta-al-archivo' con la ubicación correcta del archivo
        const data = await response.json();
        setDatos(data);
      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    };

    fetchData();
  }, [municipio]);

  // Función para obtener la cantidad de habitantes en el municipio
  const habitantesEnMunicipio = () => {
    const municipioData = datos.find((dato) => dato.MUNICIPIO === municipioFormateado);
    if (municipioData) {
      const poblacionTotal = municipioData['POBLACION TOTAL'];
      return poblacionTotal.toLocaleString(); // Aplicar formato de separadores de miles
    } else {
      return 'Datos no disponibles';
    }
  };

  const nombreAlcaldeDatosMunicipio = () => {
    const municipioData = datos.find((dato) => dato.MUNICIPIO === municipioFormateado);
    if (municipioData) {
      const nombresAlcalde = municipioData['NOMBRE_ALCALDE'];
      return nombresAlcalde.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    } else {
      return 'Datos no disponibles';
    }
  };

  const apellidoAlcaldeDatosMunicipio = () => {
    const municipioData = datos.find((dato) => dato.MUNICIPIO === municipioFormateado);
    if (municipioData) {
      const apellidosAlcalde = municipioData['APELLIDO_ALCALDE'];
      return apellidosAlcalde.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    } else {
      return 'Datos no disponibles';
    }
  };

  const poblacionUrbanaMunicipio = () => {
    const municipioData = datos.find((dato) => dato.MUNICIPIO === municipioFormateado);
    if (municipioData) {
      const poblacionUrbana = municipioData['POBLACION_URBANA'];
      return poblacionUrbana.toLocaleString()
    } else {
      return 'Datos no disponibles';
    }
  };

  const poblacionRuralMunicipio = () => {
    const municipioData = datos.find((dato) => dato.MUNICIPIO === municipioFormateado);
    if (municipioData) {
      const poblacionRural = municipioData['POBLACION_RURAL'];
      return poblacionRural.toLocaleString()
    } else {
      return 'Datos no disponibles';
    }
  };

  const poblacionPrimeraInfanciaMunicipio = () => {
    const municipioData = datos.find((dato) => dato.MUNICIPIO === municipioFormateado);
    if (municipioData) {
      const poblacionPrimeraInfancia = municipioData['PRIMERA_INFANCIA'];
      return poblacionPrimeraInfancia.toLocaleString()
    } else {
      return 'Datos no disponibles';
    }
  };

  const poblacionInfanciaMunicipio = () => {
    const municipioData = datos.find((dato) => dato.MUNICIPIO === municipioFormateado);
    if (municipioData) {
      const poblacionInfancia = municipioData['INFANCIA'];
      return poblacionInfancia.toLocaleString()
    } else {
      return 'Datos no disponibles';
    }
  };

  const poblacionAdolecenciaMunicipio = () => {
    const municipioData = datos.find((dato) => dato.MUNICIPIO === municipioFormateado);
    if (municipioData) {
      const poblacionAdolecencia = municipioData['ADOLECENCIA'];
      return poblacionAdolecencia.toLocaleString()
    } else {
      return 'Datos no disponibles';
    }
  };

  const poblacionJovenMunicipio = () => {
    const municipioData = datos.find((dato) => dato.MUNICIPIO === municipioFormateado);
    if (municipioData) {
      const poblacionJoven = municipioData['JOVEN'];
      return poblacionJoven.toLocaleString()
    } else {
      return 'Datos no disponibles';
    }
  };

  const poblacionMatriculaMunicipio = () => {
    const municipioData = datos.find((dato) => dato.MUNICIPIO === municipioFormateado);
    if (municipioData) {
      const poblacionMatricula = municipioData['MATRICULA_OFICIAL_RECONOCIDA'];
      return poblacionMatricula.toLocaleString()
    } else {
      return 'Datos no disponibles';
    }
  };

  const poblacionPaeMunicipio = () => {
    const municipioData = datos.find((dato) => dato.MUNICIPIO === municipioFormateado);
    if (municipioData) {
      const poblacionPae = municipioData['POBLACION_PAE'];
      return poblacionPae.toLocaleString()
    } else {
      return 'Datos no disponibles';
    }
  };

  return (
    <div className={`${!municipio ? 'hidden' : ''} infoCity`}>
      <div className="stats stats-vertical shadow blur-sm">
        <div className="stat">
          <div className="stat-title">Habitantes</div>
          <div className="stat-value">
            <div className="estado">
              <div className={`estado-alert text-start`}>
                <span className='font-sm text-medium text-slate-90 w-full'>{habitantesEnMunicipio()}</span>
              </div>
            </div>
          </div>
          <div className="stat-desc mt-1">{habitantesEnMunicipio()} habitantes en {municipioFormateado} </div>
        </div>
        
        <div className="stat">
          <div className="stat-title">Alcalde</div>
          <span className="font-bold text-2xl mb-1">{nombreAlcaldeDatosMunicipio()}</span>
          <div className="stat-desc">{apellidoAlcaldeDatosMunicipio()}</div>
        </div>
        
        <div className="stat">
          <div className="stat-title">Info Poblacional</div>
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th>Dato</th>
                  <th>Cantidad</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>Población Urbana</td>
                  <td>{poblacionUrbanaMunicipio()}</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>Población Rural</td>
                  <td>{poblacionRuralMunicipio()}</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>Primera Infancia <span className='text-xs text-gray-500'>(0 a 5)</span> </td>
                  <td>{poblacionPrimeraInfanciaMunicipio()}</td>
                </tr>
                <tr>
                  <td>Infancia <span className='text-xs text-gray-500'>(5 a 11)</span></td>
                  <td>{poblacionInfanciaMunicipio()}</td>
                </tr>
                <tr>
                  <td>Adolecencia <span className='text-xs text-gray-500'>(12 a 17)</span> </td>
                  <td>{poblacionAdolecenciaMunicipio()}</td>
                </tr>
                <tr>
                  <td>Joven <span className='text-xs text-gray-500'>(18 a 28)</span> </td>
                  <td>{poblacionJovenMunicipio()}</td>
                </tr>
                <tr>
                  <td>Matriculados</td>
                  <td>{poblacionMatriculaMunicipio()}</td>
                </tr>
                <tr>
                  <td>Población PAE</td>
                  <td>{poblacionPaeMunicipio()}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default InfoCity