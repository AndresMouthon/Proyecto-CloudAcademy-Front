import { useEffect, useState } from "react";
import { getDepartamentos } from "../../services/localidad/DepartamentoService";
import { usarStorage } from "../../utils/localStorage/localStorage.util";

function useDepartamento() {
    const token = usarStorage("token");
    const [listadoDepartamentos, setListadoDepartamentos] = useState([]);
    const [loading, setLoading] = useState(false);

    const getListadoDepartamentos = async () => {
        try {
            setLoading(true);
            const data = await getDepartamentos(token);
            setListadoDepartamentos(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getListadoDepartamentos();
    }, []);

    return {
        listadoDepartamentos,
    };
}

export default useDepartamento;
