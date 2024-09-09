import axios from "axios";
import { APISTIPOSDOCUMENTO } from "../../models/apis.models";

export async function getTiposDocumento(token) {
    const response = await axios.get(APISTIPOSDOCUMENTO.TIPOSDOCUMETO, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
}