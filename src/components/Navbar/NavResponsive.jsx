import React from 'react'

const NavResponsive = () => {
  return (
    <div>
      <div className="aih" style="min-height: 192px;">
        <nav className="aiu" data-headlessui-state="">
          <div className="gx ua arc cey dde">
            <div className="ab lx nl yz zf">
              <div className="lx yz arc dcx">
                <div className="up">
                  <img className="og tm" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=500" alt="Your Company" />
                </div>
                <div className="md cub cut">
                  <div className="lx abj">
                    <a href="#" className="adu aix are aru avz awd bag">Dashboard</a>
                    <a href="#" className="adu are aru avz awd axn bii blt">Team</a>
                    <a href="#" className="adu are aru avz awd axn bii blt">Projects</a>
                    <a href="#" className="adu are aru avz awd axn bii blt">Calendar</a>
                  </div>
                </div>
              </div>
              <div className="lx um ze arc cub czg">
                <div className="tn uc cxm">
                  <label for="search" className="t">Search</label>
                  <div className="ab">
                    <div className="u aa as cg lx yz atl">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="nz sb axo">
                        <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <input id="search" name="search" className="lu tn adu afa air arp atf aub axn bgc bmu bmv bnb cia cic" placeholder="Search" type="search" />
                  </div>
                </div>
              </div>
              <div className="lx cuz">
                <button className="ab ly yz ze adu aqp axo bii blt bmy bnd bne boa" id="headlessui-disclosure-button-1" type="button" aria-expanded="false" data-headlessui-state="">
                  <span className="aa ae"></span>
                  <span className="t">Open main menu</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="lu oc se">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                  </svg>
                </button>
              </div>
              <div className="md cua cut">
                <div className="lx yz">
                  <button type="button" className="ab up ads aiu aql axo blt bmy bnd boa bof bok">
                    <span className="aa ag"></span>
                    <span className="t">View notifications</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="oc se">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"></path>
                    </svg>
                  </button>
                  <div className="ab jx up" data-headlessui-state="">
                    <div>
                      <button className="ab lx ads aiu avz bag bmy bnd boa bof bok" id="headlessui-menu-button-2" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="">
                        <span className="aa ag"></span>
                        <span className="t">Open user menu</span>
                        <img className="og sj ads" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default NavResponsive