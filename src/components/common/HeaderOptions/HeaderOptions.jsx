import React from 'react'
import { Link } from 'react-router'
import './HeaderOptions.css'

function HeaderOptions() {
    return (
        <div className='header-option'>
            <div className="header-option-title">
                Medios de pago
            </div>
            <div className="img-container">
                <img 
                src="https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/payment-methods.svg" 
                alt="Medios de Pago" />
            </div>
            <div className="header-option-description">
                Pagá tus compras de forma rápida y segura
            </div>
            <Link className="secondary-btn secondary-btn-small" type='button'>
                Conocer medios de pago
            </Link>
        </div>
    )
}

export default HeaderOptions