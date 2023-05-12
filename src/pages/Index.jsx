import image01 from '../../image/Team work-amico.svg'
import image02 from '../../image/Top up credit-bro.svg'
import image03 from '../../image/Rising-amico.svg'
import Formulario from './Formulario'
import { useState } from 'react'
const Index = () => {

    const [sede, setSede] = useState('')

    return (
        <>
            <main className="contenedor-principal">
                <h1 className="titulo">Bienvenido a <span>Comunik2 Peru</span> </h1>
                <h3 className="subtitulo">Somos el mejor equipo de ventas con mas de 4 años de experiencia en el mercado de Contact Center.</h3>
                <h3 className="subtitulo">¡Vive la experiencia CK2 y se parte de nuestro equipo</h3>
                <div className="contenedor-imagenes">
                    <div className="card">
                        <div className="contenedor-imagen">
                            <img src={image01} alt="" />
                        </div>
                        <h2 className="card-titulo">Excelente clima laboral</h2>
                        <p className="card-descripcion">Contamos con entorno productivo para facilitar el desempeño de nuestros colaboradores procurando un espacio con condiciones apropiadas al trabajo.</p>
                    </div>
                    <div className="card">
                        <div className="contenedor-imagen">
                            <img src={image02} alt="" />
                        </div>
                        <h2 className="card-titulo">Buena remuneracion</h2>
                        <p className="card-descripcion">Aparte de tu salario seras capaz de obtener geniales bonos de acuerdo tu rendimiento.</p>
                    </div>
                    <div className="card">
                        <div className="contenedor-imagen">
                            <img src={image03} alt="" />
                        </div>
                        <h2 className="card-titulo">Linea de carrera</h2>
                        <p className="card-descripcion">Tenemos plan de crecimiento donde se incluyen beneficios, tareas y roles que asumiras a lo largo de tu estancia en la empresa.</p>
                    </div>
                </div>
            </main>
            <section className="postulacion">
                <h1 className="postulacion-titulo">Potula ahora</h1>
                <div className="contenedor-botones">
                    <button className="boton" onClick={(e) => setSede(e.target.innerHTML)}>Lima</button>
                    <button className="boton" onClick={(e) => setSede(e.target.innerHTML)}>Trujillo</button>
                </div>
            </section>

            <section className={sede == '' ? 'form-disable': ''}>
                <Formulario sede={sede} setSede={setSede} />
            </section>

        </>
    )
}

export default Index