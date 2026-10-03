const express = require("express");

const app = express();

const port = 3002;

app.use(express.json());

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

const productRoutes = require("./routes/productRoutes");

app.use(productRoutes);