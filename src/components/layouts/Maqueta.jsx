import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./aside/Sidebar";
import { ContenedorContenido } from "./ContenedorContenido";
import { Navbar } from "./navbar/Navbar";

export function Maqueta() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <ContenedorContenido>
        <Outlet />
      </ContenedorContenido>
    </>
  );
}
