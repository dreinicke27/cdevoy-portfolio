import { Outlet, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import linkedIn from "../assets/linkedin.svg";

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
                <span className="navbar-toggler-icon d-none"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to="projects" className= "text-light d-none" data-toggle="collapse" data-target="#navbarCollapse">Projects</NavLink>
                </li>
              </ul>
            </div>

        </div>
        </nav>

      <Outlet />
      <footer className="footer bg-dark d-flex flex-column h-100"> 
        <div className="container-fluid">
          <footer>
            <div className="col-12 text-right">
                <a href="https://www.linkedin.com/in/coledevoy/" target="_blank" rel="noreferrer"><img src={linkedIn} alt="link to LinkedIn" height="24"/></a>
            </div>
            <div className="row py-3 justify-content-between">
                <div className="col-6">
                    <p className="text-light">© 2023 Cole Devoy</p>
                </div>    
            </div>
          </footer>
        </div>
      </footer>
      </>
    )
  };
  
  export default Layout;