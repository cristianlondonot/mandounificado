import React from 'react'
import './MenuLeftSecretarias.sass'

const MenuLeftSecretarias = () => {
  return (
    <div className="collapse collapse-plus join-item border border-base-300">
      <input type="checkbox" name="my-accordion-2" /> 
      <div className="collapse-title text-lg font-bold">
        Secretarias
      </div>
      <div className="collapse-content">
        <ul className="menu  w-full ">
          <li className='mb-3 bg-base-200'>
            <details >
              <summary className='font-semibold bg-yellow-400 hover:bg-yellow-300'>Secretaría Del Interior</summary>
              <div className='p-4'>
                <div className="overflow-x-auto">
                  <table className="table table-zebra table-sec-info">
                    <thead>
                      <tr>
                        <th>Factor</th>
                        <th className='text-center'>Cantidad</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Extorción</td>
                        <td className='text-center'>1300</td>
                      </tr>
                      <tr>
                        <td>Homicidio</td>
                        <td className='text-center'>1300</td>
                      </tr>
                      <tr>
                        <td>Hurtos personas</td>
                        <td className='text-center'>1300</td>
                      </tr>
                      <tr>
                        <td>Hurtos residencias</td>
                        <td className='text-center'>1300</td>
                      </tr>
                      <tr>
                        <td>Hurtos vehiculos</td>
                        <td className='text-center'>1300</td>
                      </tr>
                      <tr>
                        <td>Hurtos motocicletas</td>
                        <td className='text-center'>1300</td>
                      </tr>
                      <tr>
                        <td>Secuestro</td>
                        <td className='text-center'>1300</td>
                      </tr>
                      <tr>
                        <td>Violencia Intrafamiliar</td>
                        <td className='text-center'>1300</td>
                      </tr>
                      <tr>
                        <td>Juntas de accion comunal sin resolucion</td>
                        <td className='text-center'>1300</td>
                      </tr>
                      <tr>
                        <td>Suspencion de mandatarios</td>
                        <td className='text-center'>1300</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </details>
          </li>

          <li className='mb-3 bg-base-200'>
            <details >
              <summary className='font-semibold bg-yellow-400 hover:bg-yellow-300'>Secretaría De Salud</summary>
              <div className='p-4'>
                <div className="overflow-x-auto">
                  <table className="table table-zebra table-sec-info">
                    <thead>
                      <tr>
                        <th>Factor</th>
                        <th>Cantidad</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Baja cobertura salud</td>
                        <td className='text-center'>1300</td>
                      </tr>
                      <tr>
                        <td>Carencia puestos de salud</td>
                        <td className='text-center'>1300</td>
                      </tr>
                      <tr>
                        <td>Mantenimiento puestos salud</td>
                        <td className='text-center'>1300</td>
                      </tr>
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </details>
          </li>

          <li className='mb-3 bg-base-200'>
            <details >
              <summary className='font-semibold bg-yellow-400 hover:bg-yellow-300'>Secretaría De Educación</summary>
              <div className='p-4'>
                <div className="overflow-x-auto">
                  <table className="table table-zebra table-sec-info">
                    <thead>
                      <tr>
                        <th>Factores</th>
                        <th>Cantidad</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Deserción escolar</td>
                        <td className='text-center'>1300</td>
                      </tr>
                      <tr>
                        <td>Carencia de escuelas</td>
                        <td className='text-center'>1300</td>
                      </tr>
                      <tr>
                        <td>Mantenimiento de escuelas</td>
                        <td className='text-center'>1300</td>
                      </tr>
                      <tr>
                        <td>Falta de profesores</td>
                        <td className='text-center'>1300</td>
                      </tr>
                      <tr>
                        <td>Falta de mobiliario escolar</td>
                        <td className='text-center'>1300</td>
                      </tr>
                      <tr>
                        <td>Cobertura PAE</td>
                        <td className='text-center'>1300</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </details>
          </li>

          <li className='mb-3 bg-base-200'>
            <details >
              <summary className='font-semibold bg-yellow-400 hover:bg-yellow-300'>Secretaría De Competitividad</summary>
              <div className='p-4'>
                <div className="overflow-x-auto">
                  <table className="table table-zebra table-sec-info">
                    <thead>
                      <tr>
                        <th>Factor</th>
                        <th>Cantidad</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Informalidad</td>
                        <td className='text-center'>1300</td>
                      </tr>
                      <tr>
                        <td>Desempleo</td>
                        <td className='text-center'>1300</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </details>
          </li>

          <li className='mb-3 bg-base-200'>
            <details >
              <summary className='font-semibold bg-yellow-400 hover:bg-yellow-300'>Secretaría De Vivienda</summary>
              <div className='p-4'>
                <div className="overflow-x-auto">
                  <table className="table table-zebra table-sec-info">
                    <thead>
                      <tr>
                        <th>Factor</th>
                        <th>Cantidad</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Baja cobertura de agua potable</td>
                        <td className='text-center'>1300</td>
                      </tr>
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </details>
          </li>

          <li className='mb-3 bg-base-200'>
            <details >
              <summary className='font-semibold bg-yellow-400 hover:bg-yellow-300'>INDER</summary>
              <div className='p-4'>
                <div className="overflow-x-auto">
                  <table className="table table-zebra table-sec-info">
                    <thead>
                      <tr>
                        <th>Factor</th>
                        <th>Cantidad</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Bajo numero de escuelas deportivas</td>
                        <td className='text-center'>1300</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </details>
          </li>

          <li className='mb-3 bg-base-200'>
            <details >
              <summary className='font-semibold bg-yellow-400 hover:bg-yellow-300'>Secretaría De Hacienda</summary>
              <div className='p-4'>
                <div className="overflow-x-auto">
                  <table className="table table-zebra table-sec-info">
                    <thead>
                      <tr>
                        <th>Factor</th>
                        <th>Cantidad</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Situación fiscal del municipio</td>
                        <td className='text-center'>1300</td>
                      </tr>
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </details>
          </li>

          <li className='mb-3 bg-base-200'>
            <details >
              <summary className='font-semibold bg-yellow-400 hover:bg-yellow-300'>Secretaría De Planeación</summary>
              <div className='p-4'>
                <div className="overflow-x-auto">
                  <table className="table table-zebra table-sec-info">
                    <thead>
                      <tr>
                        <th>Factor</th>
                        <th>Cantidad</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Problemas limitrofes</td>
                        <td className='text-center'>1300</td>
                      </tr>
                      <tr>
                        <td>Ordenamiento territorial desactualizado</td>
                        <td className='text-center'>1300</td>
                      </tr>
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </details>
          </li>

          <li className='mb-3 bg-base-200'>
            <details >
              <summary className='font-semibold bg-yellow-400 hover:bg-yellow-300'>Secretaría De Cultura</summary>
              <div className='p-4'>
                <div className="overflow-x-auto">
                  <table className="table table-zebra table-sec-info">
                    <thead>
                      <tr>
                        <th>Factor</th>
                        <th>Cantidad</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Baja o inexistencia de escuelas de arte y musica</td>
                        <td className='text-center'>1300</td>
                      </tr>
                      <tr>
                        <td>Deficiencia de patrimonio cultural</td>
                        <td className='text-center'>1300</td>
                      </tr>
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </details>
          </li>

          <li className='mb-3 bg-base-200'>
            <details >
              <summary className='font-semibold bg-yellow-400 hover:bg-yellow-300'>Secretaría De TICS</summary>
              <div className='p-4'>
                <div className="overflow-x-auto">
                  <table className="table table-zebra table-sec-info">
                    <thead>
                      <tr>
                        <th>Factor</th>
                        <th>Cantidad</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Falta cobertura celular</td>
                        <td className='text-center'>1300</td>
                      </tr>
                      <tr>
                        <td>Falta de conexión a internet</td>
                        <td className='text-center'>1300</td>
                      </tr>
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </details>
          </li>

          <li className='mb-3 bg-base-200'>
            <details >
              <summary className='font-semibold bg-yellow-400 hover:bg-yellow-300'>Secretaría De Agricultura</summary>
              <div className='p-4'>
                <div className="overflow-x-auto">
                  <table className="table table-zebra table-sec-info">
                    <thead>
                      <tr>
                        <th>Factor</th>
                        <th>Cantidad</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Ampliación del portafolio productivo</td>
                        <td className='text-center'>1300</td>
                      </tr>
                      <tr>
                        <td>Practicas agroindustriales deficientes</td>
                        <td className='text-center'>1300</td>
                      </tr>
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </details>
          </li>

          <li className='mb-3 bg-base-200'>
            <details >
              <summary className='font-semibold bg-yellow-400 hover:bg-yellow-300'>Secretaría De Minas Y Energia</summary>
              <div className='p-4'>
                <div className="overflow-x-auto">
                  <table className="table table-zebra table-sec-info">
                    <thead>
                      <tr>
                        <th>Factor</th>
                        <th>Cantidad</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Inadecuadas practicas mineras</td>
                        <td className='text-center'>1300</td>
                      </tr>
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </details>
          </li>

          <li className='mb-3 bg-base-200'>
            <details >
              <summary className='font-semibold bg-yellow-400 hover:bg-yellow-300'>Secretaría Del Medio Ambiente</summary>
              <div className='p-4'>
                <div className="overflow-x-auto">
                  <table className="table table-zebra table-sec-info">
                    <thead>
                      <tr>
                        <th>Factor</th>
                        <th>Cantidad</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Deforestación</td>
                        <td className='text-center'>1300</td>
                      </tr>
                      <tr>
                        <td>Contaminación de fuentes hidricas</td>
                        <td className='text-center'>1300</td>
                      </tr>
                      <tr>
                        <td>Contaminación atmosferica</td>
                        <td className='text-center'>1300</td>
                      </tr>
                      <tr>
                        <td>Deslizamientos</td>
                        <td className='text-center'>1300</td>
                      </tr>
                      <tr>
                        <td>Riesgo de inundación</td>
                        <td className='text-center'>1300</td>
                      </tr>
                      <tr>
                        <td>Amenaza por incendios a la cobertura vegetal</td>
                        <td className='text-center'>1300</td>
                      </tr>
                      <tr>
                        <td>Falta de disposicipon de residuos solidos</td>
                        <td className='text-center'>1300</td>
                      </tr>
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </details>
          </li>

          <li className='mb-3 bg-base-200'>
            <details >
              <summary className='font-semibold bg-yellow-400 hover:bg-yellow-300'>Secretaría Desarrollo Social</summary>
              <div className='p-4'>
                <div className="overflow-x-auto">
                  <table className="table table-zebra table-sec-info">
                    <thead>
                      <tr>
                        <th>Factor</th>
                        <th>Cantidad</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Pobreza extrema</td>
                        <td className='text-center'>1300</td>
                      </tr>
                      <tr>
                        <td>Habitantes de calle</td>
                        <td className='text-center'>1300</td>
                      </tr>
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </details>
          </li>

          <li className='mb-3 bg-base-200'>
            <details >
              <summary className='font-semibold bg-yellow-400 hover:bg-yellow-300'>Secretaría De Infraestructura</summary>
              <div className='p-4'>
                <div className="overflow-x-auto">
                  <table className="table table-zebra table-sec-info">
                    <thead>
                      <tr>
                        <th>Factores</th>
                        <th>Cantidad</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Carencia de vias</td>
                        <td className='text-center'>1300</td>
                      </tr>
                      <tr>
                        <td>Mantenimiento de vias</td>
                        <td className='text-center'>1300</td>
                      </tr>
                      <tr>
                        <td>Carencia de puentes</td>
                        <td className='text-center'>1300</td>
                      </tr>
                      <tr>
                        <td>Carencia de placa huella</td>
                        <td className='text-center'>1300</td>
                      </tr>
                      <tr>
                        <td>Mantenimiento de plata huella</td>
                        <td className='text-center'>1300</td>
                      </tr>
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </details>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MenuLeftSecretarias