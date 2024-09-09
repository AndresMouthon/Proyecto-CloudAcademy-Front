import React from "react";
import { Link, useLocation } from "react-router-dom";

function LinkSidebar({ item }) {
    const location = useLocation();
    return (
        <>
            <li>
                <Link to={item.link} className={`flex items-center p-3 text-cyan-950 rounded-lg dark:text-white ${item.hover} hover:text-white dark:hover:bg-gray-700 group  ${location.pathname === item.path ? item.bg + " text-white" : ""}`} >
                    {item.icon}
                    <span className="ms-2">{item.texto}</span>
                </Link>
            </li>
        </>
    )
}

export default LinkSidebar;
