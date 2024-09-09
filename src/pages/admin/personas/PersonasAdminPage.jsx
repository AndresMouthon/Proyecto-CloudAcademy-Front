import React from "react";
import { useLocation } from "react-router-dom";
import { imagenes } from "../../../assets/img/imagenes";
import DataTablePersonaComponent from "../../../components/admin/personas/DataTablePersonaComponent";
import FormularioPersonaComponent from "../../../components/admin/personas/formularios/FormularioPersonaComponent";
import OpcionesPersonaComponent from "../../../components/admin/personas/selecciones/OpcionesPersonaComponent";
import SubNavbarPersonaComponent from "../../../components/admin/personas/selecciones/SubNavbarPersonaComponent";
import useCiudad from "../../../hooks/localidad/useCiudad";
import useDepartamento from "../../../hooks/localidad/useDepartamento";
import useSubdivision from "../../../hooks/localidad/useSubdivision";
import usePersona from "../../../hooks/persona/usePersona";
import useTipoDocumento from "../../../hooks/persona/useTipoDocumento";
import { personaColumn } from "../../../models/columns/PersonaColumn";
import Container from "../../../utils/container/Container";
import VentanaModal from "../../../utils/modal/VentanaModal";
import FormularioCodigoVerificacionComponent from "../../../components/admin/personas/formularios/FormularioCodigoVerificacionComponent";

function PersonasAdminPage() {
    const {
        listadoPersonasVerificadas,
        listadoPersonasSinVerificar,
        tituloModal,
        loading,
        openModal,
        cambiarPerfilGenero,
        departamento_id,
        zona,
        ciudad_id,
        persona,
        formularioModal,
        inputRefs,
        toggleModal,
        handleChange,
        registrarPersona,
        eliminarPersona,
        capturarInformacion,
        actualizarPersona,
        actualizarCodigoVerificacion,
        digitarCodigoVerificacion,
        handleCodigoVerificacion,
        handleEliminarDigitoCodigoVerificacion,
    } = usePersona();
    let perfilGenero = "";
    if (cambiarPerfilGenero === "Masculino" || persona.genero === "Masculino") {
        perfilGenero = imagenes.avatarSinPerfilHombre;
    } else if (cambiarPerfilGenero === "Femenino" || persona.genero === "Femenino") {
        perfilGenero = imagenes.avatarSinPerfilMujer;
    } else {
        perfilGenero = imagenes.avatarSinPerfil;
    }
    const { listadoTiposDocumento } = useTipoDocumento();
    const { listadoDepartamentos } = useDepartamento();
    const { listadoCiudadesPorDepartamento } = useCiudad(departamento_id);
    const { listadoSubdivisionPorCiudad } = useSubdivision(ciudad_id);
    const location = useLocation();
    const columns = personaColumn({ location: location.hash, eliminarPersona, capturarInformacion, actualizarCodigoVerificacion, digitarCodigoVerificacion });
    const handler = persona.estado ? actualizarPersona : registrarPersona;
    return (
        <>
            <OpcionesPersonaComponent />
            <VentanaModal
                size={"max-w-6xl"}
                titulo={tituloModal}
                openModal={openModal}
                loading={loading}
                hanleSubmit={handler}
                btnCloseModal={true}
                footer={true}
                cerrarModal={toggleModal}
            >
                {
                    formularioModal === "Persona" && (
                        <FormularioPersonaComponent
                            listadoTiposDocumento={listadoTiposDocumento}
                            listadoDepartamentos={listadoDepartamentos}
                            listadoCiudadesPorDepartamento={listadoCiudadesPorDepartamento}
                            listadoSubdivisionPorCiudad={listadoSubdivisionPorCiudad}
                            zona={zona}
                            ciudad_id={ciudad_id}
                            cambiarPerfilGenero={cambiarPerfilGenero}
                            persona={persona}
                            handleChange={handleChange}
                            perfilGenero={perfilGenero}
                        />
                    )
                }
                {
                    formularioModal === "CodigoVerificacion" && (
                        <FormularioCodigoVerificacionComponent inputRefs={inputRefs} handleCodigoVerificacion={handleCodigoVerificacion} handleEliminarDigitoCodigoVerificacion={handleEliminarDigitoCodigoVerificacion} />
                    )
                }
            </VentanaModal>
            <Container>
                <div className={`w-full grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 -mt-1 transform transition-transform ${location.hash === "#personas" || location.hash === "" ? "scale-x-100" : "scale-x-0 fixed duration-0"}`} >
                    <SubNavbarPersonaComponent toggleModal={toggleModal} title={"Personas verificadas"} buttonOption={true} />
                    <DataTablePersonaComponent data={listadoPersonasVerificadas} columns={columns} />
                </div>
                <div className={`w-full grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 -mt-1 transform transition-transform ${location.hash === "#personasSinVerificar" ? "scale-x-100" : "scale-x-0 fixed duration-0"}`} >
                    <SubNavbarPersonaComponent toggleModal={toggleModal} title={"Personas sin verificar"} buttonOption={false} />
                    <DataTablePersonaComponent data={listadoPersonasSinVerificar} columns={columns} />
                </div>
            </Container>
        </>
    )
}

export default PersonasAdminPage;
