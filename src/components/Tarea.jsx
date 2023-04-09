import { formatearFecha } from "../helpers/formatearFecha";
import useProyectos from "../hooks/useProyectos";
import useAdmin from "../hooks/useAdmin";

const Tarea = ({tareaMap}) => {

    const { handleModalEditarTarea, handleModalEliminarTarea, completarTarea } = useProyectos();

    const admin = useAdmin();

    return (
        <div className="border-b p-5 flex justify-between items-center">
            <div className="flex flex-col items-start">
                <p className="mb-1 text-xl">{tareaMap?.nombre}</p>
                <p className="mb-1 text-sm text-gray-500 uppercase">{tareaMap?.descripcion}</p>
                <p className="mb-1 text-sm">{formatearFecha(tareaMap?.fechaEntrega)}</p>
                <p className="mb-1 text-gray-600">Prioridad: {tareaMap?.prioridad}</p>
                { tareaMap?.estado && <p className="text-sm bg-green-600 uppercase p-1 rounded-lg text-white">Completada por: {tareaMap?.completado?.nombre}</p> }
            </div>

            <div className="flex flex-col lg:flex-row gap-2">

                {
                    admin && (
                        <button className="bg-indigo-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg" onClick={()=>handleModalEditarTarea(tareaMap)}>
                            Editar
                        </button>
                    )
                }


            <button className={`${tareaMap?.estado?"bg-sky-600":"bg-gray-600"} px-4 py-3 text-white uppercase font-bold text-sm rounded-lg`}
                onClick={()=>completarTarea(tareaMap?._id)}
                >
                { tareaMap?.estado ? "Completa":"Incompleta" }
            </button>

                {
                    admin && (
                        <button className="bg-red-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg" onClick={()=>handleModalEliminarTarea(tareaMap)}>
                            Eliminar
                        </button>
                    )
                }
            </div>
        </div>
    )
}

export default Tarea