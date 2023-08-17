import { Outlet } from "react-router-dom";
import logo from "../assets/logo.svg"

const Layout = () => {
    return (
      <>
        <nav className='navbar fixed-top navbar-expand-lg navbar-light'>
        <div className='container'>
            <a href='/' className='navbar-brand'>
                <span>
                    <img src={logo} height="50" alt='CD logo' /> 
                </span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
            data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

        </div>
        </nav>

      <Outlet />
      <footer className="footer bg-dark d-flex flex-column h-100"> 
        <div className="container">
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
              <div className="d-flex align-items-center">
                <span className="mb-3 mb-md-0 text-light">© 2023 Cole Devoy</span>
              </div>
          </footer>
        </div>
      </footer>
      </>
    )
  };
  
  export default Layout;