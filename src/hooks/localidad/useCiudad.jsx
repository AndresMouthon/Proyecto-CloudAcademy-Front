import { useEffect, useState } from "react";
import { getCiudades } from "../../services/localidad/CiudadService";
import { usarStorage } from "../../utils/localStorage/localStorage.util";

function useCiudad(codigo_departamento) {
    const token = usarStorage("token");
    const [listadoCiudadesPorDepartamento, setListadoCiudadesPorDepartamento] = useState([]);
    const [loading, setLoading] = useState(false);

    const getListadoCiudadesPorDepartamento = async () => {
        try {
            setLoading(true);
            const data = await getCiudades(token);
            const ciudadesFiltradas = data.filter(
                (ciudad) => ciudad.departamento_id === Number(codigo_departamento)
            );
            setListadoCiudadesPorDepartamento(ciudadesFiltradas);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };
    useEffect(() => {
        getListadoCiudadesPorDepartamento();
    }, [codigo_departamento]);

    return {
        listadoCiudadesPorDepartamento,
        loading,
    };
};

export default useCiudad;
