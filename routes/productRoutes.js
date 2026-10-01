const express = require("express");

const router = express.Router();

const {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} = require("../controllers/productController");

const {
    cacheMiddleware
} = require("../middleware/cacheMiddleware");


router.get("/product", cacheMiddleware, getProducts);

router.get("/product/:id", cacheMiddleware, getProductById);

router.post("/product", createProduct);

router.put("/product/:id", updateProduct);

router.patch("/product/:id", updateProduct);

router.delete("/product/:id", deleteProduct);


module.exports = router;