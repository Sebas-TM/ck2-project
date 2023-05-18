import '../styles/formulario.css'
import { FiX } from "react-icons/fi";
import { useState } from 'react'
const Formulario = ({ sede, setSede }) => {

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [dni, setDni] = useState('')
    const [edad, setEdad] = useState()
    const [estado_civil, setEstado_civil] = useState('')
    const [dep_prov, setDep_prov] = useState('')
    const [distrito, setDistrito] = useState('')
    const [fecha_nac, setFecha_nac] = useState('')
    const [sexo, setSexo] = useState('')
    const [direccion, setDireccion] = useState('')
    const [distritoActual, setDistritoActual] = useState('')
    const [telefono, setTelefono] = useState('')
    const [celular, setCelular] = useState('')
    const [correo, setCorreo] = useState('')

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
                    <div className='contenedor-principal-formulario'>
                        <div className='contenedor-datos-personales'>
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
                                    onChange={(e) => setApellido(e.target.value)}
                                    value={apellido}
                                    type="text"
                                    id='apellido'
                                    name='apellido'
                                    placeholder='Escribe tus apellidos' />
                            </div>
                            <div className='datospersonales-group'>
                                <label htmlFor="dni">DNI</label>
                                <input
                                    onChange={(e) => setDni(e.target.value)}
                                    value={dni}
                                    type="text"
                                    id='dni'
                                    name='dni'
                                    placeholder='Escribe tu DNI' />
                            </div>
                            <div className='datospersonales-group'>
                                <label htmlFor="edad">Edad</label>
                                <input
                                    onChange={(e) => setEdad(e.target.value)}
                                    value={edad}
                                    type="number"
                                    id='edad'
                                    name='edad'
                                    placeholder='Escribe tu edad' />
                            </div>
                            <div className='datospersonales-group'>
                                <label htmlFor="estado">Estado civil</label>
                                <select className='estado_civil' name="" id=""
                                    onChange={(e) => setEstado_civil(e.target.value)}
                                    value={estado_civil}
                                >
                                    <option value="soltero">Soltero(a)</option>
                                    <option value="casado">Casado(a)</option>
                                    <option value="viudo">Viudo(a)</option>
                                    <option value="divorciado">Divorciado(a)</option>
                                    <option value="otro">Otro</option>
                                </select>
                                {/* <input
                            onChange={(e) => setEstado_civil(e.target.value)}
                            value={estado_civil}
                            type="text"
                            id='estado'
                            name='estado'
                            placeholder='Elige tu estado civil' /> */}
                            </div>
                        </div>
                        <div className='contenedor-nacimiento'>
                            <h4 className='form-subtitulo'>Lugar de nacimiento</h4>
                            <div className='datospersonales-group'>
                                <label htmlFor="departamento">Departamento/Provincia</label>
                                <input
                                    onChange={(e) => setDep_prov(e.target.value)}
                                    value={dep_prov}
                                    type="text"
                                    id='departamento'
                                    name='departamento'
                                    placeholder='Selecciona tu departamento o provincia' />
                            </div>
                            <div className='datospersonales-group'>
                                <label htmlFor="fecha_nac">Distrito</label>
                                <input
                                    onChange={(e) => setDistrito(e.target.value)}
                                    value={distrito}
                                    type="text"
                                    id='distrito'
                                    name='distrito'
                                    placeholder='Selecciona tu distrito' />
                            </div>
                            <div className='datospersonales-group'>
                                <label htmlFor="fecha_nac">Fecha de nacimiento</label>
                                <input
                                    onChange={(e) => setFecha_nac(e.target.value)}
                                    value={fecha_nac}
                                    type="date"
                                    id='fecha_nac'
                                    name='fecha_nac' />
                            </div>
                            <div className='datospersonales-group'>
                                <label htmlFor="fecha_nac">Sexo</label>
                                <select
                                    className='sexo'
                                    id='sexo'
                                    onChange={(e) => setSexo(e.target.value)}
                                    value={sexo}
                                >
                                    <option>Masculino</option>
                                    <option>Femenino</option>
                                    <option>Otro</option>
                                </select>
                            </div>
                        </div>
                        <div className='contenedor-nacimiento'>
                            <h4 className='form-subtitulo'>Informacion actual</h4>
                            <div className='datospersonales-group'>
                                <label htmlFor="direccion">Direccion</label>
                                <input
                                    onChange={(e) => setDireccion(e.target.value)}
                                    value={direccion}
                                    type="text"
                                    id='direccion'
                                    name='direccion'
                                    placeholder='Escribe tu direccion actual' />
                            </div>
                            <div className='datospersonales-group'>
                                <label htmlFor="distritoActual">Distrito</label>
                                <input
                                    onChange={(e) => setDistritoActual(e.target.value)}
                                    value={distritoActual}
                                    type="text"
                                    id='distritoActual'
                                    name='distritoActual'
                                    placeholder='Escribe el distrito donde resides actualmente' />
                            </div>
                            <div className='datospersonales-group'>
                                <label htmlFor="telefono">Telefono fijo</label>
                                <input
                                    onChange={(e) => setTelefono(e.target.value)}
                                    value={telefono}
                                    type="text"
                                    id='telefono'
                                    name='telefono'
                                    placeholder='Escribe tu numero de telefono' />
                            </div>
                            <div className='datospersonales-group'>
                                <label htmlFor="celular">celular</label>
                                <input
                                    className='celular'
                                    id='celular'
                                    name='celular'
                                    type='text'
                                    onChange={(e) => setCelular(e.target.value)}
                                    value={celular}
                                    placeholder='Escribe tu numero de celular' />

                            </div>
                            <div className='datospersonales-group'>
                                <label htmlFor="correo">Correo electronico</label>
                                <input
                                    className='correo'
                                    id='correo'
                                    name='correo'
                                    type='email'
                                    onChange={(e) => setCorreo(e.target.value)}
                                    value={correo}
                                    placeholder='Escribe tu correo electronico' />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className='boton' onClick={()=>{alert('Se enviara la informacion a la base de datos')}}>Enviar</button>
        </form>
    )
}

export default Formulario