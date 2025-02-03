const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());

let readJSON = (file) => JSON.parse(fs.readFileSync(`./data/${file}`, "utf8"));

app.get("/api/stores", (req, res) => {
    try {
        let stores = readJSON("stores.json").stores;
        res.status(200).json(stores);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/api/stores/:id/menu", (req, res) => {
    try {
        let storedId = req.params.id;
        let products = readJSON("products.json").products;
        let storeProducts = readJSON("storeProducts.json").shopProducts;

        let menu = products
            .filter((product) => {
                return storeProducts.some((storeProduct) => {
                    return product.id == storeProduct.product && storeProduct.shop == storedId;
                });
            })
            .map((product) => ({
                ...product,
                toppings: typeof product.toppings === "string"
                    ? product.toppings.split(",")
                        .map(topping => topping.trim())
                        .map(topping => topping.replace(/\b\w/g, char => char.toUpperCase())) // Viết hoa chữ cái đầu
                    : []
            }));

        let storeName = readJSON("stores.json").stores.find((store) => store.id == storedId)?.name || "Unknown Store";

        res.status(200).json({ storeName, menu });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/api/toppings", (req, res) => {
    try {
        let products = readJSON("products.json").products;
        let toppings = new Set();

        products.forEach(product => {
            if (typeof product.toppings === "string") {
                product.toppings.split(",")
                    .map(topping => topping.trim())
                    .forEach(topping => toppings.add(topping.replace(/\b\w/g, char => char.toUpperCase())));
            }
        });

        res.status(200).json(Array.from(toppings));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
