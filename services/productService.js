const {
    getProducts,
    saveProducts
} = require("../database/productDatabase");

async function getAllProducts() {
    const products = await getProducts();

    return products;
}

async function getProductById(id) {
    const products = await getProducts();

    const product = products.find((item) => {
        return item.id === Number(id);
    });

    return product;
}

async function createProduct(product) {
    const products = await getProducts();

    products.push(product);

    await saveProducts(products);

    return product;
}

async function updateProduct(id, updatedData) {
    const products = await getProducts();

    const index = products.findIndex((item) => {
        return item.id === Number(id);
    });

    if (index === -1) {
        return null;
    }

    products[index] = {
        ...products[index],
        ...updatedData
    };

    await saveProducts(products);

    return products[index];
}

async function deleteProduct(id) {
    const products = await getProducts();

    const index = products.findIndex((item) => {
        return item.id === Number(id);
    });

    if (index === -1) {
        return null;
    }

    const deletedProduct = products.splice(index, 1)[0];

    await saveProducts(products);

    return deletedProduct;
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};