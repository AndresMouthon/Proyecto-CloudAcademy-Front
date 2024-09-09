import { AiOutlineClockCircle, AiOutlineIdcard, AiOutlinePhone } from "react-icons/ai";
import { BsCalendar } from "react-icons/bs";
import { FaCity, FaEye, FaRegEdit, FaRegUserCircle } from "react-icons/fa";
import { FiMapPin, FiSettings } from "react-icons/fi";
import { GiPathDistance } from "react-icons/gi";
import { GrValidate } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { MdCircle, MdDelete, MdKeyboard, MdOutlineAssignment, MdOutlineAssignmentTurnedIn, MdOutlineBusiness, MdOutlineLayers, MdSend } from "react-icons/md";
import avatarSinPerfilHombre from "../../assets/img/perfiles/AvatarSinPerfilHombre.svg";
import avatarSinPerfilMujer from "../../assets/img/perfiles/AvatarSinPerfilMujer.svg";

export const personaColumn = ({ location, eliminarPersona, capturarInformacion, actualizarCodigoVerificacion, digitarCodigoVerificacion }) => {
    return [
        {
            name: (
                <>
                    <FiSettings className="w-4 h-4 mr-1" /> Acciones
                </>
            ),
            cell: (row) => (
                <>
                    {location === "#personasSinVerificar" ? (
                        <>
                            <button className="w-10 h-10 text-white cursor-pointer hover:bg-green-700 rounded-full hover:text-white bg-green-600" onClick={() => digitarCodigoVerificacion(row.documento)} >
                                <GrValidate className="w-6 h-6 ml-2" />
                            </button>
                            <button className="w-10 h-10 text-white cursor-pointer hover:bg-purple-700 rounded-full hover:text-white bg-purple-600" onClick={() => actualizarCodigoVerificacion(row.documento)} >
                                <MdSend className="w-6 h-6 ml-2" />
                            </button>
                            <button className="w-10 h-10 text-white cursor-pointer hover:bg-red-700 rounded-full hover:text-white bg-red-600" onClick={() => eliminarPersona(row.documento)} >
                                <MdDelete className="w-6 h-6 ml-2" />
                            </button>
                        </>
                    ) : (
                        <>
                            <button className="w-10 h-10 text-white cursor-pointer hover:bg-blue-700 rounded-full hover:text-white bg-blue-600" >
                                <FaEye className="w-6 h-6 ml-2" />
                            </button>
                            <button className="w-10 h-10 text-white cursor-pointer hover:bg-green-700 rounded-full hover:text-white bg-green-600" onClick={() => capturarInformacion(row)} >
                                <FaRegEdit className="w-6 h-6 ml-2" />
                            </button>
                            <button className="w-10 h-10 text-white cursor-pointer hover:bg-red-700 rounded-full hover:text-white bg-red-600" onClick={() => eliminarPersona(row.documento)} >
                                <MdDelete className="w-6 h-6 ml-2" />
                            </button>
                        </>
                    )}
                </>
            ),
            width: location === "#personasSinVerificar" ? "200px" : "150px",
        },
        {
            name: (
                <>
                    <FaRegUserCircle className="w-5 h-5 mr-1" /> Perfil
                </>
            ),
            cell: (row) => (
                <img
                    src={row.perfil ? row.perfil : (row.genero === "Masculino" ? avatarSinPerfilHombre : avatarSinPerfilMujer)}
                    alt="Perfil"
                    className="w-10 h-10 rounded-full"
                />
            ),
            width: "100px",
        },
        {
            name: (
                <>
                    <MdOutlineAssignment className="w-5 h-5 mr-1" /> Tipo Identificacion
                </>
            ),
            selector: (row) => row.TipoDocumento.tipo_documento,
            sortable: true,
            width: "210px",
        },
        {
            name: (
                <>
                    <AiOutlineIdcard className="w-5 h-5 mr-1" /> Identificacion
                </>
            ),
            selector: (row) => row.documento,
            sortable: true,
            width: "175px",
        },
        {
            name: (
                <>
                    <MdOutlineAssignmentTurnedIn className="w-5 h-5 mr-1" /> Estado
                </>
            ),
            cell: (row) => (
                <div className="flex items-center">
                    <MdCircle
                        className={`w-4 h-4 mr-1 ${row.estado === "Activo" ? "text-green-600" : "text-red-600"
                            }`}
                    />
                    <span>{row.estado}</span>
                </div>
            ),
            sortable: true,
            width: "120px",
        },
        {
            name: (
                <>
                    <MdKeyboard className="w-5 h-5 mr-1" /> Nombres
                </>
            ),
            selector: (row) => row.nombres,
            sortable: true,
            width: "140px",
        },
        {
            name: (
                <>
                    <MdKeyboard className="w-5 h-5 mr-1" /> Apellidos
                </>
            ),
            selector: (row) => row.apellidos,
            sortable: true,
            width: "175px",
        },
        {
            name: (
                <>
                    <HiOutlineMail className="w-5 h-5 mr-1" /> Correo
                </>
            ),
            selector: (row) => row.correo,
            sortable: true,
            width: "300px",
        },
        {
            name: (
                <>
                    <AiOutlinePhone className="w-5 h-5 mr-1" /> Contacto
                </>
            ),
            selector: (row) => row.contacto,
            sortable: true,
            width: "150px",
        },
        {
            name: (
                <>
                    <MdOutlineBusiness className="w-5 h-5 mr-1" /> Departamento
                </>
            ),
            selector: (row) => row.Departamento.departamento,
            sortable: true,
            width: "180px",
        },
        {
            name: (
                <>
                    <FaCity className="w-5 h-5 mr-1" /> Ciudad
                </>
            ),
            selector: (row) => row.Ciudad.ciudad,
            sortable: true,
            width: "120px",
        },
        {
            name: (
                <>
                    <MdOutlineLayers className="w-5 h-5 mr-1" /> Zona
                </>
            ),
            selector: (row) => row.zona,
            sortable: true,
            width: "120px",
        },
        {
            name: (
                <>
                    <GiPathDistance className="w-5 h-5 mr-1" /> Subdivision
                </>
            ),
            selector: (row) => row.Subdivision ? row.Subdivision.subdivision : "No aplica",
            sortable: true,
            width: "160px",
        },
        {
            name: (
                <>
                    <FiMapPin className="w-5 h-5 mr-1" /> Dirección
                </>
            ),
            selector: (row) => row.direccion,
            sortable: true,
            width: "140px",
        },
        {
            name: (
                <>
                    <BsCalendar className="w-5 h-5 mr-1" /> Fecha Nacimiento
                </>
            ),
            selector: (row) => row.fecha_nacimiento,
            sortable: true,
            width: "200px",
        },
        {
            name: (
                <>
                    <AiOutlineClockCircle className="w-5 h-5 mr-1" /> Edad
                </>
            ),
            selector: (row) => row.edad,
            sortable: true,
            width: "120px",
        },
    ];
};
