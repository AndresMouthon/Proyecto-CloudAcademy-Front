import React from "react";
import { ImUserPlus } from "react-icons/im";

function SubNavbarPersonaComponent({ toggleModal, title, buttonOption }) {
    return (
        <div className="flex items-center justify-between flex-col sm:flex-row w-full mb-4">
            <h1 className="text-1xl font-semibold">{title}</h1>
            {buttonOption && (
                <div className="inline-flex rounded-md shadow-sm">
                    <button onClick={() => toggleModal("Persona")} type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 border border-green-600 rounded-md hover:bg-white hover:text-green-600" to="#">
                        <ImUserPlus className="w-6 h-6 mr-1" /> Registrar persona
                    </button>
                </div>
            )}
        </div>
    )
}

export default SubNavbarPersonaComponent;
