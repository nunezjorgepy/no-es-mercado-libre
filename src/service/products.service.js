import productList from "../fakeDB/productsList";

export const getAllProducts = () => {
    return productList;
}

const getProductById = (id) => {
    return productList.find(product => product.id === id);
}

const sortProductByCriterion = (criterion) => {
    // Es posible que no sea necesaria, ya que esta el método sort de los arrays.
    // Ordena la lista según el criterio deseado. Pos ahora, la uso para ordenar según el descuento. Si no entiendo mal, esto se puede hacer más fácil en la base de datos.
    return productList.sort((a, b) => b[criterion] - a[criterion]);
}

export default {
    getAllProducts,
    getProductById,
    sortProductByCriterion
}