import './ProductPage.css'
import HeaderComponent from '../../components/layout/HeaderComponent/HeaderComponent'
import Product from '../../components/common/Product/Product'
import { getProductById } from '../../service/products.service.js'
import { useParams } from 'react-router';
import ButtonComponent from '../../components/common/ButtonComponent/ButtonComponent.jsx';

function ProductPage() {

    const { product_id } = useParams();
    const product = getProductById(Number(product_id));

    return (
        <>
            <HeaderComponent />
            <main>
                <section className="section main-container">
                    <div className="max-width">
                        <div className="flex-row product-flex">

                            {/* Left column */}
                            <div className="product-page-left-column">
                                {/* Sección para el producto */}
                                <div className="gallery-container">
                                    <div className="product-gallery-position-absolute">
                                        {/* A cada miniatura de las fotos llamarla thumbnail */}
                                        {/* Para cada <span>, es probable que tenga que agregar un position: relative; */}
                                        {/* Los thumbnail van a ser componentes. */}
                                        {/* La funcionalidad va a ser distinta. En vez de hover, uso un boton de tipo radio. Cuando se haga click, se cambia la foto principal. Para eso, usar el pseudo-elemento radio-btn:active */}
                                    </div>
                                </div>
                            </div>

                            {/* Right column */}
                            <div className="product-page-right-column">
                                <div className="product-right-column-border">
                                    {/* Sección para la información de la compra */}
                                    <div className="buy-info-container">
                                        <Product product={product} isProductPage/>
                                    </div>

                                    {/* Botones de compra */}
                                    <div className="btns-container">
                                        {/* Sguramente tenga que envolver cada botón en un link. */}
                                        <ButtonComponent btn_text="Comprar ahora" btn_type="primary" btn-size="normal"/>
                                        <ButtonComponent btn_text="Agregar al carrito" btn_type="secondary" btn-size="normal" btn_icon="bi bi-cart2"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default ProductPage