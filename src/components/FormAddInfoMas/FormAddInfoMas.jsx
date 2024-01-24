import React from 'react'

const FormAddInfoMas = () => {
  return (
    <div className='w-full h-full p-10'>
      <div className="formTitle mb-12 flex items-center gap-5">
        <svg className="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 10V4c0-.6-.4-1-1-1h-8a1 1 0 0 0-.8.3l-4 4a1 1 0 0 0-.2.6V20c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-2M10 3v4c0 .6-.4 1-1 1H5m5 6h9m0 0-2-2m2 2-2 2"/>
        </svg>
        <h2 className="text-5xl font-bold">Importar factores masivos </h2>
      </div>
      <div className="content">
        <p className='mb-10'>¡Ahorra tiempo y agrega encuestas de manera eficiente con nuestra función de importación masiva! Sigue estos pasos sencillos:</p>
        <ul className='list-decimal ps-10'>
          <li className='mb-5'>
            <span className='font-bold'>Arrastra y Suelta:</span>
            <ul className='list-disc ps-10'>
              <li>Busca en tu equipo el archivo de datos en formato Excel con los nuevos factores.</li>
              <li>Simplemente arrastra y suelta el archivo en la sección de importación señalada a continuación.</li>
            </ul>
          </li>
          <li className='mb-5'>
            <span className='font-bold'>Plantilla de Ejemplo:</span>
            <ul className='list-disc ps-10'>
              <li>¿No estás seguro de cómo debe ser el archivo? Descarga nuestra plantilla de ejemplo haciendo clic <a href="" className='text-green-800 underline font-bold'>aquí.</a></li>
              <li>Utiliza esta plantilla como guía para organizar tu información antes de importar.</li>
            </ul>
          </li>
          <li >
            <span className='font-bold'>Listo para Importar:</span>
            <ul className='list-disc ps-10'>
              <li>Verifica que tu archivo cumple con los requisitos de la plantilla.</li>
              <li>Haz clic en "Importar" y deja que nuestra herramienta se encargue del resto.</li>
            </ul>
          </li>
        </ul>
        <p className='mt-10'>¡Así de simple! Olvídate de agregar los factores uno a uno y disfruta de una experiencia de usuario más eficiente.</p>
        <div className="drag-file h-[300px] bg-green-50 border-dotted border-2 rounded-xl border-green-800 mt-10">
          <input type="file" name="upEncuestaMasiva" id="upEncuestaMasiva" className='hidden' />
          <label htmlFor="upEncuestaMasiva" className='relative w-full flex justify-center items-center h-full'>
            <svg className="w-6 h-6 text-green-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8v8a5 5 0 1 0 10 0V6.5a3.5 3.5 0 1 0-7 0V15a2 2 0 0 0 4 0V8"/>
            </svg>
            <span className='text-green-800 ms-2 underline'>Suelte aquí el archivo o haga clic para explorar en su equipo</span>
          </label>
        </div>
        <div className="btn-action flex justify-center">
          <button className="btn  bg-green-800 hover:bg-green-700 w-96 mt-9">
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12V8c0-.4.1-.6.3-.8l4-4 .6-.2H18c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H6a1 1 0 0 1-1-1v-4m5-13v4c0 .6-.4 1-1 1H5m0 6h9m0 0-2-2m2 2-2 2"/>
            </svg>
            Importar factores
          </button>
        </div>
      </div>

    </div>
  )
}

export default FormAddInfoMas