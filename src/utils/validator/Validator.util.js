const formatearCampo = (campo) => {
    const conEspacios = campo.replace(/_/g, ' ');
    return conEspacios.charAt(0).toUpperCase() + conEspacios.slice(1);
};

export const camposValidator = (campos = []) => {
    const campoVacio = campos.find(({ valor }) => valor === "" || valor === "0");
    if (campoVacio) {
        return `El campo ${formatearCampo(campoVacio.campo)} es requerido`;
    } else {
        return "";
    };
};