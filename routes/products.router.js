const express = require("express");
const faker = require("faker");
const productsRouter = express.Router();

productsRouter.get("/", (req, resp) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    })
  }

  resp.json(products);
})

productsRouter.get("/filter", (req, resp) => {
  resp.send("hola soy un filter");
})

productsRouter.get("/:id", (req, resp) => {
  const {id} = req.params;
  resp.json({
    id,
    nombre: "Smash Ultimate",
    precio: "1000"
  });
});

module.exports = productsRouter;
