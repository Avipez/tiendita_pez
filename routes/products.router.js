const express = require('express');
/* const routerApi = require("."); */

const ProductsService = require('./../services/product.service.js');
const validatorHandler = require('./../middleware/validator.handler');
const {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
} = require('./../schemas/product.schema');

const productsRouter = express.Router();
const service = new ProductsService();

productsRouter.get('/', async (req, resp) => {
  const products = await service.find();
  resp.json(products);
});

productsRouter.get('/filter', async (req, resp) => {
  resp.send('hola soy un filter');
});

productsRouter.get('/:id', validatorHandler(getProductSchema, "params"), async (req, resp, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    resp.json(product);
  } catch (error) {
    next(error);
  }
});

productsRouter.post('/', validatorHandler(createProductSchema, "body"), async (req, resp) => {
  const body = req.body;
  const newProduct = await service.create(body);
  resp.status(201).json(newProduct);
});

productsRouter.patch('/:id', validatorHandler(getProductSchema, "params"), validatorHandler(updateProductSchema, "body"), async (req, resp, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    resp.json(product);
  } catch (error) {
    next(error);
  }
});

productsRouter.delete('/:id', async (req, resp) => {
  const { id } = req.params;
  const ruta = await service.delete(id);
  resp.json(ruta);
});

module.exports = productsRouter;
