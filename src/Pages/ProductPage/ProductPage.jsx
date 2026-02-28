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
                            <div className="left-column">
                                {/* Sección para el producto */}
                                <div className="images-container">
                                    Imágenes
                                </div>
                            </div>

                            {/* Right column */}
                            <div className="right-column">
                                {/* Sección para la información de la compra */}
                                <div className="buy-info-container">
                                    <Product product={product} isProductPage/>
                                </div>

                                {/* Botones de compra */}
                                <div className="btns-container">
                                    <ButtonComponent btn_text="Comprar ahora" btn_type="primary" btn-size="normal"/>
                                    <ButtonComponent btn_text="Agregar al carrito" btn_type="secondary" btn-size="normal" btn_icon="bi bi-cart2"/>
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