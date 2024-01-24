import React from 'react'

const ModalEditFactor = () => {
  return (
    <dialog id="my_modal_4" className="modal">
      <div className="modal-box w-11/12 max-w-5xl">
      <div className='w-full h-full p-10'>
        <div className="formTitle mb-12 flex items-center gap-3">
          <svg className="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.3 4.8 2.9 2.9M7 7H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-4.5m2.4-10a2 2 0 0 1 0 3l-6.8 6.8L8 14l.7-3.6 6.9-6.8a2 2 0 0 1 2.8 0Z"/>
          </svg>
          <h2 className="text-3xl font-bold">Editar factor</h2>
        </div>
        <div className="grid gap-3 grid-cols-2">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Carencia</span>
              <span className="label-text-alt font-light text-xs">(*Obligatorio)</span>
            </div>
            <input type="text" placeholder="Escriba aquí..." className="input font-normal input-bordered w-full" />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Seleccione el departamento</span>
              <span className="label-text-alt font-light text-xs">(*Obligatorio)</span>
            </div>
            <select className="select select-bordered font-normal" disabled defaultValue='SANTANDER'>
              <option value='SANTANDER'>Santander</option>
            </select>
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Seleccione sub región</span>
              <span className="label-text-alt font-light text-xs">(*Obligatorio)</span>
            </div>
            <select className="select select-bordered font-normal">
              <option disabled >Seleccione una sub región</option>
              <option>Barrancabermeja</option>
              <option>Bucaramanga</option>
              <option>Floridablanca</option>
              <option>Albania</option>
              
            </select>
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Seleccione una vereda</span>
              <span className="label-text-alt font-light text-xs">(*Obligatorio)</span>
            </div>
            <select className="select select-bordered font-normal" disabled>
              <option disabled >Seleccione una vereda</option>
              <option>Aguas Negras</option>
            </select>
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Gestion</span>
              <span className="label-text-alt font-light text-xs">(*Obligatorio)</span>
            </div>
            <select className="select select-bordered font-normal" defaultValue='default' >
              <option value='default' disabled >Seleccione la gestión que requiere</option>
              <option>Construir</option>
              <option>Crear</option>
              <option>Intervenir</option>
              <option>Mejorar</option>
              <option>Combatir</option>
            </select>
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Seleccione el tipo de factor</span>
              <span className="label-text-alt font-light text-xs">(*Obligatorio)</span>
            </div>
            <select className="select select-bordered font-normal" defaultValue='default'>
              <option disabled value='default' >Seleccione un tipo de factor</option>
              <option>FACTOR ECÓNOMICO</option>
              <option>FACTOR AMBIENTAL </option>
              <option>FACTOR DE INFRAESTRUCTURA</option>
              <option>FACTOR DE SEGURIDAD</option>
              <option>FACTOR SOCIAL Y CULTURAL</option>
            </select>
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Factor simplificado</span>
              <span className="label-text-alt font-light text-xs">(*Obligatorio)</span>
            </div>
            <select className="select select-bordered font-normal" defaultValue='default' disabled>
              <option disabled value='default' >Seleccione un tipo de factor</option>
              <option>ECÓNOMICO</option>
              <option>AMBIENTAL </option>
              <option>INFRAESTRUCTURA</option>
              <option>SEGURIDAD</option>
              <option>SOCIAL Y CULTURAL</option>
            </select>
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Actores a ejecutar carencia</span>
              <span className="label-text-alt font-light text-xs">(*Obligatorio)</span>
            </div>
            <input type="text" placeholder="Escriba aquí..." className="font-normal input input-bordered w-full" />
          </label>
        </div>
        
        <div className="btn-action flex justify-center">
          <button className="btn bg-green-800 hover:bg-green-700 text-slate-50 w-96 mt-9">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
            />
          </svg>
            Guardar información
          </button>
        </div>
      </div>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button, it will close the modal */}
            <button className="btn">Volver</button>
          </form>
        </div>
      </div>
    </dialog>
  )
}

export default ModalEditFactor