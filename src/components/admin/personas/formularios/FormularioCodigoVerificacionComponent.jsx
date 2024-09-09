import React, { useEffect } from "react";
import "../../../../assets/css/components/formularioPersona/FormularioCodigoVerificacion.css";

function FormularioCodigoVerificacionComponent({ inputRefs, handleCodigoVerificacion, handleEliminarDigitoCodigoVerificacion }) {
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [inputRefs]);
  return (
    <div className="flex justify-center space-x-2">
      {[...Array(6)].map((_, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          className="number-input w-12 h-12 text-center text-xl font-bold border-2 border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
          type="text"
          maxLength={1}
          onInput={(e) => handleCodigoVerificacion(e, index)}
          onKeyDown={(e) => handleEliminarDigitoCodigoVerificacion(e, index)}
          name="codigo_verificacion"
        />
      ))}
    </div>
  );
}

export default FormularioCodigoVerificacionComponent;
