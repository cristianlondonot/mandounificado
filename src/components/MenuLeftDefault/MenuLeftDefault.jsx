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
          <div class="collapse bg-base-200">
            <input type="checkbox" /> 
            <div class="collapse-title text-md font-semibold">
              Seguridad multidimenensional
            </div>
            <div class="collapse-content"> 
              <ul>
                <li>
                <div class="collapse bg-base-200">
                  <input type="checkbox" className={`${estadoBoton === 'seguridad' ? 'activo' : ''}`} onChange={() => handleBotonClick('seguridad')}/> 
                  <div class="collapse-title text-md font-semibold">
                    Justicia y derecho
                  </div>
                  <div class="collapse-content"> 
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
                  </div>
                </div>
                  
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
            </div>
          </div>
          <details className='item'>
            <summary className={`flex items-center content-center text-white hover:bg-blue-800 after:hidden bg-blue-900 mt-2 ${estadoBoton === 'seguridad' ? 'activo' : ''}`} onClick={() => handleBotonClick('seguridad')}><img className='w-6' src="/img/vector/icon-seguridad.svg" alt="" /></summary>
            
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
            <summary className={`group-one flex items-center content-center text-white hover:bg-blue-800 after:hidden bg-blue-900 mt-2`}><img className='w-6' src="/img/vector/icon-infraestructura.svg" alt="" />Sostenibilidad</summary>
            <ul>
              <li>
              <details >
                <summary className={`group-one flex items-center content-center text-white hover:bg-blue-800 after:hidden bg-blue-900 mt-2 ${estadoBoton === 'infraestructura' ? 'activo' : ''}`} onClick={() => handleBotonClick('INFRAESTRUCTURA')}><img className='w-6' src="/img/vector/icon-infraestructura.svg" alt="" />Sostenibilidad</summary>
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
              </details>

              </li>
            </ul>
            
          </details>
        </li>

      </ul>
    </div>
  )
}

export default MenuLeftDefault