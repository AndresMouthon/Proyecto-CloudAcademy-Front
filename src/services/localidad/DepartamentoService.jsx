import axios from "axios";
import { APISDEPARTAMENTO } from "../../models/apis.models";

export async function getDepartamentos(token) {
    const response = await axios.get(APISDEPARTAMENTO.DEPARTAMENTOS, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
}