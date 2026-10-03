const productService = require("../services/productService");

const {
    setCache,
    clearCache
} = require("../middleware/cacheMiddleware");

async function getProducts(req, res) {
    try {
        const products = await productService.getAllProducts();

        setCache(req.originalUrl, products);

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

        setCache(req.originalUrl, product);

        res.json(product);

    } catch (err) {
        console.log(err);
        res.status(500).send("Server Error");
    }
}

async function createProduct(req, res) {
    try {
        const { id, name, price } = req.body;

        if (
            id === undefined ||
            !name ||
            price === undefined
        ) {
            return res.status(400).send("id, name and price are required");
        }

        if (typeof price !== "number" || price < 0) {
            return res.status(400).send("Price must be a non-negative number");
        }

        const product = await productService.createProduct(req.body);

        clearCache();

        res.status(201).json(product);

    } catch (err) {
        console.log(err);
        res.status(500).send("Server Error");
    }
}

async function updateProduct(req, res) {
    try {
        const { id } = req.params;
        const { name, price } = req.body;

        if (
            name === undefined &&
            price === undefined
        ) {
            return res.status(400).send("Provide name or price to update");
        }

        if (
            price !== undefined &&
            (typeof price !== "number" || price < 0)
        ) {
            return res.status(400).send("Price must be a non-negative number");
        }

        const product = await productService.updateProduct(
            id,
            req.body
        );

        if (!product) {
            return res.status(404).send("Product not found");
        }

        clearCache();

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

        clearCache();

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