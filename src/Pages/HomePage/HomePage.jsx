import './HomePage.css'
import HeaderComponent from '../../components/layout/HeaderComponent/HeaderComponent'
import HeaderOptions from '../../components/common/HeaderOptions/HeaderOptions'
import { getAllHeaderOptions } from '../../service/headeroptions.js'
import getAllNovedades from '../../service/novedades'
import { Link } from 'react-router'
import { getAllProducts } from '../../service/products.service.js'
import Product from '../../components/common/Product/Product.jsx'
import getAllMeliPlus from '../../service/meliPlus.service.js'

function HomePage() {
    /* TODO: pasar esto a una useEffect, usando un useState para cada uno. */
    const allHeaderOptions = getAllHeaderOptions()
    const allNovedades = getAllNovedades()
    const allProducts = getAllProducts()
    const meliPlus = getAllMeliPlus()
    console.log(meliPlus)

    /* TODO: el producto de oferta diaria y la lista deben venir de la base de datos. */
    const demoProduct = allProducts[2]
    const demoList = [allProducts[0], allProducts[1], allProducts[2], allProducts[3]]


    const HTMLHeroOptions = allHeaderOptions.map(headerOption => {
        return (
            <HeaderOptions key={headerOption.id} headerOption={headerOption} />
        )
    })

    const HTMLProducts = demoList.map(product => {
        return (
            <Link to={`/product/${product.id}`} className='offer-product-link' key={product.id}>
                <Product product={product} showImage containerType='small'/>
            </Link>
        )
    })

    return (
        <>
            <HeaderComponent />
            <main>
                <section className="section novedades">
                    {/* Esta sección ocupará el 100% de la pantalla para todos sus hijos. */}
                    <Link to={allNovedades[1].link} className="relative">
                        <div className="img-container">
                            <img src={allNovedades[1].image} alt="Novedades" />
                        </div>
                        <div className="linear-background">
                            H
                        </div>
                    </Link>
                </section>
                {/* Section para bajar las demás secciones */}
                <section className="down-with-sections">
                    Sección para bajar las demás secciones
                </section>
                
                {/* Hero */}
                <section className="section hero">
                    {/* Esta sección se divide en dos: Carrusel y Opciones. LA primera por ahora no la voy a hacer porque requiere un poco más de conocimiento de css o js. */}
                    <div className="hero-options-container max-width">
                        {HTMLHeroOptions}
                    </div>
                </section>

                {/* Payment methods */}
                <section className="section payment-section">
                    <div className="payment-methods-container max-width">

                    </div>
                </section>

                {/* Meli+ */}
                <section className="section meli-plus-section">
                    <div className="meli-plus-container max-width">

                    </div>
                </section>

                {/* On Sales */}
                <section className="section offers-section">
                    {/* Contiene dos secciones en forma horizontal. La primera muestra la oferta del día y es aproximadamente la mitad de la segunda, que muestra ofertas varias. */}
                    <div className="offers-container max-width">
                        {/* Oferta del día */}
                        <div className="daily-offer">
                            <h3 className="daily-offer-title">
                                Oferta del día
                            </h3>
                            <Link to={`/product/${demoProduct.id}`}>
                                <Product product={demoProduct} showImage containerType='medium' />
                            </Link>
                        </div>

                        {/* Mejores ofertas */}
                        {/* TODO: Faltan los botones para moverse entre mejores ofertas, con su funcionalidad */}
                        <div className="best-offers">
                            <h3 className="daily-offer-title">
                                <span>Ofertas</span>
                                <Link to="https://www.mercadolibre.com.ar/ofertas#c_id=/home/promotions-recommendations&c_uid=c2e85acf-2dbf-4e54-b9c5-a8e3e459933d" className="link-font">
                                    Mostrar todas las ofertas
                                </Link>
                            </h3>
                            <div className="offers-prodcuts-list">
                                {HTMLProducts}
                            </div>
                        </div>
                    </div>

                </section>



                {/* More solds */}
                <section className="section best-sales-section">
                    <div className="best-sales-container max-width"></div>
                </section>

                {/* Categories */}
                <section className="section categories-section">
                    <div className="categories-container max-width">

                    </div>
                </section>
            </main>
        </>
    )
}

export default HomePage