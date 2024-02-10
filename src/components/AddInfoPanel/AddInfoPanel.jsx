import React, {useState}from 'react'
import FormAddInfo from '../FormAddInfo/FormAddInfo'
import TableInfo from '../TableInfo/TableInfo'
import AddEncuesta from '../AddEncuesta/AddEncuesta'
import AddEncuestaMas from '../AddEncuestaMas/AddEncuestaMas'
import EditEncuesta from '../EditEncuesta/EditEncuesta'
import FormAddInfoMas from '../FormAddInfoMas/FormAddInfoMas'

const AddInfoPanel = () => {
  const [selectedForm, setSelectedForm] = useState('FormAddInfo'); // Inicializa con el formulario 2 seleccionado

  const handleButtonClick = (form) => {
    setSelectedForm(form);
  };
  return (
    <div className="drawer lg:drawer-open pt-[72.5px]">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content relative ">
        
        {selectedForm === 'FormAddInfo' && <FormAddInfo />}
        {selectedForm === 'FormAddInfoMas' && <FormAddInfoMas />}
        {selectedForm === 'TableInfo' && <TableInfo departamento={'SANTANDER'}/>}
        {selectedForm === 'AddEncuesta' && <AddEncuesta />}
        {selectedForm === 'AddEncuestaMas' && <AddEncuestaMas />}
        {selectedForm === 'EditEncuesta' && <EditEncuesta />}
        
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
          
        </label>
      </div>
      <div className="drawer-side pt-[72.5px] lg:pt-0">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 w-80 min-h-full ">
          <li>
            <details open>
              <summary className='btn-green-dark'>
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
                  d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
                Novedades de información
              </summary>
              <ul>
                <li><a className={selectedForm === 'FormAddInfo' ? 'active' : ''} onClick={() => handleButtonClick('FormAddInfo')}>Añadir factor <span className='text-[10px]'> (Individual)</span></a></li>
                <li><a className={selectedForm === 'FormAddInfoMas' ? 'active' : ''} onClick={() => handleButtonClick('FormAddInfoMas')}>Importar factor <span className='text-[10px]'> (Masiva) </span></a></li>
                <li><a className={selectedForm === 'TableInfo' ? 'active' : ''} onClick={() => handleButtonClick('TableInfo')}>Editar información</a></li>
                <li><a className={selectedForm === 'AddEncuesta' ? 'active' : ''} onClick={() => handleButtonClick('AddEncuesta')}>Añadir encuesta <span className='text-[10px]'> (Individual)</span></a></li>
                <li><a className={selectedForm === 'AddEncuestaMas' ? 'active' : ''} onClick={() => handleButtonClick('AddEncuestaMas')}>Importar encuesta <span className='text-[10px]'> (Masiva)</span></a></li>
                <li><a className={selectedForm === 'EditEncuesta' ? 'active' : ''} onClick={() => handleButtonClick('EditEncuesta')}>Editar encuesta</a></li>
              </ul>
            </details>
          </li>
          
        </ul>
      </div>
    </div>
  )
}

export default AddInfoPanel