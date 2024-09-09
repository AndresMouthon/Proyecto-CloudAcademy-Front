import axios from "axios";
import { APISCIUDAD } from "../../models/apis.models";

export async function getCiudades(token) {
    const response = await axios.get(APISCIUDAD.CIUDADES, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
}