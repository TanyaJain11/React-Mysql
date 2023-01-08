import React from 'react'


const Header = () => {
  return (
  <header className="mb-3 glassmorphism">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <nav className="navbar justify-content-between">
            <a className="navbar-brand text-white fw-bold"> My Todo List</a>
            <form className="form-inline">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
                id="searchtextbox" />
            </form>
          </nav>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header
