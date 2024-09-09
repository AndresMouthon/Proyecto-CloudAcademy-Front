import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import RolSelectionModel from "../../components/layouts/rolesSelectionModal/RolSelectionModel";
import useAuth from "../../hooks/auth/useAuth";
import VentanaModal from "../../utils/modal/VentanaModal";
import { usarStorage } from "../../utils/localStorage/localStorage.util";

function Dashboard() {
    const { openModal, toggleModal, setOpenModal } = useAuth();
    const rol = useSelector((state) => state.rol);

    useEffect(() => {
        setOpenModal(rol.length > 1);
    }, [rol]);

    return (
        <>
            {/* {
                openModal &&
                <VentanaModal
                    titulo={"Por favor seleccione un rol"}
                    openModal={openModal}
                    cerrarModal={toggleModal}
                    footer={false}
                    loading={false}
                    btnCloseModal={false}
                >
                    <RolSelectionModel />
                </VentanaModal>
            } */}
            <h1>Contenido del Dashboard</h1>
        </>
    )
}

export default Dashboard;
