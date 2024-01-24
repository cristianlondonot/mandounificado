import React from 'react'
import VerdaMapTable from '../TableInfoMap/VerdaMapTable'

const ModalVeredasInfoCity = ({municipio}) => {
  return (
    <div>
      <div className="btn btn-sm" onClick={()=>document.getElementById(`my_modal_1${municipio}`).showModal()}>Info</div>
      <dialog id={`my_modal_1${municipio}`} className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Información</h3>
          <VerdaMapTable municipio={municipio} />
          <div className="modal-action">
            <button className="btn">Close</button>
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default ModalVeredasInfoCity