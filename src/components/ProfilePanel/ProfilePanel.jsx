import React from 'react'

const ProfilePanel = () => {
  return (
    <div className='pt-[72.5px]'>
      <div className="p-10">
        <div className="profile-pic flex justify-center w-full">
          <div className="avatar">
            <div className="w-28 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
        <div className="name mt-8">
          <h2 className='text-center underline text-5xl font-bold text-green-800 hover:text-green-700 transition-all pointer-events-none'>Adriana Estrada Miranda</h2>
        </div>
        <div className="cargo flex gap-2 items-center mt-5 justify-center">
          <h4 className='text-xs'>Cargo:</h4>
          <h3 className='text-1xl font-bold text-green-900 hover:text-green-700 transition-all pointer-events-none'>Secretaria privada de la gobernación de Santander</h3>
        </div>
        <div className="perfil-profesional flex gap-2 items-center mt-5 justify-center">
          <h4 className='text-xs'>Perfil profesional:</h4>
          <h3 className='text-1xl font-bold text-green-900 hover:text-green-700 transition-all pointer-events-none'>Administradora de empresas con especialización en alta gerencia</h3>
        </div>
        <div className="jefe flex gap-2 items-center mt-5 justify-center">
          <h4 className='text-xs'>Jefe inmediato:</h4>
          <h3 className='text-1xl font-bold text-green-900 hover:text-green-700 transition-all pointer-events-none'>Gobernador del Santander</h3>
        </div>
        <div className="rol flex gap-2 items-center mt-5 justify-center">
          <h4 className='text-xs'>Rol:</h4>
          <h3 className='text-1xl font-bold text-green-900 hover:text-green-700 transition-all pointer-events-none'>Editora</h3>
        </div>
        <div className="email flex gap-2 items-center mt-5 justify-center">
          <h4 className='text-xs'>Email:</h4>
          <div className='text-1xl font-bold text-green-900 hover:text-green-700 transition-all pointer-events-none'>email@ejemplo.com</div>
        </div>
        <div className="telefono flex gap-2 items-center mt-5 justify-center">
          <h4 className='text-xs'>Teléfono:</h4>
          <div className='text-1xl font-bold text-green-900 hover:text-green-700 transition-all pointer-events-none'>300 000 0000</div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePanel