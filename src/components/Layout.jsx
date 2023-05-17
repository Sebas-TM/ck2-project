import { Outlet, Link } from 'react-router-dom'
import '../styles/layout.css'
import { FiMenu } from "react-icons/fi";
import { useState } from 'react';
const Layout = () => {

    const [height, setHeight] = useState(50)

    const year = new Date().getFullYear();
    const openMenu = () => {
        if(height == 50){
            setHeight(200)
        }else{
            setHeight(50)
        }
    }


    return (
        <div>
            <header className='header'  style={{ height: `${height}px` }}>
                <div className='contenedor-logo-menu'>
                    <div className='contenedor-logo'>
                        <img src="" alt="logo" />
                    </div>
                    <div className='contenedor-menu'>
                        <FiMenu onClick={openMenu} className='burguer' />
                    </div>
                </div>
                <div className={height==200 ? 'active': 'navegacion'}>
                    <Link onClick={openMenu} to="/" className='link'>Inicio</Link>
                    <Link onClick={openMenu} to="/nosotros" className='link'>Nosotros</Link>
                    <Link onClick={openMenu} to="/contacto" className='link'>Contactanos</Link>
                </div>
            </header>
            <div className='outlet'>
                <Outlet />
            </div>
            <footer>
                <p className='copyright'>{`Todos los derechos reservados © ${year}`}</p>
            </footer>
        </div>
    )
}

export default Layout