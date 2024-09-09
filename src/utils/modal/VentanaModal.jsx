import { Button } from "flowbite-react";
import React from "react";
import "../../assets/css/modal/VentanaModal.css";
import Spinner from "../spinner/Spinner";

function VentanaModal({ titulo, openModal, cerrarModal, hanleSubmit, loading, children, footer, btnCloseModal, size }) {
    return (
        <>
            <div className={`overflow-x-hidden overflow-y-auto fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50 ${!openModal ? 'hidden' : ''}`}>
                <div className={`aparecer-modal relative p-5 w-full ${size} max-h-full transform transition-transform duration-300 ease-in-out ${openModal ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                {titulo}
                            </h3>
                            <button type="button" onClick={cerrarModal} className={`text-red-600 hover:text-red-800 rounded-lg text-sm w-8 h-8 ms-auto ${btnCloseModal ? 'inline-flex' : 'hidden'} justify-center items-center`}>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 9l4.95-4.95a1 1 0 011.414 0l.708.707a1 1 0 010 1.415L12.121 10l4.95 4.95a1 1 0 010 1.414l-.707.707a1 1 0 01-1.415 0L10 12.121l-4.95 4.95a1 1 0 01-1.414 0l-.708-.707a1 1 0 010-1.415L7.879 10 2.93 5.05a1 1 0 010-1.414l.707-.707a1 1 0 011.415 0L10 7.879z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        <div className="p-4 md:p-5 space-y-4">
                            {children}
                        </div>
                        {footer && (
                            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <Button className="bg-cyan-500 hover:bg-slate-50 hover:text-cyan-500 transition-all text-white" onClick={hanleSubmit}>
                                    {loading ? <Spinner /> : 'Guardar'}
                                </Button>
                                <Button className="ml-2 bg-red-600 transition-all hover:text-red-600 hover:bg-slate-50" onClick={cerrarModal}>
                                    Cancelar
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default VentanaModal;
