const express = require("express");
/* const routerApi = require("."); */

const ProductsService = require("./../services/product.service.js")
const productsRouter = express.Router();

const service = new ProductsService();

productsRouter.get("/", (req, resp) => {
  const products = service.find();
  resp.json(products);
});

productsRouter.get("/filter", (req, resp) => {
  resp.send("hola soy un filter");
})

productsRouter.get("/:id", (req, resp) => {
  const {id} = req.params;
  const product = service.findOne(id)
  resp.json(product);
});

productsRouter.post("/", (req, resp) => {
  const body = req.body;
  const newProduct = service.create(body);
  resp.status(201).json(newProduct);
});

productsRouter.patch("/:id", (req, resp) => {
  const { id } = req.params;
  const body = req.body;
  const product = service.update(id, body);
  resp.json(product);
});

productsRouter.delete("/:id", (req, resp) => {
  const { id } = req.params;
  const ruta = service.delete(id);
  resp.json(ruta);
});


module.exports = productsRouter;
