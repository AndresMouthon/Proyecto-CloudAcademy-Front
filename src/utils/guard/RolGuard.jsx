import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { ROLES } from "../../models/roles.model";
import { ERRORRUTAS } from "../../models/routes.model";

const prohibido = <Navigate replace to={ERRORRUTAS.PAGE403} />;

export const AdministradorGuard = () => {
    const rol = useSelector((state) => state.rol);
    return rol === ROLES.ADMINISTRADOR ? <Outlet /> : prohibido;
};