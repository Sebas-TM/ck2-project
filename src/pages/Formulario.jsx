import '../styles/formulario.css'
import { FiX } from "react-icons/fi";
import { useState } from 'react'
const Formulario = ({ sede, setSede }) => {

    const [nombre, setNombre] = useState('')

    console.log(nombre)
    return (
        <form className="formulario">
            <div className='encabezado'>
                <h1 className='encabezado-titulo'>Ficha de postulacion</h1>
                <FiX
                    className='boton-cerrar'
                    onClick={() => setSede('')}
                />
            </div>
            <h1 className='titulo'>Sede <span>{sede}</span></h1>
            <div className='contenedor-inputs'>
                <div className='contenedor-inputs-primero'>
                    <h2>Datos personales</h2>
                    <div className='datospersonales-group'>
                        <label htmlFor="nombre">Nombres</label>
                        <input
                            onChange={(e) => setNombre(e.target.value)}
                            value={nombre}
                            type="text"
                            id='nombre'
                            name='nombre'
                            placeholder='Escribe tus nombres' />
                    </div>
                    <div className='datospersonales-group'>
                        <label htmlFor="apellido">Apellidos</label>
                        <input
                            type="text"
                            id='apellido'
                            name='apellido'
                            placeholder='Escribe tus apellidos' />
                    </div>
                    <div className='datospersonales-group'>
                        <label htmlFor="dni">DNI</label>
                        <input
                            type="text"
                            id='dni'
                            name='dni'
                            placeholder='Escribe tu DNI' />
                    </div>
                    <div className='datospersonales-group'>
                        <label htmlFor="edad">Edad</label>
                        <input
                            type="number"
                            id='edad'
                            name='edad'
                            placeholder='Escribe tu edad' />
                    </div>
                    <div className='datospersonales-group'>
                        <label htmlFor="estado">Estado civil</label>
                        <input
                            type="number"
                            id='estado'
                            name='estado'
                            placeholder='Elgie tu estado civil' />
                    </div>
                    <h4 className='form-subtitulo'>Lugar de nacimiento</h4>
                    <div className='datospersonales-group'>
                        <label htmlFor="departamento">Departamento/Provincia</label>
                        <input
                            type="text"
                            id='departamento'
                            name='departamento'
                            placeholder='Selecciona tu departamento o provincia' />
                    </div>
                    <div className='datospersonales-group'>
                        <label htmlFor="fecha_nac">Distrito</label>
                        <input
                            type="text"
                            id='distrito'
                            name='distrito'
                            placeholder='Selecciona tu distrito' />
                    </div>
                    <div className='datospersonales-group'>
                        <label htmlFor="fecha_nac">Fecha de nacimiento</label>
                        <input
                            type="date"
                            id='fecha_nac'
                            name='fecha_nac' />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Formulario