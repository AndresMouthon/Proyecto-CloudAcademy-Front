import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { APISAUTH } from "../../models/apis.models";
import { DASHBOARD, RUTASPUBLICAS } from "../../models/routes.model";
import { crearAcceso, resetearAcceso } from "../../redux/rolSlice.redux";
import { ejecutarAlerta } from "../../utils/alert/alert.utl";
import { crearStorage, removerStorage } from "../../utils/localStorage/localStorage.util";

function useAuth() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [usuario, setUsuario] = useState({
        documento: "",
        clave: "",
    });
    const [loading, setLoading] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    function handleChange({ target }) {
        setUsuario({
            ...usuario,
            [target.name]: target.value,
        });
    };

    async function iniciarSesion() {
        if (usuario.documento === "" || usuario.clave === "") {
            ejecutarAlerta({ icon: "info", title: "Cuidado", text: "Faltan datos...", showConfirmButton: false, timer: 2000, confirmButtonText: "Null" });
        } else {
            setLoading(true);
            try {
                const options = {
                    headers: {
                        "Content-Type": "application/json",
                    },
                };
                const response = await axios.post(APISAUTH.LOGIN, usuario, options);
                setLoading(false);
                if (response.data.token) {
                    crearStorage("token", response.data.token);
                    validarRolesUsuario(response.data.roles);
                } else {
                    ejecutarAlerta({ icon: "info", title: "Cuidado", text: response.data.message, showConfirmButton: false, timer: 2000, confirmButtonText: "Null" });
                };
            } catch (error) {
            };
        };
    };

    function validarRolesUsuario(roles = []) {
        if (roles.length > 1) {
            dispatch(crearAcceso(roles));
            toggleModal();
            navigate(DASHBOARD.VERIFICAR);
        } else {
            inicializarRol(roles);
        };
    };

    const toggleModal = () => {
        setOpenModal(!openModal);
    };

    function inicializarRol(roles = []) {
        dispatch(crearAcceso(roles[0].codigo_rol));
        navigate(DASHBOARD.DASHBOARD);
    };

    const cerrarSesion = () => {
        Swal.fire({
            title: '¿Quiere cerrar la sesión actual?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, salir!',
            cancelButtonText: 'No'
        }).then((result) => {
            if (result.isConfirmed) {
                removerStorage("token");
                dispatch(resetearAcceso());
                navigate(RUTASPUBLICAS.LOGIN, { replace: true });
            }
        })
    };

    return {
        handleChange,
        iniciarSesion,
        cerrarSesion,
        toggleModal,
        setOpenModal,
        usuario,
        loading,
        openModal,
    };
}

export default useAuth;
