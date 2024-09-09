import React from "react";
import { FaLock } from "react-icons/fa";
import { HiIdentification } from "react-icons/hi";
import { imagenes } from "../../assets/img/imagenes";
import Spinner from "../../utils/spinner/Spinner";

function LoginComponent({ handleChange, iniciarSesion, loading }) {
    return (
        <div className="flex flex-col lg:flex-row w-full min-h-screen">
            <div className="flex lg:flex-1 bg-gray-300 dark:bg-gray-950 shadow-lg shadow-black/20 items-center justify-center">
                <img
                    src={imagenes.fondoLogin}
                    alt="Fondo..."
                    className="hidden lg:block lg:w-full lg:h-screen"
                    style={{ aspectRatio: "1000 / 1000", objectFit: "cover" }}
                />
            </div>
            <div className="flex items-center justify-center w-full lg:w-[30%] bg-blue-100 dark:bg-gray-950 shadow-lg shadow-black/20 min-h-screen">
                <div className="mx-auto flex flex-col items-center justify-center bg-white p-10 shadow-lg dark:bg-gray-900 w-full h-full sm:shadow-none min-h-screen">
                    <div className="flex flex-col items-center w-full p-8">
                        <img
                            src={imagenes.logoSinFondo}
                            alt="Logo..."
                            className="h-24 w-24"
                            style={{ aspectRatio: "1 / 1", objectFit: "cover" }}
                        />
                        <h1 className="text-3xl font-bold">CloudAcademy</h1>
                    </div>
                    <section className="flex w-full flex-col items-start justify-center gap-4 h-full sm:h-auto">
                        <div className="flex w-full flex-col">
                            <label
                                htmlFor="documento"
                                className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Identificacion
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <HiIdentification
                                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                        aria-hidden="true"
                                    />
                                </div>
                                <input
                                    type="number"
                                    id="documento"
                                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-300 focus:border-blue-300 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-300 dark:focus:border-blue-300"
                                    placeholder="Ej. 0000000000"
                                    required
                                    onChange={handleChange}
                                    name="documento"
                                />
                            </div>
                        </div>
                        <div className="flex w-full flex-col">
                            <label
                                htmlFor="clave"
                                className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Contraseña
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <FaLock
                                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                        aria-hidden="true"
                                    />
                                </div>
                                <input
                                    // type={showPassword ? "text" : "password"}
                                    type="password"
                                    id="clave"
                                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-300 focus:border-blue-300 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-300 dark:focus:border-blue-300"
                                    placeholder="••••••••••••••••"
                                    required
                                    onChange={handleChange}
                                    name="clave"
                                />
                                <div
                                    className="absolute inset-y-0 end-0 flex items-center pr-3.5 pointer-events-auto"
                                >
                                    {/* {showPassword ? (
                                        <FaEyeSlash
                                            className="w-5 h-5 text-gray-500 dark:text-gray-400 cursor-pointer"
                                            aria-hidden="true"
                                            // onClick={togglePasswordVisibility}
                                        />
                                    ) : (
                                        <FaEye
                                            className="w-5 h-5 text-gray-500 dark:text-gray-400 cursor-pointer"
                                            aria-hidden="true"
                                            // onClick={togglePasswordVisibility}
                                        />
                                    )} */}
                                </div>
                            </div>
                        </div>
                        <button
                            className="inline-flex items-center bg-cyan-500 hover:bg-cyan-600 transition-all text-white justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full mt-5 mb-10"
                            onClick={iniciarSesion}
                        >
                            {loading ? <Spinner /> : "Iniciar sesion"}
                        </button>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent;
