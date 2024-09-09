import React from "react";
import { FcHome } from "react-icons/fc";
import { NavLink, useLocation } from "react-router-dom";
import { DASHBOARD } from "../../../models/routes.model";

function LinkInicio() {
    const location = useLocation();

    return (
        <>
            <li>
                <NavLink to={DASHBOARD.DASHBOARD} className={`flex items-center p-3 text-cyan-950 rounded-lg dark:text-white hover:bg-red-400 hover:text-white dark:hover:bg-gray-700 group  ${location.pathname === DASHBOARD.DASHBOARD ? "bg-red-400 text-white" : ""}`} >
                    <FcHome className="flex-shrink-0 w-6 h-6" />
                    <span className="ms-2">Inicio</span>
                </NavLink>
            </li>
        </>
    )
}

export default LinkInicio;
