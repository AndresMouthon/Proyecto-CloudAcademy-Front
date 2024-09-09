import React from "react";
import { FaUser, FaUserAltSlash } from "react-icons/fa";

function OpcionesPersonaComponent() {
    return (
        <>
            <div className="sm:hidden w-full">
                <select onChange={(e) => (window.location.href = e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:none block w-full p-2.5 dark:bg-gray-700 dark:border-blue-600 dark:placeholder-gray-400 dark:text-white">
                    <option value="#personas">👉 Seleccione una opcion...</option>
                    <option value="#personas">🧍 Personas</option>
                    <option value="#personasSinVerificar">🧍 Personas sin verificar</option>
                </select>
            </div>
            <ul className="hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:text-gray-400 w-full mb-2">
                <li className="w-full focus-within:z-10">
                    <a href="#personas" className={`inline-flex items-center justify-center text-lg w-full h-full p-4 bg-white border-r border-gray-200 hover:bg-slate-300 transition-all duration-200 ${location.hash === "#personas" || location.hash === "" ? "md:bg-slate-400 text-white md:hover:bg-slate-400" : ""}`}>
                        <FaUser className="w-6 h-6 mr-2" /> Personas
                    </a>
                </li>
                <li className="w-full focus-within:z-10">
                    <a href="#personasSinVerificar" className={`inline-flex items-center justify-center text-lg w-full p-4 bg-white border-r border-gray-200 hover:bg-slate-300 transition-all duration-200} ${location.hash === "#personasSinVerificar" ? "md:bg-slate-400 text-white md:hover:bg-slate-400" : ""}`} >
                        <FaUserAltSlash className="w-6 h-6 mr-2" /> Personas sin verificar
                        <span className="ml-2">
                            0
                        </span>
                    </a>
                </li>
            </ul>
        </>
    )
}

export default OpcionesPersonaComponent;
