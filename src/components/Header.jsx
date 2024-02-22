import { NavLink } from "react-router-dom";

function Header() {
    return (
        <>
            <nav className=" p-3  bg-body-tertiary" data-bs-theme="dark">
                <div className="container" >
                    <div className=" d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"  >

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center ">



                            <li className="nav-item active">
                            <NavLink to="/perfil" className="nav-link link-body-emphasis px-2" aria-current="page" >Mi Perfil</NavLink>
                            </li>

                            <li className="nav-item active">
                            <NavLink to="/proyectos" className="nav-link link-body-emphasis px-2" aria-current="page" >Mis Proyectos</NavLink>
                            </li>
                            

                        
                        </ul>
                        <div>

                            <img src="https://github.com/mdo.png" width={60} height={60} className="rounded-circle" />

                        </div>
                    </div>
                </div>
            </nav>

        </>
    );
}

export default Header;