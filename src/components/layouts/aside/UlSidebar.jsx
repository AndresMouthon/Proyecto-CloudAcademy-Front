import React from "react";
import { FcBusinessman, FcCollaboration, FcConferenceCall, FcOrganization, FcTimeline } from "react-icons/fc";
import { useSelector } from 'react-redux';
import { ROLES } from "../../../models/roles.model";
import { RUTASADMINISTRADOR } from "../../../models/routes.model";
import LinkInicio from "./LinkInicio";
import LinkSidebar from "./LinkSidebar";

function UlSidebar() {

    const menuLoading = [
        {
            icon: (
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center space-x-1">
                    <div className="w-1 h-4 bg-gray-400 animate-pulse"></div>
                    <div className="w-1 h-4 bg-gray-400 animate-pulse delay-200"></div>
                    <div className="w-1 h-4 bg-gray-400 animate-pulse delay-400"></div>
                </div>
            ),
            texto: "Cargando...",
            link: "#",
            path: "#",
            bg: "bg-gray-400",
            hover: "hover:bg-gray-400 cursor-not-allowed"
        },
    ];
    const menuAdministrador = [
        { icon: <FcOrganization className="flex-shrink-0 w-6 h-6" />, texto: "Sedes", link: RUTASADMINISTRADOR.SEDES, path: RUTASADMINISTRADOR.SEDES, bg: "bg-green-400", hover: "hover:bg-green-400" },
        { icon: <FcConferenceCall className="flex-shrink-0 w-6 h-6" />, texto: "Personas", link: RUTASADMINISTRADOR.PERSONAS, path: RUTASADMINISTRADOR.PERSONAS, bg: "bg-slate-400", hover: "hover:bg-slate-400" },
        { icon: <FcBusinessman className="flex-shrink-0 w-6 h-6" />, texto: "Rectores", link: RUTASADMINISTRADOR.RECTORES, path: RUTASADMINISTRADOR.RECTORES, bg: "bg-indigo-400", hover: "hover:bg-indigo-400" },
        { icon: <FcCollaboration className="flex-shrink-0 w-6 h-6" />, texto: "Administradores", link: RUTASADMINISTRADOR.ADMINISTRADORES, path: RUTASADMINISTRADOR.ADMINISTRADORES, bg: "bg-blue-400", hover: "hover:bg-blue-400" },
        { icon: <FcTimeline className="flex-shrink-0 w-6 h-6" />, texto: "Localidades", link: RUTASADMINISTRADOR.LOCALIDADES, path: RUTASADMINISTRADOR.LOCALIDADES, bg: "bg-purple-400", hover: "hover:bg-purple-400" },
    ];
    const menuRector = [
        { icon: <FcOrganization className="flex-shrink-0 w-6 h-6" />, texto: "Sedes", link: RUTASADMINISTRADOR.SEDES, path: RUTASADMINISTRADOR.SEDES, bg: "bg-green-400", hover: "hover:bg-green-400" },
    ];
    const menuDocente = [
        { icon: <FcOrganization className="flex-shrink-0 w-6 h-6" />, texto: "Sedes", link: RUTASADMINISTRADOR.SEDES, path: RUTASADMINISTRADOR.SEDES, bg: "bg-green-400", hover: "hover:bg-green-400" },
        { icon: <FcConferenceCall className="flex-shrink-0 w-6 h-6" />, texto: "Personas", link: RUTASADMINISTRADOR.PERSONAS, path: RUTASADMINISTRADOR.PERSONAS, bg: "bg-slate-400", hover: "hover:bg-slate-400" },
        { icon: <FcBusinessman className="flex-shrink-0 w-6 h-6" />, texto: "Rectores", link: RUTASADMINISTRADOR.RECTORES, path: RUTASADMINISTRADOR.RECTORES, bg: "bg-indigo-400", hover: "hover:bg-indigo-400" },
        { icon: <FcCollaboration className="flex-shrink-0 w-6 h-6" />, texto: "Administradores", link: RUTASADMINISTRADOR.ADMINISTRADORES, path: RUTASADMINISTRADOR.ADMINISTRADORES, bg: "bg-blue-400", hover: "hover:bg-blue-400" },
        { icon: <FcTimeline className="flex-shrink-0 w-6 h-6" />, texto: "Localidades", link: RUTASADMINISTRADOR.LOCALIDADES, path: RUTASADMINISTRADOR.LOCALIDADES, bg: "bg-purple-400", hover: "hover:bg-purple-400" },
    ];
    const menuAlumno = [
        { icon: <FcOrganization className="flex-shrink-0 w-6 h-6" />, texto: "Sedes", link: RUTASADMINISTRADOR.SEDES, path: RUTASADMINISTRADOR.SEDES, bg: "bg-green-400", hover: "hover:bg-green-400" },
    ];
    const menuFamiliar = [
        { icon: <FcOrganization className="flex-shrink-0 w-6 h-6" />, texto: "Sedes", link: RUTASADMINISTRADOR.SEDES, path: RUTASADMINISTRADOR.SEDES, bg: "bg-green-400", hover: "hover:bg-green-400" },
    ];
    const rol = useSelector((state) => state.rol);
    const items = rol === ROLES.ADMINISTRADOR ? menuAdministrador : rol === ROLES.RECTOR ? menuRector : rol === ROLES.DOCENTE ? menuDocente : rol === ROLES.ALUMNO ? menuAlumno : rol === ROLES.FAMILIAR ? menuFamiliar : menuLoading;

    return (
        <ul className="space-y-2 font-medium">
            {items[0].texto !== "Cargando..." ? <LinkInicio /> : null}
            {items.map((item, index) => (
                <LinkSidebar
                    key={index}
                    item={item}
                />
            ))}
        </ul>
    )
}

export default UlSidebar;
