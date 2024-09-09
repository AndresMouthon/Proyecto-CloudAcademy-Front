import { useEffect, useState } from "react";
import { getTiposDocumento } from "../../services/persona/TipoDocumentoService";
import { usarStorage } from "../../utils/localStorage/localStorage.util";

const useTipoDocumento = () => {
    const token = usarStorage("token");
    const [listadoTiposDocumento, setListadoTiposDocumento] = useState([]);
    const [loading, setLoading] = useState(false);

    const getListadoTiposDocumento = async () => {
        try {
            setLoading(true);
            const data = await getTiposDocumento(token);
            setListadoTiposDocumento(data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    useEffect(() => {
        getListadoTiposDocumento();
    }, []);

    return {
        listadoTiposDocumento,
        loading,
    };
}

export default useTipoDocumento;
