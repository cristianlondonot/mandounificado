import React from 'react'

const MenuLeftSecretarias = () => {
  return (
    <div>
      <ul className=" bg-base-200 w-80 min-h-full">
        <li>
          <div class="collapse bg-base-200">
            <input type="checkbox" /> 
            <div class="collapse-title text-md font-semibold">
              Secretarias
            </div>
            <div class="collapse-content"> 
              <ul>
                <li>
                  <div class="collapse bg-base-200">
                    <input type="checkbox" /> 
                    <div class="collapse-title text-md font-semibold">
                      Secretaria del interior
                    </div>
                    <div class="collapse-content"> 
                      <ul></ul>
                    </div>
                  </div>
               </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default MenuLeftSecretarias