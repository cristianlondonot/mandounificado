import React from 'react';
import CardDptoState from './CardDptoState';

const DptoState = () => {
  return (
    <div className="collapse bg-base-200">
      <input type="checkbox" /> 
      <div className="collapse-title text-xl font-medium">
        <h1 className='text-2xl font-bold'>Información Veredas</h1>
      </div>
      <div className="collapse-content"> 
        <div className="flex gap-2">
          <CardDptoState title='Estado Veredas Por Dpto 2021' itemVeredafilter='1'/>
          <CardDptoState title='Estado Veredas Por Dpto 2022' itemVeredafilter='2'/>
          <CardDptoState title='Estados Veredas por Dpto 2021' itemVeredafilter='3'/>
        </div>
      </div>
    </div>
  )
}

export default DptoState