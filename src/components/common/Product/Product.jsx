

function Product(props) {
    const { product } = props
    console.log(product);

    return (
        <div className='product-container'>
            <div className="product-title">
                {product.title}
            </div>
        </div>
    )
}

export default Product