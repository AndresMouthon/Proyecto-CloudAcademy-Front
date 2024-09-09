import React from "react";
import DataTable from "react-data-table-component";

function DataTablePersonaComponent({ data, columns }) {
    const styleCellPersonaDataTable = {
        headCells: {
            style: {
                backgroundColor: "#94A3B8",
                color: 'white',
                fontSize: '13px',
                textTransform: 'uppercase',
                fontWeight: 'bold',
            },
        },
    };
    return (
        <div className="-mt-1 flex flex-col items-end bg-white border border-gray-200 rounded-md shadow w-full max-h-96 dark:border-gray-700 dark:bg-gray-800 transform transition-transform">
            <DataTable
                columns={columns}
                data={data}
                noDataComponent={
                    <div className="flex justify-center font-bold my-20 text-gray-500">
                        Sin datos
                    </div>
                }
                customStyles={styleCellPersonaDataTable}
                pagination
            />
        </div>
    )
}

export default DataTablePersonaComponent;
