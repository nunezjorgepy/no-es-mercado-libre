import './ProductPage.css'
import HeaderComponent from '../../components/layout/HeaderComponent/HeaderComponent'
import Product from '../../components/common/Product/Product'
import { getProductById } from '../../service/products.service.js'

function ProductPage() {

    const product = getProductById(1);
    console.log(product);


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
                                <div className="product-container">
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