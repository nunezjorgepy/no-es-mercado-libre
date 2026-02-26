import './Product.css'

function Product(props) {
    const { product, showImage } = props
    console.log(product);
    const priceToPay = product.price * (1 - product.discount)
    const cuotas = ((priceToPay / product.payments) * 1.05).toFixed(2)

    return (
        <div className='product-container'>
            {/* Imagen del producto (No se usa si es la página del producto, ya que se muestra en otro lado) */}
            <div className="product-image">
                <div className="img-container">
                    {showImage ? <img src={product.images[0]} alt={product.title} /> : null}
                </div>
            </div>
            {/* Título del producto */}
            <div className="product-title">
                {product.title}
            </div>

            {/* Descripción del producto */}
            <div className="product-rate">
                {product.rate}
            </div>

            {/* Precio del producto */}
            <div className="product-real-price">
                {product.price}
            </div>

            {/* Precio del producto con descuento */}
            <div className="product-price-discount">
                {/* Muetsra el precio del producto con descuento, si tiene */}
                {priceToPay}
            </div>

            {/* Cuotas */}
            <div className="product-payments">
                {product.payments > 1 ? `${product.payments} cuotas de $ ${cuotas}` : ''}
            </div>

            {/* Llega máñana */}
            <div className="product-get-it-today">
                {product.getItToday ? 'Llega mañana' : ''}
            </div>

            {/* Free return */}
            <div className="product-free-return">
                <span className="product-free-return-span">Devolución gratis</span> Tenés 30 días desde que lo recibís.
            </div>

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
                    Cantidad: <button className="minus">-</button> 1 <button className="plus">+</button> ({product.stock ? product.stock + ' disponibles' : 'Sin stock'})
                </div>
            </div>
        </div>
    )
}

export default Product