import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Maqueta } from "../components/layouts/Maqueta";
import { DASHBOARD, RUTASADMINISTRADOR, RUTASPUBLICAS } from "../models/routes.model";
import AdministradoresAdminPage from "../pages/admin/administradores/AdministradoresAdminPage";
import LocalidadesAdminPage from "../pages/admin/localidades/LocalidadesAdminPage";
import PersonasAdminPage from "../pages/admin/personas/PersonasAdminPage";
import RectoresAdminPage from "../pages/admin/rectores/RectoresAdminPage";
import SedesAdminPage from "../pages/admin/sedes/SedesAdminPage";
import LoginPage from "../pages/auth/LoginPage";
import Dashboard from "../pages/dashboard/Dashboard";
import VerifyRol from "../pages/dashboard/VerifyRol";
import { AuthGuard } from "../utils/guard/AuthGuard";
import { AdministradorGuard } from "../utils/guard/RolGuard";

function Rutas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={RUTASPUBLICAS.LOGIN} element={<LoginPage />} />
                <Route element={<AuthGuard />}>
                    <Route path={DASHBOARD.VERIFICAR} element={<VerifyRol />} />
                    <Route element={<Maqueta />}>
                        <Route path={DASHBOARD.DASHBOARD} element={<Dashboard />} />
                        <Route element={<AdministradorGuard />}>
                            <Route path={RUTASADMINISTRADOR.SEDES} element={<SedesAdminPage />} />
                            <Route path={RUTASADMINISTRADOR.PERSONAS} element={<PersonasAdminPage />} />
                            <Route path={RUTASADMINISTRADOR.RECTORES} element={<RectoresAdminPage />} />
                            <Route path={RUTASADMINISTRADOR.ADMINISTRADORES} element={<AdministradoresAdminPage />} />
                            <Route path={RUTASADMINISTRADOR.LOCALIDADES} element={<LocalidadesAdminPage />} />
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas;
