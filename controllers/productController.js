const productService = require("../services/productService");

async function getProducts(req, res) {
    try {
        const products = await productService.getAllProducts();

        res.json(products);
    } catch (err) {
        console.log(err);
        res.status(500).send("Server Error");
    }
}

async function getProductById(req, res) {
    try {
        const { id } = req.params;

        const product = await productService.getProductById(id);

        if (!product) {
            return res.status(404).send("Product not found");
        }

        res.json(product);
    } catch (err) {
        console.log(err);
        res.status(500).send("Server Error");
    }
}

async function createProduct(req, res) {
    try {
        const product = await productService.createProduct(req.body);

        res.status(201).json(product);
    } catch (err) {
        console.log(err);
        res.status(500).send("Server Error");
    }
}

async function updateProduct(req, res) {
    try {
        const { id } = req.params;

        const product = await productService.updateProduct(
            id,
            req.body
        );

        if (!product) {
            return res.status(404).send("Product not found");
        }

        res.json(product);
    } catch (err) {
        console.log(err);
        res.status(500).send("Server Error");
    }
}

async function deleteProduct(req, res) {
    try {
        const { id } = req.params;

        const product = await productService.deleteProduct(id);

        if (!product) {
            return res.status(404).send("Product not found");
        }

        res.json(product);
    } catch (err) {
        console.log(err);
        res.status(500).send("Server Error");
    }
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};