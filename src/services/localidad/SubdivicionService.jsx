import axios from "axios";
import { APISSUBDIVISION } from "../../models/apis.models";

export async function getSubdivisiones(token) {
    const response = await axios.get(APISSUBDIVISION.SUBDIVISIONES, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
}