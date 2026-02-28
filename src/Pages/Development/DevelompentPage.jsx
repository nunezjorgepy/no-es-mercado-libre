/* Esta página sirve solamente para desarrollar componentes. No debería ser visibles para los usuarios */

import ButtonComponent from "../../components/common/ButtonComponent/ButtonComponent"
import HeaderComponent from "../../components/layout/HeaderComponent/HeaderComponent"

function DevelompentPage() {
    return (
        <>
            <HeaderComponent />
            <div className="development-width">
                <div className="button-component">
                    <ButtonComponent btn_text="Comprar ahora" btn_type="primary" btn-size="normal"/>
                    <ButtonComponent btn_text="Comprar ahora" btn_type="secondary" btn-size="normal" btn-icon="bi bi-cart2"/>
                </div>
            </div>
        </>
    )
}

export default DevelompentPage