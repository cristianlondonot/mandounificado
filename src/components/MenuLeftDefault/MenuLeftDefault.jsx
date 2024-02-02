import React from 'react'
import './MenuLeftDefault.sass'

const MenuLeftDefault = () => {
  return (
    <div className='menuLeftDefault h-full'>
      <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
      <ul className="menu bg-base-200 w-80 min-h-full">
        <li>
          <details>
            <summary className='flex items-center content-center text-white hover:bg-blue-800 after:hidden bg-blue-900 mt-2'><img className='w-6' src="/img/vector/icon-seguridad.svg" alt="" />Seguridad</summary>
            <ul>
              <li><a>GAO-ELN (Grupo Armado Organizado)</a></li>
              <li><a>Disidencias</a></li>
              <li><a>GAO (Clan del Golfo)</a></li>
              <li><a>GDCO (Grupo Delincuencia Común Organizada)</a></li>
              <li><a>GDO (Grupos Delincuenciales Organizados)</a></li>
              <li><a>Cultivos Ilícitos</a></li>
              <li><a>Laboratorio de Cocaína</a></li>
              <li><a>Explotación Ilícita de Yacimientos Mineros</a></li>
            </ul>
          </details>
        </li>
        <li>
          <details >
            <summary className='flex items-center content-center text-white hover:bg-blue-800 after:hidden bg-blue-900 mt-2'><img className='w-6' src="/img/vector/icon-social.svg" alt="" />Social y cultural</summary>
            <ul>
              <li><a>Desescolarización</a></li>
              <li><a>Violencia Intrafamiliar</a></li>
              <li><a>Pobreza Extrema</a></li>
              <li><a>Habitantica en Calle</a></li>
              <li><a>Baja cobertura en salud</a></li>
            </ul>
          </details>
        </li>
        <li>
          <details >
            <summary className='flex items-center content-center text-white hover:bg-blue-800 after:hidden bg-blue-900 mt-2'><img className='w-6' src="/img/vector/icon-infraestructura.svg" alt="" />Infraestructura</summary>
            <ul>
              <li><a>Carencia de vías</a></li>
              <li><a>Mantenimiento de vías</a></li>
              <li><a>Carencia de escuelas</a></li>
              <li><a>Mantenimiento de escuelas</a></li>
              <li><a>Carencia de puestos de salud</a></li>
              <li><a>Mantenimiento de puestos de salud</a></li>
              <li><a>Carencia de puentes</a></li>
              <li><a>Carencia de placa huella</a></li>
              <li><a>Construcción de placa huella</a></li>
            </ul>
          </details>
        </li>
        <li>
          <details >
            <summary className='flex items-center content-center text-white hover:bg-blue-800 after:hidden bg-blue-900 mt-2'><img className='w-6' src="/img/vector/icon-politico institucional.svg" alt="" />Político institucional</summary>
            <ul>
              <li><a>Problemas Limítrofes</a></li>
              <li><a>Carencia Inspector de Policía</a></li>
              <li><a>Carencia alcalde</a></li>
            </ul>
          </details>
        </li>
        <li>
          <details >
            <summary className='flex items-center content-center text-white hover:bg-blue-800 after:hidden bg-blue-900 mt-2'><img className='w-6' src="/img/vector/icon-ambiental.svg" alt="" />Ambiental</summary>
            <ul>
              <li><a>Deforestación</a></li>
              <li><a>Contaminación de las fuentes hídricas</a></li>
              <li><a>Contaminación Atmosférica</a></li>
              <li><a>Amenaza por Deslizamiento</a></li>
              <li><a>Amenaza por Inundación</a></li>
              <li><a>Amenaza por Incendios a la Cobertura Vegetal</a></li>
              <li><a>Actividad sísmica</a></li>
            </ul>
          </details>
        </li>
        <li>
          <details >
            <summary className='flex items-center content-center text-white hover:bg-blue-800 after:hidden bg-blue-900 mt-2'><img className='w-6' src="/img/vector/icon-economico.svg" alt="" />Económico</summary>
            <ul>
              <li><a>Disminución de Exportaciones</a></li>
              <li><a>Productividad</a></li>
              <li><a>Informalidad</a></li>
              <li><a>Limitada Tecnología en el campo</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  )
}

export default MenuLeftDefault