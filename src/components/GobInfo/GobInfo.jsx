import React from 'react'
import './GobInfo.sass'

const GobInfo = () => {
  return (
    <div className="stats shadow w-full">
  
      <div className="stat">
        <div className="stat-figure text-secondary">
          <svg className="w-7 h-7 " stroke="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path  strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="M13.6 16.7c.2.3.5.5.9.6a1.4 1.4 0 0 0 1.7-.8c.2-.6-.4-1.3-1.2-1.5-.8-.2-1.4-.8-1.2-1.5a1.4 1.4 0 0 1 1.7-.7c.4 0 .7.2.9.5m-1.4 4v.6m0-5.9v.7M4 15v4m3-6v6M6 8.5 10.5 5 14 7.5 18 4m0 0h-3.5M18 4v3m2 8a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"/>
          </svg>
        </div>
        <div className="stat-title">Inversión en el departamento</div>
        <div className="stat-value">$0</div>
        {/* //<div className="stat-desc">de 300</div> */}
      </div>
      
      <div className="stat">
        <div className="stat-figure text-secondary">
          <svg className="w-6 h-6" stroke="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="M18 5V4c0-.6-.4-1-1-1H9a1 1 0 0 0-.8.3l-4 4a1 1 0 0 0-.2.6V20c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-5M9 3v4c0 .6-.4 1-1 1H4m11.4.8 2.7 2.7m1.2-3.9a2 2 0 0 1 0 3l-6.6 6.6L9 18l.7-3.7 6.7-6.7a2 2 0 0 1 3 0Z"/>
          </svg>
        </div>
        <div className="stat-title">Ejecución propuesta</div>
        <div className="stat-value">0%</div>
        {/* <div className="stat-desc">de 100.000km</div> */}
      </div>
      
      <div className="stat">
        <div className="stat-figure text-secondary">
          <svg className="w-6 h-6" stroke="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeWidth="1.3" d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3a2.5 2.5 0 1 1 2-4.5M19.5 17h.5c.6 0 1-.4 1-1a3 3 0 0 0-3-3h-1m0-3a2.5 2.5 0 1 0-2-4.5m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3c0 .6-.4 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
          </svg>
        </div>
        <div className="stat-title">Población PAE</div>
        <div className="stat-value">125.767</div>
        {/* <div className="stat-desc">20</div> */}
      </div>
      
      <div className="stat">
        <div className="stat-figure ">
          <svg className="w-6 h-6" stroke="currentColor"  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="M8.9 15.1 15 9m-5-.6h0m3.1 7.2h0M14 4a2.8 2.8 0 0 0 2.3.9 2.8 2.8 0 0 1 2.9 3 2.8 2.8 0 0 0 .9 2.1 2.8 2.8 0 0 1 0 4.2 2.8 2.8 0 0 0-.9 2.2 2.8 2.8 0 0 1-3 2.9 2.8 2.8 0 0 0-2.1.9 2.8 2.8 0 0 1-4.2 0 2.8 2.8 0 0 0-2.2-.9 2.8 2.8 0 0 1-2.9-3 2.8 2.8 0 0 0-.9-2.1 2.8 2.8 0 0 1 0-4.2 2.8 2.8 0 0 0 .9-2.2 2.8 2.8 0 0 1 3-2.9A2.8 2.8 0 0 0 9.9 4a2.8 2.8 0 0 1 4.2 0Z"/>
          </svg>
        </div>
        <div className="stat-title">Porcentaje PAE</div>
        <div className="stat-value ">99,15%</div>
        {/* <div className="stat-desc flex gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
          Bucaramanga
        </div> */}
      </div>
      
      <div className="stat">
        <div className="stat-figure text-secondary">
          <svg className="w-6 h-6" stroke="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="M15 4h3c.6 0 1 .4 1 1v15c0 .6-.4 1-1 1H6a1 1 0 0 1-1-1V5c0-.6.4-1 1-1h3m0 3h6m-6 7 2 2 4-4m-5-9v4h4V3h-4Z"/>
          </svg>
        </div>
        <div className="stat-title">Placa Huella</div>
        <div className="stat-value ">0%</div>
        {/* <div className="stat-desc">Elogiaron la administración</div> */}
      </div>
      
      {/* <div className="stat">
        <div className="stat-figure text-secondary">
          <div className="avatar online">
            <div className="w-16 rounded-full">
              <img src="/img/brand/gob.jpeg" />
            </div>
          </div>
        </div>
        <div className="stat-value">86%</div>
        <div className="stat-title">Aprobación</div>
        <div className="stat-desc text-secondary">20 de Noviembre 2023</div>
      </div> */}
      
    </div>
  )
}

export default GobInfo