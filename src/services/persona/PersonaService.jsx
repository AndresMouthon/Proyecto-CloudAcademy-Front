import axios from "axios";
import { APISPERSONA } from "../../models/apis.models";

export async function getPersonasVerificadas(token) {
    const response = await axios.get(APISPERSONA.PERSONASVERIFICADAS, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

export async function getPersonasSinVerificar(token) {
    const response = await axios.get(APISPERSONA.PERSONASSINVERIFICAR, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

export async function postRegistrarPersona(persona, token) {
    const response = await axios.post(APISPERSONA.INSERTARPERSONA, persona, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

export async function deleteEliminarPersona(documento, token) {
    const response = await axios.delete(APISPERSONA.ELIMINARPERSONA + documento, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

export async function putActualizarPersona(documento, persona, token) {
    const response = await axios.put(APISPERSONA.ACTUALIZARPERSONA + documento, persona, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

export async function putActualizarCodigoVerificacion(documento, token) {
    const response = await axios.put(APISPERSONA.ACTUALIZARCODIGOVERIFICACION + documento, {}, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};