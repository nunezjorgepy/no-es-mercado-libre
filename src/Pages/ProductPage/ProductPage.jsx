import './ProductPage.css'
import HeaderComponent from '../../components/layout/HeaderComponent/HeaderComponent'
import Product from '../../components/common/Product/Product'
import { getProductById } from '../../service/products.service.js'
import { useParams } from 'react-router';

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
                                    <Product product={product}/>
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