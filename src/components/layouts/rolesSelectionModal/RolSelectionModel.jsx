import React from "react";
import { useSelector } from "react-redux";
import { ROLES } from "../../../models/roles.model";

function RolSelectionModel({ onRoleSelect }) {
    const options = [
        {
            codigo: ROLES.ADMINISTRADOR,
            nombre: "Administrador",
            icono: <i className="fas fa-user-shield text-blue-400"></i>,
            color: "text-blue-400",
        },
        {
            codigo: ROLES.RECTOR,
            nombre: "Rector",
            icono: <i className="fas fa-user-tie text-indigo-400"></i>,
            color: "text-indigo-400",
        },
        {
            codigo: ROLES.DOCENTE,
            nombre: "Docente",
            icono: <i className="fas fa-user-tie text-yellow-400"></i>,
            color: "text-yellow-400",
        },
        {
            codigo: ROLES.ESTUDIANTE,
            nombre: "Estudiante",
            icono: <i className="fas fa-user-graduate text-red-400"></i>,
            color: "text-red-400",
        },
        {
            codigo: ROLES.FAMILIAR,
            nombre: "Familiar",
            icono: <i className="fas fa-user-friends text-orange-400"></i>,
            color: "text-orange-400",
        },
    ];
    const roles = useSelector((state) => state.rol);
    const filteredRoles = roles.filter((role) =>
        options.some((option) => option.codigo === role.codigo_rol)
    );

    return (
        <div className="max-w-lg mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-4">
                {filteredRoles.map((role, index) => {
                    const option = options.find((opt) => opt.codigo === role.codigo_rol);
                    return (
                        <button key={index} onClick={() => onRoleSelect(role)} className="bg-muted rounded-lg p-4 flex flex-col items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-200 active:bg-gray-300 transition-colors" >
                            {option.icono}
                            <div className={`font-medium ${option.color}`}>{option.nombre}</div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default RolSelectionModel;
