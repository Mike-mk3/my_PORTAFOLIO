function Header() {
    return (
        <>
            <nav className="p-3 mb-3 bg-body-tertiary" data-bs-theme="dark">
                <div className="container" >
                    <div className=" d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"  >
                        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0" >
                           
                        </a>
                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 ">
                        <button type="button" class="btn me-3">Mi Perfil</button>
                            <button type="button" class="btn me-3" >Proyectos</button>
                        </ul>
                        <div>
                            <a>
                                <img src="https://github.com/mdo.png" width={60} height={60} className="rounded-circle" />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    );
}

export default Header;