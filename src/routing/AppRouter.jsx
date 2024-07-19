import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom"
import { Home } from "../components/Home"
import { Articles } from "../components/Articles"
import { ErrorPage } from "../components/ErrorPage"
import { Abaut } from "../components/Abaut"
import { Contact } from "../components/Contact"
import { Login } from "../components/Login"

export const AppRouter = () => {
    return (
        <Router>
            { /* Menu de navegacion */}

            <nav className="navbar navbar-expand bg-body-tertiary">
                <div className="container-fluid">

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="/inicio" className="nav-link">Home</Link>
                            <Link to="/articulos" className="nav-link">Articulos</Link>
                            <Link to="/acerca-de" className="nav-link">Acerca de</Link>
                            <Link to="/contacto" className="nav-link">Contácto</Link>
                        </div>
                    </div>
                </div>
            </nav>

            { /* configurar rutas */}
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/inicio" element={<Home />}></Route>
                <Route path="/articulos" element={<Articles />}></Route>
                <Route path="/acerca-de" element={<Abaut />}></Route>
                <Route path="/contacto" element={< Contact />}></Route>
                <Route path="/login" element={< Login />}></Route>
                <Route path="*" element={<ErrorPage />}></Route>
            </Routes>
        </Router>
    )
}
