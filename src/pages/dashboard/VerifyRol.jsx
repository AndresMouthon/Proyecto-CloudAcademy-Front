import React from 'react'
import RolSelectionModel from '../../components/layouts/rolesSelectionModal/RolSelectionModel'
import VentanaModal from '../../utils/modal/VentanaModal'

function VerifyRol() {
    return (
        <VentanaModal
            titulo={"Por favor seleccione un rol"}
            openModal={true}
            footer={false}
            loading={false}
            btnCloseModal={false}
        >
            <RolSelectionModel />
        </VentanaModal>
    )
}

export default VerifyRol
