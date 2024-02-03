import React, {useState} from 'react'
import './MenuLeftDefault.sass'

const MenuLeftDefault = ({onBotonPresionadoChange}) => {

  const [estadoBoton, setEstadoBoton] = useState('default');

  const handleBotonClick = (boton) => {
    if (estadoBoton === boton) {
      setEstadoBoton('default');
      onBotonPresionadoChange('default');
    } else {
      setEstadoBoton(boton);
      onBotonPresionadoChange(boton);
    }
  };


  return (
    <div className='menuLeftDefault h-full'>
      <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
      <ul className="menu bg-base-200 w-80 min-h-full">
        <li>
          <details className='item'>
            <summary className={`flex items-center content-center text-white hover:bg-blue-800 after:hidden bg-blue-900 mt-2 ${estadoBoton === 'seguridad' ? 'activo' : ''}`} onClick={() => handleBotonClick('seguridad')}><img className='w-6' src="/img/vector/icon-seguridad.svg" alt="" />Seguridad multidimenensional</summary>
            <ul>
              <li>
                <h2 className="menu-title">Justicia y derecho</h2>
                <ul>
                  <li><a>Frente Edgar Madrid Benjumea de las AGC</a></li>
                  <li><a>GDCO (Grupo Delincuencia Común Organizada)</a></li>
                  <li><a>Homicidios</a></li>
                  <li><a>Hurto a personas</a></li>
                  <li><a>Hurto automotores</a></li>
                  <li><a>Hurto Comercio</a></li>
                  <li><a>Hurto residencias</a></li>
                  <li><a>GAO-ELN</a></li>
                  <li><a>MICROTRAFICO</a></li>
                  <li><a>GAO-DISIDENCIAS</a></li>
                  <li><a>Violencia Intrafamiliar</a></li>
                </ul>
                <h2 className="menu-title">Salud y protección social</h2>
                <ul>
                  <li><a>Baja cobertura en salud</a></li>
                  <li><a>Carencia de Puestos de salud</a></li>
                  <li><a>Mantenimiento de puestos de salud</a></li>
                </ul>
                <h2 className="menu-title">Educación</h2>
                <ul>
                  <li><a>Deserción ESCOLAR</a></li>
                  <li><a>Cobertura pae</a></li>
                  <li><a>Carencia de escuelas</a></li>
                  <li><a>Mantenimiento de escuelas</a></li>
                </ul>
                <h2 className="menu-title">Trabajo</h2>
                <ul>
                  <li><a>Informalidad</a></li>
                  <li><a>Desempleo</a></li>
                </ul>
                <h2 className="menu-title">Vivienda, ciudad y Territorio</h2>
                <ul>
                  <li><a>Baja cobertura agua potable</a></li>
                </ul>
                <h2 className="menu-title">Deporte y recreación</h2>
                <ul>
                  <li><a>Bajo número de escuelas deportivas</a></li>
                </ul>
                <h2 className="menu-title">Gobierno Territorial</h2>
                <ul>
                  <li><a>Juntas de acción comunal sin resolución</a></li>
                  <li><a>Situación fiscal del municipio</a></li>
                  <li><a>Problemas Limítrofes</a></li>
                  <li><a>Alerta suspension mandatarios</a></li>
                  <li><a>Alerta suspension mandatarios</a></li>
                </ul>

              </li>
            </ul>
          </details>
        </li>
        <li>
          <details >
            <summary className={`group-one flex items-center content-center text-white hover:bg-blue-800 after:hidden bg-blue-900 mt-2 ${estadoBoton === 'social y cultural' ? 'activo' : ''}`} onClick={() => handleBotonClick('social y cultural')}><img className='w-6' src="/img/vector/icon-social.svg" alt="" />Prosperidad</summary>
            <ul>
              <li>
                <h2 className="menu-title">Información estadistica</h2>
                <ul>
                  <li><a>Pobreza Extrema</a></li>
                  <li><a>Habitante de Calle</a></li>
                  <li><a>Carencia vías</a></li>
                  <li><a>Mantenimiento de vías</a></li>
                  <li><a>Carencia de Puentes</a></li>
                  <li><a>Carencia Placa Huella</a></li>
                  <li><a>Mantenimiento de Placa Huella</a></li>
                </ul>
                <h2 className="menu-title">Cultura</h2>
                <ul>
                  <li><a>Baja o inexistencia de escuelas de arte y musica</a></li>
                  <li><a>Deficiencia en el patrimonio cultural</a></li>
                </ul>
                <h2 className="menu-title">Tecnologias de la información</h2>
                <ul>
                  <li><a>Falta de telefonia celular</a></li>
                  <li><a>Falta conexión internet</a></li>
                </ul>
                <h2 className="menu-title">Comercio, Industria y Turismo</h2>
                <ul>
                  <li><a>Bajo valor agregado a productos</a></li>
                  <li><a>Bajas competencias emprendedoras</a></li>
                </ul>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details >
            <summary className={`group-one flex items-center content-center text-white hover:bg-blue-800 after:hidden bg-blue-900 mt-2 ${estadoBoton === 'infraestructura' ? 'activo' : ''}`} onClick={() => handleBotonClick('infraestructura')}><img className='w-6' src="/img/vector/icon-infraestructura.svg" alt="" />Sostenibilidad</summary>
            <ul>
              <li>
                <h2 className="menu-title">Agricultura y desarrollo rural</h2>
                <ul>
                  <li><a>Ampliacion de portafolio productivo</a></li>
                  <li><a>Prácticas agroindustriales deficientes</a></li>
                </ul>
                <h2 className="menu-title">Minas y Energía</h2>
                <ul>
                  <li><a>Inadecuadas practicas mineras</a></li><li><a>Prácticas agroindustriales deficientes</a></li>
                </ul>
                <h2 className="menu-title">Ambiente y desarrollo sotenible</h2>
                <ul>
                  <li><a>Deforestación</a></li>
                  <li><a>Contaminación de las fuentes hídricas</a></li>
                  <li><a>Contaminación atmosférica</a></li>
                  <li><a>Deslizamiento</a></li>
                  <li><a>Inundación</a></li>
                  <li><a>Amenaza por Incendios a la Cobertura Vegetal</a></li>
                  <li><a>Falta de disposicion de residuos solidos</a></li>
                </ul>
              </li>
            </ul>
            
          </details>
        </li>

        {/* <li>
          <details >
            <summary className={`flex items-center content-center text-white hover:bg-blue-800 after:hidden bg-blue-900 mt-2 ${estadoBoton === 'politico administrativo' ? 'activo' : ''}`} onClick={() => handleBotonClick('politico administrativo')}><img className='w-6' src="/img/vector/icon-politico institucional.svg" alt="" />Político administrativo</summary>
            <ul>
              <li><a>Juntas de acción comunal sin resolución</a></li>
              <li><a>Situación fiscal del municipio</a></li>
              <li><a>Problemas Limítrofes</a></li>
              <li><a>Carencia Inspector de Policía</a></li>
              <li><a>Falta alcalde</a></li>
              <li><a>Falta de asistencia tecnica</a></li>
            </ul>
          </details>
        </li>
        <li>
          <details >
            <summary className={`flex items-center content-center text-white hover:bg-blue-800 after:hidden bg-blue-900 mt-2 ${estadoBoton === 'ambiental' ? 'activo' : ''}`} onClick={() => handleBotonClick('ambiental')}><img className='w-6' src="/img/vector/icon-ambiental.svg" alt="" />Ambiental</summary>
            <ul>
              <li><a>Deforestación</a></li>
              <li><a>Contaminación de las fuentes hídricas</a></li>
              <li><a>Contaminación Atmosférica</a></li>
              <li><a>Deslizamiento</a></li>
              <li><a>Inundación</a></li>
              <li><a>Amenaza por Incendios a la Cobertura Vegetal</a></li>
              <li><a>Falta de disposicion de residuos solidos</a></li>
              <li><a>Malas practicas mineras</a></li>
            </ul>
          </details>
        </li>
        <li>
          <details >
            <summary className={`flex items-center content-center text-white hover:bg-blue-800 after:hidden bg-blue-900 mt-2 ${estadoBoton === 'economico' ? 'activo' : ''}`} onClick={() => handleBotonClick('economico')}><img className='w-6' src="/img/vector/icon-economico.svg" alt="" />Económico</summary>
            <ul>
              <li><a>Disminución de Exportaciones</a></li>
              <li><a>Productividad</a></li>
              <li><a>Informalidad</a></li>
              <li><a>Limitada Tecnología en el campo</a></li>
              <li><a>Desempleo</a></li>
              <li><a>Estado de la Red Turística del departamento</a></li>
              <li><a>Diversificación de la economia: Industria, agroindustria, Turismo</a></li>
              <li><a>Baja cultura emprendedora</a></li>
            </ul>
          </details>
        </li> */}
      </ul>
    </div>
  )
}

export default MenuLeftDefault