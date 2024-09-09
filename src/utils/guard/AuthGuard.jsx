import { Navigate, Outlet } from "react-router-dom";
import { RUTASPUBLICAS } from "../../models/routes.model";


export const AuthGuard = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  return token ? <Outlet /> : <Navigate replace to={RUTASPUBLICAS.LOGIN} />;
};