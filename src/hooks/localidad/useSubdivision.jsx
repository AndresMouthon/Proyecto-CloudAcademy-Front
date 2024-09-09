import { useEffect, useState } from "react";
import { getSubdivisiones } from "../../services/localidad/SubdivicionService";
import { usarStorage } from "../../utils/localStorage/localStorage.util";

function useSubdivision(codigo_ciudad) {
    const token = usarStorage("token");
    const [listadoSubdivisionPorCiudad, setListadoSubdivisionPorCiudad] = useState([]);
    const [loading, setLoading] = useState(false);

    const getListadoSubdivisionPorCiudad = async () => {
        try {
            setLoading(true);
            const data = await getSubdivisiones(token);
            const subdivisionesFiltradas = data.filter(
                (subdivision) => subdivision.ciudad_id === Number(codigo_ciudad)
            );
            setListadoSubdivisionPorCiudad(subdivisionesFiltradas);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };
    useEffect(() => {
        getListadoSubdivisionPorCiudad();
    }, [codigo_ciudad]);

    return {
        listadoSubdivisionPorCiudad,
        loading,
    };
};

export default useSubdivision;
