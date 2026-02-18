import { Link } from 'react-router'
import './HeaderComponent.css'
import HeaderCategory from '../../common/HeaderCategory'

function HeaderComponent() {
    /* 
        Por ahora, hago solamente el header para cuando no esta logueado. Más adelante:
        TODO: 
            - Las secciones ship-to y header-options deben ser dinamicas
            - Modificar los links de las opciones (tanto logueado como no)
    */
    return (
        <div>
            <div className="header-container flex-center">
                <header>
                    {/* Logo */}
                    <Link className="logo-container" to={'/'}>
                        <img src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.9.0/mercadolibre/logo_large_plus@2x.webp" alt="Logo de Mercado Libre" />
                    </Link>

                    {/* Buscador */}
                    <div className="search-container">
                        <form action="" className="search-form">
                            <input name='header-search' type="search" placeholder="Buscar productos, marcas y más..." />
                            <button className="search-btn">
                                <i className="bi bi-search"></i>
                            </button>
                        </form>
                    </div>

                    {/* Promo */}
                    <div className="header-promo-container">
                        <Link to={'https://www.mercadolibre.com.ar/suscripciones/melimas#origin=bannermenu-acq-envios&me.audience=all&me.bu=9&me.bu_line=36&me.component_id=banner_menu_web_ml&me.content_id=BNRMENU_LOYALTY_ADQESC_4-2&me.flow=146&me.logic=campaigns&me.position=0'}>
                            <img src="https://http2.mlstatic.com/D_NQ_845280-MLA105905056740_022026-OO.webp" alt="Promoción Meli" />
                        </Link>
                    </div>

                    {/* Envío */}
                    <button className="ship-to">
                        <div className="geo-icon">
                            <i className="bi bi-geo-alt"></i>
                        </div>
                        <div className="ship-to-text">
                            <span className='ship-to-who'>Enviar a</span>
                            <span className='ship-to-where'>Buenos Aires 1440</span>
                        </div>
                    </button>

                    {/* Categories */}
                    <div className="header-categories">
                        <HeaderCategory category="Categorías" icon="bi bi-chevron-down" />
                        <HeaderCategory category="Ofertas" />
                        <HeaderCategory category="Cupones" />
                        <HeaderCategory category="Supermercado" />
                        <HeaderCategory category="Moda" />
                        <HeaderCategory category="Mercado Play" span="GRATIS"/>
                        <HeaderCategory category="Vender" />
                        <HeaderCategory category="Ayuda" />
                    </div>

                    {/* Header Options */}
                    <div className="header-options">
                        <Link to={'/'}>
                            <HeaderCategory category="Creá tu cuenta" />
                        </Link>
                        <Link to={'/'}>
                            <HeaderCategory category="Ingresá" />
                        </Link>
                        <Link to={'/'}>
                            <HeaderCategory category="Mis Compras" />
                        </Link>
                        <Link className="option-icon" to={'/'}>
                            <i className="bi bi-cart2 header-cart"></i>
                        </Link>
                    </div>

                </header>
            </div>
        </div>
    )
}

export default HeaderComponent