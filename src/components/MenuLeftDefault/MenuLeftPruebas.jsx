import React, {useState} from 'react'
import './MenuLeftDefault.sass'

const MenuLeftPruebas = ({onBotonPresionadoChange}) => {
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
    <div className="join join-vertical w-full menuLeftDefault bg-white">
      <div className="collapse collapse-plus join-item border border-base-300" >
        <input type="radio" name="my-accordion-2" defaultChecked/> 
        <div className="collapse-title text-lg font-bold">
          Seguridad Multidimensional
        </div>
        <div className="collapse-content"> 
          <ul className="menu bg-base-200 w-full rounded-box">
            <li>
              <label 
                htmlFor="justiciayderecho" 
                className={`label cursor-pointer btn btn-sm bg-green-800 text-slate-50 hover:bg-green-600 ${estadoBoton === 'seguridad' ? 'activo' : ''}`}
              >
                <svg
                  id="uuid-ce3ac38b-8b1b-4050-80c1-b035ec52f10a"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 214.33 181.8"
                  className='w-4 h-4'
                >
                  <path
                    fill='#fff'
                    className="uuid-5c8981b3-bbd5-43c8-ac1c-338076d1fbe9"
                    d="M29.62,37.5c-.5-.2-.8-.3-1.1-.3-3.7-1.2-5.7-4.5-5.2-8.4.5-3.5,3.6-6.3,7.4-6.3,3.1-.1,6.1,0,9.2,0h38.3c1.1,0,1.8-.3,2.5-1.2,2.5-3.1,5.6-5.4,9.3-6.8.8-.3,1.2-.7,1.4-1.6C93.02,5.3,99.52-.1,107.22,0c7.7,0,14.2,5.4,15.7,13,.2,1,.7,1.3,1.4,1.6,3.7,1.5,6.9,3.7,9.3,6.8.7.9,1.4,1.1,2.4,1.1h47.1c5.1,0,8.6,3.9,7.8,8.8-.6,3.4-2.8,5.3-6.2,6.2.3.5.5.9.8,1.4,7.7,12.2,15.4,24.3,22.9,36.5.8,1.3,1.3,2.9,1.3,4.4,0,2.1-1.9,3.8-3.9,4.2-2.1.4-4.2-.4-5.4-2.3-2.2-3.4-4.3-6.9-6.5-10.3-4.6-7.3-9.2-14.5-13.7-21.8-.2-.4-.5-.8-.9-1.4-.4.6-.7,1.1-1.1,1.6-6.6,10.4-13.2,20.9-19.7,31.3-.9,1.5-2.1,2.7-3.9,2.9-2.1.3-3.9-.4-5.1-2.2-1.2-1.8-1.2-3.8,0-5.7,3.1-4.9,6.1-9.7,9.2-14.6,4.7-7.5,9.4-15,14.2-22.5.3-.4.5-.9.8-1.5h-56.9v127.6h1.8c4.3,0,8.7-.2,13,.1,8.3.5,15,8.3,14.4,16.6h-77.8c.3-1.8.4-3.7.9-5.5,2-6.5,7.9-11,14.7-11.2,3.9-.1,7.9,0,11.9,0h1.9V37.5h-57c.4.6.6,1.1.9,1.6,7.6,12.1,15.3,24.2,22.9,36.4.8,1.2,1.2,2.9,1.1,4.3-.1,2.2-1.7,3.6-3.8,4.1-2.1.5-4.2-.3-5.4-2.1-1.7-2.5-3.2-5.1-4.8-7.6-5.2-8.2-10.4-16.5-15.6-24.7-.2-.4-.5-.8-.9-1.3-.4.6-.7,1-1,1.5-6.6,10.5-13.2,20.9-19.8,31.4-1.6,2.5-3.7,3.4-6.1,2.7-3.4-1-4.7-4.7-2.7-7.9,4.5-7.1,9-14.3,13.5-21.4,3.5-5.5,7-11.1,10.7-17Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-5c8981b3-bbd5-43c8-ac1c-338076d1fbe9"
                    d="M179.32,87.2h31c3,0,4.1,1.2,4,4.2-.9,20.4-18,35.5-38.3,33.8-17.5-1.5-31.6-16.7-31.7-34.2,0-2.6,1.1-3.7,3.8-3.7,10.3-.1,20.7-.1,31.2-.1Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-5c8981b3-bbd5-43c8-ac1c-338076d1fbe9"
                    d="M35.12,87.2h31c2.9,0,4,1.2,3.9,4.1-.6,17.7-14,32-31.4,33.8-17.2,1.8-33.1-9.3-37.5-26.3-.6-2.5-.9-5.2-1.1-7.8-.2-2.6,1.1-3.8,3.7-3.8h31.4Z"
                  />
                </svg>
                Justicia y derecho 
                <input type='checkbox' id='justiciayderecho' className=' checkbox checkbox-xs' onChange={() => handleBotonClick('seguridad')} />
              </label>
              {/* <ul>
                <li className='text-xs'><span className='pointer-events-none'><div className='w-5 rounded-sm h-3 block bg-green-600'></div>Frente Edgar Madrid Benjumea de las AGC</span></li>
                <li className='text-xs'><span className='pointer-events-none'><div className='w-5 rounded-sm h-3 block bg-red-600'></div>GDCO (Grupo Delincuencia Común Organizada)</span></li>
                <li className='text-xs'><span className='pointer-events-none'><div className='w-5 rounded-sm h-3 block bg-red-600'></div>Homicidios</span></li>
                <li className='text-xs'><span className='pointer-events-none'><div className='w-5 rounded-sm h-3 block bg-orange-600'></div>Hurto a personas</span></li>
                <li className='text-xs'><span className='pointer-events-none'><div className='w-5 rounded-sm h-3 block bg-orange-600'></div>Hurto automotores</span></li>
                <li className='text-xs'><span className='pointer-events-none'><div className='w-5 rounded-sm h-3 block bg-yellow-600'></div>Hurto Comercio</span></li>
                <li className='text-xs'><span className='pointer-events-none'><div className='w-5 rounded-sm h-3 block bg-green-600'></div>Hurto residencias</span></li>
                <li className='text-xs'><span className='pointer-events-none'><div className='w-5 rounded-sm h-3 block bg-green-600'></div>GAO-ELN</span></li>
                <li className='text-xs'><span className='pointer-events-none'><div className='w-5 rounded-sm h-3 block bg-orange-600'></div>MICROTRAFICO</span></li>
                <li className='text-xs'><span className='pointer-events-none'><div className='w-5 rounded-sm h-3 block bg-orange-600'></div>GAO-DISIDENCIAS</span></li>
                <li className='text-xs'><span className='pointer-events-none'><div className='w-5 rounded-sm h-3 block bg-yellow-600'></div>Violencia Intrafamiliar</span></li>
              </ul> */}
              <label 
                htmlFor="socialycultural" 
                className={`label cursor-pointer btn btn-sm bg-green-800 text-slate-50 hover:bg-green-600 ${estadoBoton === 'social y cultural' ? 'activo' : ''}`}
              >
                <svg
                  id="uuid-28626ea7-ed02-4f97-b8a9-dd8b592f63c3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 202.08 179.6"
                  className='w-4 h-4'
                >
                  <path
                  fill='#fff'
                    className="uuid-3b66bdf9-fdf4-4814-9ec9-add3aa3c4c52"
                    d="M100.11,138.8c.3,0,.5.1.8.1,5.1.1,10.3.2,15.4-.1,2.5-.1,5-.3,7.5-.5,4.6-.4,9.1-1.1,13.5-2.5,1.3-.4,2.6-.9,3.9-1.5s2.7-1.2,4-1.8c3.2-1.4,6.4-3.1,9.4-4.8,3.7-2.1,7.4-4.1,11.3-5.9,5-2.3,10-4.3,15.2-6.1,2.5-.9,5.1-1.4,7.8-1.3,1.5,0,3.1.2,4.5.8.6.2,1.2.5,1.8.8,1.5.8,2.5,2.1,3.1,3.7,1.4,4.1.6,7.8-2.3,11-1.3,1.3-2.7,2.4-4.4,3.2-1.6.8-3.3,1.7-5,2.5-6.5,3.2-13.1,6.3-19.6,9.5s-12.9,6.5-19.2,10.3c-3.4,2-6.7,4.2-10,6.4-.8.6-1.7,1.1-2.5,1.7-.5.3-1,.6-1.5.9-2.1,1.2-4.4,1.7-6.8,1.4s-4.8-.6-7.2-.8c-1.8-.2-3.6-.4-5.3-.5-4.4-.3-8.8-.6-13.2-.8-5.6-.3-11.2-.4-16.8-.2-2.6.1-5.2.2-7.9.5-6.3.6-12.4,1.7-18.4,3.8-3.3,1.2-6.5,2.7-9.5,4.6-2.1,1.3-4,2.9-5.7,4.7-.9.9-1.8,1.4-3.1,1.5-6.2.5-12.2.1-18.2-1.4-2.9-.7-5.6-1.7-8.2-3.1-3.7-2-6.8-4.6-9.1-8-2.1-3.2-3.4-6.6-4-10.4-.3-1.8-.4-3.5-.4-5.3-.1-1.5.8-2.9,2.5-3.5,12.4-4.4,24.4-9.5,36.2-15.5,5.8-2.9,11.4-6.1,16.9-9.6.7-.4,1.3-.9,1.9-1.5,3.6-3.2,7.6-5.6,12.2-7,2.9-.9,5.8-1.2,8.8-.9,2.2.2,4.4.7,6.5,1.6,2.5,1.1,5.2,1.8,7.8,2.4,3.6.8,7.3,1.3,11,1.7,3.6.4,7.2.7,10.8,1.1h1.3c4.1-.1,8.1.1,12.1.7,2,.3,4,.9,5.9,1.7,1.1.5,2.1,1,3,1.7.6.5,1.1,1,1.5,1.6.8,1.3.8,2.6.2,4-.4.8-1,1.5-1.6,2-.9.8-2,1.4-3.1,1.9-1.8.8-3.7,1.2-5.7,1.5-4.8.6-9.7,1.1-14.5,1.7-4.1.5-8.3,1.1-12.4,1.6-.4.1-.8.1-1.2.1-.1.1-.1.2,0,.3Z"
                  />
                  <path
                  fill='#fff'
                    className="uuid-3b66bdf9-fdf4-4814-9ec9-add3aa3c4c52"
                    d="M200.41,53.1c-.4.1-.9.1-1.3.1h-29.9c-1.2,0-1.7.3-2.1,1.5-1.3,3.8-2.6,7.5-3.9,11.3-1.1,3.2-2.3,6.5-3.4,9.7-.1.3-.2.6-.3.8-.3-.1-.2-.3-.2-.5-.1-1.6-.1-3.3-.2-4.9-.2-4.3-.3-8.5-.5-12.8-.2-4-.4-8-.5-12-.1-1.8-.2-3.6-.2-5.4-.2-4.2-.3-8.5-.5-12.7-.1-2.5-.2-5-.3-7.6v-.5c-.1-.6-.5-1.1-1.2-1.2-.6-.2-1.1,0-1.5.5-.2.3-.4.7-.5,1.1-.6,2.2-1.1,4.5-1.7,6.7-2.5,10.2-5.1,20.4-7.6,30.7-.1.3-.2.7-.3,1-.4-.1-.5-.4-.7-.6-2.3-2.8-4.7-5.7-7-8.5-.2-.2-.3-.4-.5-.6-.7-.9-2.2-.9-2.7.3-.1.3-.3.6-.4,1-4,8.9-8,17.7-11.9,26.6-.1.3-.3.6-.4.9-.3,0-.2-.1-.3-.3,0-.7-.1-1.5-.1-2.2-.2-4.3-.3-8.5-.5-12.8-.2-5.7-.5-11.3-.7-17-.1-2.4-.2-4.9-.3-7.3-.2-4.2-.4-8.3-.5-12.5-.1-1.7-.1-3.4-.2-5.1v-.6c-.1-.7-.5-1.1-1.1-1.3-.6-.2-1.2,0-1.6.5-.2.3-.4.7-.5,1.1-.7,2.8-1.4,5.6-2.1,8.3-2.4,9.6-4.8,19.1-7.2,28.7-.1.3-.2.5-.3.9-.2-.3-.4-.5-.6-.7-.7-1.1-1.5-2.3-2.2-3.4-.5-.8-1.1-1.1-2.1-1.1h-20.3c-.3-.7-.4-1.5-.6-2.2-.6-2.9-.9-5.9-1-8.9-.1-10.1,2.8-19.3,8.7-27.4.7-.9,1.4-1.8,2.2-2.6,2.3-2.4,4.8-4.7,7.6-6.5,2.9-2,6.1-3.6,9.5-4.5,5.4-1.5,10.7-1.2,16,.5,4.3,1.4,8.1,3.6,11.7,6.3,1.9,1.4,3.6,3,5.3,4.6.2.2.5.5.8.7.4-.3.7-.6,1-1,3.1-3,6.4-5.7,10.1-7.8,2.9-1.7,6-3,9.3-3.7,5.9-1.3,11.5-.8,17.1,1.6,3.3,1.4,6.3,3.4,9.1,5.7,1.5,1.3,3,2.7,4.4,4.1,1.1,1.1,2.1,2.4,2.9,3.7,3.7,5.5,6.1,11.5,7.2,18,.6,3.5.8,7.1.6,10.7-.2,2.6-.5,5.2-1.2,7.8-.2.3-.3.5-.4.8Z"
                  />
                  <path
                  fill='#fff'
                    className="uuid-3b66bdf9-fdf4-4814-9ec9-add3aa3c4c52"
                    d="M80.71,56.6c.2,0,.4-.1.5-.1h18.5c.2.3.4.6.6.9,1.2,1.8,2.4,3.7,3.6,5.5.2.3.4.6.6.8.8.8,2.1.5,2.5-.5.1-.3.2-.6.2-.9,2.4-9.8,4.9-19.6,7.3-29.4.1-.2,0-.5.4-.6.7,17.4,1.5,34.9,2.2,52.4.5-.4.5-.9.8-1.2.2,0,.4.1.5.2.7.3,1.4.7,2.3.9.8-1.7,1.6-3.4,2.3-5.2.8-1.7,1.5-3.4,2.3-5.2s1.6-3.5,2.4-5.3c.8-1.7,1.5-3.4,2.3-5.2.8-1.7,1.5-3.4,2.3-5.2.8-1.7,1.6-3.4,2.3-5.1.4-.1.5.2.7.4,1.7,2.1,3.5,4.2,5.2,6.3.8,1,1.6,1.9,2.4,2.9.2.2.4.5.6.7.9.8,2.1.5,2.5-.7.1-.2.1-.4.2-.6,2.3-9.1,4.5-18.2,6.8-27.3.2-.9.4-1.8.7-2.6,0-.1.1-.2.3-.5,0,.5.1.8.1,1.1.2,5.9.5,11.8.7,17.6.2,4.8.4,9.6.6,14.4.2,5.7.5,11.4.7,17.1,0,.9,0,1.8.1,2.6,0,.4.1.8.2,1.1.2.6.7.9,1.3.9s1.1-.2,1.4-.8c.2-.3.3-.6.4-1,2.7-7.6,5.3-15.3,8-22.9.6-1.7,1.2-3.4,1.8-5.1.1-.3.2-.6.3-.9.4-.2.8-.1,1.1-.1h27.3c.4,0,.8-.1,1.1.1,0,.4-.2.8-.3,1.1-1.6,4.8-3.8,9.3-6.5,13.6-3.5,5.7-7.7,10.8-12.3,15.7-5.7,6-11.9,11.3-18.5,16.3-6.4,4.8-13,9.2-19.8,13.4-.5.3-1,.6-1.6.6s-1.3,0-1.8-.4c-.2-.1-.3-.2-.5-.3-8.1-4.9-15.9-10.2-23.3-16-5.8-4.6-11.3-9.5-16.3-14.9-4.4-4.7-8.4-9.8-11.7-15.3-2.4-3.9-4.4-8.1-5.8-12.4.1-.1,0-.5,0-.9Z"
                  />
                </svg>
                Salud y Protección Social
                <input type='checkbox' id='socialycultural' className=' checkbox checkbox-xs' onChange={() => handleBotonClick('social y cultural')} />
              </label>
              {/* <ul>
                <li className='text-xs'><span className='pointer-events-none'><div className='w-5 rounded-sm h-3 block bg-orange-600'></div>Baja cobertura en salud</span></li>
                <li className='text-xs'><span className='pointer-events-none'><div className='w-5 rounded-sm h-3 block bg-green-600'></div>Carencia de Puestos de salud</span></li>
                <li className='text-xs'><span className='pointer-events-none'><div className='w-5 rounded-sm h-3 block bg-orange-600'></div>Mantenimiento de puestos de salud</span></li>
              </ul> */}
              <label 
                htmlFor="politicoinstitucional" 
                className={`label cursor-pointer btn btn-sm bg-green-800 text-slate-50 hover:bg-green-600 ${estadoBoton === 'politico institucional' ? 'activo' : ''}`}
              >
                <svg
                  id="uuid-7ab846ae-60ea-404a-9aba-8de9c646d939"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 250.51 146.16"
                  className='w-4 h-4'
                >
                  <path
                  fill='#fff'
                    className="uuid-6a278612-cabd-441b-afb4-acddb0a8fde9"
                    d="M124.85,81.72c-6.3.2-12.4-2-18.6-4.1-33-11-66-21.9-99-33-1.8-.6-3.7-1.5-5.3-2.6-2.6-1.8-2.6-4.3,0-6.1,1.7-1.2,3.6-2.1,5.6-2.7C41.95,22.82,76.35,12.72,110.65,2.12c10.7-3.3,20.9-2.5,31.5.7,33.4,10.3,66.9,20.2,100.4,30.3,2.1.6,4.3,1.6,6.1,2.9,2.5,1.7,2.5,4.3-.1,6-1.6,1.1-3.3,1.9-5.1,2.5-34.9,11.7-69.8,23.3-104.8,34.9-4.2,1.5-8.7,2.4-13.8,2.3Z"
                  />
                  <path
                  fill='#fff'
                    className="uuid-6a278612-cabd-441b-afb4-acddb0a8fde9"
                    d="M201.55,68.92v2.2c0,15-.1,29.9.1,44.9,0,3.5-1.2,6.1-3.5,8.5-4.1,4.2-9.2,7.1-14.4,9.6-12.1,5.7-24.9,9-38.2,10.7-20.3,2.6-40.4,1.5-60.1-3.9-9.9-2.7-19.4-6.3-27.9-12.3-1.5-1-2.8-2.2-4.2-3.4-2.8-2.6-4.2-5.6-4.1-9.7.2-14.8.1-29.6.1-44.3v-2.3c1.6.5,3.1,1,4.5,1.5,19.4,6.4,38.8,12.9,58.2,19.3,9,3,17.9,3,26.9,0,20.1-6.7,40.3-13.4,60.4-20.1.6-.2,1.2-.4,2.2-.7Z"
                  />
                  <path
                  fill='#fff'
                    className="uuid-6a278612-cabd-441b-afb4-acddb0a8fde9"
                    d="M236.35,57.32v33.6c0,1.5.4,3.1,1.1,4.4,2.5,5.1,5,10.2,6.2,15.8,1.1,4.9,0,9.3-3.3,12.9-2.4,2.6-5.3,4.8-8.1,7-.4.4-1.6.4-2,.1-2.9-2.3-5.9-4.5-8.3-7.2-3.5-3.9-4.5-8.7-2.8-13.6,1.8-5.2,4.1-10.2,6.1-15.3.4-1.1.9-2.4.9-3.6.1-9.6.1-19.3,0-28.9,0-1.5.4-2.1,1.8-2.5,2.7-.7,5.4-1.7,8.4-2.7Z"
                  />
                </svg>
                Educación
                <input type='checkbox' id='politicoinstitucional' className=' checkbox checkbox-xs' onChange={() => handleBotonClick('politico institucional')} />
              </label>
              {/* <ul>
                <li className='text-xs'><span className='pointer-events-none'><div className='w-5 rounded-sm h-3 block bg-red-600'></div>Deserción ESCOLAR</span></li>
                <li className='text-xs'><span className='pointer-events-none'><div className='w-5 rounded-sm h-3 block bg-red-600'></div>Cobertura pae</span></li>
                <li className='text-xs'><span className='pointer-events-none'><div className='w-5 rounded-sm h-3 block bg-yellow-600'></div>Carencia de escuelas</span></li>
                <li className='text-xs'><span className='pointer-events-none'><div className='w-5 rounded-sm h-3 block bg-green-600'></div>Mantenimiento de escuelas</span></li>
              </ul> */}
              <label 
                htmlFor="infraestructura" 
                className={`label cursor-pointer btn btn-sm bg-green-800 text-slate-50 hover:bg-green-600 ${estadoBoton === 'infraestructura' ? 'activo' : ''}`}
              >
                <svg
                  id="uuid-341112c4-a185-422f-a1a3-dd700cbd6b3d"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 184 182.6"
                  className='w-4 h-4'
                >
                  <path
                    fill='#fff'
                    className="uuid-4f86254c-442d-4df1-8720-dcfa715b3755"
                    d="M0,87.3c7.6,2.1,14.6,4,21.7,6,16.1,4.5,32.2,9,48.3,13.4,2.5.7,5.2.6,8.2.9v18.6h27.9v-17.7c25.7-5.9,50.2-13.8,75-20.4.8-.2,1.7-.3,2.9-.5v85c0,6.8-3.2,10-10,10H9.8C3.2,182.6,0,179.3,0,172.8v-81.3c0-1.2,0-2.3,0-4.2Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-4f86254c-442d-4df1-8720-dcfa715b3755"
                    d="M.1,84.3v-47.6c5.4-4.9,11.9-3.7,18.1-3.8h25V13.9c0-9.1,4.7-13.9,13.7-13.9h70.3c8.8,0,13.5,4.8,13.6,13.7v18.6c14.4,2.4,29.2-2.7,43.1,3.5v48.7c-25.9,6.6-51.2,15.1-78.1,20.9v-11.5h-28.1v10.6c-3.2-.2-6.1.1-8.6-.6-22.3-6.1-44.6-12.5-66.9-18.8-.6-.2-1.3-.5-2.1-.8ZM51.6,33.1h81.4V15.4c0-5.7-1.1-6.8-6.9-6.8H57.4c-2.9,0-5.6.5-5.7,4-.3,6.7-.1,13.4-.1,20.5Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-4f86254c-442d-4df1-8720-dcfa715b3755"
                    d="M96.3,105.1v12.8h-8.5v-12.8h8.5Z"
                  />
                </svg>
                Trabajo
                <input type='checkbox' id='infraestructura' className=' checkbox checkbox-xs' onChange={() => handleBotonClick('infraestructura')} />
              </label>
              
              {/* <ul>
                <li className='text-xs'><span className='pointer-events-none'><div className='w-5 rounded-sm h-3 block bg-yellow-600'></div>Informalidad</span></li>
                <li className='text-xs'><span className='pointer-events-none'><div className='w-5 rounded-sm h-3 block bg-green-600'></div>Desempleo</span></li>
              </ul> */}
              <label 
                htmlFor="ambiental" 
                className={`label cursor-pointer btn btn-sm bg-green-800 text-slate-50 hover:bg-green-600 ${estadoBoton === 'ambiental' ? 'activo' : ''}`}
              >
                <svg
                  id="uuid-17ff8f76-e0df-48b1-9b83-c4a79d2d5e78"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 200.08 195.41"
                  className='w-4 h-4'
                >
                  <path
                    fill='#fff'
                    className="uuid-579cc04a-2904-403c-9da8-d4b193186bf4"
                    d="M120.58,195.31v-51.5q0-8.9-9-9h-23.6c-9.4,0-9.5,0-9.5,9.2v51.2c-15.9,0-31.1.1-46.3-.2-1.3,0-3.6-3.3-3.6-5-.2-30.1-.2-60.2,0-90.4,0-2.3,1.7-5.1,3.5-6.8,20.6-20.1,41.5-39.9,62-60,4.2-4.1,6.7-4.1,10.9.1,20.4,20.3,41.2,40.1,61.7,60.3,2.1,2.1,3.8,5.7,3.8,8.6.3,28.8.1,57.5.3,86.3,0,5-1.2,7.4-6.7,7.3-14.2-.2-28.3-.1-43.5-.1Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-579cc04a-2904-403c-9da8-d4b193186bf4"
                    d="M99.48,14.21c-29.3,27.8-58,55-86.7,82.3-1.3,1.2-2.5,3.2-4,3.5-2.7.6-5.6.2-8.5.2.1-3-1-7.1.6-8.8,5.5-6.2,12.1-11.4,17.7-17.5,2-2.2,3.6-5.7,3.7-8.6.4-13.7.2-27.3.2-41.4h29.8v17.8c2.8-2.4,4.4-3.7,5.9-5.1,11.6-11,23.3-21.8,34.7-33,4.6-4.5,8.2-5,13.1-.3,30.2,28.9,60.6,57.6,90.8,86.5,2,1.9,2.9,5.2,3.3,8,.1,1.1-2.8,3.8-4,3.6-2.8-.5-6-1.7-8-3.6-27.7-26-55.2-52.2-82.7-78.4-1.9-1.6-3.7-3.2-5.9-5.2Z"
                  />
                </svg>
                Vivienda, ciudad y Territorio
                <input type='checkbox' id='ambiental' className=' checkbox checkbox-xs' onChange={() => handleBotonClick('ambiental')} />
              </label>
              
              {/* <ul>
                <li className='text-xs'><span className='pointer-events-none'><div className='w-5 rounded-sm h-3 block bg-orange-600'></div>Baja cobertura agua potable</span></li>
              </ul>  */}
              <label 
                htmlFor="socialycultural2" 
                className={`label cursor-pointer btn btn-sm bg-green-800 text-slate-50 hover:bg-green-600 ${estadoBoton === 'social y cultural' ? 'activo' : ''}`}
              >
                <svg
                  id="uuid-8ba50eed-530b-4d18-a774-2d352aab1e06"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 152 188.82"
                  className='w-4 h-4'
                >
                  <path
                    fill='#fff'
                    className="uuid-491411ad-3dfd-413e-bdf2-d84936a53bbc"
                    d="M65.7,97.7c8.1-11.4,15.7-22.5,23.6-33.4,5.1-7,6.6-14.3,2.6-22.2-3.9-7.7-10.8-10.6-19-10.7-12.8-.1-25.6-.3-38.4-.3-7.6,0-13.6,3.1-17.8,9.5-4.2,6.4-8.4,12.9-12.5,19.4-3.7,6.1-2.8,11.4,2.1,14.6,5,3.2,10.2,1.7,14.2-4.1,4.4-6.5,7.4-15.7,13.6-18.8,6.4-3.3,15.8-.7,23.9-.7.2,0,.3.1-1.2-.3-1.9.9-5.8,1.5-7.8,3.9-5.5,6.7-10.4,14.1-15.2,21.4-5.8,8.8-4.4,18.7,3.1,25.5,8.5,7.8,17.2,15.4,25.1,23.7,2.4,2.5,4.1,7,4.1,10.6-.2,13.4-1.4,26.9-2,40.3-.4,7.4,4,12.4,10.5,12.7,6.4.3,11.1-4,11.6-11.1,1-14.7,1.9-29.4,2.6-44.1.4-9-2.8-16.7-9.4-23-4.7-4.3-9.2-8.6-13.7-12.9ZM34.9,102.1c-.5.3-1,.5-1.5.8,0,3.8-.3,7.6.1,11.4.9,9.8-2.3,17.8-9,24.9-7.2,7.5-13.8,15.6-20.6,23.6-5.1,6-5,12.7-.1,17,5,4.4,11.5,3.6,16.8-2.3,8.2-9.2,16.9-18.1,24.1-28.1,4.7-6.5,7.4-14.6,10.4-22.3.7-1.9,0-5.4-1.4-6.9-6-6.4-12.5-12.2-18.8-18.1ZM152,130c.1-11.1-8.5-20.2-19.5-20.5-11.1-.3-20.4,8.7-20.6,20.1-.2,10.8,8.9,20,19.8,20.1,11.1.2,20.1-8.7,20.3-19.7ZM103.9,40.1c11.1-.1,19.9-8.9,19.9-20S114.7-.1,103.3,0c-10.9.1-19.7,9.3-19.6,20.3.2,11.1,9.2,19.9,20.2,19.8ZM97,55.7c-4,6-7.8,11.6-11.3,17.2-.7,1.2-1.5,2.9-1.2,4,2.6,8.7,6,17,15.8,20.2,8.5,2.8,16.9,5.8,25.4,8.6,6.7,2.2,11.7.2,13.7-5.3,2.1-5.7-.7-10.4-7.7-13-7.2-2.6-14.6-4.8-21.6-7.7-2.4-1-4.8-3.4-5.9-5.7-2.8-5.8-4.8-12.1-7.2-18.3Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-d84d723c-eeec-4850-b998-96ccfd13c39e"
                    d="M65.7,97.7c4.6,4.4,9,8.6,13.5,12.9,6.5,6.3,9.8,14,9.4,23-.7,14.7-1.6,29.4-2.6,44.1-.5,7.1-5.2,11.4-11.6,11.1-6.5-.3-10.9-5.3-10.5-12.7.6-13.4,1.8-26.9,2-40.3.1-3.6-1.6-8-4.1-10.6-8-8.3-16.6-16-25.1-23.7-7.4-6.8-8.9-16.7-3.1-25.5,4.8-7.3,9.7-14.6,15.2-21.4,1.9-2.4,5.9-3,7.8-3.9,1.6.3,1.4.3,1.2.3-8.1,0-17.5-2.6-23.9.7-6.1,3.1-9.1,12.3-13.6,18.8-4,5.8-9.1,7.3-14.2,4.1-5-3.1-5.8-8.5-2.1-14.6,4-6.5,8.2-13,12.5-19.4,4.2-6.4,10.2-9.5,17.8-9.5,12.8.1,25.6.2,38.4.3,8.3.1,15.1,3,19,10.7,4,7.9,2.5,15.1-2.6,22.2-7.7,10.9-15.3,21.9-23.4,33.4Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-d84d723c-eeec-4850-b998-96ccfd13c39e"
                    d="M34.9,102.1c6.3,6,12.8,11.8,18.7,18.1,1.4,1.5,2.1,5,1.4,6.9-3,7.6-5.7,15.7-10.4,22.3-7.2,10-15.9,18.9-24.1,28.1-5.3,5.9-11.8,6.7-16.8,2.3-4.9-4.3-5-11,.1-17,6.7-8,13.4-16,20.6-23.6,6.8-7.1,10-15.1,9-24.9-.4-3.8-.1-7.6-.1-11.4.6-.3,1.1-.6,1.6-.8Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-d84d723c-eeec-4850-b998-96ccfd13c39e"
                    d="M152,130c-.1,11-9.2,19.8-20.2,19.7-11-.1-20-9.3-19.8-20.1.2-11.4,9.4-20.4,20.6-20.1,10.9.4,19.5,9.4,19.4,20.5Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-d84d723c-eeec-4850-b998-96ccfd13c39e"
                    d="M103.9,40.1c-11,.1-20.1-8.7-20.2-19.7S92.4.2,103.3.1c11.4-.1,20.4,8.7,20.5,20.1.1,11-8.8,19.8-19.9,19.9Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-d84d723c-eeec-4850-b998-96ccfd13c39e"
                    d="M97,55.7c2.4,6.3,4.4,12.5,7.1,18.4,1.1,2.4,3.5,4.8,5.9,5.7,7.1,2.9,14.4,5.1,21.6,7.7,7.1,2.6,9.8,7.3,7.7,13-2,5.5-7,7.5-13.7,5.3-8.5-2.8-16.9-5.8-25.4-8.6-9.7-3.3-13.2-11.5-15.8-20.2-.3-1.1.4-2.9,1.2-4,3.7-5.7,7.4-11.3,11.4-17.3Z"
                  />
                </svg>
                Deporte y recreación
                <input type='checkbox' id='socialycultural2' className=' checkbox checkbox-xs' onChange={() => handleBotonClick('social y cultural')} />
              </label>
              
              {/* <ul>
                <li className='text-xs'><span className='pointer-events-none'><div className='w-5 rounded-sm h-3 block bg-green-600'></div>Bajo número de escuelas deportivas</span></li>
              </ul> */}
              <label 
                htmlFor="politicoinstitucional2" 
                className={`label cursor-pointer btn btn-sm bg-green-800 text-slate-50 hover:bg-green-600 ${estadoBoton === 'politico institucional' ? 'activo' : ''}`}
              >
                <svg
                  id="uuid-9e1d6237-dd1b-45a8-b892-0a2c935a8412"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 222.3 239.75"
                  className='w-4 h-4'
                >
                  <path
                    fill='#fff'
                    className="uuid-29a0e12f-f674-4864-975d-c80bb76c87b0"
                    d="M153.4,78.25c-1.9-.3-3.7-.6-5.6-1-11.9-2.1-23.9-4.1-35.8-6.2-.5-.1-1.1-.1-1.6,0-12.5,2.1-25,4.3-37.4,6.4-1.3.2-2.6.4-3.9.7,2.6-16,17.9-33.9,41.1-34.5,23.7-.5,40.3,17.4,43.2,34.6Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-29a0e12f-f674-4864-975d-c80bb76c87b0"
                    d="M50.1,97.25v-9.4c0-.5.2-.7.7-.8,20-3.4,40-6.9,59.9-10.3.3,0,.6-.1.9,0,20,3.4,40,6.9,59.9,10.3.4.1.7.1.7.7v9.5H50.1Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-29a0e12f-f674-4864-975d-c80bb76c87b0"
                    d="M16.9,227.65h-6.6v-68.7h42.5v68.7h-6.6v-26.9c0-7.4-5-13.3-12.1-14.7-8.6-1.6-16.9,5-17.2,13.8-.1,2,0,3.9,0,5.9v21.9Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-29a0e12f-f674-4864-975d-c80bb76c87b0"
                    d="M169.5,227.65v-68.7h42.5v68.7h-6.6v-26.9c0-8.4-6.9-15.1-15.2-14.8-7.8.3-14.1,6.8-14.1,14.6v27.1c-2.2,0-4.4,0-6.6,0Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-29a0e12f-f674-4864-975d-c80bb76c87b0"
                    d="M.1,110.05v-7.2h222.2v7.2H.1Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-29a0e12f-f674-4864-975d-c80bb76c87b0"
                    d="M169.4,153.25v-23.5c1.5,0,3-.1,4.4,0,2.6.2,4-.9,3.9-3.9-.1-3.1,0-6.2,0-9.4v-.8h34.3v37.5c-14.2.1-28.3.1-42.6.1Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-29a0e12f-f674-4864-975d-c80bb76c87b0"
                    d="M44.5,115.75v10.7c0,2.3,1,3.3,3.4,3.3h5v23.5H10.4v-37.5c11.3,0,22.6,0,34.1,0Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-29a0e12f-f674-4864-975d-c80bb76c87b0"
                    d="M72.9,227.65h-14.4v-97.9h14.4v97.9Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-29a0e12f-f674-4864-975d-c80bb76c87b0"
                    d="M222.2,233.35v6.4H0v-6.4h222.2Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-29a0e12f-f674-4864-975d-c80bb76c87b0"
                    d="M149.4,129.75h14.4v97.9h-14.4v-97.9Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-29a0e12f-f674-4864-975d-c80bb76c87b0"
                    d="M119.6,129.75h12.8v97.9h-12.8v-97.9Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-29a0e12f-f674-4864-975d-c80bb76c87b0"
                    d="M89.9,129.85h12.8v97.9h-12.8v-97.9Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-29a0e12f-f674-4864-975d-c80bb76c87b0"
                    d="M50.1,124.15v-8.4h121.9v8.4H50.1Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-29a0e12f-f674-4864-975d-c80bb76c87b0"
                    d="M114,5.35c1.5-.1,2.9-.2,4.3-.2,3,.1,5.7,1.3,8,3.1,1.5,1.1,3.2,1.7,5.1,1.2.8-.2,1.5-.6,2.2-1,1-.6,2-.7,3-.1,1,.5,1.4,1.5,1.4,2.6v17.5c0,1.2-.5,2-1.5,2.6-4.4,2.8-9.5,2.6-13.7-.6-2.4-1.9-5.1-2.5-8.1-1.7-.6.2-.8.4-.8,1.1v8.4h-5.6V3.05c0-1.6.9-2.8,2.3-3,1.8-.3,3.3.9,3.3,2.8.1.7.1,1.6.1,2.5Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-29a0e12f-f674-4864-975d-c80bb76c87b0"
                    d="M22.5,210.15c0-3.5-.2-7,0-10.4.3-4.9,4.4-8.4,9.4-8.3,4.7.1,8.6,3.9,8.7,8.7.1,3.2,0,6.4,0,9.7,0,.1,0,.2-.1.3-5.9,0-11.9,0-18,0Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-29a0e12f-f674-4864-975d-c80bb76c87b0"
                    d="M199.8,210.15h-18.1c0-.1-.1-.2-.1-.2,0-3.4-.1-6.9.1-10.3.2-4.3,4.2-7.9,8.5-8.1,4.7-.2,8.7,3,9.5,7.5.1.5.1,1.1.1,1.6v9.5Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-29a0e12f-f674-4864-975d-c80bb76c87b0"
                    d="M40.6,215.85v11.8h-18.1v-11.8h18.1Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-29a0e12f-f674-4864-975d-c80bb76c87b0"
                    d="M181.7,227.65v-11.8h18.1v11.8h-18.1Z"
                  />
                </svg>
                Gobierno Territorial
                <input type='checkbox' id='politicoinstitucional2' className=' checkbox checkbox-xs' onChange={() => handleBotonClick('politico institucional')} />
              </label>
              
              {/* <ul>
                <li className='text-xs'><span className='pointer-events-none'><div className='w-5 rounded-sm h-3 block bg-red-600'></div>Juntas de acción comunal sin resolución</span></li>
                <li className='text-xs'><span className='pointer-events-none'><div className='w-5 rounded-sm h-3 block bg-red-600'></div>Situación fiscal del municipio</span></li>
                <li className='text-xs'><span className='pointer-events-none'><div className='w-5 rounded-sm h-3 block bg-orange-600'></div>Problemas Limítrofes</span></li>
                <li className='text-xs'><span className='pointer-events-none'><div className='w-5 rounded-sm h-3 block bg-green-600'></div>Alerta suspension mandatarios</span></li>
                <li className='text-xs'><span className='pointer-events-none'><div className='w-5 rounded-sm h-3 block bg-yellow-600'></div>Alerta suspension mandatarios</span></li>
              </ul> */}
            </li>
          </ul>
        </div>
      </div>
      <div className="collapse collapse-plus join-item border border-base-300">
        <input type="radio" name="my-accordion-2" /> 
        <div className="collapse-title text-lg font-bold">
          Prosperidad
        </div>
        <div className="collapse-content"> 
          <ul className="menu bg-base-200 w-full rounded-box">
            <li>
              <label 
                htmlFor="justiciayderecho" 
                className={`label cursor-pointer btn btn-sm bg-green-800 text-slate-50 hover:bg-green-600 ${estadoBoton === 'seguridad' ? 'activo' : ''}`}
              >
                <svg
                  id="uuid-e3048c52-c9d7-4567-9870-28b8731fea3d"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 193.1 172.07"
                  className='w-4 h-4'
                >
                  <path
                    fill='#fff'
                    className="uuid-11312dc9-ce00-4db2-9590-5510d643234d"
                    d="M15.9,156.34h166.5c1.4,0,2.8,0,4.2.2,3.8.6,6.5,3.9,6.5,7.8-.1,3.9-2.9,7.1-6.8,7.6-1.4.2-2.8.1-4.2.1H10.9c-8.6,0-10.9-2.2-10.9-10.9V15.64C0,10.04,2.5,6.74,7,6.34c5.1-.5,8.8,3,8.8,8.7.1,11.5,0,23,0,34.5v102.3c.1,1.3.1,2.7.1,4.5Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-11312dc9-ce00-4db2-9590-5510d643234d"
                    d="M106.8,76.94c-5.1,0-9.4-2-13.3-5.2-11.3-9.3-22.8-18.5-34-27.9-2.8-2.4-5.1-2.6-8.1-.4-5.9,4.2-12,8.1-18.1,12.1-4.5,3-9.1,2.4-11.8-1.4-2.8-4-1.6-8.6,3.1-11.8,6.3-4.3,12.7-8.6,19.1-12.7,8.5-5.6,17.2-5.1,25.1,1.3,11.4,9.3,22.7,18.6,34.1,27.9,3.8,3.1,5,3,8.4-.4,18.5-18.4,37.1-36.9,55.6-55.3,3.2-3.2,6.8-4,10-2.2,3.3,1.8,4.8,4.7,4,8.3-.4,1.7-1.5,3.6-2.7,4.9-18.9,19-37.9,37.9-56.9,56.8-4.1,4-8.9,6-14.5,6Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-11312dc9-ce00-4db2-9590-5510d643234d"
                    d="M165.3,92.24v-45.5c0-1.4,0-2.8.2-4.2.6-3.8,4-6.4,8-6.3,3.8.1,6.9,2.8,7.4,6.5.2,1.3.1,2.5.1,3.8v92.6c0,1.9,0,3.9-.7,5.6-1.2,3.3-5,5.2-8.4,4.6-3.7-.6-6.4-3.4-6.5-7.4-.2-7.4-.1-14.8-.1-22.2v-27.5Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-11312dc9-ce00-4db2-9590-5510d643234d"
                    d="M55.2,105.94v-34.1c0-5.5,3-8.9,7.7-9,4.9-.1,8.1,3.4,8.1,9.1v68.2c0,5.7-3.2,9.3-8,9.3s-7.8-3.6-7.8-9.4v-34.1Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-11312dc9-ce00-4db2-9590-5510d643234d"
                    d="M137.8,109.14v-30.6c0-5.7,3.2-9.3,8-9.2,4.7.1,7.7,3.5,7.7,9,0,20.7.1,41.4,0,62,0,5.5-3.1,9-7.8,9-4.8.1-7.9-3.5-7.9-9.3,0-10.2.1-20.6,0-30.9Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-11312dc9-ce00-4db2-9590-5510d643234d"
                    d="M27.7,116.64v-23c0-5.7,3.2-9.2,8-9.1,4.7.1,7.8,3.5,7.8,9v46.7c0,5.6-3.3,9.3-8,9.2-4.7-.1-7.7-3.6-7.8-9.1v-23.7Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-11312dc9-ce00-4db2-9590-5510d643234d"
                    d="M82.8,116.74v-23.4c0-5.5,3.1-8.9,7.9-8.9s7.9,3.4,7.9,8.9c.1,15.7.1,31.4,0,47.1,0,5.4-3.3,8.9-7.9,8.9s-7.8-3.5-7.9-8.9c-.1-7.9,0-15.8,0-23.7Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-11312dc9-ce00-4db2-9590-5510d643234d"
                    d="M110.4,119.54v-20.6c0-5.3,3.3-8.8,8-8.7,4.5.1,7.7,3.5,7.8,8.7,0,14,0,28-.1,42.1,0,5.1-3.4,8.5-7.9,8.6-4.7,0-7.8-3.5-7.9-8.9,0-7.2,0-14.2.1-21.2q-.1,0,0,0Z"
                  />
                </svg>
                Información estadistica
                <input type='checkbox' id='justiciayderecho' className=' checkbox checkbox-xs' onChange={() => handleBotonClick('seguridad')} />
              </label>
              {/* <ul>
                <li className='text-xs'><a><div className='w-5 rounded-sm h-3 block bg-green-600'></div> Pobreza Extrema</a></li>
                <li className='text-xs'><a><div className='w-5 rounded-sm h-3 block bg-orange-600'></div> Habitante de Calle</a></li>
                <li className='text-xs'><a><div className='w-5 rounded-sm h-3 block bg-orange-600'></div> Carencia vías</a></li>
                <li className='text-xs'><a><div className='w-5 rounded-sm h-3 block bg-yellow-600'></div> Mantenimiento de vías</a></li>
                <li className='text-xs'><a><div className='w-5 rounded-sm h-3 block bg-green-600'></div> Carencia de Puentes</a></li>
                <li className='text-xs'><a><div className='w-5 rounded-sm h-3 block bg-green-600'></div> Carencia Placa Huella</a></li>
                <li className='text-xs'><a><div className='w-5 rounded-sm h-3 block bg-red-600'></div> Mantenimiento de Placa Huella</a></li>
              </ul> */}
              <label 
                htmlFor="justiciayderecho" 
                className={`label cursor-pointer btn btn-sm bg-green-800 text-slate-50 hover:bg-green-600 ${estadoBoton === 'seguridad' ? 'activo' : ''}`}
              >
                <svg
                  id="uuid-ed3989dd-07e2-4a2d-81d1-7021463db376"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 194.31 194.31"
                  className='w-4 h-4'
                >
                  <path
                    fill='#fff'
                    className="uuid-ca135f5c-6f5c-4572-8798-827b508d6c36"
                    d="M96.7,0c7.3-.1,14.2,1.2,21,3.8,7.1,2.7,10.3,8.7,7.9,14.8-2.3,6-8.3,8.4-15.3,6-21.2-7.1-42.5,2.3-50.1,22.3-7.3,19.1,1.3,40.3,20.1,49.1,3.8,1.8,7,4,7.9,8.3,1,4.2-.1,8-3.3,10.9-3.6,3.2-7.8,3.8-12.1,1.8-20.7-9.3-33-25.2-36.7-47.6-.2-1-.1-2-.3-3-1.1-4.8-.1-7.8,5.1-10.4,11.6-5.8,16.6-20.2,12-32.6-1.1-3.1-.7-4.7,1.6-6.8C66.6,5.71,80.5.11,96.7,0Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-ca135f5c-6f5c-4572-8798-827b508d6c36"
                    d="M0,97.61c0-7.4,1.3-14.6,4-21.5,2.7-6.7,8.6-9.8,14.6-7.5,6.1,2.3,8.5,8.3,6.1,15.3-7.9,23.1,4.4,46.3,27.4,51.7,17.8,4.2,36-4.7,43.8-21.6,1.9-4.2,4.4-7.4,9.2-8.2,8.8-1.4,15.5,7.1,11.8,15.5-9.2,20.9-25.4,33.2-48,36.8-1.3.2-2.7.1-4,.4-4,.8-6.4-.1-8.4-4.3-5.9-12-19.9-17.5-32.6-13-3.7,1.3-5.7.5-8-2.2C5.4,127.11,0,113.41,0,97.61Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-ca135f5c-6f5c-4572-8798-827b508d6c36"
                    d="M194.3,96.71c.1,7.4-1.2,14.6-3.9,21.5-2.7,6.8-8.5,9.8-14.6,7.6s-8.6-8.2-6.2-15.2c7.8-23.2-3.9-45.7-26.8-51.6-17.7-4.6-36.3,4.3-44.4,21.4-1.7,3.6-3.7,6.8-7.7,7.9-4.3,1.2-8.3.3-11.4-3.1-3.4-3.7-3.9-8-1.8-12.5,9.5-20.6,25.4-32.8,47.8-36.4,1.5-.2,3-.2,4.5-.5,3.9-.8,6,.4,8,4.3,5.9,12.1,20.3,17.7,33.1,13,3.3-1.2,5.1-.5,7.2,1.9,10.4,11.2,16.2,26,16.2,41.7Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-ca135f5c-6f5c-4572-8798-827b508d6c36"
                    d="M95,194.31c-4.4.1-11.3-1.2-17.9-3.6-7.5-2.7-10.8-8.7-8.5-15,2.3-6.2,8.3-8.5,15.7-5.9,22.8,7.7,45.7-4.6,51.3-27.6,4.2-17.6-4.6-35.8-21.5-43.9-2.9-1.4-5.7-2.8-7.1-5.9-2.2-4.5-1.7-8.8,1.7-12.5,3.5-3.9,8-4.7,12.8-2.6,20.7,9.3,33,25.1,36.7,47.6.1.8.1,1.7.3,2.5,1.2,5.2.1,8.4-5.4,11.2-11.3,5.8-16.2,19.9-11.7,31.8,1.4,3.7.5,5.7-2.2,8-12.1,10.4-25.7,15.9-44.2,15.9Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-ca135f5c-6f5c-4572-8798-827b508d6c36"
                    d="M167,141.01c11.6-.1,21,9.3,21,20.8s-9.5,20.9-21.1,20.8c-11.4-.1-20.6-9.3-20.7-20.6-.1-11.6,9.1-20.9,20.8-21Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-ca135f5c-6f5c-4572-8798-827b508d6c36"
                    d="M141,27.21c0-11.6,9.4-20.9,21-20.9s20.9,9.7,20.7,21.2c-.2,11.3-9.5,20.5-20.8,20.6-11.6.1-20.9-9.3-20.9-20.9Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-ca135f5c-6f5c-4572-8798-827b508d6c36"
                    d="M27.3,53.31c-11.6,0-21-9.3-21-20.9S15.9,11.51,27.4,11.61c11.6.2,20.8,9.6,20.7,21.2-.2,11.4-9.4,20.5-20.8,20.5Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-ca135f5c-6f5c-4572-8798-827b508d6c36"
                    d="M53.3,167.21c0,11.5-9.4,20.9-21,20.8-11.3-.1-20.5-9.4-20.7-20.7-.2-11.5,9.3-21,20.8-21,11.7-.1,20.9,9.2,20.9,20.9Z"
                  />
                </svg>
                Cultura
                <input type='checkbox' id='justiciayderecho' className=' checkbox checkbox-xs' onChange={() => handleBotonClick('seguridad')} />
              </label>
              {/* <ul>
                <li className='text-xs'><a><div className='w-5 rounded-sm h-3 block bg-yellow-600'></div> Baja o inexistencia de escuelas de arte y musica</a></li>
                <li className='text-xs'><a><div className='w-5 rounded-sm h-3 block bg-orange-600'></div> Deficiencia en el patrimonio cultural</a></li>
              </ul> */}
              <label 
                htmlFor="justiciayderecho" 
                className={`label cursor-pointer btn btn-sm bg-green-800 text-slate-50 hover:bg-green-600 ${estadoBoton === 'seguridad' ? 'activo' : ''}`}
              >
                <svg
                  id="uuid-8c641bd9-7632-4522-ba22-a104e5fce9f1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 181.03 189.46"
                  className='w-4 h-4'
                >
                  <path
                    fill='#fff'
                    className="uuid-298dce9a-e121-43bb-84b4-ba26601171c6"
                    d="M85.13,189.46h-2.1c-13.5,0-14.1-.2-13.4-13.3.4-7.1-1.8-9.5-8.6-8.4-2.5.4-5.1.2-7.6,0-3.9-.3-6.4.4-8.9,4.3-4.4,7.1-14.3,7.7-20.5,2.3-6.3-5.5-6.4-15-.4-20.7s16.1-5.5,20.5,1.6c2.8,4.6,6,4.7,10.2,4.6,5.5-.1,11,.1,16.5-.1,4.3-.1,6.5,1.6,6.3,6.1-.1,1.8,0,3.7,0,5.5.2,11.2-1.3,8.9,9.5,9.6,6.1.4,7.5-1.9,6.9-7.4-.8-6.1,1.8-9.7,8.2-10.2,1.6-.1,3.2-.6,4.6-1.3,6.5-3.2,11.2-1.3,13.7,5.3,2.8,7.6,6.5,2.9,10.4,1.3,5.2-2.1,4.9-4.9,1.9-8.6-4.1-5.3-3.9-10,1.9-14,1.3-.9,2.5-2.1,3.4-3.4,4-5.7,8.9-6.1,14-1.9,5.3,4.3,7,.8,9.4-3.3,2.5-4.2,3.5-7.1-2.2-9.2-6.3-2.4-8.4-6.7-5.4-13.1.8-1.6,1.3-3.5,1.4-5.3.5-6.5,4.4-8.9,10.3-8,6.6,1,7.1-2.2,7.4-7.7.3-6.5-2.6-7.2-7.6-6.6-6.2.7-9.5-2-10.1-8.3-.2-2-.8-4.1-1.6-6-2.5-5.6-.4-9.1,4.6-11.7,2.1-1.1,6.1-1.9,5.5-4.2-1-3.8-3.5-7.5-6-10.6-1.4-1.7-3.4.6-4.7,1.5-6.4,4.9-11.7,4.2-16.2-2.6-.5-.7-1.2-1.4-2-1.9-5.9-4.1-6.6-8.9-2.2-14.5,2.5-3.3,3.7-6.1-1.6-8.2-4-1.5-7.8-6.9-10.9,1.1-2.5,6.7-7.1,7.6-13.8,5.2-11.4-4-11.6-3.6-12.6-15.1-.2-2.6-.9-3.9-3.6-3.6-.5.1-.9,0-1.4,0q-11.4-.4-11.4,11,0,10-9.8,10c-3.4,0-6.9.1-10.3,0-5.5-.2-10,.1-13.8,5.6-4.5,6.5-14.4,5.9-20,0-5.3-5.6-5.1-14.4.5-19.8,5.8-5.5,14.9-5.1,20.4.7,1.7,1.8,1.5,5.6,5.4,5.5,6.2-.2,12.4.1,18.6-.3,2.5-.2,1.5-3,1.4-4.6C68.63-2.34,71.33.16,86.53.06h3.4c11,0,12,.8,11.9,11.6,0,4,.8,6.2,5.1,7.2,3.5.8,5.1.2,6.9-3,5.9-10.4,6.7-10.5,16.9-4.6,1.2.7,2.4,1.4,3.6,2,12,6.9,12.3,7,5.8,19.1-2,3.7.2,4.8,2,6.8,1.9,2.2,3.8,4.1,6.8,1.4,1-.9,2.3-1.4,3.5-2.2,5.2-3.3,9.4-2.7,12.4,3.1,1.8,3.5,3.9,6.8,5.8,10.1,4.7,8.1,4.2,10.1-3.9,14.7-3.3,1.9-6.2,3.2-4.4,8.2,1.3,3.7,2.9,4.8,6.7,4.8,11.4-.1,12,.6,12,12.1v4.1c0,13.8,0,14.1-13.6,14.6-4.1.2-4.1,2.7-5,5.1-.9,2.7-1.5,5.3,2.1,6.7,1.7.6,3.2,1.8,4.8,2.7,4.5,2.5,5.3,6,2.9,10.4-2.2,4-4.6,8-6.9,11.9-4.2,7.3-6.3,7.8-13.7,3.6-3.2-1.8-5.9-4.9-9.8-.2-2.6,3.1-2.8,4.7-.8,8,5.9,9.7,5.4,10.8-4.4,16.5-1.6.9-3.2,1.8-4.8,2.7-11.3,6.5-11.5,6.6-18.3-4.7-2-3.3-4-2.9-6.7-2.1-2.6.8-5.6,1.1-4.9,5.1.2,1.3.1,2.7,0,4.1-.1,7.6-1.8,9.3-9.3,9.4-2.4.2-5,.2-7.5.2Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-30017f05-e6ae-4e43-a996-835594693786"
                    d="M46.73,68.86c-3.4,0-6.9.1-10.3,0-4.8-.2-8.7.1-11.9,5.2-4.2,6.7-14.2,6.7-20,1.3-6.1-5.6-6-15.1.1-20.8,5.9-5.4,15.5-5.3,20,1.4,3.1,4.6,6.6,5.2,11.4,5.1,6.4-.2,12.8-.1,19.2,0,3.2.1,4.8-.4,4.9-4.4.5-15.4.7-15.4,16.6-15.4,3.2,0,6.4-.1,9.6.1,2.3.2,3.9,1.6,3.8,4s-1.6,3.7-4,3.8c-4.8.1-9.6.2-14.4,0-3-.1-3.7,1-3.9,3.9-.9,15.7-1,15.7-17,15.7-1.3.1-2.7.1-4.1.1Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-298dce9a-e121-43bb-84b4-ba26601171c6"
                    d="M43.33,128.76c-2.7,0-5.5.1-8.2,0-4.2-.2-7.3.1-10.2,4.6-4.4,7.1-14.4,7.3-20.4,1.7-6.1-5.7-6-15.2.2-20.7,6.3-5.7,16.4-4.8,20.9,2.6,2.3,3.8,4.8,4,8.3,4,8.9-.1,17.9.2,26.8-.1,5.3-.2,7.4,1.6,7.4,7,0,12.6.3,12.6,12.8,12.6h2.7c3.1-.1,6.6-.2,6.5,4-.1,4.1-3.6,4-6.6,4-5.7,0-11.5-.1-17.2,0-4.2.1-6.4-1.4-6.3-5.9.1-4.3,1.4-10.1-.9-12.5-3-3.2-9-.8-13.7-1.2-.7-.2-1.4-.1-2.1-.1Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-30017f05-e6ae-4e43-a996-835594693786"
                    d="M123.33,95.16c-.1,17.6-13,32.9-30.1,35.9-3,.5-5.8.9-6.7-2.6-.9-3.7,2-4.3,4.9-5,15-3.8,23.9-14.6,23.9-28.6s-8.7-24.7-23.8-28.6c-2.9-.8-5.8-1.4-5-5s3.8-3.1,6.7-2.6c17.2,2.8,30.2,18.5,30.1,36.5Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-298dce9a-e121-43bb-84b4-ba26601171c6"
                    d="M79.13,98.76c-3,0-6,.1-8.9,0-2.7-.2-4.4.5-6,3.1-4,6.4-10.3,8.6-16.5,6.3s-9.7-6.8-9.6-13.6c.1-6.4,3.5-10.8,9.4-13,6.1-2.4,12.7-.2,16.6,6.1,1.8,2.9,3.8,3.3,6.7,3.3,5.9-.1,11.9,0,17.8-.1,3.1,0,5.8.7,5.7,4.3-.1,3.1-2.7,3.8-5.5,3.7-3.3-.1-6.5-.1-9.7-.1Z"
                  />
                </svg>
                Tecnologias de la información
                <input type='checkbox' id='justiciayderecho' className=' checkbox checkbox-xs' onChange={() => handleBotonClick('seguridad')} />
              </label>
              {/* <ul>
                <li className='text-xs'><a><div className='w-5 rounded-sm h-3 block bg-green-600'></div> Falta de telefonia celular</a></li>
                <li className='text-xs'><a><div className='w-5 rounded-sm h-3 block bg-yellow-600'></div> Falta conexión internet</a></li>
              </ul> */}
              <label 
                htmlFor="justiciayderecho" 
                className={`label cursor-pointer btn btn-sm bg-green-800 text-slate-50 hover:bg-green-600 ${estadoBoton === 'seguridad' ? 'activo' : ''}`}
              >
                <svg
                  id="uuid-9629263d-a14c-497b-be31-14c31ec14a8f"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 182.39 182.87"
                  className='w-4 h-4'
                >
                  <path
                    fill='#fff'
                    className="uuid-52e4524c-fd39-4546-993c-202fc78e15ad"
                    d="M84.9,79.37C56.6,68.57,28.3,57.77,0,47.07c.3-.3.5-.6.7-.8l10.2-10.2c.5-.5.9-.6,1.6-.5,9.3,1.3,18.6,2.6,27.9,3.9.8.1,1.4-.1,2-.5,4-2.7,7.9-5.5,12-8,1.8-1.1,3.9-1.7,5.9-2.1,3.2-.7,5.4,1.4,4.7,4.7-.4,2.1-1.3,4.1-2.1,6.1-.3.9-.9,1.7-1.5,2.7,2.2.3,4.3.5,6.3.9,1.9.4,3.3-.1,4.8-1.3,3.8-2.9,7.8-5.6,12.3-7.2,1.3-.4,2.7-.7,4-.6,2,.1,3.2,1.5,3.3,3.6.1,2.2-.8,4.2-1.7,6.2-.3.7-.6,1.3-1,2.1.4.1.7.2,1,.2,7.2,1,14.4,2,21.5,3,1.1.2,1.6-.3,2.3-1,11.3-11.4,22.9-22.5,35.4-32.6,5.9-4.8,11.9-9.4,18.7-12.8,2.4-1.2,5.1-2.2,7.7-2.7,4.3-.9,6.9,1.9,6.3,6.3-.5,3.3-1.9,6.2-3.5,9-4.2,7.4-9.4,14.1-14.8,20.6-9.5,11.3-19.7,22-30.2,32.4-.5.5-.8,1-.7,1.8,1,7.3,2,14.7,3,22,0,.2.1.4.2.7,1.1-.5,2-1.1,3-1.4,1.6-.5,3.1-1.1,4.7-1.2,2.8-.3,4.6,1.7,4.1,4.5-.3,1.8-.8,3.7-1.7,5.3-2.2,3.8-4.7,7.5-7.1,11.2-.2.3-.6.8-.5,1.1.3,2.8.7,5.7,1.1,8.6,1.5-.7,2.8-1.5,4.2-2.1,1.6-.6,3.2-1.2,4.9-1.5,2.9-.4,4.8,1.5,4.5,4.5-.3,2.7-1.4,5.2-2.9,7.5-2.3,3.7-4.9,7.2-7.3,10.8-.3.5-.6,1.3-.5,1.9,1.2,9.4,2.5,18.7,3.8,28.1.1.4,0,1-.3,1.3l-11.3,11.3c-10.8-28.4-21.6-56.7-32.4-85-.4.3-.7.6-1.1.9-15.4,13.1-30.7,26.3-46.1,39.4-.8.7-1.1,1.3-1,2.4,1.1,8.1,2,16.2,3.1,24.4.1.9-.1,1.6-.8,2.3-2.6,2.5-5.1,5.1-7.7,7.7-.3-.5-.5-.9-.7-1.3-4.3-8.4-8.5-16.8-12.8-25.1-.4-.7-1.1-1.4-1.8-1.7-8.4-4.3-16.8-8.6-25.2-12.9-.3-.2-.7-.4-1.2-.6,2.8-2.8,5.6-5.6,8.3-8.2.3-.3,1.1-.3,1.6-.2,8.3,1,16.6,2,25,3,.4.1,1.1-.2,1.4-.5,13.4-15.7,26.8-31.4,40.2-47.1.8-.6.9-.7,1.1-1Z"
                  />
                </svg>
                Comercio, Industria y Turismo
                <input type='checkbox' id='justiciayderecho' className=' checkbox checkbox-xs' onChange={() => handleBotonClick('seguridad')} />
              </label>
              {/* <ul>
                <li className='text-xs'><a><div className='w-5 rounded-sm h-3 block bg-green-600'></div> Bajo valor agregado a productos</a></li>
                <li className='text-xs'><a><div className='w-5 rounded-sm h-3 block bg-green-600'></div> Bajas competencias emprendedoras</a></li>
              </ul> */}
            </li>
          </ul>
        
        </div>
      </div>
      <div className="collapse collapse-plus join-item border border-base-300">
        <input type="radio" name="my-accordion-2" /> 
        <div className="collapse-title text-lg font-bold">
          Sostenibilidad
        </div>
        <div className="collapse-content"> 
          <ul className="menu bg-base-200 w-full rounded-box">
            <li>
              <label 
                htmlFor="justiciayderecho" 
                className={`label cursor-pointer btn btn-sm bg-green-800 text-slate-50 hover:bg-green-600 ${estadoBoton === 'seguridad' ? 'activo' : ''}`}
              >
                <svg
                  id="uuid-531b7001-9456-4a7c-afc2-93cc8be7092d"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 186.79 181.13"
                  className='w-4 h-4'
                >
                  <path
                    fill='#fff'
                    className="uuid-58ed5d8b-d89b-4f81-8082-a8672394facf"
                    d="M0,113.83C1.4,68.93,14.9,33.63,47.2,6.83c11.1-9.2,11.8-9.2,21.9.6,27.8,26.8,45.2,58.9,47.5,97.9.6,10.1-.2,20.7-2.4,30.6-6.3,27.9-28.8,45.6-55.7,45.2-28.6-.5-50.3-18.6-56.2-47.4-1.6-7.8-1.9-15.8-2.3-19.9ZM60,17.13c-1,0-1.9.1-2.9.1-4.5,12.6-9.3,25.2-13.4,37.9-9.7,30.3-11.8,61-1.8,91.7,2.5,7.6,6.9,14.8,11.9,21.1,4.7,6,10.4,5.3,14.4-1,3-4.7,5.5-9.9,7-15.2,7.3-26.1,9.3-52.6,2.2-78.9-5.1-18.8-11.5-37.2-17.4-55.7ZM45.3,22.73c-1.8.5-2.3.5-2.6.8-1.3,1.3-2.7,2.6-3.9,4.1C15.8,55.13,7.1,87.33,10,122.43c.8,9.9,5.2,19.8,9.6,28.9,4.1,8.3,11.7,13.9,21.4,17.1-24.7-49.6-14.8-97.5,4.3-145.7ZM79.4,167.43c15.6-8.3,23.8-20.5,26.4-35.8,7.1-40.7-6.8-75.3-33-106.1,18.2,46.1,26,92.6,6.6,141.9Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-58ed5d8b-d89b-4f81-8082-a8672394facf"
                    d="M176.8,59.53c-5.2,11.7-10,23.2-15.3,34.6-8,17.1-18,32.8-31.9,45.8-2.5,2.4-5.1,6-8.7,2.2-3.5-3.6-.2-6.3,2.3-8.8,25.7-24.7,36.9-57.3,49.1-89.3-.5-.6-1-1.3-1.5-1.9-14.5,8.5-29,17.1-43.6,25.5-3.4,2-7.2,7.9-11.1,2.2-3.8-5.5,2.7-7.5,6-9.6,12-7.6,24.2-14.8,37.3-22.7-14.3.7-26.9,4-39.1,9.2-1.7.7-3.4,2.1-5.1,2.2-2.8.2-7.4.7-8.3-.8-2.6-4.2,1.3-6.3,4.7-7.5,10.1-3.6,20.1-8.2,30.5-10.1,11.1-2,22.8-1.6,34.2-2,5.4-.2,8.5,2.1,9.2,8.1,5.2,46.3-4.9,87.9-37.7,122.4-11.8,12.4-26,20.6-43.5,21.7-3.6.2-7.9.7-7.6-4.3.1-1.7,4.4-4.2,6.9-4.5,14.2-1.5,26-7.7,35.9-17.5,26-25.7,37.3-57.6,38.2-93.6,0-.3-.4-.7-.9-1.3Z"
                  />
                </svg>
                Agricultura y Desarrollo Rural
                <input type='checkbox' id='justiciayderecho' className=' checkbox checkbox-xs' onChange={() => handleBotonClick('seguridad')} />
              </label>
              {/* <ul>
                <li className='text-xs'><a><div className='w-5 rounded-sm h-3 block bg-yellow-600'></div> Ampliacion de portafolio productivo</a></li>
                <li className='text-xs'><a><div className='w-5 rounded-sm h-3 block bg-orange-600'></div> Prácticas agroindustriales deficientes</a></li>
              </ul> */}
              <label 
                htmlFor="justiciayderecho" 
                className={`label cursor-pointer btn btn-sm bg-green-800 text-slate-50 hover:bg-green-600 ${estadoBoton === 'seguridad' ? 'activo' : ''}`}
              >
                <svg
                  id="uuid-1e7165ab-33d8-4d96-befb-eeb131c445d4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 222.28 211.21"
                  className='w-4 h-4'
                >
                  <path
                    fill='#fff'
                    className="uuid-4fccb439-21ec-455a-a6bd-45e358c9f76f"
                    d="M117.43,0c3.3.3,5.9.5,8.9.7v6.9c0,7.6-.1,15.1,0,22.7,0,1.4.3,3.1,1.1,4.3,1.2,2.1,3.3,2.6,5.5,2,2.4-.7,3.7-2.4,3.7-5V3.4c19.5,3.8,37.4,23.4,39.5,54.8h5.6c5.2.2,8.8,3.9,8.8,8.9s-3.7,8.7-8.9,8.7c-6,.1-11.9,0-17.9,0h-3.7c0,5.4.4,10.4-.1,15.4-1.7,18.3-7.5,34.9-21,48.1-16,15.6-37.8,15.7-54,.1-11.4-11-17.5-24.9-20-40.3-1.2-7.5-1.4-15.2-2-23.4h-10.9c-1.6,0-3.2.1-4.8,0-4.5-.4-7.9-4.3-7.9-8.8s3.3-8.2,7.7-8.7c2.3-.3,5.5.3,6.8-1,1.4-1.4,1-4.6,1.4-6.9,2.3-13,7.1-24.8,16.5-34.4,4.5-4.6,9.6-8.2,16-10.9v25.6c0,3.8,2,6.2,5.2,6.1,3.2,0,5.1-2.3,5.2-6.2.1-8.4.2-16.8-.1-25.1-.1-3,.8-4.5,3.8-4.6,1.6-.1,3.2-.3,5.2-.5v30.9c0,3.4,2.2,5.6,5.1,5.6s4.9-2,5.2-5.2c.1-.9.1-1.8.1-2.7V3.8c0-1.1,0-2.2,0-3.8ZM71.53,76.1c0,3.9-.2,7.4,0,10.9.9,15.5,5.3,29.8,16.1,41.5,14.1,15.2,34,15.3,48.2.3,10.8-11.4,15.2-25.4,16.3-40.7.3-4,0-8,0-11.9-27-.1-53.5-.1-80.6-.1Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-4fccb439-21ec-455a-a6bd-45e358c9f76f"
                    d="M158.43,144v5.7c0,11.6.1,23.2-.1,34.8,0,1.4-.7,3.2-1.8,4.1-25.7,20.4-58.3,22.7-87-.4-.8-.6-1.4-1.8-1.5-2.7-.5-13.7-1-27.4-1.4-41.3.4.1.7.1.8.3,9.5,12.8,23,18.3,38.2,20.1,10.6,1.2,21,.6,31-3.2,9.1-3.6,16.3-9.2,21.8-17.4Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-4fccb439-21ec-455a-a6bd-45e358c9f76f"
                    d="M47.93,143.5c.3,9.4.9,18.7.7,28-.1,3.6-1.4,7.3-2.7,10.7-3.6,9-7.5,17.8-11.2,26.8-.8,1.9-1.7,2.5-3.6,1.8-5.4-1.9-11-3.3-16.2-5.8-13.6-6.5-18.1-18.1-12.7-32.2,6.3-16.2,18.7-25,35.4-28.4,2.7-.6,5.4-.8,8.1-1.1.5,0,1,.1,2.2.2Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-4fccb439-21ec-455a-a6bd-45e358c9f76f"
                    d="M174.93,143.5c21.3-1,42,14.2,46.5,33.7,2.7,11.4-1,21-11.3,26.4-6.1,3.2-12.9,5-19.4,7.4-1.5.6-2.3-.1-2.9-1.6-4.3-10.2-8.7-20.4-13-30.6-.3-.6-.5-1.3-.6-2-1.5-11.2-.1-22.2.7-33.3Z"
                  />
                </svg>
                Minas y Energía
                <input type='checkbox' id='justiciayderecho' className=' checkbox checkbox-xs' onChange={() => handleBotonClick('seguridad')} />
              </label>
              {/* <ul>
                <li className='text-xs'><a><div className='w-5 rounded-sm h-3 block bg-green-600'></div>Inadecuadas practicas mineras</a></li>
              </ul> */}
              <label 
                htmlFor="justiciayderecho" 
                className={`label cursor-pointer btn btn-sm bg-green-800 text-slate-50 hover:bg-green-600 ${estadoBoton === 'seguridad' ? 'activo' : ''}`}
              >
                <svg
                  id="uuid-df8c38f2-efdc-444c-be85-4c01eeb87b5a"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 217.7 217.6"
                  className='w-4 h-4'
                >
                  <path
                    fill='#fff'
                    className="uuid-fc354135-f179-4d59-a841-a8704910a62b"
                    d="M80,0h5.9c.2,0,.4.1.6.1,2.9.2,5.8.6,8.6,1.2,12.1,2.7,22.3,8.8,30.6,18,.2.3.4.3.8.2,8-3.5,16.4-4.7,25.1-3.5,10.8,1.5,20,6.2,27.4,14.1,8.8,9.3,13,20.4,12.8,33.1,0,.4.1.6.5.7,5.9,1.9,10.9,5,15.2,9.4,5.3,5.5,8.6,12.1,9.8,19.6.2,1.1.3,2.2.4,3.4v4.4c0,.2-.1.3-.1.5-.5,6.3-2.4,12-5.9,17.2-3.9,5.8-9,10.3-15.4,13.2-4.9,2.2-10,3.2-15.3,3.2h-54.8c-.5,0-.7.1-.8.6-1.7,4.8-3.5,9.6-5.2,14.4-.1.2-.1.3-.1.5h13.1c4.2,0,6.7,4.2,4.7,7.8-5.6,10.3-11.2,20.6-16.9,30.9-4.7,8.6-9.4,17.3-14.2,25.9-.7,1.4-1.9,2.2-3.4,2.6-.1,0-.2.1-.4.1h-1.7c-.3-.1-.6-.2-.8-.3-2.3-.8-3.6-2.9-3.4-5.5.2-3.2.5-6.4.8-9.6.5-6.2,1-12.5,1.5-18.7.1-.7.1-1.4.1-2.2h-15c-.9,0-1.8-.2-2.7-.7-2.3-1.3-3.2-3.9-2.3-6.5,4.7-12.9,9.4-25.8,14.1-38.7.1-.2.2-.5.3-.8h-57.2c-2.2,0-4.4-.2-6.5-.5-15.2-2.4-27.5-14.8-29.8-30.1-.2-1.1-.3-2.2-.4-3.4v-4.5c.1-.9.2-1.8.3-2.7.8-6.2,3.1-11.9,6.9-16.9,4.8-6.3,11-10.6,18.5-12.9.4-.1.5-.3.4-.7-.6-5.9-.4-11.7.8-17.5,2.4-11.6,7.9-21.6,16.5-29.8C52.7,6.7,63.8,1.5,76.6.1c1.3.1,2.3,0,3.4-.1ZM108.8,124.4h72.5c7.5,0,13.9-2.7,19-8.2,7.2-7.5,9.2-18.8,4.8-28.2-3.8-8.3-10.3-13.3-19.3-15-1.2-.2-2.3-.6-3.1-1.5-1.4-1.4-1.6-3.1-1.4-5,1.2-12-2.4-22.3-11.1-30.6-6.5-6.3-14.4-9.6-23.5-10-6.9-.3-13.3,1.3-19.2,4.7-2.5,1.4-5.3.8-7.1-1.5-1.2-1.5-2.4-3.1-3.8-4.5-10.4-10.6-23.1-15.3-37.9-14.1-11.3,1-21.1,5.6-29,13.8-11.2,11.7-15.3,25.7-12.5,41.6.1.6.2,1.2.2,1.8-.1,2.7-2,4.6-4.8,5-15.2,2.1-25.3,17.3-21.3,32.2,3.1,11.5,13.3,19.4,25.2,19.4,24.1.1,48.2.1,72.3.1ZM109.4,188.5h.1c5-9.2,10.1-18.5,15.2-27.8h-11.7c-4,0-6.5-3.5-5.1-7.3,2.2-6,4.4-12,6.6-18,.1-.2.1-.4.2-.6h-8.9c-.6,0-.9.2-1.1.8-4,11-8,22-12,32.9-.3.8-.6,1.7-.9,2.6h13.2c3.3,0,5.5,2.5,5.3,5.7-.3,3.9-.6,7.8-.9,11.7Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-fc354135-f179-4d59-a841-a8704910a62b"
                    d="M135.7,202.2c.1-.6.2-1.2.4-1.8,2.5-6.9,5-13.7,7.5-20.6,1-2.8,3.9-4.2,6.7-3.2,2.7,1,4.1,3.9,3.1,6.7-2.5,6.9-5,13.8-7.5,20.7-.9,2.5-3.4,3.8-5.9,3.3-2.5-.5-4.3-2.6-4.3-5.1Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-fc354135-f179-4d59-a841-a8704910a62b"
                    d="M183.4,176.3c-3.6,0-6.1-3.5-4.9-7,1.2-3.3,2.4-6.6,3.6-9.9,1.3-3.6,2.6-7.2,3.9-10.8,1.4-3.7,6-4.7,8.7-1.8,1.4,1.5,1.8,3.3,1.1,5.3-2.5,7-5.1,14-7.6,20.9-.7,2-2.6,3.3-4.8,3.3Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-fc354135-f179-4d59-a841-a8704910a62b"
                    d="M166.8,202.2c.1-.6.2-1.2.4-1.8,1.2-3.4,2.5-6.9,3.7-10.3.9-2.4,3.1-3.7,5.5-3.4s4.3,2.1,4.5,4.6c.1.7,0,1.5-.2,2.2-1.2,3.5-2.5,7.1-3.8,10.6-.9,2.4-3.4,3.7-5.8,3.2-2.5-.4-4.2-2.6-4.3-5.1Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-fc354135-f179-4d59-a841-a8704910a62b"
                    d="M159.8,145.2c3.5,0,6,3.4,4.9,6.8-1.2,3.6-2.5,7.2-3.9,10.8-1,2.6-4,3.9-6.6,2.9s-4-3.8-3.1-6.5c1.2-3.6,2.6-7.2,3.9-10.8.8-2,2.7-3.2,4.8-3.2Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-fc354135-f179-4d59-a841-a8704910a62b"
                    d="M33,176.3c-3.7,0-6.1-3.6-4.9-7.1,2-5.4,4-10.9,5.9-16.3.5-1.4,1-2.9,1.6-4.3.9-2.3,3-3.7,5.4-3.4,2.3.2,4.2,2,4.6,4.3.2.9.1,1.8-.2,2.7-2.5,6.9-5,13.8-7.5,20.7-.8,2.1-2.7,3.4-4.9,3.4Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-fc354135-f179-4d59-a841-a8704910a62b"
                    d="M47.5,202.2c.1-.6.2-1.2.4-1.8,2.5-6.9,5-13.8,7.5-20.7,1-2.7,4-4.1,6.7-3.1s4.1,4,3.1,6.7c-2.1,5.7-4.2,11.5-6.3,17.2-.4,1.2-.8,2.4-1.3,3.6-.8,2.1-3,3.5-5.2,3.3-2.4-.2-4.3-1.9-4.8-4.2,0-.3,0-.6-.1-1,.1,0,0,0,0,0Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-fc354135-f179-4d59-a841-a8704910a62b"
                    d="M30.7,191.9c-.1.6-.2,1.2-.4,1.8-1.2,3.4-2.5,6.9-3.8,10.3-.8,2.2-2.9,3.6-5.1,3.4-2.4-.1-4.3-1.7-4.8-4-.2-1-.2-2,.1-2.9,1.3-3.6,2.5-7.1,3.9-10.6.9-2.3,3.4-3.7,5.8-3.2,2.5.5,4.2,2.6,4.3,5.2Z"
                  />
                  <path
                    fill='#fff'
                    className="uuid-fc354135-f179-4d59-a841-a8704910a62b"
                    d="M62.6,160.7c.1-.6.2-1.2.4-1.8,1.2-3.4,2.5-6.9,3.7-10.3.9-2.4,3.3-3.8,5.7-3.4,2.5.4,4.3,2.5,4.4,5.1,0,.6-.1,1.3-.3,1.9-1.2,3.4-2.5,6.9-3.7,10.3-.8,2.2-2.9,3.6-5.2,3.4-2.4-.2-4.3-1.8-4.7-4.2-.2-.3-.2-.6-.3-1,.1,0,0,0,0,0Z"
                  />
                </svg>
                Ambiente y Desarrollo Sostenible
                <input type='checkbox' id='justiciayderecho' className=' checkbox checkbox-xs' onChange={() => handleBotonClick('seguridad')} />
              </label>
              {/* <ul>
                <li className='text-xs'><a><div className='w-5 rounded-sm h-3 block bg-green-600'></div> Deforestación</a></li>
                <li className='text-xs'><a><div className='w-5 rounded-sm h-3 block bg-orange-600'></div> Contaminación de las fuentes hídricas</a></li>
                <li className='text-xs'><a><div className='w-5 rounded-sm h-3 block bg-red-600'></div> Contaminación Atmosférica</a></li>
                <li className='text-xs'><a><div className='w-5 rounded-sm h-3 block bg-orange-600'></div> Deslizamiento</a></li>
                <li className='text-xs'><a><div className='w-5 rounded-sm h-3 block bg-yellow-600'></div> Inundación</a></li>
                <li className='text-xs'><a><div className='w-5 rounded-sm h-3 block bg-red-600'></div> Amenaza por Incendios a la Cobertura Vegetal</a></li>
                <li className='text-xs'><a><div className='w-5 rounded-sm h-3 block bg-green-600'></div> Falta de disposicion de residuos solidos</a></li>
              </ul> */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MenuLeftPruebas