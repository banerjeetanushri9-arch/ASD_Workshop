const fs = require("fs/promises");
const path = require("path");

const filePath = path.join(__dirname, "..", "db.json");

async function getProducts() {
    try {
        const data = await fs.readFile(filePath, "utf8");
        return JSON.parse(data);
    } catch (err) {
        console.log(err);
        throw err;
    }
}

async function saveProducts(products) {
    try {
        await fs.writeFile(
            filePath,
            JSON.stringify(products, null, 2)
        );
    } catch (err) {
        console.log(err);
        throw err;
    }
}

module.exports = {
    getProducts,
    saveProducts
};