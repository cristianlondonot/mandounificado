import React from 'react'
import { Tooltip } from 'react-tooltip'
import ModalEditFactor from '../Modal/ModalEditFactor'

const EditEncuesta = () => {
  return (
    <div className='p-10'>
      <div className="formTitle mb-12 flex items-center gap-3">
        <svg className="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 3v4c0 .6-.4 1-1 1H5m8-2h3m-3 3h3m-4 3v6m4-3H8M19 4v16c0 .6-.4 1-1 1H6a1 1 0 0 1-1-1V8c0-.4.1-.6.3-.8l4-4 .6-.2H18c.6 0 1 .4 1 1ZM8 12v6h8v-6H8Z"/>
        </svg>
        <h2 className="text-5xl font-bold">Editar encuesta</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3 ">
                  <div className="avatar bg-slate-600 rounded-3xl p-1">
                    <svg className="w-8 h-8 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a9 9 0 0 0 5-1.5 4 4 0 0 0-4-3.5h-2a4 4 0 0 0-4 3.5 9 9 0 0 0 5 1.5Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold">Juan Francisco Herrera</div>
                    <div className="text-sm opacity-50">Santander</div>
                  </div>
                </div>
              </td>
              <td>
                Vereda: Agua Blanca
                <br/>
                <span className="badge badge-ghost badge-sm">Floridablanca</span>
              </td>
              <td>
                <div className="rating rating-xs pointer-events-none">
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400"  />
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                </div>
              </td>
              <th>
                <div className="btnAction flex gap-2">
                  <Tooltip id={`tooltipBtnAction`}/>
                  <label htmlFor={`viewMarker`} className="btn font-normal" data-tooltip-id={`tooltipBtnAction`} data-tooltip-content='Eliminar' >
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                    </svg>
                  </label>
                  <div className="btn" data-tooltip-id={`tooltipBtnAction`} data-tooltip-content='Editar Encuesta' onClick={()=>document.getElementById('my_modal_4').showModal()}>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.3 4.8 2.9 2.9M7 7H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-4.5m2.4-10a2 2 0 0 1 0 3l-6.8 6.8L8 14l.7-3.6 6.9-6.8a2 2 0 0 1 2.8 0Z"/>
                    </svg>
                  </div>
                  <ModalEditFactor />
                </div>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar bg-slate-600 rounded-3xl p-1">
                    <svg className="w-8 h-8 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a9 9 0 0 0 5-1.5 4 4 0 0 0-4-3.5h-2a4 4 0 0 0-4 3.5 9 9 0 0 0 5 1.5Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold">Juan Francisco Herrera</div>
                    <div className="text-sm opacity-50">Santander</div>
                  </div>
                </div>
              </td>
              <td>
                Vereda: Agua Blanca
                <br/>
                <span className="badge badge-ghost badge-sm">Floridablanca</span>
              </td>
              <td>
                <div className="rating rating-xs pointer-events-none">
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400"  />
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                </div>
              </td>
              <th>
                <div className="btnAction flex gap-2">
                  <Tooltip id={`tooltipBtnAction-1`}/>
                  <label htmlFor={`viewMarker`} className="btn font-normal" data-tooltip-id={`tooltipBtnAction-1`} data-tooltip-content='Eliminar' >
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                    </svg>
                  </label>
                  <div className="btn" data-tooltip-id={`tooltipBtnAction-1`} data-tooltip-content='Editar Encuesta' onClick={()=>document.getElementById('my_modal_4').showModal()}>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.3 4.8 2.9 2.9M7 7H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-4.5m2.4-10a2 2 0 0 1 0 3l-6.8 6.8L8 14l.7-3.6 6.9-6.8a2 2 0 0 1 2.8 0Z"/>
                    </svg>
                  </div>
                  <ModalEditFactor />
                </div>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar bg-slate-600 rounded-3xl p-1">
                    <svg className="w-8 h-8 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a9 9 0 0 0 5-1.5 4 4 0 0 0-4-3.5h-2a4 4 0 0 0-4 3.5 9 9 0 0 0 5 1.5Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold">Juan Francisco Herrera</div>
                    <div className="text-sm opacity-50">Santander</div>
                  </div>
                </div>
              </td>
              <td>
                Vereda: Agua Blanca
                <br/>
                <span className="badge badge-ghost badge-sm">Floridablanca</span>
              </td>
              <td>
                <div className="rating rating-xs pointer-events-none">
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400"  />
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                </div>
              </td>
              <th>
                <div className="btnAction flex gap-2">
                  <Tooltip id={`tooltipBtnAction-1`}/>
                  <label htmlFor={`viewMarker`} className="btn font-normal" data-tooltip-id={`tooltipBtnAction-1`} data-tooltip-content='Eliminar' >
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                    </svg>
                  </label>
                  <div className="btn" data-tooltip-id={`tooltipBtnAction-1`} data-tooltip-content='Editar Encuesta' onClick={()=>document.getElementById('my_modal_4').showModal()}>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.3 4.8 2.9 2.9M7 7H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-4.5m2.4-10a2 2 0 0 1 0 3l-6.8 6.8L8 14l.7-3.6 6.9-6.8a2 2 0 0 1 2.8 0Z"/>
                    </svg>
                  </div>
                  <ModalEditFactor />
                </div>
              </th>
            </tr>
            {/* row 4 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar bg-slate-600 rounded-3xl p-1">
                    <svg className="w-8 h-8 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a9 9 0 0 0 5-1.5 4 4 0 0 0-4-3.5h-2a4 4 0 0 0-4 3.5 9 9 0 0 0 5 1.5Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold">Juan Francisco Herrera</div>
                    <div className="text-sm opacity-50">Santander</div>
                  </div>
                </div>
              </td>
              <td>
                Vereda: Agua Blanca
                <br/>
                <span className="badge badge-ghost badge-sm">Floridablanca</span>
              </td>
              <td>
                <div className="rating rating-xs pointer-events-none">
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400"  />
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                </div>
              </td>
              <th>
                <div className="btnAction flex gap-2">
                  <Tooltip id={`tooltipBtnAction-1`}/>
                  <label htmlFor={`viewMarker`} className="btn font-normal" data-tooltip-id={`tooltipBtnAction-1`} data-tooltip-content='Eliminar' >
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                    </svg>
                  </label>
                  <div className="btn" data-tooltip-id={`tooltipBtnAction-1`} data-tooltip-content='Editar Encuesta' onClick={()=>document.getElementById('my_modal_4').showModal()}>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.3 4.8 2.9 2.9M7 7H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-4.5m2.4-10a2 2 0 0 1 0 3l-6.8 6.8L8 14l.7-3.6 6.9-6.8a2 2 0 0 1 2.8 0Z"/>
                    </svg>
                  </div>
                  <ModalEditFactor />
                </div>
              </th>
            </tr>

            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar bg-slate-600 rounded-3xl p-1">
                    <svg className="w-8 h-8 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a9 9 0 0 0 5-1.5 4 4 0 0 0-4-3.5h-2a4 4 0 0 0-4 3.5 9 9 0 0 0 5 1.5Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold">Juan Francisco Herrera</div>
                    <div className="text-sm opacity-50">Santander</div>
                  </div>
                </div>
              </td>
              <td>
                Vereda: Agua Blanca
                <br/>
                <span className="badge badge-ghost badge-sm">Floridablanca</span>
              </td>
              <td>
                <div className="rating rating-xs pointer-events-none">
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400"  />
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                </div>
              </td>
              <th>
                <div className="btnAction flex gap-2">
                  <Tooltip id={`tooltipBtnAction-1`}/>
                  <label htmlFor={`viewMarker`} className="btn font-normal" data-tooltip-id={`tooltipBtnAction-1`} data-tooltip-content='Eliminar' >
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                    </svg>
                  </label>
                  <div className="btn" data-tooltip-id={`tooltipBtnAction-1`} data-tooltip-content='Editar Encuesta' onClick={()=>document.getElementById('my_modal_4').showModal()}>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.3 4.8 2.9 2.9M7 7H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-4.5m2.4-10a2 2 0 0 1 0 3l-6.8 6.8L8 14l.7-3.6 6.9-6.8a2 2 0 0 1 2.8 0Z"/>
                    </svg>
                  </div>
                  <ModalEditFactor />
                </div>
              </th>
            </tr>


            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar bg-slate-600 rounded-3xl p-1">
                    <svg className="w-8 h-8 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a9 9 0 0 0 5-1.5 4 4 0 0 0-4-3.5h-2a4 4 0 0 0-4 3.5 9 9 0 0 0 5 1.5Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold">Juan Francisco Herrera</div>
                    <div className="text-sm opacity-50">Santander</div>
                  </div>
                </div>
              </td>
              <td>
                Vereda: Agua Blanca
                <br/>
                <span className="badge badge-ghost badge-sm">Floridablanca</span>
              </td>
              <td>
                <div className="rating rating-xs pointer-events-none">
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400"  />
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                </div>
              </td>
              <th>
                <div className="btnAction flex gap-2">
                  <Tooltip id={`tooltipBtnAction-1`}/>
                  <label htmlFor={`viewMarker`} className="btn font-normal" data-tooltip-id={`tooltipBtnAction-1`} data-tooltip-content='Eliminar' >
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                    </svg>
                  </label>
                  <div className="btn" data-tooltip-id={`tooltipBtnAction-1`} data-tooltip-content='Editar Encuesta' onClick={()=>document.getElementById('my_modal_4').showModal()}>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.3 4.8 2.9 2.9M7 7H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-4.5m2.4-10a2 2 0 0 1 0 3l-6.8 6.8L8 14l.7-3.6 6.9-6.8a2 2 0 0 1 2.8 0Z"/>
                    </svg>
                  </div>
                  <ModalEditFactor />
                </div>
              </th>
            </tr>


            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar bg-slate-600 rounded-3xl p-1">
                    <svg className="w-8 h-8 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a9 9 0 0 0 5-1.5 4 4 0 0 0-4-3.5h-2a4 4 0 0 0-4 3.5 9 9 0 0 0 5 1.5Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold">Juan Francisco Herrera</div>
                    <div className="text-sm opacity-50">Santander</div>
                  </div>
                </div>
              </td>
              <td>
                Vereda: Agua Blanca
                <br/>
                <span className="badge badge-ghost badge-sm">Floridablanca</span>
              </td>
              <td>
                <div className="rating rating-xs pointer-events-none">
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400"  />
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                </div>
              </td>
              <th>
                <div className="btnAction flex gap-2">
                  <Tooltip id={`tooltipBtnAction-1`}/>
                  <label htmlFor={`viewMarker`} className="btn font-normal" data-tooltip-id={`tooltipBtnAction-1`} data-tooltip-content='Eliminar' >
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                    </svg>
                  </label>
                  <div className="btn" data-tooltip-id={`tooltipBtnAction-1`} data-tooltip-content='Editar Encuesta' onClick={()=>document.getElementById('my_modal_4').showModal()}>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.3 4.8 2.9 2.9M7 7H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-4.5m2.4-10a2 2 0 0 1 0 3l-6.8 6.8L8 14l.7-3.6 6.9-6.8a2 2 0 0 1 2.8 0Z"/>
                    </svg>
                  </div>
                  <ModalEditFactor />
                </div>
              </th>
            </tr>


            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar bg-slate-600 rounded-3xl p-1">
                    <svg className="w-8 h-8 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a9 9 0 0 0 5-1.5 4 4 0 0 0-4-3.5h-2a4 4 0 0 0-4 3.5 9 9 0 0 0 5 1.5Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold">Juan Francisco Herrera</div>
                    <div className="text-sm opacity-50">Santander</div>
                  </div>
                </div>
              </td>
              <td>
                Vereda: Agua Blanca
                <br/>
                <span className="badge badge-ghost badge-sm">Floridablanca</span>
              </td>
              <td>
                <div className="rating rating-xs pointer-events-none">
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400"  />
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                </div>
              </td>
              <th>
                <div className="btnAction flex gap-2">
                  <Tooltip id={`tooltipBtnAction-1`}/>
                  <label htmlFor={`viewMarker`} className="btn font-normal" data-tooltip-id={`tooltipBtnAction-1`} data-tooltip-content='Eliminar' >
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                    </svg>
                  </label>
                  <div className="btn" data-tooltip-id={`tooltipBtnAction-1`} data-tooltip-content='Editar Encuesta' onClick={()=>document.getElementById('my_modal_4').showModal()}>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.3 4.8 2.9 2.9M7 7H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-4.5m2.4-10a2 2 0 0 1 0 3l-6.8 6.8L8 14l.7-3.6 6.9-6.8a2 2 0 0 1 2.8 0Z"/>
                    </svg>
                  </div>
                  <ModalEditFactor />
                </div>
              </th>
            </tr>


            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar bg-slate-600 rounded-3xl p-1">
                    <svg className="w-8 h-8 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a9 9 0 0 0 5-1.5 4 4 0 0 0-4-3.5h-2a4 4 0 0 0-4 3.5 9 9 0 0 0 5 1.5Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold">Juan Francisco Herrera</div>
                    <div className="text-sm opacity-50">Santander</div>
                  </div>
                </div>
              </td>
              <td>
                Vereda: Agua Blanca
                <br/>
                <span className="badge badge-ghost badge-sm">Floridablanca</span>
              </td>
              <td>
                <div className="rating rating-xs pointer-events-none">
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400"  />
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                </div>
              </td>
              <th>
                <div className="btnAction flex gap-2">
                  <Tooltip id={`tooltipBtnAction-1`}/>
                  <label htmlFor={`viewMarker`} className="btn font-normal" data-tooltip-id={`tooltipBtnAction-1`} data-tooltip-content='Eliminar' >
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                    </svg>
                  </label>
                  <div className="btn" data-tooltip-id={`tooltipBtnAction-1`} data-tooltip-content='Editar Encuesta' onClick={()=>document.getElementById('my_modal_4').showModal()}>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.3 4.8 2.9 2.9M7 7H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-4.5m2.4-10a2 2 0 0 1 0 3l-6.8 6.8L8 14l.7-3.6 6.9-6.8a2 2 0 0 1 2.8 0Z"/>
                    </svg>
                  </div>
                  <ModalEditFactor />
                </div>
              </th>
            </tr>
          </tbody>
          
          
        </table>
      </div>
    </div>
  )
}

export default EditEncuesta