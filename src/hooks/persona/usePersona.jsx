import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { RUTASADMINISTRADOR } from "../../models/routes.model";
import {
    deleteEliminarPersona,
    getPersonasSinVerificar,
    getPersonasVerificadas,
    postRegistrarPersona,
    putActualizarCodigoVerificacion,
    putActualizarPersona
} from "../../services/persona/PersonaService";
import { ejecutarAlerta } from "../../utils/alert/alert.utl";
import { usarStorage } from "../../utils/localStorage/localStorage.util";
import { camposValidator } from "../../utils/validator/Validator.util";

function usePersona() {
    const token = usarStorage("token");
    const [listadoPersonasVerificadas, setListadoPersonasVerificadas] = useState([]);
    const [listadoPersonasSinVerificar, setListadoPersonasSinVerificar] = useState([]);
    const [loading, setLoading] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [departamento_id, setDepartamento_id] = useState("0");
    const [ciudad_id, setCodigoCiudad] = useState("0");
    const [zona, setZona] = useState("");
    const [subdivision_id, setCodigoSubdivision] = useState("0");
    const [persona, setPersona] = useState({
        genero: "0",
        tipo_documento_id: "0",
        documento: "",
        nombres: "",
        apellidos: "",
        fecha_nacimiento: "",
        edad: "",
        correo: "",
        contacto: "",
        departamento_id: "0",
        ciudad_id,
        zona,
        subdivision_id,
        direccion: "",
    });
    const [cambiarPerfilGenero, setCambiarPerfilGenero] = useState("");
    const navigate = useNavigate();
    const tituloModal = persona.estado ? "Actualizar persona" : "Crear persona";
    const [formularioModal, setFormularioModal] = useState("");

    const recargar = () => {
        setPersona({
            genero: "0",
            tipo_documento_id: "0",
            documento: "",
            nombres: "",
            apellidos: "",
            fecha_nacimiento: "",
            edad: "",
            correo: "",
            contacto: "",
            departamento_id: "0",
            ciudad_id,
            zona,
            subdivision_id,
            direccion: "",
        });
        setDepartamento_id("0");
        setCodigoCiudad("0");
        setZona("");
        setCodigoSubdivision("0");
        setCambiarPerfilGenero("");
        getListadoPersonasVerificadas();
        getListadoPersonasSinVerificar();
    };

    const getListadoPersonasVerificadas = async () => {
        try {
            setLoading(true);
            const data = await getPersonasVerificadas(token);
            setListadoPersonasVerificadas(data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    const getListadoPersonasSinVerificar = async () => {
        try {
            setLoading(true);
            const data = await getPersonasSinVerificar(token);
            setListadoPersonasSinVerificar(data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    const toggleModal = (formulario = "") => {
        setFormularioModal(formulario);
        recargar();
        setOpenModal(!openModal);
    };

    const handleFieldActions = (name, value) => {
        const actions = {
            genero: () => setCambiarPerfilGenero(value),
            departamento_id: () => {
                setDepartamento_id(value);
                if (value === "0") {
                    setCodigoCiudad("0");
                    setCodigoSubdivision("0");
                }
            },
            ciudad_id: () => {
                setCodigoCiudad(value);
                if (value === "0") {
                    setCodigoSubdivision("0");
                }
            },
            zona: () => setZona(value),
            subdivision_id: () => setCodigoSubdivision(value),
        };
        if (actions[name]) {
            actions[name]();
        }
    };

    const handleChange = ({ target }) => {
        const { name, value } = target;
        handleFieldActions(name, value);
        setPersona(prevPersona => ({
            ...prevPersona,
            ciudad_id: name === "departamento_id" && value === "0" ? "0" : prevPersona.ciudad_id,
            subdivision_id:
                (name === "departamento_id" && value === "0") ||
                    (name === "ciudad_id" && value === "0") ||
                    (name === "zona" && value !== "Rural") ? "0" : prevPersona.subdivision_id,
            [name]: value,
        }));
        console.log(persona);
    };

    const registrarPersona = async (e) => {
        e.preventDefault();
        const camposRequeridos = [{ campo: 'genero', valor: persona.genero }, { campo: 'tipo_documento_id', valor: persona.tipo_documento_id }, { campo: 'documento', valor: persona.documento }, { campo: 'nombres', valor: persona.nombres }, { campo: 'apellidos', valor: persona.apellidos }, { campo: 'fecha_nacimiento', valor: persona.fecha_nacimiento }, { campo: 'edad', valor: persona.edad }, { campo: 'correo', valor: persona.correo }, { campo: 'contacto', valor: persona.contacto }, { campo: 'departamento_id', valor: persona.departamento_id }, { campo: 'ciudad_id', valor: persona.ciudad_id }, { campo: 'zona', valor: persona.zona }, { campo: 'contacto', valor: persona.contacto }, { campo: 'direccion', valor: persona.direccion }];
        let mensaje = camposValidator(camposRequeridos) || "";
        if ((persona.zona === "Rural" && persona.subdivision_id === "0") && mensaje === "") {
            mensaje = "El campo Subdivisión es requerido";
        };
        if (mensaje !== "") {
            ejecutarAlerta({ icon: "info", title: "Cuidado", text: mensaje, showConfirmButton: false, timer: 2000, confirmButtonText: "Null" });
        } else {
            try {
                setLoading(true);
                const response = await postRegistrarPersona(persona, token);
                setLoading(false);
                if (response.mensaje === "Persona creada") {
                    ejecutarAlerta({
                        icon: "success",
                        title: "¡Registro exitoso!",
                        text: "Se ha enviado la información a su correo",
                        showConfirmButton: false,
                        timer: 4000,
                    });
                    toggleModal();
                    getListadoPersonasVerificadas();
                    getListadoPersonasSinVerificar();
                    navigate(RUTASADMINISTRADOR.PERSONAS + "#personasSinVerificar");
                } else if (response.errores) {
                    ejecutarAlerta({
                        icon: "info",
                        title: "¡Advertencia!",
                        text: response.errores[0].msg,
                        showConfirmButton: false,
                        timer: 2000,
                    });
                }
                else {
                    ejecutarAlerta({
                        icon: "info",
                        title: "¡Advertencia!",
                        text: response.mensaje,
                        showConfirmButton: false,
                        timer: 2000,
                    });
                };
            } catch (error) {
                setLoading(false);
                console.log(error);
            };
        };
    }

    const eliminarPersona = async (documento = "") => {
        try {
            Swal.fire({
                title: '¿Seguro que quiere eliminar esta persona?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, eliminar',
                cancelButtonText: 'No, cancelar'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const resultado = await deleteEliminarPersona(documento, token);
                    if (resultado.mensaje === "Persona eliminada") {
                        ejecutarAlerta({ icon: "success", title: "Eliminado correctamente", text: "Se ha eliminado correctamente", showConfirmButton: false, timer: 2000 });
                        getListadoPersonasVerificadas();
                        getListadoPersonasSinVerificar();
                    } else {
                        ejecutarAlerta({ icon: "info", title: "Cuidado", text: resultado.mensaje, showConfirmButton: false, timer: 3000 });
                    }
                }
            });
        } catch (error) {
            alertError(error.message);
        };
    };

    const capturarInformacion = (persona = {}) => {
        toggleModal("Persona");
        setDepartamento_id(persona.departamento_id);
        setCodigoCiudad(persona.ciudad_id);
        setZona(persona.zona);
        setPersona(persona);
    };

    const actualizarPersona = async (e) => {
        e.preventDefault();
        const camposRequeridos = [{ campo: 'genero', valor: persona.genero }, { campo: 'tipo_documento_id', valor: persona.tipo_documento_id }, { campo: 'documento', valor: persona.documento }, { campo: 'nombres', valor: persona.nombres }, { campo: 'apellidos', valor: persona.apellidos }, { campo: 'fecha_nacimiento', valor: persona.fecha_nacimiento }, { campo: 'edad', valor: persona.edad }, { campo: 'correo', valor: persona.correo }, { campo: 'contacto', valor: persona.contacto }, { campo: 'departamento_id', valor: persona.departamento_id }, { campo: 'ciudad_id', valor: persona.ciudad_id }, { campo: 'zona', valor: persona.zona }, { campo: 'contacto', valor: persona.contacto }, { campo: 'direccion', valor: persona.direccion }];
        let mensaje = camposValidator(camposRequeridos) || "";
        if ((persona.zona === "Rural" && persona.subdivision_id === "0") && mensaje === "") {
            mensaje = "El campo Subdivisión es requerido";
        };
        if (mensaje !== "") {
            ejecutarAlerta({ icon: "info", title: "Cuidado", text: mensaje, showConfirmButton: false, timer: 2000, confirmButtonText: "Null" });
        } else {
            try {
                setLoading(true);
                const response = await putActualizarPersona(persona.documento, persona, token);
                setLoading(false);
                if (response.mensaje === "Persona actualizada") {
                    ejecutarAlerta({
                        icon: "success",
                        title: "¡Actualización exitosa!",
                        text: "Se ha actualizado correctamente",
                        showConfirmButton: false,
                        timer: 2000,
                    });
                    toggleModal();
                    getListadoPersonasVerificadas();
                    getListadoPersonasSinVerificar();
                    navigate(RUTASADMINISTRADOR.PERSONAS);
                } else if (response.errores) {
                    ejecutarAlerta({
                        icon: "info",
                        title: "¡Advertencia!",
                        text: response.errores[0].msg,
                        showConfirmButton: false,
                        timer: 2000,
                    });
                }
                else {
                    ejecutarAlerta({
                        icon: "info",
                        title: "¡Advertencia!",
                        text: response.mensaje,
                        showConfirmButton: false,
                        timer: 2000,
                    });
                };
            } catch (error) {
                setLoading(false);
                console.log(error);
            };
        };
    };

    const actualizarCodigoVerificacion = async (documento = "") => {
        try {
            Swal.fire({
                icon: 'info',
                text: '¡Una vez actualize el codigo de verificación lo podra ver en su correo!',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, confimar',
                cancelButtonText: 'No, cancelar'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const resultado = await putActualizarCodigoVerificacion(documento, token);
                    console.log(resultado);
                    if (resultado.mensaje === "Código actualizado") {
                        ejecutarAlerta({ icon: "success", title: "Actualización exitosa", text: "Se ha actualizado su código", showConfirmButton: false, timer: 2000 });
                        getListadoPersonasVerificadas();
                        getListadoPersonasSinVerificar();
                    } else {
                        ejecutarAlerta({ icon: "", title: "Cuidado", text: resultado.mensaje, showConfirmButton: false, timer: 3000 });
                    }
                }
            });
        } catch (error) {
        }
    };

    const digitarCodigoVerificacion = (documento = "") => { 
        setFormularioModal("CodigoVerificacion");
        setPersona({
            ...persona,
            documento: documento
        });
        setOpenModal(!openModal);
    };

    useEffect(() => {
        getListadoPersonasVerificadas();
        getListadoPersonasSinVerificar();
    }, []);

    return {
        listadoPersonasVerificadas,
        listadoPersonasSinVerificar,
        tituloModal,
        loading,
        openModal,
        cambiarPerfilGenero,
        departamento_id,
        ciudad_id,
        zona,
        persona,
        formularioModal,
        toggleModal,
        handleChange,
        registrarPersona,
        eliminarPersona,
        capturarInformacion,
        actualizarPersona,
        actualizarCodigoVerificacion,
        digitarCodigoVerificacion,
    };
}

export default usePersona;
