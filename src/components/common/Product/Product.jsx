import './Product.css'

function Product(props) {
    const { product, showImage, isProductPage, containerType } = props
    /* 
    Las variables props hacen referencia a:
        - product: se entiende sola
        - showImage: si se tiene que mostrar la imagen o no. En la página del producto, es false ya que se muestra en otra parte.
        - isProductPage: muestra u oculta las divisiones del producto que solamente se ven en la página del producto.
        - containerType
    */

    const priceToPay = product.price * (1 - product.discount)
    const cuotas = ((priceToPay / product.payments) * 1.05).toFixed(2)

    const imageClasses = (containerType === 'medium' ? 'object-fit object-fit-medium' : containerType === 'small' ? 'object-fit object-fit-small' : 'object-fit');
    const titleClasses = 'product-title' + (containerType === 'medium' ? ' product-title-medium' : containerType === 'small' ? ' product-title-small' : '');

    return (
        <div className={`product-container ${!isProductPage ? 'medium-container' : ''}`}>
            {/* Imagen del producto (No se usa si es la página del producto, ya que se muestra en otro lado) */}
            <div className="product-image">
                <div className={imageClasses}>
                    {showImage ? <img src={product.images[0]} alt={product.title} /> : null}
                </div>
            </div>
            {/* Título del producto */}
            <h1 className={titleClasses}>
                {product.title}
            </h1>

            {/* Descripción del producto */}
            <div className="product-rate">
                {/* TODO: agregar las estrellas */}
                {product.rate} <i className="bi bi-star-fill blue-star-fill"></i>
            </div>

            {/* Divisor de precio */}
            <div className="product-price-divider">
                {/* Precio del producto */}
                <div className="product-real-price">
                    {product.discount ? <span>$ ${product.price}</span> : ''}
                </div>

                {/* Precio del producto con descuento */}
                <div className="product-price-discount">
                    {/* Muetsra el precio del producto con descuento, si tiene */}
                    $ {priceToPay} {product.discount > 0 ? <span className='succes-div succes-div-small'>{product.discount * 100}% OFF</span> : ''}
                </div>

                {/* Cuotas */}
                <div className="product-payments">
                    {product.payments > 1 ? `${product.payments} cuotas de $ ${cuotas}` : ''}
                </div>
            </div>

            {/* Llega máñana */}
            {product.getItToday ? <div className="product-get-it-today succes-div">Llega manaña</div> : ''}
            
            {/* Only for the ProdcutPage */}
            {isProductPage && 
                <div className="product-free-return">
                    {/* Free return */}
                    <span className="product-free-return-span">Devolución gratis</span> Tenés 30 días desde que lo recibís.
                </div>
            }

            {isProductPage && 
                <div className="product-stock-container">
                    {/* Información sobreel stock y cuántos elegir */}
                    <div className="product-stock">
                        {product.stock ? 'Stock disponible' : 'Sin stock'}
                    </div>

                    <div className="product-quantity">
                        {/* Botones para elegir cuantas unidades comprar */}
                        {/* TODO: 
                            - Si no hay stock, deshabilitar los botones
                            - Si hay stock, crear su funcionalidad
                        */}
                        Cantidad: 
                        <button className="change-quantity-btn minus">-</button> 
                        <span className='quantity-to-buy'>1</span> 
                        <button className="change-quantity-btn plus">+</button> 
                        {product.stock ? <span className='quantity-in-stock'>({product.stock} disponibles)</span> : 'Sin stock'}
                    </div>
                </div>
            }
        </div>
    )
}

export default Product