import React from "react";
import { AiOutlineClockCircle, AiOutlineIdcard, AiOutlinePhone } from "react-icons/ai";
import { BsCalendar } from "react-icons/bs";
import { FaCity } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { GiPathDistance } from "react-icons/gi";
import { HiOutlineMail } from "react-icons/hi";
import { LiaTransgenderSolid } from "react-icons/lia";
import { MdKeyboard, MdOutlineAssignment, MdOutlineBusiness, MdOutlineLayers } from "react-icons/md";

function FormularioPersonaComponent({
    listadoTiposDocumento,
    listadoDepartamentos,
    listadoCiudadesPorDepartamento,
    listadoSubdivisionPorCiudad,
    zona,
    ciudad_id,
    handleChange,
    perfilGenero,
    persona,
}) {
    return (
        <div className="grid md:grid-cols-1 border bg-white border-gray-200 rounded-lg shadow dark:border-gray-700 dark:bg-gray-800">
            <div className="flex flex-col items-center md:flex-col lg:flex-row max-w-full">
                <img className="object-fit w-full md:mt-2 lg:mt-2 m-2 rounded-full h-40 md:h-40 md:w-40" src={perfilGenero} alt=".........." />
                <div className="flex flex-col justify-between p-4 leading-normal w-full">
                    <div className="flex flex-col md:flex-col lg:flex-row lg:space-y-0 lg:space-x-6 lg:mb-6 max-w-full">
                        <div className="w-full lg:w-1/2">
                            <label htmlFor="select-genero" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >
                                Género
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                                    <LiaTransgenderSolid className="w-6 h-6 text-sky-950" />
                                </div>
                                <select name="genero" onChange={handleChange} id="select-genero" className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full pl-10 pr-2.5 py-2.5 cursor-pointer" value={persona.genero ?? ""} >
                                    <option value="0">Seleccione una opcion...</option>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Femenino">Femenino</option>
                                </select>
                            </div>
                        </div>
                        <div className="w-full lg:w-8/12 mt-6 lg:mt-0">
                            <label htmlFor="fecha_nacimiento" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >
                                Fecha nacimiento
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                                    <BsCalendar className="w-5 h-5 text-sky-950" />
                                </div>
                                <input type="date" id="fecha_nacimiento" name="fecha_nacimiento" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full pl-10 pr-2.5 py-2.5" placeholder="Select date" value={persona.fecha_nacimiento} />
                            </div>
                        </div>
                        <div className="w-full lg:w-1/5 mt-6 lg:mt-0">
                            <label htmlFor="edad" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >
                                Edad
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                                    <AiOutlineClockCircle className="w-6 h-6 text-sky-950" />
                                </div>
                                <input type="number" id="edad" name="edad" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full pl-10 pr-2.5 py-2.5" placeholder="Edad..." value={persona.edad} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-col lg:flex-row lg:space-y-0 lg:space-x-6 mb-6 max-w-full">
                        <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
                            <label htmlFor="tipo_documento_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >
                                Tipo identificacion
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                                    <MdOutlineAssignment className="w-6 h-6 text-sky-950" />
                                </div>
                                <select id="tipo_documento_id" name="tipo_documento_id" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full pl-10 pr-2.5 py-2.5 cursor-pointer" value={persona.tipo_documento_id} >
                                    <option value="0">Seleccione una opcion...</option>
                                    {
                                        listadoTiposDocumento.map((tipoDocumento) => (
                                            <option key={tipoDocumento.id} value={tipoDocumento.id}>
                                                {tipoDocumento.tipo_documento}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="w-full lg:w-full mt-6 lg:mt-0">
                            <label htmlFor="documento" className={`block mb-2 text-sm font-medium dark:text-white ${persona.estado ? "text-gray-400" : "text-gray-900"}`} >
                                Documento de identidad
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                                    <AiOutlineIdcard className={`w-6 h-6 ${persona.estado ? "text-gray-400" : "text-sky-950"}`} />
                                </div>
                                <input type="text" id="documento" name="documento" onChange={handleChange} className={`bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full pl-10 pr-2.5 py-2.5 ${persona.estado ? "cursor-not-allowed" : "cursor-text"}`} placeholder="Documento de identidad..." value={persona.documento} disabled={persona.estado} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center md:flex-col lg:flex-row max-w-full dark:border-gray-700 dark:bg-gray-800 -mt-9">
                <div className="flex flex-col justify-between p-4 leading-normal w-full">
                    <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 mb-6 justify-items-center max-w-full">
                        <div className="w-full lg:w-8/12">
                            <label htmlFor="nombres" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >
                                Nombres
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                                    <MdKeyboard className="w-6 h-6 text-sky-950" />
                                </div>
                                <input type="text" id="nombres" name="nombres" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full pl-10 pr-2.5 py-2.5" placeholder='Nombres...' value={persona.nombres} />
                            </div>
                        </div>
                        <div className="w-full lg:w-8/12">
                            <label htmlFor="apellidos" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >
                                Apellidos
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                                    <MdKeyboard className="w-6 h-6 text-sky-950" />
                                </div>
                                <input type="text" id="apellidos" name="apellidos" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full pl-10 pr-2.5 py-2.5" placeholder='Apellidos...' value={persona.apellidos} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 mb-6 justify-items-center max-w-full">
                        <div className="w-full">
                            <label htmlFor="correo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >
                                Correo
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                                    <HiOutlineMail className="w-6 h-6 text-sky-950" />
                                </div>
                                <input type="email" id="correo" name="correo" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full pl-10 pr-2.5 py-2.5" placeholder="Correo electrónico..." value={persona.correo} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 mb-6 justify-items-center max-w-full">
                        <div className="w-full lg:w-8/12">
                            <label htmlFor="contacto" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >
                                Contacto
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                                    <AiOutlinePhone className="w-6 h-6 text-sky-950" />
                                </div>
                                <input type="number" id="contacto" name="contacto" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full pl-10 pr-2.5 py-2.5" placeholder="Teléfono..." value={persona.contacto} />
                            </div>
                        </div>
                        <div className="w-full lg:w-8/12">
                            <label htmlFor="departamento_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >
                                Departamento
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                                    <MdOutlineBusiness className="w-6 h-6 text-sky-950" />
                                </div>
                                <select id="departamento_id" name="departamento_id" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full pl-10 pr-2.5 py-2.5 cursor-pointer" value={persona.departamento_id ?? ""}>
                                    <option value={0}>Seleccione una opcion...</option>
                                    {
                                        listadoDepartamentos.map((departamento) => (
                                            <option key={departamento.id} value={departamento.id}>
                                                {departamento.departamento}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="w-full lg:w-8/12">
                            <label htmlFor="ciudad_id" className={`block mb-2 text-sm font-medium ${listadoCiudadesPorDepartamento.length === 0 ? "text-gray-400" : "text-gray-900"} dark:text-white`} >
                                Ciudad
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                                    <FaCity className="w-6 h-6 text-sky-950" />
                                </div>
                                <select id="ciudad_id" name="ciudad_id" onChange={handleChange} className={`bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full pl-10 pr-2.5 py-2.5 ${listadoCiudadesPorDepartamento.length === 0 || persona.departamento_id == 0 ? "cursor-not-allowed" : "cursor-pointer"}`} disabled={listadoCiudadesPorDepartamento.length === 0} value={persona.ciudad_id ?? ""}>
                                    <option value="0">Seleccione una opcion...</option>
                                    {
                                        listadoCiudadesPorDepartamento.map((ciudad) => (
                                            <option key={ciudad.id} value={ciudad.id}>
                                                {ciudad.ciudad}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 mb-6 justify-items-center max-w-full">
                        <div className="w-full lg:w-8/12">
                            <label htmlFor="zona" className={`block mb-2 text-sm font-medium ${Number(ciudad_id) === 0 || listadoCiudadesPorDepartamento.length === 0 ? "text-gray-400" : "text-gray-900"} dark:text-white`}>
                                Zona
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                                    <MdOutlineLayers className="w-6 h-6 text-sky-950" />
                                </div>
                                <select id="zona" name="zona" onChange={handleChange} disabled={Number(ciudad_id) === 0 || listadoCiudadesPorDepartamento.length === 0} className={`bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full pl-10 pr-2.5 py-2.5 ${Number(ciudad_id) === 0 || listadoCiudadesPorDepartamento.length === 0 ? "cursor-not-allowed" : "cursor-pointer"}`} value={persona.zona ?? ""} >
                                    <option value="">Seleccione una opcion...</option>
                                    <option value="Urbana">Urbana</option>
                                    <option value="Rural">Rural</option>
                                </select>
                            </div>
                        </div>
                        <div className="w-full lg:w-8/12">
                            <label htmlFor="subdivision_id" className={`block mb-2 text-sm font-medium ${Number(ciudad_id) === 0 || listadoCiudadesPorDepartamento.length === 0 || zona !== "Rural" ? "text-gray-400" : "text-gray-900"} dark:text-white`} >
                                Subdivision
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                                    <GiPathDistance className="w-6 h-6 text-sky-950" />
                                </div>
                                <select id="subdivision_id" name="subdivision_id" onChange={handleChange} disabled={Number(ciudad_id) === 0 || listadoCiudadesPorDepartamento.length === 0 || zona !== "Rural"} className={`bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full pl-10 pr-2.5 py-2.5 ${Number(ciudad_id) === 0 || listadoCiudadesPorDepartamento.length === 0 || zona !== "Rural" ? "cursor-not-allowed" : "cursor-pointer"}`} value={persona.subdivision_id ?? ""} >
                                    <option value="0">Seleccione una opcion...</option>
                                    {
                                        listadoSubdivisionPorCiudad.map((subdivision) => (
                                            <option key={subdivision.id} value={subdivision.id}>
                                                {subdivision.subdivision}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="w-full lg:w-8/12">
                            <label htmlFor="direccion" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >
                                Dirección
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                                    <FiMapPin className="w-6 h-6 text-sky-950" />
                                </div>
                                <input type="text" id="direccion" name="direccion" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full pl-10 pr-2.5 py-2.5" placeholder="Dirección..." value={persona.direccion} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormularioPersonaComponent;
