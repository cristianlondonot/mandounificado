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
    <div className='infoCity'>
      

      <div className="stats stats-vertical lg:stats-horizontal shadow">

        <div className="stat">
          <div className="stat-title">Alcalde</div>
          <span className="font-bold text-2xl mb-1">{nombreAlcaldeDatosMunicipio()}</span>
          <div className="stat-desc">{apellidoAlcaldeDatosMunicipio()}</div>
        </div>
        
        <div className="stat">
          <div className="stat-desc">Habitantes</div>
          <div className="stat-title text-black font-bold">{habitantesEnMunicipio()}</div>
          <div className="stat-desc">Población Urbana</div>
          <div className="stat-title text-black font-bold">{poblacionUrbanaMunicipio()}</div>
        </div>

        <div className="stat">
          <div className="stat-desc">Población Rural</div>
          <div className="stat-title text-black font-bold">{poblacionRuralMunicipio()}</div>
          <div className="stat-desc">Primera Infancia</div>
          <div className="stat-title text-black font-bold">{poblacionPrimeraInfanciaMunicipio()}</div>
        </div>

        <div className="stat">
          <div className="stat-desc">Infancia</div>
          <div className="stat-title text-black font-bold">{poblacionInfanciaMunicipio()}</div>
          <div className="stat-desc">Adolecencia</div>
          <div className="stat-title text-black font-bold">{poblacionAdolecenciaMunicipio()}</div>
        </div>

        <div className="stat">
          <div className="stat-desc">Joven</div>
          <div className="stat-title text-black font-bold">{poblacionJovenMunicipio()}</div>
          <div className="stat-desc">Matriculados</div>
          <div className="stat-title text-black font-bold">{poblacionMatriculaMunicipio()}</div>
        </div>
        
        <div className="stat">
          <div className="stat-desc">Población PAE</div>
          <div className="stat-title text-black font-bold">{poblacionPaeMunicipio()}</div>
          {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
        </div>
        
      </div>
      
    </div>
  )
}

export default InfoCity